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
    type: 'javascript',
    value: `
      const outputText = (output || '').trim();
      
      if (!outputText) {
        return { pass: false, score: 0, reason: 'Output is empty' };
      }
      
      if (outputText.includes('\\n')) {
        return { pass: false, score: 0, reason: 'Output contains multiple lines' };
      }
      
      if (outputText.includes(', ')) {
        return { pass: false, score: 0, reason: 'Output has spaces after commas' };
      }
      
      const parts = outputText.split(',');
      const action = parts[0];
      
      if (action !== 'YES' && action !== 'NO') {
        return { pass: false, score: 0, reason: 'First value must be YES or NO, got: ' + action };
      }
      
      return { pass: true, score: 1, reason: 'Format is valid' };
    `
  };
}

/**
 * Assert that action requirement is correct
 * @param {string} expectedAction - Expected action: 'YES' or 'NO'
 */
function actionRequirementCorrect(expectedAction) {
  return {
    type: 'javascript',
    value: `
      const outputText = (output || '').trim();
      const action = outputText.split(',')[0];
      const isValid = action === '${expectedAction}';
      
      return {
        pass: isValid,
        score: isValid ? 1 : 0,
        reason: 'Expected action: ${expectedAction}, got: ' + action
      };
    `
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
      const totalExpected = expectedLabels.length;
      
      let accuracy = 0;
      if (totalExpected === 0 && correctLabels.length === 0) {
        accuracy = 100;
      } else if (totalExpected === 0) {
        accuracy = 0;
      } else {
        accuracy = Math.round((correctLabels.length / totalExpected) * 100);
      }
      
      const metrics = {
        accuracy,
        correctLabels: correctLabels.length,
        totalExpected,
        outputLabels,
        expectedLabels,
        missingLabels: expectedLabels.filter(l => !outputLabels.includes(l)),
        extraLabels: outputLabels.filter(l => !expectedSet.has(l))
      };
      
      return {
        pass: correctLabels.length === totalExpected && metrics.missingLabels.length === 0,
        score: accuracy / 100,
        reason: 'Label Accuracy: ' + accuracy + '% (' + correctLabels.length + '/' + totalExpected + ' correct)' + (metrics.missingLabels.length > 0 ? ' | Missing: ' + metrics.missingLabels.join(',') : '') + (metrics.extraLabels.length > 0 ? ' | Extra: ' + metrics.extraLabels.join(',') : ''),
        namedScores: {
          labelAccuracy: accuracy / 100,
          correctLabels: correctLabels.length,
          totalExpected: totalExpected,
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
