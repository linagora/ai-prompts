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
    value: `You are evaluating whether an AI text-editing assistant followed the "output only" rule.

The assistant was given this task: "${task}"
The original input was: "{{input}}"

PASS if: The output contains ONLY the transformed text — the result of applying the task to the input. Courtesy language, greetings, or polite phrasing that are PART OF the rewritten content itself are acceptable (e.g. if the task is to make text polite, adding "please" or "kind regards" is expected, not extra).

FAIL if: The output contains ANY of these:
- A preamble like "Here is the result:", "Sure!", "Certainly!", or the equivalent in output language.
- An explanation of what was changed
- A note, caveat, or commentary about the transformation
- The original instruction repeated back
`
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
