const { buildMessages } = require('./prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../prompts/system_prompts');
const { noExtraInfo, translationAccurate } = require('./assertions');

// Technical, multi-clause sentences with figures and named concepts: greetings are
// too easy and pass on every model, hiding real translation-quality differences.
const SAMPLE_INPUTS = {
  French: "Le rapport trimestriel fait état d'une baisse de 15 % des marges nettes sur un an, que le conseil d'administration impute aux ruptures d'approvisionnement et au report des dépenses d'investissement.",
  English: "The quarterly report highlights a 15% year-over-year decline in net margins, which the board attributes to supply-chain bottlenecks and deferred capital expenditures."
};

/**
 * Build the scribe prompt translating the text to a language
 * @param {string} language - The target language, in English (e.g. 'French')
 */
function makeTranslatePrompt(language) {
  const task = `Translate the text to ${language}.`;
  // The test text must not already be in the target language
  const inputLanguages = Object.keys(SAMPLE_INPUTS).filter(
    (sampleLanguage) => sampleLanguage.toLowerCase() !== language.toLowerCase()
  );

  return {
    id: `translate-${language.toLowerCase().replace(/\s+/g, '-')}`,
    description: `Translate text to ${language}`,
    version: '1.0.0',

    messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

    tests: inputLanguages.map((inputLanguage) => ({
      description: `Translate to ${language} - ${inputLanguage} input`,
      vars: {
        input: SAMPLE_INPUTS[inputLanguage]
      },
      assert: [
        noExtraInfo({ task }),
        translationAccurate(language)
      ]
    }))
  };
}

module.exports = {
  makeTranslatePrompt
};
