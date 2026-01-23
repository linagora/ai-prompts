const { translateSystemPrompt } = require('../_shared/system-prompts');
const { noExtraInfo, translationAccurate } = require('../../_shared/assertions');

module.exports = {
  id: 'translate-vietnamese',
  label: 'Translate to Vietnamese',
  description: 'Translate text to Vietnamese',

  messages: [
    {
      role: 'system',
      content: translateSystemPrompt({ targetLanguage: 'Vietnamese' })
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
