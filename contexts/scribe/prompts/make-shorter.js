const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo, meaningPreserved } = require('../../_shared/assertions');
const { isShorter } = require('../_shared/assertions');

module.exports = {
  id: 'make-shorter',
  label: 'Make text shorter',
  description: 'Make text shorter while preserving meaning',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'make the text shorter while preserving its meaning.'
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
      description: 'Make shorter - French input',
      vars: {
        input: "Nous avons le plaisir de vous informer que votre demande a été reçue et sera traitée dans les meilleurs délais. Notre équipe s'engage à vous fournir une réponse complète et détaillée dès que possible."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        isShorter(),
        meaningPreserved()
      ]
    }
  ]
};
