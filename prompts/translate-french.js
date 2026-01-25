const { addDirectives } = require('../utils/directives');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

module.exports = {
  id: 'translate-french',
  description: 'Translate text to French',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'translate the text to French.',
        directives: ['noExtra']
      })
    },
    {
      role: 'user',
      content: '{{input}}'
    }
  ],

  tests: [
    {
      description: 'Translate to French - English input',
      vars: {
        input: "Hello, how are you? I hope you're having a great day."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('French')
      ]
    }
  ]
};
