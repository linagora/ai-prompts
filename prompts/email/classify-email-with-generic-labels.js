const { buildMessages } = require('../../utils/prompts');
const { EMAIL_SYSTEM_INSTRUCTIONS_FOR_GENERIC_LABELS_V3} = require('../system_prompts');
const { classificationFormatValidForGenericLabels, labelAccuracyScoreForGenericLabels } = require('../../utils/assertions');
const { emailTestCasesExtended } = require('../../datasets/large-email-dataset');
const { emailTestCases } = require('../../datasets/small-email-dataset');
const {emailExpectedResultsLargeDataset,emailExpectedResultsSmallDataset} = require('../../datasets/generic-label-expected-output');
const { formatEmailForClassification, EMAIL_LABELS_WITH_DETAILED_ACTION_DESCRIPTIONS } = require('../../datasets/email-classification-testcases');

const task = 'Classify the email to determine if it requires action and assign relevant labels.';

const selectedDataset = (process.env.EMAIL_DATASET || process.env.npm_config_dataset || 'large').toLowerCase();
const isSmallDataset = selectedDataset === 'small';

if (selectedDataset !== 'large' && selectedDataset !== 'small') {
  throw new Error(`Invalid EMAIL_DATASET value: ${selectedDataset}. Use "large" or "small".`);
}

const selectedTestCases = isSmallDataset ? emailTestCases : emailTestCasesExtended;
const selectedExpectedResults = isSmallDataset
  ? emailExpectedResultsSmallDataset
  : emailExpectedResultsLargeDataset;

const expectedLabelsById = new Map(
  selectedExpectedResults.map(expectedResult => [
    expectedResult.id,
    expectedResult.expectedOutput.labels
  ])
);

module.exports = {
  id: 'classify-email-generic',
  description: 'Classify email for action requirement and assign relevant labels',
  version: '1.0.0',

  messages: buildMessages({ 
    task, 
    system_instruction: EMAIL_SYSTEM_INSTRUCTIONS_FOR_GENERIC_LABELS_V3
  }),

  tests: selectedTestCases.map(testCase => {
    const expectedLabels = expectedLabelsById.get(testCase.id) ?? testCase.expectedOutput?.labels;

    if (!expectedLabels) {
      throw new Error(`Missing expected labels for test case id: ${testCase.id}`);
    }

    return {
      description: testCase.description,
      vars: {
        input: formatEmailForClassification(testCase.input, EMAIL_LABELS_WITH_DETAILED_ACTION_DESCRIPTIONS)
      },
      assert: [
        classificationFormatValidForGenericLabels(),
        labelAccuracyScoreForGenericLabels(expectedLabels)
      ]
    };
  })
};
