const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo, meaningPreserved } = require('../utils/assertions');

const task = 'Make the text shorter while preserving its meaning.';

module.exports = {
  id: 'make-shorter',
  description: 'Make text shorter while preserving meaning',
  version: '1.0.0',

  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Make shorter - French input',
      vars: {
        input: "Nous avons le plaisir de vous informer, par le présent message, que votre demande a bien été prise en compte par nos services à la suite de sa réception. Celle-ci a été enregistrée dans notre système et sera examinée avec la plus grande attention par l’équipe concernée, qui procédera à son traitement dans les meilleurs délais et reviendra vers vous ultérieurement afin de vous apporter une réponse."
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        meaningPreserved(),
        {
          type: 'llm-rubric',
          value: 'The output is noticeably shorter than the original input while keeping the essential message.\nOriginal input: "{{input}}"'
        }
      ]
    }
  ]
};
