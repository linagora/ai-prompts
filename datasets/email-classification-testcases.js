const EMAIL_LABELS = [
  { id: 'urgent', description: 'Requires immediate attention or has a deadline' },
  { id: 'followup', description: 'Requires a response or later action' },
  { id: 'meeting', description: 'Related to scheduling or meetings' },
  { id: 'review', description: 'Requires document or content review' },
  { id: 'decision', description: 'Requires approval or decision-making' },
  { id: 'informational', description: 'FYI or status update only' },
  { id: 'spam', description: 'Promotional or irrelevant content' }
];

const availableLabels = EMAIL_LABELS.map(l => `- '${l.id}' : ${l.description}`).join('\n');

const emailTestCases = [
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
    
    expectedOutput: {
      action: 'YES',
      labels: ['review', 'followup', 'urgent']
    }
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
      labels: ['informational']
    }
  },
  {
    id: 'urgent-meeting',
    description: 'Email requiring urgent action - meeting request',
    
    input: {
      username: 'Robert Chen',
      email: 'robert.chen@company.com',
      from: 'director@company.com',
      to: 'robert.chen@company.com',
      subject: 'URGENT: Client Meeting Tomorrow at 2 PM',
      body: `Robert,

        We have an urgent client meeting scheduled for tomorrow at 2 PM to discuss contract renewals. Your presence is critical as you lead the technical implementation.

        Please confirm your attendance immediately and prepare a summary of current project status.

        This is time-sensitive.

        Best,
        Director`
    },
    
    expectedOutput: {
      action: 'YES',
      labels: ['urgent', 'meeting', 'followup']
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

