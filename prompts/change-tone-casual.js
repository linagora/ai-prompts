const { addDirectives } = require('../utils/directives');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'change-tone-casual',
  description: 'Change tone to casual',
  version: '1.0.2',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'change the tone to be casual.',
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
      description: 'Change tone to casual - French formal input',
      vars: {
        input: "Je vous prie de bien vouloir trouver ci-joint le document demandé. Je reste à votre disposition pour tout complément d'information."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        {
          type: 'llm-rubric',
          value: 'The tone is casual and friendly. Uses conversational language, may include informal expressions.'
        }
      ]
    }
  ]
};
