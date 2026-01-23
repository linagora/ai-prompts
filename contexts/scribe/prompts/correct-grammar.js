const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { grammarCorrected } = require('../_shared/assertions');

module.exports = {
  id: 'correct-grammar',
  label: 'Correct grammar',
  description: 'Correct grammar and spelling errors',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'correct the grammar and spelling of the text.'
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
      description: 'Correct grammar - French input with errors',
      vars: {
        input: "Je suis aller au magasin hier et j'ai acheter du pain. Les pomme était très bonne."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        grammarCorrected()
      ]
    }
  ]
};
