# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Project Overview

PromptFoo evaluation suite for Linagora AI prompts. Tests and evaluates LLM prompts using the PromptFoo framework with LLM-based assertions.

## Commands

```bash
npm run eval     # Run prompt evaluations against providers
npm run view     # Open results UI in browser
npm run export   # Export prompts to JSON format (build/)
```

Requires `OPENAI_API_KEY` environment variable set to AI provider key.

## Architecture

### Directory Structure

```
prompts/
├── change-tone-casual.js
├── change-tone-polite.js
├── change-tone-professional.js
├── correct-grammar.js
├── emojify.js
├── expand-context.js
├── make-shorter.js
├── transform-to-bullets.js
├── translate-english.js
├── translate-french.js
├── translate-russian.js
└── translate-vietnamese.js

utils/
├── directives.js       # System prompt directive builders
└── assertions.js       # Shared assertions for tests

scripts/
└── export-prompts.js   # Exports prompts to JSON (build/prompts.json)
```

### Dynamic Prompt Loading

[`promptfooconfig.js`](promptfooconfig.js:1) discovers prompts automatically:
- Scans all `.js` files in [`prompts/`](prompts/) directory
- Each prompt file exports a module with [`id`](prompts/make-shorter.js:5), [`messages`](prompts/make-shorter.js:9), and [`tests`](prompts/make-shorter.js:23)
- No manual registration needed when adding new prompts

### Individual Prompt File Format

Each prompt in [`prompts/<id>.js`](prompts/make-shorter.js:1):
```javascript
const { addDirectives } = require('../utils/directives');
const { noTranslation, noExtraInfo, meaningPreserved } = require('../utils/assertions');

module.exports = {
  id: 'prompt-id',
  description: 'What it does',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'Detailed task description',
        directives: ['noTranslate', 'noExtra']
      })
    },
    {
      role: 'user',
      content: '{{input}}'
    }
  ],

  tests: [
    {
      description: 'Test description',
      vars: { input: 'Test input' },
      assert: [ noTranslation(), noExtraInfo(), meaningPreserved() ]
    }
  ]
};
```

### Directives System

[`utils/directives.js`](utils/directives.js:1) provides reusable system prompt fragments:
- [`DIRECTIVES.noTranslate`](utils/directives.js:2) - Preserve original language
- [`DIRECTIVES.noExtra`](utils/directives.js:3) - No extra explanations
- [`DIRECTIVES.taskOnly`](utils/directives.js:4) - Task prefix
- [`addDirectives({ task, directives })`](utils/directives.js:14) - Composes fragments into system prompt

### Shared Assertions

[`utils/assertions.js`](utils/assertions.js:1) provides LLM-based test assertions:
- [`noTranslation()`](utils/assertions.js:9) - Output preserves input language
- [`noExtraInfo()`](utils/assertions.js:19) - No extra explanations
- [`meaningPreserved()`](utils/assertions.js:29) - Core meaning unchanged
- [`translationAccurate(targetLanguage)`](utils/assertions.js:40) - Translation quality

All assertions return PromptFoo [`llm-rubric`](utils/assertions.js:11) assertion objects.

### Evaluation Flow

1. Tests are defined alongside each prompt in [`tests`](prompts/make-shorter.js:23) array
2. [`promptfooconfig.js`](promptfooconfig.js:33) aggregates tests via [`loadAllTests()`](promptfooconfig.js:33)
3. Tests run against providers (Mistral Small via Linagora AI)
4. LLM-based assertions validate quality using [`openai:chat:openai/gpt-oss-120b`](promptfooconfig.js:72)
5. Results viewable via `npm run view`

### Export Functionality

[`scripts/export-prompts.js`](scripts/export-prompts.js:1) exports all prompts to [`build/prompts.json`](scripts/export-prompts.js:33):
- Includes [`name`](scripts/export-prompts.js:20), [`version`](scripts/export-prompts.js:21), [`description`](scripts/export-prompts.js:22), and [`messages`](scripts/export-prompts.js:23)
- Adds [`generatedAt`](scripts/export-prompts.js:28) timestamp
- Run with `npm run export`

## Adding New Prompts

1. Create [`prompts/<id>.js`](prompts/) following the format above
2. Import utility functions from [`utils/directives`](utils/directives.js:1) and [`utils/assertions`](utils/assertions.js:1)
3. Define [`messages`](prompts/make-shorter.js:9) array with system/user separation using [`addDirectives()`](utils/directives.js:14)
4. Add [`tests`](prompts/make-shorter.js:23) array with assertions for this prompt
5. The prompt is automatically discovered via [`loadAllPrompts()`](promptfooconfig.js:7) - no manual registration needed

## Providers

Currently configured with two providers:
- **Primary**: [`mistralai/mistral-small-3.2-24b-instruct`](promptfooconfig.js:62) for prompt execution
- **Tests**: [`openai/gpt-oss-120b`](promptfooconfig.js:72) for LLM-based assertions

Both use Linagora AI API at [`https://ai.linagora.com/api`](promptfooconfig.js:64).
