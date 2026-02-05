const { buildMessages } = require('../../utils/prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { noTranslation, noExtraInfo } = require('../../utils/assertions');

const task = 'Change the tone to be polite.';

module.exports = {
  id: 'change-tone-polite',
  description: 'Change tone to polite',
  version: '1.0.0',

  messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

  tests: [
    {
      description: 'Change tone to polite - French direct input',
      vars: {
        input: "Envoyez-moi le rapport demain. J'ai besoin des chiffres de vente aussi."
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        {
          type: 'llm-rubric',
          value: 'The tone is polite and courteous. Uses respectful language and considerate phrasing.'
        }
      ]
    }
  ]
};
