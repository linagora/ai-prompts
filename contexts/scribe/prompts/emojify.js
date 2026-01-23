const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { hasEmojis } = require('../_shared/assertions');

module.exports = {
  id: 'emojify',
  label: 'Add emojis',
  description: 'Add emojis to important parts of the text',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'add emojis to the important parts of the text. Do not try to rephrase or replace text.'
      })
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
      description: 'Emojify - French input',
      vars: {
        input: "Félicitations pour votre promotion! C'est une excellente nouvelle. On fête ça ce soir?"
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        hasEmojis()
      ]
    }
  ]
};
