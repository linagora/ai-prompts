const EMAIL_LABELS = [
  { id: 'urgent', description: 'This email has an urgent message' },
  { id: 'important', description: 'This include an important matter and should be treated with care' },
  { id: 'meeting', description: 'This includes a meeting invitation' },
  { id: 'AI', description: 'The topic is about to Artificial Intelligence (AI)' },
  { id: 'informational', description: 'FYI only' },

  //this label aim to test performance when detailed description for needs action is provided inside the label description
  // { 
  //   id: 'action_required', 
  //   description: 'Apply ONLY if the email contains a clear and direct request requiring a specific action from the recipient (e.g. reply, provide information, approve, complete a task, or explicitly respond). The request must be addressed to the recipient and create a clear obligation to act. Do NOT apply to newsletters, marketing emails, automated messages (no-reply, notifications, alerts), meeting invitations without required response, or informational content. Do NOT apply if the action is optional, implicit, or unclear. Most emails do NOT require action.' 
  // }

  { id: 'action_required', description: 'Explicit action required' }
];

const availableLabels = EMAIL_LABELS.map(l => `- '${l.id}' : ${l.description}`).join('\n');

function formatEmailForClassification(emailData) {
  return `Username (of the person receiving this mail) is ${emailData.username}. His/her mail address is ${emailData.email}.
    Below is the content of the email:

    From: ${emailData.from}
    To: ${emailData.to}
    Subject: ${emailData.subject}

    Body:
    ${emailData.body}

    ## AVAILABLE LABELS
    ${availableLabels}`;
}

module.exports = {
  availableLabels,
  formatEmailForClassification,
  EMAIL_LABELS
};

