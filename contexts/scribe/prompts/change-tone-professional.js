const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { toneIs } = require('../_shared/assertions');

module.exports = {
  id: 'change-tone-professional',
  label: 'Professional tone',
  description: 'Change tone to professional',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'change the tone to be professional.'
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
      description: 'Change tone to professional - French casual input',
      vars: {
        input: "Salut, t'as vu le truc que je t'ai envoyé? C'est super important, faut qu'on en parle vite!"
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        toneIs('professional')
      ]
    }
  ]
};
