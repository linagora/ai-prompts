const prompts = {
//   'general-assistant': {
//     id: 'general-assistant',
//     label: 'General assistant',
//     description: 'General chat assistant prompt',
//     raw: `You are a helpful assistant. Answer the user's question clearly and concisely.
// Do not add unnecessary information or pleasantries.

// User: {{input}}`
//   },
//   'summarize': {
//     id: 'summarize',
//     label: 'Summarize text',
//     description: 'Summarize text concisely',
//     raw: `Summarize the following text in 2-3 sentences.
// Keep the original language. Focus on the main points only.

// {{input}}`
//   }
};

// Export individual prompt functions for promptfoo
for (const [key, prompt] of Object.entries(prompts)) {
  module.exports[key] = () => prompt.raw;
}

// Export all prompts for the export script
module.exports.getAllPrompts = () => Object.values(prompts);
