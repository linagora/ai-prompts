const { addDirectives } = require('../utils/directives');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'transform-to-bullets',
  description: 'Transform text into a bullet list',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'transform the text into a bullet list.',
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
      description: 'Transform to bullets - French input',
      vars: {
        input: "Pour le projet, nous devons d'abord analyser les besoins, puis concevoir la solution, ensuite développer le prototype, et finalement tester le résultat."
      },
      assert: [
        noTranslation(),
        noExtraInfo(),
        {
          type: 'llm-rubric',
          value: 'The output is formatted with bullet points or numbered list. The content is organized into clear, distinct items.'
        }
      ]
    }
  ]
};
