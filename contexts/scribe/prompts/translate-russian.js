const { translateSystemPrompt } = require('../_shared/system-prompts');
const { noExtraInfo, translationAccurate } = require('../../_shared/assertions');

module.exports = {
  id: 'translate-russian',
  label: 'Translate to Russian',
  description: 'Translate text to Russian',

  messages: [
    {
      role: 'system',
      content: translateSystemPrompt({ targetLanguage: 'Russian' })
    },
    {
      role: 'user',
      content: '{{input}}'
    }
  ],

  get raw() {
    return this.messages.map(m => m.content).join('\n\n');
  },

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
