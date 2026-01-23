/**
 * Global shared system prompt fragments and builders
 */

const FRAGMENTS = {
  noTranslate: 'Do not translate. Strictly keep the original language of the input text. For example, if it\'s French, keep French. If it\'s English, keep English.',
  noExtraInfo: 'Do NOT add any extra information or interpret anything beyond the explicit task. Just answer the task.',
  taskOnly: 'Perform only the following task:'
};

/**
 * Build a system prompt from fragments
 * @param {Object} options
 * @param {string} options.task - The task description
 * @param {boolean} options.preserveLanguage - Whether to add language preservation instruction
 * @param {boolean} options.noExtra - Whether to add no-extra-info instruction
 * @returns {string} The composed system prompt
 */
function buildSystemPrompt({ task, preserveLanguage = false, noExtra = true }) {
  const parts = [`${FRAGMENTS.taskOnly} ${task}`];

  if (preserveLanguage) {
    parts.push(FRAGMENTS.noTranslate);
  }

  if (noExtra) {
    parts.push(FRAGMENTS.noExtraInfo);
  }

  return parts.join('\n');
}

module.exports = {
  FRAGMENTS,
  buildSystemPrompt
};
