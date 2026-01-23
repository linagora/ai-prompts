const path = require('path');
const fs = require('fs');

/**
 * Discover all context directories that have an index.js file
 */
function discoverContexts() {
  const contextsDir = path.join(__dirname, 'contexts');
  const contexts = [];

  for (const context of fs.readdirSync(contextsDir)) {
    // Skip _shared directory
    if (context.startsWith('_')) continue;

    const contextPath = path.join(contextsDir, context);
    if (!fs.statSync(contextPath).isDirectory()) continue;

    const indexFile = path.join(contextPath, 'index.js');
    if (!fs.existsSync(indexFile)) continue;

    contexts.push({
      name: context,
      indexFile,
      module: require(indexFile)
    });
  }

  return contexts;
}

/**
 * Load all prompts from discovered contexts
 */
function loadAllPrompts() {
  const prompts = [];

  for (const context of discoverContexts()) {
    const allPrompts = context.module.getAllPrompts();

    for (const prompt of allPrompts) {
      prompts.push(`file://contexts/${context.name}/index.js:${prompt.id}`);
    }
  }

  return prompts;
}

/**
 * Load all tests from discovered contexts
 * Tests already specify which prompt they belong to
 */
function loadAllTests() {
  const tests = [];

  for (const context of discoverContexts()) {
    if (typeof context.module.getAllTests === 'function') {
      tests.push(...context.module.getAllTests());
    }
  }

  return tests;
}

module.exports = {
  description: 'Unified prompt evaluation across all contexts',
  providers: [
    {
      id: 'openai:mistralai/mistral-small-3.2-24b-instruct',
      config: {
        apiBaseUrl: 'https://ai.linagora.com/api',
        apiKeyEnvar: 'OPENAI_API_KEY'
      }
    }
  ],
  defaultTest: {
    options: {
      provider: {
        id: 'openai:openai/gpt-oss-120b',
        config: {
          apiBaseUrl: 'https://ai.linagora.com/api',
          apiKeyEnvar: 'OPENAI_API_KEY'
        }
      }
    }
  },
  prompts: loadAllPrompts(),
  tests: loadAllTests()
};
