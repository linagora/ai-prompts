/**
 * Scribe context index
 * Dynamically discovers and aggregates all prompts and tests from prompts/
 */

const fs = require('fs');
const path = require('path');

const promptsDir = path.join(__dirname, 'prompts');

/**
 * Load all prompt modules from the prompts directory
 */
function loadPromptModules() {
  const modules = [];

  for (const file of fs.readdirSync(promptsDir)) {
    if (!file.endsWith('.js')) continue;

    const promptModule = require(path.join(promptsDir, file));
    modules.push(promptModule);
  }

  return modules;
}

/**
 * Get all prompts for this context
 * @returns {Array} Array of prompt definitions
 */
function getAllPrompts() {
  return loadPromptModules();
}

/**
 * Get all tests for this context
 * Each test is augmented with the prompt reference
 * @returns {Array} Array of test definitions
 */
function getAllTests() {
  const tests = [];

  for (const promptModule of loadPromptModules()) {
    if (!promptModule.tests) continue;

    for (const test of promptModule.tests) {
      tests.push({
        ...test,
        prompts: [`contexts/scribe/index.js:${promptModule.id}`]
      });
    }
  }

  return tests;
}

// Export individual prompt functions for PromptFoo template system
const promptModules = loadPromptModules();
for (const promptModule of promptModules) {
  module.exports[promptModule.id] = () => promptModule.raw;
}

module.exports.getAllPrompts = getAllPrompts;
module.exports.getAllTests = getAllTests;
