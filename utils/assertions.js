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

/**
 * Assert that email classification output has correct format
 */
function classificationFormatValid() {
  return {
    type: 'llm-rubric',
    value: `Validate the email classification output format:

FORMAT REQUIREMENTS:
- Single line with comma-separated values
- No spaces around commas
- First value: YES or NO (action required)
- Optional: up to 2 label IDs after the first value
- No explanations or extra text

VALID FORMAT EXAMPLES:
- YES,urgent,meeting
- NO,informational
- YES,review
- NO

INVALID FORMATS:
- YES, urgent (has space)
- YES - urgent (wrong separator)
- Multiple lines
- Extra explanations like "Here is the result: YES"`
  };
}

/**
 * Assert that action requirement is correct
 * @param {string} expectedAction - Expected action: 'YES' or 'NO'
 */
function actionRequirementCorrect(expectedAction) {
  return {
    type: 'llm-rubric',
    value: `Validate the action requirement classification:

EXPECTED ACTION: ${expectedAction}

The first value in the output (before any commas) must be: ${expectedAction}`
  };
}

/**
 * Assert that labels match the expected output
 * @param {string[]} expectedLabels - Array of acceptable labels
 */
function labelsMatchExpected(expectedLabels = []) {
  const labelsList = expectedLabels.length > 0 ? expectedLabels.join(', ') : 'no labels';
  
  return {
    type: 'llm-rubric',
    value: `Validate that the assigned labels are from the acceptable set.

ACCEPTABLE LABELS: ${labelsList}

To extract labels from output:
1. Look at everything after the first comma
2. For "YES,urgent,meeting" → labels are: urgent, meeting
3. For "NO,informational" → label is: informational
4. For "YES" or "NO" → no labels assigned

PASS CRITERIA:
${expectedLabels.length === 0 
  ? 'Output must be only "YES" or "NO" with no labels.' 
  : `PASS if: Every label in the output is from this set: ${labelsList}

Example acceptable outputs:
- YES,${expectedLabels[0]}
- YES,${expectedLabels.length > 1 ? expectedLabels[1] : expectedLabels[0]}
- YES,${expectedLabels.join(',')}
- NO (no labels needed)
FAIL if: Any label in output is NOT in the acceptable set.`}`
  };
}

module.exports = {
  noTranslation,
  noExtraInfo,
  meaningPreserved,
  translationAccurate,
  classificationFormatValid,
  actionRequirementCorrect,
  labelsMatchExpected
};
