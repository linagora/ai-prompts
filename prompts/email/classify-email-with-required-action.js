const { buildMessages } = require('../../utils/prompts');
const { EMAIL_SYSTEM_INSTRUCTIONS_WITH_ACTION_FIELD } = require('../system_prompts');
const { classificationFormatValidWithActionRequired, actionRequirementCorrectWithActionRequired, labelAccuracyScoreWithActionRequired} = require('../../utils/assertions');
const { formatEmailForClassification, EMAIL_LABELS_WITHOUT_ACTION_REQUIRED_LABEL } = require('../../datasets/email-classification-testcases');
const { emailTestCasesExtended} = require('../../datasets/large-email-dataset');
const { emailTestCases } = require('../../datasets/small-email-dataset');
const {
  emailExpectedResultsForLargeDataset,
  emailExpectedResultsForSmallDataset
} = require('../../datasets/required-action-expected-output');

const task = 'Classify the email to determine if it requires action and assign relevant labels.';

const selectedDataset = (process.env.EMAIL_DATASET || process.env.npm_config_dataset || 'large').toLowerCase();
const isSmallDataset = selectedDataset === 'small';

if (selectedDataset !== 'large' && selectedDataset !== 'small') {
  throw new Error(`Invalid EMAIL_DATASET value: ${selectedDataset}. Use "large" or "small".`);
}

const selectedTestCases = isSmallDataset ? emailTestCases : emailTestCasesExtended;
const selectedExpectedResults = isSmallDataset
  ? emailExpectedResultsForSmallDataset
  : emailExpectedResultsForLargeDataset;

const expectedLabelsById = new Map(
  selectedExpectedResults.map(expectedResult => [
    expectedResult.id,
    expectedResult.expectedOutput
  ])
);

module.exports = {
  id: 'classify-email-required',
  description: 'Classify email for action requirement and assign relevant labels',
  version: '1.0.0',
  messages: buildMessages({ 
    task, 
    system_instruction: EMAIL_SYSTEM_INSTRUCTIONS_WITH_ACTION_FIELD 
  }),
  
  tests: selectedTestCases.map(testCase => {
    const expectedResult = expectedLabelsById.get(testCase.id);
    const resolvedAction = expectedResult?.action ;
    const resolvedLabels = expectedResult?.labels ;
    
    if (!expectedResult) {
      throw new Error(`Missing expected result for test case id: ${testCase.id}`);
    }

    return({
    description: testCase.description,
    vars: {
      input: formatEmailForClassification(testCase.input, EMAIL_LABELS_WITHOUT_ACTION_REQUIRED_LABEL)
    },
    assert: [
      classificationFormatValidWithActionRequired(),
      actionRequirementCorrectWithActionRequired(resolvedAction),
      labelAccuracyScoreWithActionRequired(resolvedLabels)
    ]
  });
  })
};
