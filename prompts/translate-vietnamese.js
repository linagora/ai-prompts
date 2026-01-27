const { buildMessages } = require('../utils/prompts');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

const task = 'Translate the text to Vietnamese.';

module.exports = {
  id: 'translate-vietnamese',
  description: 'Translate text to Vietnamese',
  version: '1.0.0',

  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Translate to Vietnamese - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo({ task }),
        translationAccurate('Vietnamese')
      ]
    }
  ]
};
