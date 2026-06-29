const { buildMessages } = require('../../utils/prompts');
const {
  SCRIBE_SYSTEM_INSTRUCTIONS,
  PROMPT_INJECTION_GUARD
} = require('../system_prompts');

// Generic free-prompt: the user supplies an arbitrary editing instruction via the
// {{task}} variable, applied to the selected {{input}} text
const task = '{{task}}';

module.exports = {
  id: 'custom-prompt',
  description: 'Apply a user-provided editing instruction to the text',
  version: '1.0.0',

  messages: buildMessages({
    task,
    system_instruction: `${SCRIBE_SYSTEM_INSTRUCTIONS}\n\n${PROMPT_INJECTION_GUARD}`
  }),

  tests: [
    {
      description: 'Apply a custom instruction - French input',
      vars: {
        task: 'Rewrite the text as a single short sentence.',
        input:
          "Le projet avance bien. Nous avons terminé la première phase. La deuxième phase commence la semaine prochaine."
      },
      assert: [
        {
          type: 'llm-rubric',
          value:
            'The output applies the instruction "Rewrite the text as a single short sentence." to the input and contains only the edited text, with no preamble or commentary.\nOriginal input: "{{input}}"'
        }
      ]
    }
  ]
};
