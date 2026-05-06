const EMAIL_LABELS_WITHOUT_NEEDS_ACTION_LABEL = [
  { id: 'important', description: 'This includes an important matter and should be treated with care' },
  { id: 'meeting', description: 'This includes a meeting invitation' },
  { id: 'AI', description: 'The topic is about Artificial Intelligence (AI)' },
  { id: 'newsletter', description: 'this is a newsletter' }
];

const EMAIL_LABELS_FOR_GENERIC_LABELS = [
  ...EMAIL_LABELS_WITHOUT_NEEDS_ACTION_LABEL,
  { id: 'needs-action', description: 'Explicit action required' }
];

const EMAIL_LABELS_WITH_DETAILED_ACTION_DESCRIPTIONS = [
  ...EMAIL_LABELS_WITHOUT_NEEDS_ACTION_LABEL,
  { 
    id: 'needs-action', 
    description: 'Apply ONLY if the email contains a clear and direct request requiring a specific action from the recipient (e.g. reply, provide information, approve, complete a task, or explicitly respond). The request must be addressed to the recipient and create a clear obligation to act. Do NOT apply to newsletters, marketing emails, automated messages (no-reply, notifications, alerts), meeting invitations without required response, or informational content. Do NOT apply if the action is optional, implicit, or unclear. Most emails do NOT require action.' 
  }
];


const availableLabels = (labels) => labels.map(l => `- '${l.id}' : ${l.description}`).join('\n');

function formatEmailForClassification(emailData, labels) {
  return `Username (of the person receiving this mail) is ${emailData.username}. His/her mail address is ${emailData.email}.
    Below is the content of the email:

    From: ${emailData.from}
    To: ${emailData.to}
    Subject: ${emailData.subject}

    Body:
    ${emailData.body}

    ## AVAILABLE LABELS
    ${availableLabels(labels)}`;
}

module.exports = {
  availableLabels,
  formatEmailForClassification,
  EMAIL_LABELS_FOR_GENERIC_LABELS,
  EMAIL_LABELS_WITH_DETAILED_ACTION_DESCRIPTIONS,
  EMAIL_LABELS_WITHOUT_NEEDS_ACTION_LABEL
};