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
 * Strip scheme, trailing slashes and a trailing /v1 so we are left with a bare host.
 */
function normalizeApiHost(rawHost) {
  if (!rawHost) return rawHost;
  return rawHost
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '')
    .replace(/\/v1$/i, '')
    .replace(/\/+$/, '');
}

/**
 * Create a promptfoo config with common settings
 * @param {Object} options
 * @param {string} options.promptsDir - Absolute path to prompts directory
 * @param {string} options.logLabel - Label for console logging
 * @param {boolean} options.recursive - Whether to search subdirectories recursively
 */
function createPromptfooConfig({ promptsDir, logLabel, recursive = false }) {
  const generationModel = process.env.GENERATION_MODEL_ID || 'mistralai/mistral-small-3.2-24b-instruct';
  const judgeModel = process.env.JUDGE_MODEL_ID || 'openai/gpt-oss-120b';

  // promptfoo's OpenAI provider reads OPENAI_API_HOST from the env and rebuilds it as
  // `https://<value>/v1`; a value with a scheme yields https://https://… and an
  // unresolvable host, so rewrite the env var to a bare host it can use as-is.
  const apiHost = normalizeApiHost(process.env.OPENAI_API_HOST);
  if (apiHost) {
    process.env.OPENAI_API_HOST = apiHost;
  }
  const apiBaseUrl = apiHost ? `https://${apiHost}/v1` : undefined;

  // OpenRouter turns a reasoning model's thinking off when the request carries
  // reasoning.enabled=false; promptfoo only forwards config.reasoning for o-series
  // models, so route it through passthrough. Opt-in — some backends reject it.
  const reasoningOff = /^(1|true|yes)$/i.test(process.env.DISABLE_REASONING || '')
    ? { passthrough: { reasoning: { enabled: false } } }
    : {};

  return {
    providers: [
      {
        id: `openai:chat:${generationModel}`,
        config: {
          apiBaseUrl,
          apiKey: process.env.OPENAI_API_KEY,
          maxRetries: 3,
          // Reasoning models (e.g. qwen3.8) return their chain-of-thought in
          // reasoning_content; without this promptfoo prepends it as "Thinking: …"
          // to the output and the edited-text assertions all fail.
          showThinking: false,
          ...reasoningOff
        }
      }
    ],
    defaultTest: {
      options: {
        provider: {
          id: `openai:chat:${judgeModel}`,
          config: {
            apiBaseUrl,
            apiKey: process.env.OPENAI_API_KEY,
            maxRetries: 3,
            showThinking: false
          }
        },
      }
    },
    evaluateOptions: {
      maxConcurrency: Number(process.env.EVAL_CONCURRENCY) || 2
    },
    prompts: loadPromptsFromDir(promptsDir, logLabel, recursive),
    tests: loadTestsFromDir(promptsDir, logLabel, recursive)
  };
}

module.exports = { createPromptfooConfig };
