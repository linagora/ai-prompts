const { addDirectives } = require('../utils/directives');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'change-tone-professional',
  description: 'Change tone to professional',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'change the tone to be professional.',
        directives: ['noTranslate', 'noExtra']
      })
    },
    {
      role: 'user',
      content: '{{input}}'
    }
  ],

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
