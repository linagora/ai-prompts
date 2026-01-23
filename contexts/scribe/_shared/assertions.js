/**
 * Scribe-specific shared assertions
 * Each function returns a PromptFoo assertion object
 */

/**
 * Assert that output is shorter than input
 */
function isShorter() {
  return {
    type: 'llm-rubric',
    value: 'The output is noticeably shorter than the original input while keeping the essential message.\nOriginal input: "{{input}}"'
  };
}

/**
 * Assert that output is expanded/more detailed
 */
function isExpanded() {
  return {
    type: 'llm-rubric',
    value: 'The output is more detailed and comprehensive than the original input. Additional context or elaboration has been added.\nOriginal input: "{{input}}"'
  };
}

/**
 * Assert that output contains emojis
 */
function hasEmojis() {
  return {
    type: 'llm-rubric',
    value: 'The output contains relevant emojis placed appropriately. The original text content is preserved (only emojis added).\nOriginal input: "{{input}}"'
  };
}

/**
 * Assert that output is formatted as a bullet list
 */
function isBulletList() {
  return {
    type: 'llm-rubric',
    value: 'The output is formatted with bullet points or numbered list. The content is organized into clear, distinct items.'
  };
}

/**
 * Assert that grammar has been corrected
 */
function grammarCorrected() {
  return {
    type: 'llm-rubric',
    value: 'Grammar and spelling errors from the original input have been corrected. The text follows proper grammatical rules.\nOriginal input with errors: "{{input}}"'
  };
}

/**
 * Assert that tone matches the expected tone
 * @param {string} tone - The expected tone (professional, casual, polite)
 */
function toneIs(tone) {
  const toneDescriptions = {
    professional: 'The tone is professional and formal. No slang, casual language, or informal expressions.',
    casual: 'The tone is casual and friendly. Uses conversational language, may include informal expressions.',
    polite: 'The tone is polite and courteous. Uses respectful language and considerate phrasing.'
  };

  return {
    type: 'llm-rubric',
    value: toneDescriptions[tone] || `The tone is ${tone}.`
  };
}

module.exports = {
  isShorter,
  isExpanded,
  hasEmojis,
  isBulletList,
  grammarCorrected,
  toneIs
};
