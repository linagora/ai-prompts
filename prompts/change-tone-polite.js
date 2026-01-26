const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'change-tone-polite',
  description: 'Change tone to polite',
  version: '1.0.0',

  messages: buildMessages({ task : 'Change the tone to be polite.'}),

  tests: [
    {
      description: 'Change tone to polite - French direct input',
      vars: {
        input: "Envoyez-moi le rapport demain. J'ai besoin des chiffres de vente aussi."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        {
          type: 'llm-rubric',
          value: 'The tone is polite and courteous. Uses respectful language and considerate phrasing.'
        }
      ]
    }
  ]
};
