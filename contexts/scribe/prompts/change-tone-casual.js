const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { toneIs } = require('../_shared/assertions');

module.exports = {
  id: 'change-tone-casual',
  label: 'Casual tone',
  description: 'Change tone to casual',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'change the tone to be casual.'
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
      description: 'Change tone to casual - French formal input',
      vars: {
        input: "Je vous prie de bien vouloir trouver ci-joint le document demandé. Je reste à votre disposition pour tout complément d'information."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        toneIs('casual')
      ]
    }
  ]
};
