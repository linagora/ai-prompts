const { buildMessages } = require('../../utils/prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { noExtraInfo, translationAccurate } = require('../../utils/assertions');

// Single, parametrized translation prompt: the target language is supplied at
// call time via the {{language}} variable, so one prompt covers every language
// the Scribe menu offers (including the user-typed "other language" entry).
const task = 'Translate the text to {{language}}.';

module.exports = {
  id: 'translate',
  description: 'Translate text to a caller-provided target language ({{language}})',
  version: '1.0.0',

  messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

  tests: [
    {
      description: 'Translate to English - French input',
      vars: {
        language: 'English',
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo({ task: 'Translate the text to English.' }),
        translationAccurate('English')
      ]
    },
    {
      description: 'Translate to Spanish - English input',
      vars: {
        language: 'Spanish',
        input: 'Hello, how are you? I hope you are having a great day.'
      },
      assert: [
        noExtraInfo({ task: 'Translate the text to Spanish.' }),
        translationAccurate('Spanish')
      ]
    }
  ]
};
