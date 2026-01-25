const { addDirectives } = require('../utils/directives');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

module.exports = {
  id: 'translate-english',
  description: 'Translate text to English',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'translate the text to English.',
        directives: ['noExtra']
      })
    },
    {
      role: 'user',
      content: '{{input}}'
    }
  ],

  tests: [
    {
      description: 'Translate to English - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('English')
      ]
    }
  ]
};
