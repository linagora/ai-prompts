const { buildMessages } = require('../../utils/prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { noTranslation, noExtraInfo, meaningPreserved } = require('../../utils/assertions');

const task = `Summarize the text from the user.

Your goal:
- Produce a clear and accurate summary of the provided content
- Keep the original meaning and key information only
- Remove redundancy, examples, anecdotes, and minor details

Output:
- A single coherent paragraph unless otherwise specified
- Do not add any extra information or interpret anything beyond the explicit task`;

module.exports = {
  id: 'summarize',
  description: 'Summarize a text',
  version: '1.0.0',

  messages: buildMessages({ task, system_instruction: SCRIBE_SYSTEM_INSTRUCTIONS }),

  tests: [
    {
      description: 'Summarize - French input',
      vars: {
        input: `Un LLM est un modèle entraîné sur d'énormes quantités de texte pour repérer les liens entre les mots et les phrases. Il fonctionne comme un étudiant qui aurait lu des millions de livres et de conversations, et qui utiliserait ces exemples pour anticiper la suite d'une phrase ou répondre à une question.

Quand tu lui parles, il analyse ta demande et génère une réponse en calculant les mots les plus probables, un peu comme un jeu de devinettes sophistiqué. Il ne réfléchit pas comme un humain, mais il produit des réponses souvent fluides et pertinentes grâce à cette mémoire statistique.

Ces modèles sont très utiles pour écrire, résumer ou converser, mais ils peuvent aussi faire des erreurs ou inventer des informations. Leur atout majeur est leur capacité à s'adapter à presque tous les sujets, mais ils dépendent entièrement des données sur lesquelles ils ont été formés.`
      },
      assert: [
        noTranslation(),
        meaningPreserved(),
        // We want a shorter text (input.length == 879)
        {
          type: 'javascript',
          value: "output.length <= 600" 
        }
      ]
    }
  ]
};
