const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');
const { isExpanded } = require('../_shared/assertions');

module.exports = {
  id: 'expand-context',
  label: 'Expand context',
  description: 'Expand context to make text more detailed',

  messages: [
    {
      role: 'system',
      content: scribeSystemPrompt({
        task: 'expand the context of the text to make it more detailed and comprehensive.'
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
      description: 'Expand context - French input',
      vars: {
        input: 'La réunion est reportée.'
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        isExpanded()
      ]
    }
  ]
};
