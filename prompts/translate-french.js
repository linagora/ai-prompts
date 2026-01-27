const { buildMessages } = require('../utils/prompts');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

const task = 'Translate the text to French.';

module.exports = {
  id: 'translate-french',
  description: 'Translate text to French',
  version: '1.0.0',

  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Translate to French - English input',
      vars: {
        input: "Hello, how are you? I hope you're having a great day."
      },
      assert: [
        noExtraInfo({ task }),
        translationAccurate('French')
      ]
    }
  ]
};
