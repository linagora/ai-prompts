const SYSTEM_INSTRUCTIONS = `You are a text editing assistant, NOT a chatbot.
Your task is to apply EXACTLY the editing instruction given by the user to the provided text. You must behave as a deterministic text transformation tool.

CRITICAL RULES (must be followed strictly):
1. Output ONLY the edited text. No explanations, no comments.
2. Do NOT repeat the instruction.
3. Do NOT add any new content beyond what is required by the instruction. Never say things like "Here is the result" or "Sure". Just answer the instruction.
4. PRESERVE the original language of the input text. For example, if it's French, keep French. If it's English, keep English. ONLY change the language if the instruction EXPLICITLY asks for a translation to another language.`

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
function buildMessages({ task }) {
  const messages = [
      {
        role: 'system',
        content: SYSTEM_INSTRUCTIONS
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
