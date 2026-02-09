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
 * Calculate label accuracy with detailed metrics
 * @param {string[]} expectedLabels - Expected labels for this test case
 * @returns {Object} PromptFoo assertion with javascript function
 */
function labelAccuracyScore(expectedLabels = []) {
  return {
    type: 'javascript',
    value: `
      const outputText = (output || '').trim();
      const parts = outputText.split(',');
      const outputLabels = parts.slice(1).map(s => s.trim()).filter(Boolean);
      const expectedLabels = ${JSON.stringify(expectedLabels)};
      const expectedSet = new Set(expectedLabels);
      
      const correctLabels = outputLabels.filter(l => expectedSet.has(l));
      const totalOutput = outputLabels.length;
      const totalExpected = expectedLabels.length;
      
      let accuracy = 0;
      if (totalExpected === 0 && totalOutput === 0) {
        accuracy = 100;
      } else if (totalExpected === 0) {
        accuracy = 0;
      } else {
        accuracy = Math.round((correctLabels.length / totalOutput) * 100);
      }
      
      const metrics = {
        accuracy,
        correctLabels: correctLabels.length,
        totalExpected,
        totalOutput,
        outputLabels,
        expectedLabels,
        missingLabels: expectedLabels.filter(l => !outputLabels.includes(l)),
        extraLabels: outputLabels.filter(l => !expectedSet.has(l))
      };
      
      return {
        pass: accuracy === 100,
        score: accuracy / 100,
        reason: \`Label Accuracy: \${accuracy}% (\${correctLabels.length}/\${totalOutput} correct)\${metrics.missingLabels.length > 0 ? ' | Missing: ' + metrics.missingLabels.join(',') : ''}\${metrics.extraLabels.length > 0 ? ' | Extra: ' + metrics.extraLabels.join(',') : ''}\`,
        namedScores: {
          labelAccuracy: accuracy / 100,
          correctLabels: correctLabels.length,
          missingLabels: metrics.missingLabels.length,
          extraLabels: metrics.extraLabels.length
        }
      };
    `
  };
}

module.exports = {
  noTranslation,
  noExtraInfo,
  meaningPreserved,
  translationAccurate,
  classificationFormatValid,
  actionRequirementCorrect,
  labelAccuracyScore
};
