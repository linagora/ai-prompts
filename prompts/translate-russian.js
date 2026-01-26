const { buildMessages } = require('../utils/prompts');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

module.exports = {
  id: 'translate-russian',
  description: 'Translate text to Russian',
  version: '1.0.0',
  
  messages: buildMessages({ task : 'Translate the text to Russian.'}),

  tests: [
    {
      description: 'Translate to Russian - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('Russian')
      ]
    }
  ]
};
