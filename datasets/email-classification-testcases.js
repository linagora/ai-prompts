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

const emailTestCases = [
  {
    id: '01',
    description: 'Anthropic Claude.ai magic link',
    input: {
      username: 'Alice',
      email: 'john@example.com',
      from: 'no-reply-1HwqilCCQ9WelWV3HgwFTw@mail.anthropic.com',
      to: 'accounts+claude@sonadresse.com',
      subject: 'Lien sécurisé pour vous connecter à Claude.ai',
      body: `Connectez-vous à Claude.ai avec le lien sécurisé ci-dessous. Si vous n'avez pas demandé cet e-mail, vous pouvez l'ignorer en toute sécurité.`
    },
    expectedOutput: { labels: [] }
  },
  {
    id: '02',
    description: 'Atlassian Cloud migration maturity test',
    input: {
      username: 'John',
      email: 'john@example.com',
      from: 'communication@spectrumgroupe.fr',
      to: 'john@example.com',
      subject: 'John Testez votre maturité cloud en 4 minutes!',
      body: `Bonjour John, Migrer vers le Cloud Atlassian ne se résume plus à un simple projet technique. Accédez à une vision claire et personnalisée de votre trajectoire Cloud via notre simulateur intelligent.`
    },
    expectedOutput: { labels: [] }
  },
  {
    id: '03',
    description: 'Open Source Experience launch webinar invitation',
    input: {
      username: 'John',
      email: 'john@example.com',
      from: 'contact@opensource-experience.com',
      to: 'john@example.com',
      subject: 'Rendez-vous ce jeudi pour notre webinar de lancement',
      body: `30 minutes d'efficacité pour tout savoir sur l'édition 2026 d'Open Source Experience. Rendez-vous le 09 avril de 9h30 à 10h. Je m'inscris.`
    },
    expectedOutput: { labels: [] }
  },
  {
    id: '04',
    description: 'New Android build for Visio Mobile',
    input: {
      username: 'john',
      email: 'john@example.com',
      from: 'firebase-noreply@google.com',
      to: 'john@example.com',
      subject: 'Visio Mobile 0.9.0 (88) for Android is ready to test',
      body: `v0.9.0 - Smart subscriptions, layout engine, chat encryption, feature flags. Download the latest build for testing.`
    },
    expectedOutput: { labels: [] }
  },
  {
    id: '05',
    description: 'n8n security updates opt-in request',
    input: {
      username: 'John',
      email: 'john@example.com',
      from: 'security@info.n8n.io',
      to: 'john@example.com',
      subject: "You haven't been receiving security advisories",
      body: `Hi'John, As a self-hosted n8n user, you haven't been receiving security advisories due to a technical issue. If you'd like to receive them going forward, you can opt in below.`
    },
    expectedOutput: { labels: ['action_required'] }
  },
  {
    id: 'project-review',
    description: 'Email requiring action - project review needed',
    
    input: {
      username: 'John Smith',
      email: 'john.smith@company.com',
      from: 'sarah.johnson@company.com',
      to: 'john.smith@company.com',
      subject: 'Q1 Project Report - Your Review Needed',
      body: `Hi John,

        I've completed the Q1 project report and need your review before we submit it to management. The document covers all deliverables, timelines, and budget allocation for the quarter.

        Can you please review it by end of day Friday and provide your feedback? Let me know if you have any questions.

        Thanks,
        Sarah`
    },
    
    expectedOutput: { labels: ['action_required', 'important'] }
  },
  {
    id: 'newsletter',
    description: 'Email not requiring action - newsletter/informational',
    
    input: {
      username: 'Jane Doe',
      email: 'jane.doe@company.com',
      from: 'hr@company.com',
      to: 'all-staff@company.com',
      subject: 'Company Newsletter - January 2026',
      body: `Dear Colleagues,

        We're excited to share this month's company newsletter with updates on our latest initiatives and achievements.

        This month we've launched three new products, expanded our team by 15 people, and reached record revenue targets. Thank you all for your hard work!

        For more details, please visit our internal portal.

        Best regards,
        HR Team`
    },
    
    expectedOutput: {
      action: 'NO',
      labels: []
    }
  },
    {
    id: 'bug-report',
    description: 'Email requiring action - bug report with follow-up needed',
    
    input: {
      username: 'Alice Williams',
      email: 'alice.williams@company.com',
      from: 'support@company.com',
      to: 'alice.williams@company.com',
      subject: 'Critical Bug Report - Database Connection Issue',
      body: `Hi Alice,

        We've identified a critical bug in the production environment affecting database connections. The system is currently down for 500+ users.

        We need you to patch this as soon as possible. Can you deploy the fix by 10 AM tomorrow? Please confirm receipt and estimated time to fix.

        Regards,
        Support Team`
    },
    
    expectedOutput: {
      action: 'YES',
      labels: ['urgent', 'followup']
    }
  },
  {
    id: 'status-update',
    description: 'Email not requiring action - status update only',
    
    input: {
      username: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      from: 'project-manager@company.com',
      to: 'team@company.com',
      subject: 'Weekly Status Update - Week 5',
      body: `Team,

        Here's this week's status update:

          Backend API completed
          Database migration finished
          Frontend development in progress
          Testing phase scheduled for next week

        All deliverables are on track. No blockers at this time.

        Thanks for the great work!`
    },
    
    expectedOutput: {
      action: 'NO',
      labels: ['informational']
    }
  },
  {
    id: 'approval-needed',
    description: 'Email requiring action - approval needed',
    
    input: {
      username: 'Emma Davis',
      email: 'emma.davis@company.com',
      from: 'finance@company.com',
      to: 'emma.davis@company.com',
      subject: 'Budget Approval Required - Marketing Campaign Q2 2026',
      body: `Hi Emma,

        We need your approval for the Q2 2026 marketing campaign budget of $150,000. The breakdown is attached.

        Please review and approve by Friday so we can proceed with vendor contracts. Contact me if you have any questions about the allocation.

        Thanks,
        Finance Team`
    },
    
    expectedOutput: {
      action: 'YES',
      labels: ['decision', 'review', 'urgent']
    }
  }
];

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
  emailTestCases,
  availableLabels,
  formatEmailForClassification,
  EMAIL_LABELS
};

