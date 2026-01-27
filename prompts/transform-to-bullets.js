const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

const task = 'Transform the text into a bullet list.';

module.exports = {
  id: 'transform-to-bullets',
  description: 'Transform text into a bullet list',
  version: '1.0.0',
  
  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Transform to bullets - French input',
      vars: {
        input: "Pour le projet, nous devons d'abord analyser les besoins, puis concevoir la solution, ensuite développer le prototype, et finalement tester le résultat."
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        {
          type: 'llm-rubric',
          value: 'The output is formatted with bullet points or numbered list. The content is organized into clear, distinct items.'
        }
      ]
    }
  ]
};
