const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'change-tone-professional',
  description: 'Change tone to professional',
  version: '1.0.0',

  messages: buildMessages({ task : 'Change the tone to be professional.'}),

  tests: [
    {
      description: 'Change tone to professional - French casual input',
      vars: {
        input: "Salut, t'as vu le truc que je t'ai envoyé? C'est super important, faut qu'on en parle vite!"
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        {
          type: 'llm-rubric',
          value: 'The tone is professional and formal. No slang, casual language, or informal expressions.'
        }
      ]
    }
  ]
};
