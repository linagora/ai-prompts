const { buildMessages } = require('../utils/prompts');
const { noTranslation, noExtraInfo } = require('../utils/assertions');

const task = 'Convert the following text into structured bulleted lists, clearly separating distinct use cases.';

module.exports = {
  id: 'transform-to-bullets',
  description: 'Transform text into a bullet list',
  version: '1.0.1',
  
  messages: buildMessages({ task }),

  tests: [
    {
      description: 'Transform to bullets - French input',
      vars: {
        input: "Pour le projet, nous devons d'abord analyser les besoins, puis concevoir la solution, ensuite développer le prototype, et finalement tester le résultat."
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        {
          type: 'llm-rubric',
          value: 'The output is formatted with bullet points or numbered list. The content is organized into clear, distinct items.'
        },
        {
          type: 'javascript',
          value: "(output.match(/-/g) || []).length = 4"
        }
      ]
    },
    {
      description: 'Transform to bullets - French input with sub lists',
      vars: {
        input: `Pour les utilisateurs disposant d'un seul compte lié à leur numéro de téléphone, rien ne change : l'utilisateur saisit son numéro de téléphone et son mot de passe, les identifiants sont validés, puis l'utilisateur est redirigé vers son compte.

Pour les utilisateurs ayant plusieurs comptes liés au même numéro de téléphone, l'utilisateur saisit son numéro de téléphone et son mot de passe, un SMS de confirmation est envoyé pour vérifier son identité, une liste de tous les comptes associés à ce numéro s'affiche, l'utilisateur sélectionne le compte qu'il souhaite utiliser, il resaisit son mot de passe pour confirmer, les identifiants sont validés, et enfin l'utilisateur est redirigé vers le compte sélectionné`
      },
      assert: [
        noTranslation(),
        noExtraInfo({ task }),
        {
          type: 'llm-rubric',
          value: 'The output is formatted with bullet points or numbered list. The content is organized into clear, distinct items.'
        },
        // If there are two '-', it means there are two bullets which means it added bullets only to the two paragraph which is not what we expect.
        // By checking if there are at least 10 '-', we ensure that the two sub lists have bullets.
        // We do not care if the two paragraph have bullets.
        {
          type: 'javascript',
          value: "(output.match(/-/g) || []).length >= 10"
        }
      ]
    }
  ]
};
