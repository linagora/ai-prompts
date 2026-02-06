const path = require('path');
const { createPromptfooConfig } = require('./utils/promptfoo-config-factory');

module.exports = createPromptfooConfig({
  promptsDir: path.join(__dirname, 'prompts', 'email'),
  logLabel: 'email prompts/tests'
});
