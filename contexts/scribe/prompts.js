// Common patterns - defined once, reused everywhere
const COMMON = {
  doNotTranslate: `Do not translate. Strictly keep the original language of the input text. For example, if it's French, keep French. If it's English, keep English.`,
  noExtra: `Do NOT add any extra information or interpret anything beyond the explicit task. Just answer the task.`,
  textSuffix: `Text:\n\n{{input}}`
};

// Helper to build scribe prompts
function scribePrompt(task) {
  return `Perform only the following task: ${task}\n${COMMON.doNotTranslate}\n${COMMON.noExtra} ${COMMON.textSuffix}`;
}

// Translation prompts don't use doNotTranslate
function translatePrompt(language) {
  return `Perform only the following task: translate the text to ${language}.\n${COMMON.noExtra} ${COMMON.textSuffix}`;
}

// Prompt definitions with metadata
const prompts = {
  'make-shorter': {
    id: 'make-shorter',
    label: 'Make text shorter',
    description: 'Make text shorter while preserving meaning',
    raw: scribePrompt('make the text shorter while preserving its meaning.')
  },
  'expand-context': {
    id: 'expand-context',
    label: 'Expand context',
    description: 'Expand context to make text more detailed',
    raw: scribePrompt('expand the context of the text to make it more detailed and comprehensive.')
  },
  'emojify': {
    id: 'emojify',
    label: 'Add emojis',
    description: 'Add emojis to important parts of the text',
    raw: scribePrompt('add emojis to the important parts of the text. Do not try to rephrase or replace text.')
  },
  'transform-to-bullets': {
    id: 'transform-to-bullets',
    label: 'Transform to bullets',
    description: 'Transform text into a bullet list',
    raw: scribePrompt('transform the text into a bullet list.')
  },
  'correct-grammar': {
    id: 'correct-grammar',
    label: 'Correct grammar',
    description: 'Correct grammar and spelling errors',
    raw: scribePrompt('correct the grammar and spelling of the text.')
  },
  'change-tone-professional': {
    id: 'change-tone-professional',
    label: 'Professional tone',
    description: 'Change tone to professional',
    raw: scribePrompt('change the tone to be professional.')
  },
  'change-tone-casual': {
    id: 'change-tone-casual',
    label: 'Casual tone',
    description: 'Change tone to casual',
    raw: scribePrompt('change the tone to be casual.')
  },
  'change-tone-polite': {
    id: 'change-tone-polite',
    label: 'Polite tone',
    description: 'Change tone to polite',
    raw: scribePrompt('change the tone to be polite.')
  },
  'translate-french': {
    id: 'translate-french',
    label: 'Translate to French',
    description: 'Translate text to French',
    raw: translatePrompt('French')
  },
  'translate-english': {
    id: 'translate-english',
    label: 'Translate to English',
    description: 'Translate text to English',
    raw: translatePrompt('English')
  },
  'translate-russian': {
    id: 'translate-russian',
    label: 'Translate to Russian',
    description: 'Translate text to Russian',
    raw: translatePrompt('Russian')
  },
  'translate-vietnamese': {
    id: 'translate-vietnamese',
    label: 'Translate to Vietnamese',
    description: 'Translate text to Vietnamese',
    raw: translatePrompt('Vietnamese')
  }
};

// Export individual prompt functions for promptfoo
for (const [key, prompt] of Object.entries(prompts)) {
  module.exports[key] = () => prompt.raw;
}

// Export all prompts for the export script
module.exports.getAllPrompts = () => Object.values(prompts);
