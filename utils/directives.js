const DIRECTIVES = {
  noTranslate: 'Do not translate. Strictly keep the original language of the input text. For example, if it\'s French, keep French. If it\'s English, keep English.',
  noExtra: 'Do NOT add any extra information or interpret anything beyond the explicit task. Just answer the task.',
  taskOnly: 'Perform only the following task:'
};

/**
 * Build a system prompt from fragments
 * @param {Object} options
 * @param {string} options.task - The task description
 * @param {boolean} options.directives - Directives to include
 * @returns {string} The composed system prompt
 */
function addDirectives({ task, directives }) {
  const parts = [`${DIRECTIVES.taskOnly} ${task}`];

  directives.forEach(directive => {
    if (DIRECTIVES[directive]) {
      parts.push(DIRECTIVES[directive]);
    }
  });
 
  return parts.join('\n');
}

module.exports = {
  addDirectives
};
