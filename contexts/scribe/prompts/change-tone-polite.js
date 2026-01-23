const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { toneIs } = require('../_shared/assertions');

module.exports = {
  id: 'change-tone-polite',
  label: 'Polite tone',
  description: 'Change tone to polite',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'change the tone to be polite.'
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
      description: 'Change tone to polite - French direct input',
      vars: {
        input: "Envoyez-moi le rapport demain. J'ai besoin des chiffres de vente aussi."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        toneIs('polite')
      ]
    }
  ]
};
