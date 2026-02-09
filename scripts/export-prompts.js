const fs = require('fs');
const path = require('path');

const promptsDir = path.join(__dirname, '../prompts');
const buildDir = path.join(__dirname, '../build');
const logger = require('../utils/logger');
const logger = new Logger('export-prompts');

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

const promptFiles = fs.readdirSync(promptsDir).filter(file => file.endsWith('.js'));

const allPrompts = [];

for (const file of promptFiles) {
  const promptPath = path.join(promptsDir, file);
  const promptModule = require(promptPath);

  allPrompts.push({
    name: promptModule.id,
    version: promptModule.version,
    description: promptModule.description,
    messages: promptModule.messages,
  });
}

const output = {
  generatedAt: new Date().toISOString(),
  prompts: allPrompts
};

fs.writeFileSync(
  path.join(buildDir, 'prompts.json'),
  JSON.stringify(output, null, 2)
);
logger.info('Generated: prompts.json');

logger.info('Export complete!');