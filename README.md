# Linagora AI Prompts

PromptFoo evaluation suite for testing LLM prompts.

## Quick Start

1. Set environment variables:
   ```bash
   export OPENAI_API_KEY=your-key
   export OPENAI_API_HOST=https://ai.linagora.com/api
   ```

2. Run evaluations:
   ```bash
   npm install
   npm run eval
   ```

3. View results:
   ```bash
   npm run view
   ```

## Prompts

Available prompts are in the `prompts/` directory.

## Commands

- `npm run eval` - Run evaluations
- `npm run view` - Open results browser
- `npm run export` - Export prompts to `build/prompts.json`

## Adding Prompts

Create a file in `prompts/` following the existing pattern. See [AGENTS.md](AGENTS.md) for details.

## License

AGPL-3.0
