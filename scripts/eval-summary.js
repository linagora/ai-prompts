const fs = require('fs');
const path = require('path');
const Logger = require('../utils/logger');
const logger = new Logger('eval-summary');

const resultsPath = path.resolve(__dirname, '..', 'results.json');
const REASON_MAX_LENGTH = 300;

if (!fs.existsSync(resultsPath)) {
  logger.error('results.json not found. Run eval first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
const results = data.results?.results || [];

const isEmailPrompt = prompt => prompt.startsWith('classify-email');
const promptLabel = r => r.prompt?.label || 'unknown';
const isError = r => r.failureReason === 2;

function failureReason(r) {
  const output = r.response?.output;
  let reason = r.gradingResult?.reason || r.error || 'no reason';
  if ((output === undefined || output === null || output === '') && r.response?.finishReason) {
    reason += ` (finish reason: ${r.response.finishReason})`;
  }
  reason = reason.replace(/\s+/g, ' ').trim();
  return reason.length > REASON_MAX_LENGTH ? `${reason.slice(0, REASON_MAX_LENGTH)}…` : reason;
}

const byPrompt = new Map();
for (const r of results) {
  const label = promptLabel(r);
  if (!byPrompt.has(label)) {
    byPrompt.set(label, { label, pass: 0, fail: 0, error: 0, evalTokens: 0, gradeTokens: 0, failures: [] });
  }
  const row = byPrompt.get(label);
  row.evalTokens += r.response?.tokenUsage?.total || 0;
  row.gradeTokens += r.gradingResult?.tokensUsed?.total || 0;
  if (r.success) {
    row.pass++;
    continue;
  }
  isError(r) ? row.error++ : row.fail++;
  row.failures.push({ test: r.testCase?.description || 'unknown', reason: failureReason(r), error: isError(r) });
}

const rows = [...byPrompt.values()].sort((a, b) => a.label.localeCompare(b.label));
const total = rows.reduce(
  (acc, r) => ({
    pass: acc.pass + r.pass,
    fail: acc.fail + r.fail,
    error: acc.error + r.error,
    evalTokens: acc.evalTokens + r.evalTokens,
    gradeTokens: acc.gradeTokens + r.gradeTokens,
  }),
  { pass: 0, fail: 0, error: 0, evalTokens: 0, gradeTokens: 0 }
);
const failedRows = rows.filter(r => r.failures.length > 0);
const blockingFailures = failedRows.filter(r => !isEmailPrompt(r.label)).reduce((n, r) => n + r.failures.length, 0);

let verdict;
if (failedRows.length === 0) {
  verdict = 'All tests passed.';
} else if (blockingFailures > 0) {
  verdict = `${blockingFailures} non-email test(s) failed. Only email classification tests are allowed to fail.`;
} else {
  verdict = 'Only email classification tests failed; CI will not block on these results.';
}

function printConsole() {
  const nameWidth = Math.max(6, ...rows.map(r => r.label.length)) + 2;
  const num = (v, w = 7) => String(v).padStart(w);
  const line = (label, r) =>
    label.padEnd(nameWidth) + num(r.pass) + num(r.fail) + num(r.error) + num(r.evalTokens, 12) + num(r.gradeTokens, 12);
  const rule = '-'.repeat(nameWidth + 7 * 3 + 12 * 2);

  const out = [];
  out.push('', '=== Results by prompt ===', '');
  out.push('Prompt'.padEnd(nameWidth) + num('Pass') + num('Fail') + num('Error') + num('Eval tok', 12) + num('Grade tok', 12));
  out.push(rule);
  for (const r of rows) out.push(line(r.label, r));
  out.push(rule);
  out.push(line('TOTAL', total));

  if (failedRows.length > 0) {
    out.push('', `=== Failures (${total.fail + total.error}) ===`);
    for (const r of failedRows) {
      const tag = isEmailPrompt(r.label) ? ' [non-blocking]' : '';
      out.push('', `${r.label} (${r.failures.length})${tag}`);
      for (const f of r.failures) {
        out.push(`  ✗ ${f.error ? '[error] ' : ''}${f.test}`);
        out.push(`      ${f.reason}`);
      }
    }
  }

  out.push('', `${total.pass}/${results.length} passed. ${verdict}`, '');
  console.log(out.join('\n'));
}

function writeStepSummary() {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;

  const cell = s => String(s).replace(/\|/g, '\\|');
  const status = r => (r.failures.length === 0 ? '✅' : isEmailPrompt(r.label) ? '⚠️' : '❌');

  const md = [];
  md.push('## Prompt evaluation', '');
  md.push(`**${total.pass}/${results.length} passed** · ${verdict}`, '');
  md.push('| | Prompt | Pass | Fail | Error | Eval tokens | Grading tokens |');
  md.push('|---|---|--:|--:|--:|--:|--:|');
  for (const r of rows) {
    md.push(`| ${status(r)} | ${cell(r.label)} | ${r.pass} | ${r.fail} | ${r.error} | ${r.evalTokens} | ${r.gradeTokens} |`);
  }

  for (const r of failedRows) {
    const tag = isEmailPrompt(r.label) ? ' (non-blocking)' : '';
    md.push('', `<details><summary><b>${r.label}</b>: ${r.failures.length} failure(s)${tag}</summary>`, '');
    md.push('| Test | Reason |', '|---|---|');
    for (const f of r.failures) md.push(`| ${cell(f.test)} | ${f.error ? '**error**: ' : ''}${cell(f.reason)} |`);
    md.push('', '</details>');
  }

  fs.appendFileSync(summaryPath, md.join('\n') + '\n');
}

printConsole();
writeStepSummary();
process.exit(blockingFailures > 0 ? 1 : 0);
