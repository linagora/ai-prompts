const fs = require('fs');
const path = require('path');
const Logger = require('../utils/logger');
const logger = new Logger('confusion-matrix');

const { emailTestCases } = require('../datasets/small-email-dataset');
const { emailTestCasesExtended } = require('../datasets/large-email-dataset');
const {
  emailExpectedResultsLargeDataset: genericExpectedLarge,
  emailExpectedResultsSmallDataset: genericExpectedSmall
} = require('../datasets/generic-label-expected-output');
const {
  emailExpectedResultsForLargeDataset: actionExpectedLarge,
  emailExpectedResultsForSmallDataset: actionExpectedSmall
} = require('../datasets/required-action-expected-output');
const { EMAIL_LABELS_FOR_GENERIC_LABELS } = require('../datasets/email-classification-testcases');

const dbPath = path.join(require('os').homedir(), '.promptfoo', 'promptfoo.db');
const buildDir = path.resolve(__dirname, '..', 'build');

if (!fs.existsSync(dbPath)) {
  logger.error('No promptfoo database found. Run npm run eval:email first.');
  process.exit(1);
}

const Database = require('better-sqlite3');
const db = new Database(dbPath, { readonly: true });

const latestEval = db.prepare('SELECT id FROM evals ORDER BY created_at DESC LIMIT 1').get();

if (!latestEval) {
  logger.error('No evaluations found. Please run: npm run eval:email');
  db.close();
  process.exit(1);
}

const evalResults = db.prepare(`
  SELECT prompt_idx, test_idx, test_case, prompt, response, score, named_scores, success, error
  FROM eval_results
  WHERE eval_id = ?
  ORDER BY prompt_idx, test_idx
`).all(latestEval.id);

db.close();

if (evalResults.length === 0) {
  logger.error('No test results found. Please run: npm run eval:email');
  process.exit(1);
}

function parseMaybeJson(value) {
  if (typeof value !== 'string') {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

function extractPromptMessages(promptValue) {
  const parsed = parseMaybeJson(promptValue);
  const raw = parsed && typeof parsed === 'object' ? parsed.raw : null;
  const rawParsed = parseMaybeJson(raw);

  return Array.isArray(rawParsed) ? rawParsed : [];
}

function detectPromptClass(result) {
  const messages = extractPromptMessages(result.prompt);
  const systemMessage = messages.find(message => message && message.role === 'system');
  const systemText = systemMessage && typeof systemMessage.content === 'string'
    ? systemMessage.content
    : '';
  const responseText = extractOutputText(result.response).toUpperCase();

  if (
    /YES\s+if/i.test(systemText) ||
    /Return\s+\*\*YES\*\*\s+if/i.test(systemText) ||
    /First value must be YES or NO/i.test(systemText) ||
    /action requirement/i.test(systemText) ||
    /^YES,/.test(responseText)
  ) {
    return 'required';
  }

  return 'generic';
}

function extractOutputText(responseValue) {
  const parsed = parseMaybeJson(responseValue);

  if (parsed && typeof parsed === 'object') {
    if (typeof parsed.output === 'string') {
      return parsed.output;
    }

    if (typeof parsed.text === 'string') {
      return parsed.text;
    }
  }

  return typeof responseValue === 'string' ? responseValue : '';
}

function normalizeLabels(labels) {
  return Array.from(
    new Set(
      (labels || [])
        .filter(label => label !== null && label !== undefined)
        .map(label => String(label).trim())
        .filter(label => label && label !== 'null' && label !== 'undefined')
    )
  );
}

function parseGenericPrediction(outputText) {
  const tokens = outputText.split(',').map(token => token.trim()).filter(Boolean);
  return tokens.filter(token => token !== 'YES' && token !== 'NO' && token !== 'NONE');
}

function parseRequiredPrediction(outputText) {
  const tokens = outputText.split(',').map(token => token.trim()).filter(Boolean);

  if (tokens.length === 0) {
    return { action: null, labels: [] };
  }

  let action = null;
  let labels = tokens;

  if (tokens[0] === 'YES' || tokens[0] === 'NO') {
    action = tokens[0];
    labels = tokens.slice(1);
  }

  labels = labels.filter(token => token !== 'YES' && token !== 'NO' && token !== 'NONE');

  return { action, labels };
}

function resolveExpectedCase(promptClass, description, testIdx) {
  const genericLookup = new Map([
    ...genericExpectedSmall.map(item => [item.description, item.expectedOutput.labels]),
    ...genericExpectedLarge.map(item => [item.description, item.expectedOutput.labels])
  ]);

  const requiredLookup = new Map([
    ...actionExpectedSmall.map(item => [item.description, item.expectedOutput]),
    ...actionExpectedLarge.map(item => [item.description, item.expectedOutput])
  ]);

  if (promptClass === 'required') {
    const expected = requiredLookup.get(description);
    if (expected) {
      return {
        expectedLabels: expected.labels,
        expectedAction: expected.action,
        combinedExpectedLabels: normalizeLabels([
          ...(expected.labels || []),
          expected.action === 'YES' ? 'action_required' : null
        ])
      };
    }
  } else {
    const expectedLabels = genericLookup.get(description);
    if (expectedLabels) {
      return {
        expectedLabels,
        expectedAction: null,
        combinedExpectedLabels: normalizeLabels(expectedLabels)
      };
    }
  }

  const fallbackTestCase = promptClass === 'required'
    ? (description && emailTestCasesExtended[testIdx])
    : (description && emailTestCases[testIdx]);

  if (!fallbackTestCase) {
    return null;
  }

  const fallbackExpected = fallbackTestCase.expectedOutput || {};
  if (promptClass === 'required') {
    return {
      expectedLabels: fallbackExpected.labels || [],
      expectedAction: fallbackExpected.action || 'NO',
      combinedExpectedLabels: normalizeLabels([
        ...(fallbackExpected.labels || []),
        fallbackExpected.action === 'YES' ? 'action_required' : null
      ])
    };
  }

  return {
    expectedLabels: fallbackExpected.labels || [],
    expectedAction: null,
    combinedExpectedLabels: normalizeLabels(fallbackExpected.labels || [])
  };
}

function buildMetricState(labels) {
  const state = {};

  labels.forEach(label => {
    state[label] = { tp: 0, fp: 0, fn: 0, tn: 0 };
  });

  return state;
}

function computeClassSummary(promptClass, rows) {
  const labelUniverse = EMAIL_LABELS_FOR_GENERIC_LABELS.map(label => label.id);
  const labelMetrics = buildMetricState(labelUniverse);

  let truePositive = 0;
  let falsePositive = 0;
  let falseNegative = 0;
  let trueNegative = 0;
  const details = [];

  rows.forEach(row => {
    const testCase = parseMaybeJson(row.test_case) || {};
    const description = testCase.description || 'Unknown test case';
    const expected = resolveExpectedCase(promptClass, description, row.test_idx);

    if (!expected) {
      details.push({
        description,
        expected: [],
        predicted: [],
        warning: 'Could not resolve expected labels for this test case'
      });
      return;
    }

    const outputText = extractOutputText(row.response).trim();
    const predictedLabels = promptClass === 'required'
      ? parseRequiredPrediction(outputText)
      : { action: null, labels: parseGenericPrediction(outputText) };

    const combinedPredictedLabels = normalizeLabels([
      ...(predictedLabels.labels || []),
      promptClass === 'required' && predictedLabels.action === 'YES' ? 'action_required' : null
    ]);

    const expectedSet = new Set(expected.combinedExpectedLabels);
    const predictedSet = new Set(combinedPredictedLabels);

    const tp = combinedPredictedLabels.filter(label => expectedSet.has(label)).length;
    const fp = combinedPredictedLabels.filter(label => !expectedSet.has(label)).length;
    const fn = expected.combinedExpectedLabels.filter(label => !predictedSet.has(label)).length;

    truePositive += tp;
    falsePositive += fp;
    falseNegative += fn;

    labelUniverse.forEach(label => {
      const isExpected = expectedSet.has(label);
      const isPredicted = predictedSet.has(label);

      if (isExpected && isPredicted) {
        labelMetrics[label].tp += 1;
      } else if (!isExpected && isPredicted) {
        labelMetrics[label].fp += 1;
      } else if (isExpected && !isPredicted) {
        labelMetrics[label].fn += 1;
      } else {
        labelMetrics[label].tn += 1;
      }
    });

    details.push({
      description,
      expectedAction: expected.expectedAction,
      expected: expected.combinedExpectedLabels,
      predictedAction: predictedLabels.action,
      predicted: combinedPredictedLabels,
      truePositive: tp,
      falsePositive: fp,
      falseNegative: fn,
      trueNegative: 0
    });
  });

  const precision = truePositive + falsePositive > 0
    ? (truePositive / (truePositive + falsePositive) * 100).toFixed(2)
    : '0.00';

  const recall = truePositive + falseNegative > 0
    ? (truePositive / (truePositive + falseNegative) * 100).toFixed(2)
    : '0.00';

  const f1Score = parseFloat(precision) > 0 && parseFloat(recall) > 0
    ? (2 * (parseFloat(precision) * parseFloat(recall)) / (parseFloat(precision) + parseFloat(recall))).toFixed(2)
    : '0.00';

  return {
    promptClass,
    rowCount: rows.length,
    truePositive,
    falsePositive,
    falseNegative,
    trueNegative,
    precision: parseFloat(precision),
    recall: parseFloat(recall),
    f1Score: parseFloat(f1Score),
    labelMetrics,
    details
  };
}

const rowsByClass = evalResults.reduce((accumulator, row) => {
  const rowClass = detectPromptClass(row);

  if (!accumulator[rowClass]) {
    accumulator[rowClass] = [];
  }

  accumulator[rowClass].push(row);
  return accumulator;
}, {});

const classNames = Object.keys(rowsByClass);

const summaries = classNames
  .filter(className => rowsByClass[className] && rowsByClass[className].length > 0)
  .map(className => computeClassSummary(className, rowsByClass[className]));

if (summaries.length === 0) {
  logger.error('No matching evaluation rows found.');
  process.exit(1);
}

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

logger.info('\n' + '='.repeat(80));
logger.info('CONFUSION MATRIX');
logger.info('='.repeat(80));
logger.info('');

summaries.forEach(summary => {
  logger.info(`Prompt class: ${summary.promptClass}`);
  logger.info(`Rows: ${summary.rowCount}`);

  const colWidth = 15;
  process.stdout.write('Label'.padEnd(colWidth));
  process.stdout.write('TP'.padEnd(colWidth));
  process.stdout.write('FP'.padEnd(colWidth));
  process.stdout.write('FN'.padEnd(colWidth));
  process.stdout.write('Precision'.padEnd(colWidth));
  process.stdout.write('Recall'.padEnd(colWidth));
  process.stdout.write('F1-Score\n');
  process.stdout.write('-'.repeat(colWidth * 7) + '\n');

  EMAIL_LABELS_FOR_GENERIC_LABELS.forEach(label => {
    const m = summary.labelMetrics[label.id];
    const precisionValue = m.tp + m.fp > 0 ? ((m.tp / (m.tp + m.fp)) * 100).toFixed(1) : '0.0';
    const recallValue = m.tp + m.fn > 0 ? ((m.tp / (m.tp + m.fn)) * 100).toFixed(1) : '0.0';
    const f1Value = parseFloat(precisionValue) > 0 && parseFloat(recallValue) > 0
      ? (2 * (parseFloat(precisionValue) * parseFloat(recallValue)) / (parseFloat(precisionValue) + parseFloat(recallValue))).toFixed(1)
      : '0.0';

    process.stdout.write(label.id.padEnd(colWidth));
    process.stdout.write(String(m.tp).padEnd(colWidth));
    process.stdout.write(String(m.fp).padEnd(colWidth));
    process.stdout.write(String(m.fn).padEnd(colWidth));
    process.stdout.write(`${precisionValue}%`.padEnd(colWidth));
    process.stdout.write(`${recallValue}%`.padEnd(colWidth));
    process.stdout.write(`${f1Value}%\n`);
  });

  logger.info('');
  logger.info('Metrics:');
  logger.info('-'.repeat(80));
  logger.info(`Precision: ${summary.precision}%  (TP / (TP + FP))`);
  logger.info(`Recall:    ${summary.recall}%  (TP / (TP + FN))`);
  logger.info(`F1-Score:  ${summary.f1Score}%`);
  logger.info('');

  logger.info('Details by test case:');
  logger.info('-'.repeat(80));
  summary.details.forEach(detail => {
    logger.info(`\n${detail.description}`);
    logger.info(`  Expected:  [${detail.expected.join(', ')}]`);
    logger.info(`  Predicted: [${detail.predicted.join(', ')}]`);
    if (detail.expectedAction || detail.predictedAction) {
      logger.info(`  Action: expected=${detail.expectedAction || 'N/A'} predicted=${detail.predictedAction || 'N/A'}`);
    }
    if (detail.warning) {
      logger.info(`  Warning: ${detail.warning}`);
    }
    logger.info(`  TP: ${detail.truePositive} | FP: ${detail.falsePositive} | FN: ${detail.falseNegative}`);
  });
});

const summary = {
  evalId: latestEval.id,
  summaries
};

const outputFile = path.join(buildDir, 'confusion-matrix.json');
fs.writeFileSync(outputFile, JSON.stringify(summary, null, 2));

logger.info('\n' + '='.repeat(80));
logger.info(`Saved to: ${outputFile}`);
logger.info('='.repeat(80) + '\n');
