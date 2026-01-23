const fs = require('fs');
const path = require('path');

const contextsDir = path.join(__dirname, '../contexts');
const outputDir = path.join(__dirname, '../output');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process each context
for (const context of fs.readdirSync(contextsDir)) {
  // Skip _shared directory
  if (context.startsWith('_')) continue;

  const contextPath = path.join(contextsDir, context);

  // Skip if not a directory
  if (!fs.statSync(contextPath).isDirectory()) {
    continue;
  }

  // Try index.js first (new structure), fall back to prompts.js (legacy)
  let promptModule;
  const indexFile = path.join(contextPath, 'index.js');
  const promptsFile = path.join(contextPath, 'prompts.js');

  if (fs.existsSync(indexFile)) {
    promptModule = require(indexFile);
  } else if (fs.existsSync(promptsFile)) {
    promptModule = require(promptsFile);
  } else {
    continue;
  }

  const allPrompts = promptModule.getAllPrompts();

  const output = {
    context,
    generatedAt: new Date().toISOString(),
    prompts: allPrompts.map(p => ({
      name: p.id,
      version: "1.0.0",
      context: context,
      description: p.description || p.label,
      template: p.raw,
      // Include messages if available (new structure)
      ...(p.messages && { messages: p.messages })
    }))
  };

  fs.writeFileSync(
    path.join(outputDir, `${context}.json`),
    JSON.stringify(output, null, 2)
  );
  console.log(`Generated: ${context}.json`);
}

console.log('Export complete!');
