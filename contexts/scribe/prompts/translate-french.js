const { translateSystemPrompt } = require('../_shared/system-prompts');
const { noExtraInfo, translationAccurate } = require('../../_shared/assertions');

module.exports = {
  id: 'translate-french',
  label: 'Translate to French',
  description: 'Translate text to French',

  messages: [
    {
      role: 'system',
      content: translateSystemPrompt({ targetLanguage: 'French' })
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
