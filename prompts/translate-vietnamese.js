const { buildMessages } = require('../utils/prompts');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

module.exports = {
  id: 'translate-vietnamese',
  description: 'Translate text to Vietnamese',
  version: '1.0.0',

  messages: buildMessages({ task : 'Translate the text to Vietnamese.'}),

  tests: [
    {
      description: 'Translate to Vietnamese - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('Vietnamese')
      ]
    }
  ]
};
