const fs = require('fs');
const path = require('path');
const Logger = require('../utils/logger');
const logger = new Logger('confusion-matrix');

const { emailTestCases, EMAIL_LABELS } = require('../datasets/email-classification-testcases');

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
  SELECT prompt_id, response, score, named_scores
  FROM eval_results
  WHERE eval_id = ?
`).all(latestEval.id);

db.close();

if (evalResults.length === 0) {
  logger.error('No test results found. Please run: npm run eval:email');
  process.exit(1);
}

let truePositive = 0;
let falsePositive = 0;
let trueNegative = 0;
let falseNegative = 0;

const details = [];
const labelMetrics = {};

EMAIL_LABELS.forEach(label => {
  labelMetrics[label.id] = { tp: 0, fp: 0, fn: 0, tn: 0 };
});

for (let i = 0; i < Math.min(emailTestCases.length, evalResults.length); i++) {
  const testCase = emailTestCases[i];
  const result = evalResults[i];
  
  const expectedLabels = testCase.expectedOutput.labels || [];
  const expectedSet = new Set(expectedLabels);
  
  let outputText = result.response || '';
  try {
    const parsed = JSON.parse(outputText);
    outputText = parsed.output || parsed.text || outputText;
  } catch (e) {}
  
  outputText = outputText.trim();
  const parts = outputText.split(',');
  const predictedLabels = parts.slice(1).map(s => s.trim()).filter(Boolean);
  const predictedSet = new Set(predictedLabels);
  
  const tp = predictedLabels.filter(l => expectedSet.has(l)).length;
  const fp = predictedLabels.filter(l => !expectedSet.has(l)).length;
  const fn = expectedLabels.filter(l => !predictedSet.has(l)).length;
  const tn = 0;
  
  truePositive += tp;
  falsePositive += fp;
  falseNegative += fn;
  trueNegative += tn;
  
  EMAIL_LABELS.forEach(label => {
    const isExpected = expectedSet.has(label.id);
    const isPredicted = predictedSet.has(label.id);
    
    if (isExpected && isPredicted) {
      labelMetrics[label.id].tp++;
    } else if (!isExpected && isPredicted) {
      labelMetrics[label.id].fp++;
    } else if (isExpected && !isPredicted) {
      labelMetrics[label.id].fn++;
    } else {
      labelMetrics[label.id].tn++;
    }
  });
  
  details.push({
    description: testCase.description,
    expected: expectedLabels,
    predicted: predictedLabels,
    truePositive: tp,
    falsePositive: fp,
    falseNegative: fn,
    trueNegative: tn
  });
}

const precision = truePositive + falsePositive > 0 
  ? (truePositive / (truePositive + falsePositive) * 100).toFixed(2)
  : 0;

const recall = truePositive + falseNegative > 0
  ? (truePositive / (truePositive + falseNegative) * 100).toFixed(2)
  : 0;

const f1Score = precision > 0 && recall > 0
  ? (2 * (precision * recall) / (parseFloat(precision) + parseFloat(recall))).toFixed(2)
  : 0;

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

logger.info('\n' + '='.repeat(80));
logger.info('CONFUSION MATRIX');
logger.info('='.repeat(80));
logger.info('');

const colWidth = 15;
process.stdout.write('Label'.padEnd(colWidth));
process.stdout.write('TP'.padEnd(colWidth));
process.stdout.write('FP'.padEnd(colWidth));
process.stdout.write('FN'.padEnd(colWidth));
process.stdout.write('Precision'.padEnd(colWidth));
process.stdout.write('Recall'.padEnd(colWidth));
process.stdout.write('F1-Score\n');
process.stdout.write('-'.repeat(colWidth * 7) + '\n');

EMAIL_LABELS.forEach(label => {
  const m = labelMetrics[label.id];
  const precision = m.tp + m.fp > 0 ? ((m.tp / (m.tp + m.fp)) * 100).toFixed(1) : '0.0';
  const recall = m.tp + m.fn > 0 ? ((m.tp / (m.tp + m.fn)) * 100).toFixed(1) : '0.0';
  const f1 = parseFloat(precision) > 0 && parseFloat(recall) > 0
    ? (2 * (parseFloat(precision) * parseFloat(recall)) / (parseFloat(precision) + parseFloat(recall))).toFixed(1)
    : '0.0';
  
  process.stdout.write(label.id.padEnd(colWidth));
  process.stdout.write(String(m.tp).padEnd(colWidth));
  process.stdout.write(String(m.fp).padEnd(colWidth));
  process.stdout.write(String(m.fn).padEnd(colWidth));
  process.stdout.write(`${precision}%`.padEnd(colWidth));
  process.stdout.write(`${recall}%`.padEnd(colWidth));
  process.stdout.write(`${f1}%\n`);
});

logger.info('');
logger.info('Metrics:');
logger.info('-'.repeat(80));
logger.info(`Precision: ${precision}%  (TP / (TP + FP))`);
logger.info(`Recall:    ${recall}%  (TP / (TP + FN))`);
logger.info(`F1-Score:  ${f1Score}%`);
logger.info('');

logger.info('Details by test case:');
logger.info('-'.repeat(80));
details.forEach(d => {
  logger.info(`\n${d.description}`);
  logger.info(`  Expected:  [${d.expected.join(', ')}]`);
  logger.info(`  Predicted: [${d.predicted.join(', ')}]`);
  logger.info(`  TP: ${d.truePositive} | FP: ${d.falsePositive} | FN: ${d.falseNegative}`);
});

const summary = {
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

const outputFile = path.join(buildDir, 'confusion-matrix.json');
fs.writeFileSync(outputFile, JSON.stringify(summary, null, 2));

logger.info('\n' + '='.repeat(80));
logger.info(`Saved to: ${outputFile}`);
logger.info('='.repeat(80) + '\n');
