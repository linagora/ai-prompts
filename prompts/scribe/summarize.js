const { buildMessages } = require('../../utils/prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { noTranslation, noExtraInfo, meaningPreserved } = require('../../utils/assertions');

const task = `Summarize the text from the user.

Your goal:
- Produce a clear and accurate summary of the provided content
- Keep the original meaning and key information only
- Remove redundancy, examples, anecdotes, and minor details

Output:
- A single coherent paragraph unless otherwise specified, even for a list or several paragraphs
- Short: one to three sentences that name the main ideas in a few words each, and leave out their details
- Keep any request made to the reader, with its deadline
- Always much shorter than the text, even when the text is already short
- Do not add any extra information or interpret anything beyond the explicit task`;

module.exports = {
  id: 'summarize',
  description: 'Summarize a text',
  version: '1.1.0',

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
    },
    {
      description: 'Summarize - three short paragraphs',
      vars: {
        input: `Le séminaire de l'équipe aura lieu les 12 et 13 novembre à Annecy. Nous partirons en train le mercredi matin et nous serons de retour le jeudi soir.

Le programme prévoit une matinée de travail sur la feuille de route, puis une randonnée autour du lac l'après-midi. Le dîner est réservé dans un restaurant du centre.

Merci de m'indiquer vos contraintes alimentaires avant vendredi, et de prévoir des chaussures de marche.`
      },
      assert: [
        noTranslation(),
        {
          type: 'llm-rubric',
          value: 'The summary gives the dates and the place of the seminar, and asks for the dietary constraints before Friday. It may leave out the other details.'
        },
        // At most 60% of the input (input.length == 422)
        {
          type: 'javascript',
          value: "output.length <= 253"
        }
      ]
    },
    {
      description: 'Summarize - the bullets of a slide',
      vars: {
        input: `# Nouveautés

- Le partage de fichiers est entièrement refait, avec des liens protégés par mot de passe
- La recherche affiche les résultats en moins d'une seconde
- Un assistant d'écriture corrige, résume et traduit le texte sélectionné`
      },
      assert: [
        noTranslation(),
        // One paragraph, shorter than the bullets
        {
          type: 'javascript',
          value: "output.trim().split(/\\n+/).filter(line => line.trim()).length === 1 && output.length <= 180"
        }
      ]
    }
  ]
};
