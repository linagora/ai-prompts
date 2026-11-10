const { buildMessages } = require('../../utils/prompts');
const { SCRIBE_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { noTranslation, noExtraInfo } = require('../../utils/assertions');

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
        {
          type: 'llm-rubric',
          value: 'The summary keeps the main ideas of the text: what an LLM is, how it produces its answers, and its uses and limits. Leaving out examples, analogies and details is expected.'
        },
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
      description: 'Summarize - long meeting report',
      vars: {
        input: `Compte rendu de la réunion du projet de migration de la messagerie, 18 février

Présents : Claire (communication), Karim (tests), Sophie (infrastructure), Marc (chef de projet).

1. Avancement
Sophie a terminé la configuration des nouveaux serveurs la semaine dernière. Les sauvegardes quotidiennes fonctionnent et la reprise après incident a été testée avec succès jeudi. Karim a migré les 40 boîtes du service pilote : les mails et les contacts sont bien passés, mais la synchronisation des agendas partagés échoue encore pour une dizaine d'utilisateurs.

2. Date de la migration
Le correctif de l'éditeur pour les agendas partagés n'arrivera que le 10 mars : l'équipe décide de reporter la migration générale du 3 mars au 17 mars. Marc préviendra la direction cette semaine. Le budget n'est pas affecté, car le contrat de l'ancien serveur peut être prolongé d'un mois sans frais.

3. Communication
Claire enverra un mail à tous les utilisateurs le 10 mars pour annoncer la nouvelle date, avec un guide d'une page sur les changements visibles (adresse du webmail, réglages du téléphone). Une permanence sera tenue à la cafétéria les 17 et 18 mars pour aider ceux qui en ont besoin. L'idée d'une courte vidéo a été écartée faute de temps.

4. Divers
La prochaine réunion aura lieu le 4 mars à 10 h, en salle Everest.

Merci à chaque responsable de service de me confirmer avant le 25 février la liste des personnes absentes la semaine du 17 mars, pour que leur migration soit planifiée à leur retour.`
      },
      assert: [
        noTranslation(),
        {
          type: 'llm-rubric',
          value: 'The summary says that the migration is postponed to March 17, and keeps the request about the people absent that week, with its February 25 deadline, in any wording. It may leave out the other details.'
        },
        // At most 40% of the input (input.length == 1501)
        {
          type: 'javascript',
          value: "output.length <= 600"
        }
      ]
    },
    {
      description: 'Summarize - a list of redundant bullets',
      vars: {
        input: `# Nouveautés

- La recherche est beaucoup plus rapide qu'avant
- Les résultats de recherche s'affichent désormais en moins d'une seconde
- Fini l'attente : trouver un fichier est maintenant quasi instantané`
      },
      assert: [
        noTranslation(),
        {
          type: 'llm-rubric',
          value: 'The three items of the list say the same thing. The summary says that the search is now much faster; giving the "under a second" figure in the same sentence is fine. It fails only if it goes through the items one by one, restating the idea three times.'
        },
        // One paragraph, at most 60% of the bullets (input.length == 206)
        {
          type: 'javascript',
          value: "output.trim().split(/\\n+/).filter(line => line.trim()).length === 1 && output.length <= 123"
        }
      ]
    }
  ]
};
