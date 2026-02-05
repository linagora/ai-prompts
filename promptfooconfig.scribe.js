const path = require('path');
const { createPromptfooConfig } = require('./utils/promptfoo-config-factory');

module.exports = createPromptfooConfig({
  promptsDir: path.join(__dirname, 'prompts', 'scribe'),
  logLabel: 'scribe prompts/tests'
});
