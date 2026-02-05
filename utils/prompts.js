const USER_INSTRUCTIONS = (task) => `INSTRUCTION:
${task}

TEXT:
{{input}}
`

/**
 * Build a system prompt from fragments
 * @param {Object} options
 * @param {string} options.task - The task description
 * @returns {string} The composed system prompt
 */
function buildMessages({ task, system_instruction }) {
  const messages = [
      {
        role: 'system',
        content: system_instruction
      },
      {
        role: 'user',
        content: USER_INSTRUCTIONS(task)
      }
    ]

  
  return messages;
}

module.exports = {
  buildMessages
};
