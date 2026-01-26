const { buildMessages } = require('../utils/prompts');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

module.exports = {
  id: 'translate-french',
  description: 'Translate text to French',
  version: '1.0.0',

  messages: buildMessages({ task : 'Translate the text to French.'}),

  tests: [
    {
      description: 'Translate to French - English input',
      vars: {
        input: "Hello, how are you? I hope you're having a great day."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('French')
      ]
    }
  ]
};
