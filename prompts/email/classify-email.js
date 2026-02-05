const { buildMessages } = require('../../utils/prompts');
const { EMAIL_SYSTEM_INSTRUCTIONS } = require('../system_prompts');
const { classificationFormatValid, actionRequirementCorrect, labelsMatchExpected } = require('../../utils/assertions');
const { emailTestCases, formatEmailForClassification } = require('../../datasets/email-classification-testcases');

const task = 'Classify the email to determine if it requires action and assign relevant labels.';

module.exports = {
  id: 'classify-email',
  description: 'Classify email for action requirement and assign relevant labels',
  version: '1.0.0',

  messages: buildMessages({ 
    task, 
    system_instruction: EMAIL_SYSTEM_INSTRUCTIONS 
  }),
  
  tests: emailTestCases.map(testCase => ({
    description: testCase.description,
    vars: {
      input: formatEmailForClassification(testCase.input)
    },
    assert: [
      classificationFormatValid(),
      actionRequirementCorrect(testCase.expectedOutput.action),
      labelsMatchExpected(testCase.expectedOutput.labels)
    ]
  }))
};
