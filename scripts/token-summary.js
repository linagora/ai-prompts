const fs = require('fs');
const path = require('path');

const resultsPath = path.resolve(__dirname, '..', 'results.json');

if (!fs.existsSync(resultsPath)) {
  console.error('results.json not found. Run eval first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
const prompts = data.results?.prompts || [];

const rows = prompts
  .filter(p => p.metrics?.tokenUsage?.total > 0)
  .map(p => {
    const u = p.metrics.tokenUsage;
    const a = u.assertions || {};
    return {
      prompt: p.label || p.id.slice(0, 20),
      evalPrompt: u.prompt,
      evalCompletion: u.completion,
      evalTotal: u.total,
      gradingPrompt: a.prompt || 0,
      gradingCompletion: a.completion || 0,
      gradingTotal: a.total || 0,
    };
  });

if (rows.length === 0) {
  console.log('No token usage data found.');
  process.exit(0);
}

const totals = rows.reduce((acc, r) => {
  acc.evalPrompt += r.evalPrompt;
  acc.evalCompletion += r.evalCompletion;
  acc.evalTotal += r.evalTotal;
  acc.gradingPrompt += r.gradingPrompt;
  acc.gradingCompletion += r.gradingCompletion;
  acc.gradingTotal += r.gradingTotal;
  return acc;
}, { evalPrompt: 0, evalCompletion: 0, evalTotal: 0, gradingPrompt: 0, gradingCompletion: 0, gradingTotal: 0 });

const pad = (s, n) => String(s).padStart(n);
const col = { name: 28, num: 10 };

console.log('\n--- Token Usage Summary ---\n');
console.log(
  'Prompt'.padEnd(col.name) +
  pad('Eval In', col.num) + pad('Eval Out', col.num) + pad('Eval Tot', col.num) +
  pad('Grade In', col.num) + pad('Grade Out', col.num) + pad('Grade Tot', col.num)
);
console.log('-'.repeat(col.name + col.num * 6));

for (const r of rows) {
  console.log(
    r.prompt.padEnd(col.name) +
    pad(r.evalPrompt, col.num) + pad(r.evalCompletion, col.num) + pad(r.evalTotal, col.num) +
    pad(r.gradingPrompt, col.num) + pad(r.gradingCompletion, col.num) + pad(r.gradingTotal, col.num)
  );
}

console.log('-'.repeat(col.name + col.num * 6));
console.log(
  'TOTAL'.padEnd(col.name) +
  pad(totals.evalPrompt, col.num) + pad(totals.evalCompletion, col.num) + pad(totals.evalTotal, col.num) +
  pad(totals.gradingPrompt, col.num) + pad(totals.gradingCompletion, col.num) + pad(totals.gradingTotal, col.num)
);
console.log();
