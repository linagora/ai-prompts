const { addDirectives } = require('../utils/directives');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'emojify',
  description: 'Add emojis to important parts of the text',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'add emojis to the important parts of the text. Do not try to rephrase or replace text.',
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
      description: 'Emojify - French input',
      vars: {
        input: "Félicitations pour votre promotion! C'est une excellente nouvelle. On fête ça ce soir?"
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        {
          type: 'llm-rubric',
          value: 'The output contains relevant emojis placed appropriately. The original text content is preserved (only emojis added).\nOriginal input: "{{input}}"'
        }
      ]
    }
  ]
};
