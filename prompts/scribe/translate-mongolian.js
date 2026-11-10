const { makeTranslatePrompt } = require('../../utils/translate-prompt');

// Not tested: the generation model translates Mongolian poorly, so its tests only
// reported that limit.
module.exports = { ...makeTranslatePrompt('Mongolian'), tests: [] };
