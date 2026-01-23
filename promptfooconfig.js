const path = require('path');
const fs = require('fs');

// Discover all prompts from context directories
function loadPromptsFromContexts() {
  const contextsDir = path.join(__dirname, 'contexts');
  const prompts = [];

  for (const context of fs.readdirSync(contextsDir)) {
    const promptsFile = path.join(contextsDir, context, 'prompts.js');
    if (!fs.existsSync(promptsFile)) continue;

    const promptModule = require(promptsFile);
    const allPrompts = promptModule.getAllPrompts();

    for (const prompt of allPrompts) {
      prompts.push(`file://contexts/${context}/prompts.js:${prompt.id}`);
    }
  }

  return prompts;
}

module.exports = {
  description: 'Unified prompt evaluation across all contexts',
  providers: [
    {
      id: 'openai:mistralai/mistral-small-3.2-24b-instruct',
      config: {
        apiBaseUrl: 'https://ai.linagora.com/api',
        apiKeyEnvar: 'OPENAI_API_KEY'
      }
    }
  ],
  defaultTest: {
    options: {
      provider: {
        id: 'openai:openai/gpt-oss-120b',
        config: {
          apiBaseUrl: 'https://ai.linagora.com/api',
          apiKeyEnvar: 'OPENAI_API_KEY'
        }
      }
    }
  },
  prompts: loadPromptsFromContexts(),
  tests: [
    // Make shorter
    {
      description: 'Make shorter',
      prompts: ['contexts/scribe/prompts.js:make-shorter'],
      vars: {
        input: "Nous avons le plaisir de vous informer que votre demande a été reçue et sera traitée dans les meilleurs délais. Notre équipe s'engage à vous fournir une réponse complète et détaillée dès que possible."
      },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The output is noticeably shorter than the original input while keeping the essential message.\nOriginal input: "{{input}}"' },
        { type: 'llm-rubric', value: 'The core meaning of the original text is unchanged. Key information and intent are preserved.\nOriginal input: "{{input}}"' }
      ]
    },
    // Expand context
    {
      description: 'Expand context',
      prompts: ['contexts/scribe/prompts.js:expand-context'],
      vars: { input: 'La réunion est reportée.' },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The output is more detailed and comprehensive than the original input. Additional context or elaboration has been added.\nOriginal input: "{{input}}"' }
      ]
    },
    // Emojify
    {
      description: 'Emojify',
      prompts: ['contexts/scribe/prompts.js:emojify'],
      vars: { input: "Félicitations pour votre promotion! C'est une excellente nouvelle. On fête ça ce soir?" },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The output contains relevant emojis placed appropriately. The original text content is preserved (only emojis added).\nOriginal input: "{{input}}"' }
      ]
    },
    // Transform to bullets
    {
      description: 'Transform to bullets',
      prompts: ['contexts/scribe/prompts.js:transform-to-bullets'],
      vars: { input: "Pour le projet, nous devons d'abord analyser les besoins, puis concevoir la solution, ensuite développer le prototype, et finalement tester le résultat." },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The output is formatted with bullet points or numbered list. The content is organized into clear, distinct items.' }
      ]
    },
    // Correct grammar
    {
      description: 'Correct grammar',
      prompts: ['contexts/scribe/prompts.js:correct-grammar'],
      vars: { input: "Je suis aller au magasin hier et j'ai acheter du pain. Les pomme était très bonne." },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'Grammar and spelling errors from the original input have been corrected. The text follows proper grammatical rules.\nOriginal input with errors: "{{input}}"' }
      ]
    },
    // Change tone professional
    {
      description: 'Change tone professional',
      prompts: ['contexts/scribe/prompts.js:change-tone-professional'],
      vars: { input: "Salut, t'as vu le truc que je t'ai envoyé? C'est super important, faut qu'on en parle vite!" },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The tone is professional and formal. No slang, casual language, or informal expressions.' }
      ]
    },
    // Change tone casual
    {
      description: 'Change tone casual',
      prompts: ['contexts/scribe/prompts.js:change-tone-casual'],
      vars: { input: "Je vous prie de bien vouloir trouver ci-joint le document demandé. Je reste à votre disposition pour tout complément d'information." },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The tone is casual and friendly. Uses conversational language, may include informal expressions.' }
      ]
    },
    // Change tone polite
    {
      description: 'Change tone polite',
      prompts: ['contexts/scribe/prompts.js:change-tone-polite'],
      vars: { input: "Envoyez-moi le rapport demain. J'ai besoin des chiffres de vente aussi." },
      assert: [
        { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The tone is polite and courteous. Uses respectful language and considerate phrasing.' }
      ]
    },
    // Translate to French (from English)
    {
      description: 'Translate to French',
      prompts: ['contexts/scribe/prompts.js:translate-french'],
      vars: { input: "Hello, how are you? I hope you're having a great day." },
      assert: [
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The text has been translated to French. The meaning is preserved.\nOriginal input (English): "{{input}}"' }
      ]
    },
    // Translate to English (from French)
    {
      description: 'Translate to English',
      prompts: ['contexts/scribe/prompts.js:translate-english'],
      vars: { input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée." },
      assert: [
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The text has been translated to English. The meaning is preserved.\nOriginal input (French): "{{input}}"' }
      ]
    },
    // Translate to Russian (from French)
    {
      description: 'Translate to Russian',
      prompts: ['contexts/scribe/prompts.js:translate-russian'],
      vars: { input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée." },
      assert: [
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The text has been translated to Russian. The meaning is preserved.\nOriginal input (French): "{{input}}"' }
      ]
    },
    // Translate to Vietnamese (from French)
    {
      description: 'Translate to Vietnamese',
      prompts: ['contexts/scribe/prompts.js:translate-vietnamese'],
      vars: { input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée." },
      assert: [
        { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
        { type: 'llm-rubric', value: 'The text has been translated to Vietnamese. The meaning is preserved.\nOriginal input (French): "{{input}}"' }
      ]
    }
    // // General assistant
    // {
    //   description: 'General assistant',
    //   prompts: ['contexts/chat/prompts.js:general-assistant'],
    //   vars: { input: 'Quelle est la capitale de la France?' },
    //   assert: [
    //     { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' },
    //     { type: 'llm-rubric', value: 'The answer is factually correct (Paris is the capital of France).' }
    //   ]
    // },
    // // Summarize
    // {
    //   description: 'Summarize',
    //   prompts: ['contexts/chat/prompts.js:summarize'],
    //   vars: { input: "Le renard brun rapide saute par-dessus le chien paresseux. Cette phrase contient toutes les lettres de l'alphabet. Elle est utilisée pour la pratique de la dactylographie depuis la fin du XIXe siècle. La phrase est également utilisée pour tester les polices et les claviers." },
    //   assert: [
    //     { type: 'llm-rubric', value: 'The output is in French (same language as the input). No translation occurred.' },
    //     { type: 'llm-rubric', value: 'The output contains ONLY what was explicitly asked. No extra explanations.' }
    //   ]
    // }
  ]
};
