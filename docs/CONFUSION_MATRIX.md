# Confusion Matrix Documentation

## Overview

The confusion matrix script calculates per-label classification metrics for email label predictions.

## Metrics Explained

### Per-Label Metrics

For each label, the script calculates:

#### True Positive (TP)
The label is **expected** and **predicted**.
- Example: Expected `[urgent]`, Predicted `[urgent]` → TP = 1 for `urgent`

#### False Positive (FP)
The label is **not expected** but **predicted** (wrong prediction).
- Example: Expected `[]`, Predicted `[urgent]` → FP = 1 for `urgent`

#### False Negative (FN)
The label is **expected** but **not predicted** (missing label).
- Example: Expected `[urgent]`, Predicted `[]` → FN = 1 for `urgent`

#### True Negative (TN)
The label is **not expected** and **not predicted**.
- Example: Expected `[urgent]`, Predicted `[meeting]` → TN = 1 for `informational`

### Derived Metrics (Per Label)

#### Precision
Measures how many predictions for this label are correct.
```
Precision = TP / (TP + FP)
```
High precision = few false positives for this label

#### Recall
Measures how many expected instances of this label were found.
```
Recall = TP / (TP + FN)
```
High recall = few false negatives for this label

#### F1-Score
Harmonic mean of precision and recall for this label.
```
F1-Score = 2 * (Precision * Recall) / (Precision + Recall)
```

## Output Format

The script displays a table with one row per label:

```
Label          TP    FP    FN    Precision    Recall    F1-Score
------------------------------------------------------------------
urgent         2     1     0     66.7%        100.0%    80.0%
meeting        1     0     0     100.0%       100.0%    100.0%
informational  2     0     0     100.0%       100.0%    100.0%
...
```

## Usage

```bash
npm run metrics
```

## Output Files

- `build/confusion-matrix.json` - Complete metrics including:
  - Overall metrics (total TP, FP, FN, TN)
  - Per-label metrics (TP, FP, FN, TN, Precision, Recall, F1-Score)
  - Details by test case
