const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

const task = 'Expand the context of the text to make it more detailed and comprehensive.';

module.exports = {
  id: 'expand-context',
  description: 'Expand context to make text more detailed',
  version: '1.0.0',

  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Expand context - French input',
      vars: {
        input: 'La réunion est reportée.'
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        {
          type: 'llm-rubric',
          value: 'The output is more detailed and comprehensive than the original input. Additional context or elaboration has been added.\nOriginal input: "{{input}}"'
        }
      ]
    }
  ]
};
