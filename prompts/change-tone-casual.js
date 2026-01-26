const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'change-tone-casual',
  description: 'Change tone to casual',
  version: '1.0.2',

  messages: buildMessages({ task : 'Change the tone to be casual.'}),
  
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
