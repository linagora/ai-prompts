/**
 * Scribe-specific system prompt builders
 */

const { buildSystemPrompt } = require('../../_shared/system-prompts');

/**
 * Build a scribe system prompt (preserves language by default)
 * @param {Object} options
 * @param {string} options.task - The task description
 * @param {boolean} options.preserveLanguage - Whether to preserve language (default: true)
 * @returns {string} The composed system prompt
 */
function scribeSystemPrompt({ task, preserveLanguage = true }) {
  return buildSystemPrompt({
    task,
    preserveLanguage,
    noExtra: true
  });
}

/**
 * Build a translation system prompt (no language preservation)
 * @param {Object} options
 * @param {string} options.targetLanguage - The target language for translation
 * @returns {string} The composed system prompt
 */
function translateSystemPrompt({ targetLanguage }) {
  return buildSystemPrompt({
    task: `translate the text to ${targetLanguage}.`,
    preserveLanguage: false,
    noExtra: true
  });
}

module.exports = {
  scribeSystemPrompt,
  translateSystemPrompt
};
