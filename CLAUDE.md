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

### Directory Structure

```
contexts/
├── _shared/
│   ├── system-prompts.js       # Global shared system prompt fragments
│   └── assertions.js           # Global shared assertions
│
├── scribe/
│   ├── _shared/
│   │   ├── system-prompts.js   # Scribe system prompt builders
│   │   └── assertions.js       # Scribe-specific shared assertions
│   │
│   ├── prompts/
│   │   ├── make-shorter.js
│   │   ├── expand-context.js
│   │   └── ...                 # One file per prompt
│   │
│   └── index.js                # Aggregates prompts and tests
```

### Dynamic Prompt Loading

`promptfooconfig.js` discovers prompts automatically:
- Scans `contexts/*/index.js` files
- Each context exports `getAllPrompts()` and `getAllTests()`
- No manual registration needed when adding new contexts

### Individual Prompt File Format

Each prompt in `contexts/<context>/prompts/<id>.js`:
```javascript
const { scribeSystemPrompt } = require('../_shared/system-prompts');
const { noTranslation, noExtraInfo } = require('../../_shared/assertions');

module.exports = {
  id: 'prompt-id',
  label: 'Display Label',
  description: 'What it does',

  messages: [
    { role: 'system', content: scribeSystemPrompt({ task: '...' }) },
    { role: 'user', content: '{{input}}' }
  ],

  get raw() {
    return this.messages.map(m => m.content).join('\n\n');
  },

  tests: [
    {
      description: 'Test description',
      vars: { input: 'Test input' },
      assert: [ noTranslation(), noExtraInfo() ]
    }
  ]
};
```

### Shared System Prompts

**Global** (`contexts/_shared/system-prompts.js`):
- `FRAGMENTS` - Reusable prompt fragments (noTranslate, noExtraInfo, taskOnly)
- `buildSystemPrompt({ task, preserveLanguage, noExtra })` - Composes fragments

**Scribe** (`contexts/scribe/_shared/system-prompts.js`):
- `scribeSystemPrompt({ task })` - Preserves language by default
- `translateSystemPrompt({ targetLanguage })` - For translation prompts

### Shared Assertions

**Global** (`contexts/_shared/assertions.js`):
- `noTranslation()` - Output preserves input language
- `noExtraInfo()` - No extra explanations
- `meaningPreserved()` - Core meaning unchanged
- `translationAccurate(targetLanguage)` - Translation quality

**Scribe** (`contexts/scribe/_shared/assertions.js`):
- `isShorter()`, `isExpanded()`, `hasEmojis()`, `isBulletList()`
- `grammarCorrected()`, `toneIs(tone)`

### Evaluation Flow

1. Tests are defined alongside each prompt in its own file
2. `promptfooconfig.js` aggregates tests via `getAllTests()` from each context
3. Tests run against providers (Mistral Small via Linagora AI)
4. LLM-based assertions validate quality
5. Results viewable via `npm run view`

## Adding New Prompts

1. Create `contexts/<context>/prompts/<id>.js` following the format above
2. Import shared system prompts and assertions
3. Define `messages` array with system/user separation
4. Add `tests` array with assertions for this prompt
5. The prompt is automatically discovered - no manual registration needed
