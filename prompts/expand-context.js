const { addDirectives } = require('../utils/directives');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'expand-context',
  description: 'Expand context to make text more detailed',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'expand the context of the text to make it more detailed and comprehensive.',
        directives: ['noTranslate', 'noExtra']
      })
    },
    {
      role: 'user',
      content: '{{input}}'
    }
  ],

  tests: [
    {
      description: 'Expand context - French input',
      vars: {
        input: 'La réunion est reportée.'
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        {
          type: 'llm-rubric',
          value: 'The output is more detailed and comprehensive than the original input. Additional context or elaboration has been added.\nOriginal input: "{{input}}"'
        }
      ]
    }
  ]
};
