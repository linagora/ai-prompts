const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

module.exports = {
  id: 'transform-to-bullets',
  description: 'Transform text into a bullet list',
  version: '1.0.0',
  
  messages: buildMessages({ task : 'Transform the text into a bullet list.'}),

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
