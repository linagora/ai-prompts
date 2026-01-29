/**
 * Global shared assertions for prompt evaluation
 * Each function returns a PromptFoo assertion object
 */

/**
 * Assert that output preserves the input language (no translation)
 */
function noTranslation() {
  return {
    type: 'llm-rubric',
    value: 'The output is in the same language as the original input. No translation occurred.\nOriginal input: "{{input}}"'
  };
}

/**
 * Assert that output contains only what was asked (no extra explanations)
 */
function noExtraInfo({ task }) {
  return {
    type: 'llm-rubric',
    value: `The output contains ONLY what was explicitly asked. No extra explanations, commentary, or preamble.\nTask: ${task} Original input: "{{input}}"`
  };
}

/**
 * Assert that the core meaning is preserved
 */
function meaningPreserved() {
  return {
    type: 'llm-rubric',
    value: `The core meaning of the original text is unchanged. Key information and intent are preserved.\nOriginal input: "{{input}}"`
  };
}

/**
 * Assert that translation to target language is accurate
 * @param {string} targetLanguage - The expected target language
 */
function translationAccurate(targetLanguage) {
  return {
    type: 'llm-rubric',
    value: `The text has been translated to ${targetLanguage}. The meaning is preserved.\nOriginal input: "{{input}}"`
  };
}

module.exports = {
  noTranslation,
  noExtraInfo,
  meaningPreserved,
  translationAccurate
};
