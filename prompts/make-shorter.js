const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo, meaningPreserved } = require('../utils/assertions');

module.exports = {
  id: 'make-shorter',
  description: 'Make text shorter while preserving meaning',
  version: '1.0.0',

  messages: buildMessages({ task : 'Make the text shorter while preserving its meaning.'}),

  tests: [
    {
      description: 'Make shorter - French input',
      vars: {
        input: "Nous avons le plaisir de vous informer que votre demande a été reçue et sera traitée dans les meilleurs délais. Notre équipe s'engage à vous fournir une réponse complète et détaillée dès que possible."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        meaningPreserved(),
        {
          type: 'llm-rubric',
          value: 'The output is noticeably shorter than the original input while keeping the essential message.\nOriginal input: "{{input}}"'
        }
      ]
    }
  ]
};
