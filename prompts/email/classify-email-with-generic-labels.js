const { buildMessages } = require('../../utils/prompts');
const { EMAIL_SYSTEM_INSTRUCTIONS_FOR_GENERIC_LABELS_V1} = require('../system_prompts');
const { classificationFormatValidForGenericLabels, labelAccuracyScoreForGenericLabels } = require('../../utils/assertions');
const { emailTestCasesExtended } = require('../../datasets/large-email-dataset');
const { formatEmailForClassification } = require('../../datasets/email-classification-testcases');

const task = 'Classify the email to determine if it requires action and assign relevant labels.';

module.exports = {
  id: 'classify-email',
  description: 'Classify email for action requirement and assign relevant labels',
  version: '1.0.0',

  messages: buildMessages({ 
    task, 
    system_instruction: EMAIL_SYSTEM_INSTRUCTIONS
  }),
  
  tests: emailTestCasesExtended.map(testCase => ({
    description: testCase.description,
    vars: {
      input: formatEmailForClassification(testCase.input)
    },
    assert: [
      classificationFormatValidV2(),
      labelAccuracyScoreV2(testCase.expectedOutput.labels)
    ]
  }))
};
