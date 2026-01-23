const { translateSystemPrompt } = require('../_shared/system-prompts');
const { noExtraInfo, translationAccurate } = require('../../_shared/assertions');

module.exports = {
  id: 'translate-english',
  label: 'Translate to English',
  description: 'Translate text to English',

  messages: [
    {
      role: 'system',
      content: translateSystemPrompt({ targetLanguage: 'English' })
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
      description: 'Translate to English - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('English')
      ]
    }
  ]
};
