const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

const task = 'Correct the grammar and spelling of the text.';

module.exports = {
  id: 'correct-grammar',
  description: 'Correct grammar and spelling errors',
  version: '1.0.0',
  
  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Correct grammar - French input with errors',
      vars: {
        input: "Je suis aller au magasin hier et j'ai acheter du pain. Les pomme était très bonne."
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        {
          type: 'llm-rubric',
          value: 'Grammar and spelling errors from the original input have been corrected. The text follows proper grammatical rules.\nOriginal input with errors: "{{input}}"'
        }
      ]
    }
  ]
};
