const path = require('path');
const fs = require('fs');

/**
 * Load all prompts from the prompts directory
 */
function loadAllPrompts() {
  const promptsDir = path.join(__dirname, 'prompts');
  const prompts = []

  for (const promptFile of fs.readdirSync(promptsDir)) {
      if (!promptFile.endsWith('.js')) continue;

      const promptPath = path.join(promptsDir, promptFile);
      const promptModule = require(promptPath);

      prompts.push({
        id: promptModule.id,
        label: promptModule.id,
        raw: JSON.stringify(promptModule.messages),
      });
  }

  console.log("🟢 Logging prompts");
  console.log(prompts);

  return prompts;
}

/**
 * Load all tests from the prompts directory
 */
function loadAllTests() {
  const promptsDir = path.join(__dirname, 'prompts');
  const tests = [];

  for (const promptFile of fs.readdirSync(promptsDir)) {
    if (!promptFile.endsWith('.js')) continue;
    
    const promptPath = path.join(promptsDir, promptFile);
    const promptModule = require(promptPath);
    
    if (promptModule.tests && Array.isArray(promptModule.tests)) {
      promptModule.tests.forEach(test => {
        tests.push({
          ...test,
          prompts: [promptModule.id]
        })
      });;
    }
  }

  console.log("🟢 Logging tests");
  console.log(tests);

  return tests;
}

module.exports = {
  providers: [
    {
      id: 'openai:chat:mistralai/mistral-small-3.2-24b-instruct',
      config: {
        apiBaseUrl: process.env.OPENAI_API_HOST,
        apiKey: process.env.OPENAI_API_KEY
      }
    }
  ],
  defaultTest: {
    options: {
      provider: {
        id: 'openai:chat:openai/gpt-oss-120b',
        config: {
          apiBaseUrl: process.env.OPENAI_API_HOST,
          apiKey: process.env.OPENAI_API_KEY
        }
      }
    }
  },
  prompts: loadAllPrompts(),
  tests: loadAllTests()
};
