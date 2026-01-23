const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { isBulletList } = require('../_shared/assertions');

module.exports = {
  id: 'transform-to-bullets',
  label: 'Transform to bullets',
  description: 'Transform text into a bullet list',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'transform the text into a bullet list.'
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
      description: 'Transform to bullets - French input',
      vars: {
        input: "Pour le projet, nous devons d'abord analyser les besoins, puis concevoir la solution, ensuite développer le prototype, et finalement tester le résultat."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        isBulletList()
      ]
    }
  ]
};
