const { buildMessages } = require('../../utils/prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { noExtraInfo, translationAccurate } = require('../../utils/assertions');

const task = 'Translate the text to Russian.';

module.exports = {
  id: 'translate-russian',
  description: 'Translate text to Russian',
  version: '1.0.0',
  
  messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

  tests: [
    {
      description: 'Translate to Russian - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo({ task }),
        translationAccurate('Russian')
      ]
    }
  ]
};
