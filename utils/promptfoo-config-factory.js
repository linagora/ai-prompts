require('dotenv').config();
const fs = require('fs');
const Logger = require('../utils/logger');
const logger = new Logger('promptfoo-config');

/**
 * Load prompts from a specific directory
 * @param {string} promptsDir - Absolute path to prompts directory
 * @param {string} logLabel - Label for console logging
 * @param {boolean} recursive - Whether to search subdirectories
 */
function loadPromptsFromDir(promptsDir, logLabel, recursive = false) {
  const prompts = [];
  
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = `${dir}/${entry.name}`;
      
      if (entry.isDirectory() && recursive) {
        scanDir(fullPath);
        continue;
      }
      
      if (entry.isFile() && entry.name.endsWith('.js')) {
        try {
          const promptModule = require(fullPath);
          if (promptModule.id && promptModule.messages) {
            prompts.push({
              id: promptModule.id,
              label: promptModule.id,
              raw: JSON.stringify(promptModule.messages),
            });
          }
        } catch (err) {
        }
      }
    }
  }
  
  scanDir(promptsDir);
  logger.info(`🟢 Loaded ${prompts.length} ${logLabel}`);
  return prompts;
}

/**
 * Load tests from a specific directory
 * @param {string} promptsDir - Absolute path to prompts directory
 * @param {string} logLabel - Label for console logging
 * @param {boolean} recursive - Whether to search subdirectories
 */
function loadTestsFromDir(promptsDir, logLabel, recursive = false) {
  const tests = [];
  
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = `${dir}/${entry.name}`;
      
      if (entry.isDirectory() && recursive) {
        scanDir(fullPath);
        continue;
      }
      
      if (entry.isFile() && entry.name.endsWith('.js')) {
        try {
          const promptModule = require(fullPath);
          if (promptModule.tests && Array.isArray(promptModule.tests)) {
            promptModule.tests.forEach(test => {
              tests.push({
                ...test,
                prompts: [promptModule.id]
              });
            });
          }
        } catch (err) {
        }
      }
    }
  }
  
  scanDir(promptsDir);
  logger.info(`🟢 Prepared ${tests.length} ${logLabel}`);
  return tests;
}

/**
 * Create a promptfoo config with common settings
 * @param {Object} options
 * @param {string} options.promptsDir - Absolute path to prompts directory
 * @param {string} options.logLabel - Label for console logging
 * @param {boolean} options.recursive - Whether to search subdirectories recursively
 */
function createPromptfooConfig({ promptsDir, logLabel, recursive = false }) {
  return {
    providers: [
      {
        id: 'openai:chat:mistralai/mistral-small-3.2-24b-instruct',
        config: {
          apiBaseUrl: process.env.OPENAI_API_HOST,
          apiKey: process.env.OPENAI_API_KEY,
          maxRetries: 3
        }
      }
    ],
    defaultTest: {
      options: {
        provider: {
          id: 'openai:chat:openai/gpt-oss-120b',
          config: {
            apiBaseUrl: process.env.OPENAI_API_HOST,
            apiKey: process.env.OPENAI_API_KEY,
            maxRetries: 3
          }
        },
      }
    },
    evaluateOptions: {
      maxConcurrency: 2
    },
    prompts: loadPromptsFromDir(promptsDir, logLabel, recursive),
    tests: loadTestsFromDir(promptsDir, logLabel, recursive)
  };
}

module.exports = { createPromptfooConfig };
