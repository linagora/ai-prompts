const { buildMessages } = require('../../utils/prompts');
const { noTranslation, noExtraInfo } = require('../../utils/assertions');

const task = `Correct the grammar and spelling of the text.

Change only what is wrong:
- Fix the misspelled words, the agreements, the conjugations and the punctuation
- Keep every word that is right: do not replace a word with a synonym, and do not rephrase
- Keep the lines and the paragraphs of the text`;
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');

module.exports = {
  id: 'correct-grammar',
  description: 'Correct grammar and spelling errors',
  version: '1.1.0',
  
  messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

  tests: [
    {
      description: 'Correct grammar - French input with errors',
      vars: {
        input: "Je suis aller au magasin hier et j'ai acheter du pain. Les pomme était très bonne."
      },
      assert: [
        {
          type: 'equals',
           value: "Je suis allé au magasin hier et j'ai acheté du pain. Les pommes étaient très bonnes."
        }
      ]
    },
    {
      description: 'Correct grammar - keeps the words that are right',
      vars: {
        input: "bonjour à tous, la réunion de demain est decalé a jeudi 14h car plusieurs personnes ne pouvais pas venir."
      },
      assert: [
        {
          type: 'javascript',
          value: "/décalée à jeudi/.test(output) && /ne pouvaient pas venir/.test(output) && !/déplacée|reportée|repoussée/.test(output)"
        }
      ]
    },
    {
      description: 'Correct grammar - keeps every line of the text',
      vars: {
        input: "Novembre\n\nLes autre client suivrons a partir du 3 novembre, sans interruption de service."
      },
      assert: [
        {
          type: 'javascript',
          value: "(lines => lines.length === 2 && lines[0] === 'Novembre' && /Les autres clients suivront à partir du 3 novembre/.test(lines[1]))(output.trim().split(/\\n+/).map(line => line.trim()).filter(Boolean))"
        }
      ]
    }
  ]
};
