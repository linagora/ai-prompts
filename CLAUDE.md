# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PromptFoo evaluation suite for Linagora AI prompts. Tests and evaluates LLM prompts using the PromptFoo framework with LLM-based assertions.

## Commands

```bash
npm run eval     # Run prompt evaluations against providers
npm run view     # Open results UI in browser
npm run export   # Export prompts to JSON format (output/)
```

Requires `OPENAI_API_KEY` environment variable set to Linagora AI key.

## Architecture

### Dynamic Prompt Loading

`promptfooconfig.js` discovers prompts automatically via `loadPromptsFromContexts()`:
- Scans `contexts/*/prompts.js` files
- Each context exports `getAllPrompts()` returning array of prompt definitions
- No manual registration needed when adding new contexts

### Prompt Definition Pattern

Prompts in `contexts/*/prompts.js` follow this structure:
```javascript
{
  id: 'prompt-id',
  label: 'Display Label',
  description: 'What it does',
  raw: 'The actual prompt template with {{text}} variables'
}
```

### Scribe Prompts Composition

`contexts/scribe/prompts.js` uses reusable fragments in `COMMON` object:
- `doNotTranslate` - Language preservation instruction
- `noExtra` - Output constraint (no explanations)
- `textSuffix` - Input variable template

Helper functions `scribePrompt()` and `translatePrompt()` compose these fragments.

### Evaluation Flow

1. `promptfooconfig.js` defines test cases with inputs and LLM-rubric assertions
2. Tests run against providers (Mistral Small via Linagora AI)
3. LLM-based assertions validate quality (language preservation, output constraints, task completion)
4. Results viewable via `npm run view`

## Adding New Prompts

1. Create `contexts/<context-name>/prompts.js`
2. Export `getAllPrompts()` function returning prompt array
3. Export individual prompt functions for PromptFoo template system
4. Add test cases in `promptfooconfig.js` tests array
