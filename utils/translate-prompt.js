const { buildMessages } = require('./prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../prompts/system_prompts');
const { noExtraInfo, translationAccurate } = require('./assertions');

const SAMPLE_INPUTS = {
  French: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée.",
  English: "Hello, how are you? I hope you're having a great day."
};

/**
 * Build the scribe prompt translating the text to a language
 * @param {string} language - The target language, in English (e.g. 'French')
 */
function makeTranslatePrompt(language) {
  const task = `Translate the text to ${language}.`;
  // The test text must not already be in the target language
  const inputLanguage = Object.keys(SAMPLE_INPUTS).find(
    (sampleLanguage) => sampleLanguage.toLowerCase() !== language.toLowerCase()
  );

  return {
    id: `translate-${language.toLowerCase().replace(/\s+/g, '-')}`,
    description: `Translate text to ${language}`,
    version: '1.0.0',

    messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

    tests: [
      {
        description: `Translate to ${language} - ${inputLanguage} input`,
        vars: {
          input: SAMPLE_INPUTS[inputLanguage]
        },
        assert: [
          noExtraInfo({ task }),
          translationAccurate(language)
        ]
      }
    ]
  };
}

module.exports = {
  makeTranslatePrompt
};
