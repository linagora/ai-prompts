const { buildMessages } = require('../../utils/prompts');
const { SYSTEM_PROMPT_V3 } = require('../system_prompts');
const { classificationFormatValidV2, labelAccuracyScoreV2 } = require('../../utils/assertions');
const { emailTestCases, formatEmailForClassification } = require('../../datasets/email-classification-testcases');

const task = 'Classify the email to determine if it requires action and assign relevant labels.';

module.exports = {
  id: 'classify-email',
  description: 'Classify email for action requirement and assign relevant labels',
  version: '1.0.0',

  messages: buildMessages({ 
    task, 
    system_instruction: SYSTEM_PROMPT_V3 
  }),
  
  tests: emailTestCases.map(testCase => ({
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
