const { addDirectives } = require('../utils/directives');
const { noExtraInfo, translationAccurate } = require('../utils/assertions');

module.exports = {
  id: 'translate-russian',
  description: 'Translate text to Russian',
  version: '1.0.0',

  messages: [
    {
      role: 'system',
      content: addDirectives({
        task: 'translate the text to Russian.',
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
      description: 'Translate to Russian - French input',
      vars: {
        input: "Bonjour, comment allez-vous? J'espère que vous passez une excellente journée."
      },
      assert: [
        noExtraInfo(),
        translationAccurate('Russian')
      ]
    }
  ]
};
