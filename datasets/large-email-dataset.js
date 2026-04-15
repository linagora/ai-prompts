// This dataset contains 100 email for test classification task with 10 labels (urgent, review, decision, meeting, followup, informational, spam, important, AI, no_label_adequate) 
const emailTestCasesExtended = [
  {
    id: '001',
    description: 'Critical production outage affecting client',
    input: {
      username: 'Laura King',
      email: 'laura.king@company.com',
      from: 'ops@company.com',
      to: 'laura.king@company.com',
      subject: 'URGENT: Production Outage - Client Impact',
      body: 'Hi Laura,\n\nWe are currently experiencing a full production outage that is heavily impacting our clients. We have an emergency bridge scheduled for 3 PM today to coordinate the response. A patch is required immediately to restore service.\n\nPlease join the bridge as soon as possible.\n\nBest regards,\nOperations Team'
    }
  },
  {
    id: '002',
    description: 'Invoice pending payment',
    input: {
      username: 'David Ross',
      email: 'david.ross@company.com',
      from: 'accounts@company.com',
      to: 'david.ross@company.com',
      subject: 'Invoice #4582 Pending',
      body: 'Hello David,\n\nI hope you are having a good week. This is a reminder to process the payment for the attached invoice (#4582) before the due date this Friday. We need this cleared to avoid any service interruptions.\n\nThanks,\nAccounts Payable'
    }
  },
  {
    id: '003',
    description: 'Meeting reminder only',
    input: {
      username: 'Nina Patel',
      email: 'nina.patel@company.com',
      from: 'assistant@company.com',
      to: 'nina.patel@company.com',
      subject: 'Reminder: Strategy Sync Tomorrow',
      body: 'Hi Nina,\n\nJust a quick reminder about our strategy sync meeting scheduled for tomorrow at 10 AM. We will be reviewing the Q3 goals. No specific preparation is needed, but your presence is appreciated.\n\nSee you then,\nOffice Assistant'
    }
  },
  {
    id: '004',
    description: 'New Android build for Visio Mobile',
    input: {
      username: 'john',
      email: 'john@example.com',
      from: 'firebase-noreply@google.com',
      to: 'john@example.com',
      subject: 'Visio Mobile 0.9.0 (88) for Android is ready to test',
      body: `v0.9.0 - Smart subscriptions, layout engine, chat encryption, feature flags. Download the latest build for testing.`
    }
  },
  {
    id: '005',
    description: 'Security vulnerability detected',
    input: {
      username: 'Olivia White',
      email: 'olivia.white@company.com',
      from: 'security@company.com',
      to: 'olivia.white@company.com',
      subject: 'Critical Security Vulnerability Identified',
      body: 'Dear Olivia,\n\nOur automated scanners have identified a critical vulnerability in the authentication module. This poses a significant risk to user data. An immediate fix is required to secure the environment.\n\nPlease acknowledge receipt of this email and provide an ETA for the patch.\n\nRegards,\nSecurity Team'
    }
  },
  {
    id: '006',
    description: 'Spam crypto promotion',
    input: {
      username: 'Ryan Scott',
      email: 'ryan.scott@company.com',
      from: 'profit@fastcrypto.io',
      to: 'ryan.scott@company.com',
      subject: 'Double Your Income Fast!',
      body: 'Hey Ryan,\n\nDo you want to double your income? Invest in our new AI-driven crypto platform today and earn guaranteed profits. This is a limited time offer!\n\nClick here to start,\nThe FastCrypto Team'
    }
  },
  {
    id: '007',
    description: 'Client requesting urgent data export',
    input: {
      username: 'Henry Collins',
      email: 'henry.collins@company.com',
      from: 'support@company.com',
      to: 'henry.collins@company.com',
      subject: 'Urgent Data Export Required',
      body: 'Hi Henry,\n\nOne of our key clients urgently needs a full data export before their compliance audit tomorrow morning. We need to get this to them by the end of today to remain within our SLA.\n\nCan you please prioritize this request?\n\nThanks,\nSupport Team'
    }
  },
  {
    id: '008',
    description: 'Critical authentication bug',
    input: {
      username: 'Victor Morales',
      email: 'victor.morales@company.com',
      from: 'qa@company.com',
      to: 'victor.morales@company.com',
      subject: 'Critical Authentication Bug',
      body: 'Hello Victor,\n\nDuring load testing, we discovered that the authentication module is failing under high traffic. This is a blocker for the upcoming release. We need an immediate fix to continue with the deployment schedule.\n\nBest,\nQA Team'
    }
  },
  {
    id: '009',
    description: 'Strategy decision required',
    input: {
      username: 'Elena Woods',
      email: 'elena.woods@company.com',
      from: 'strategy@company.com',
      to: 'elena.woods@company.com',
      subject: 'Strategic Direction Decision Required',
      body: 'Dear Elena,\n\nWe are reaching a deadline for the board presentation. We need your final decision on the international expansion strategy by tomorrow EOD so we can finalize the slides.\n\nThank you,\nStrategy Group'
    }
  },
  {
    id: '010',
    description: 'AI integration strategy discussion',
    input: {
      username: 'Sarah Chen',
      email: 'sarah.chen@company.com',
      from: 'tech-leads@company.com',
      to: 'sarah.chen@company.com',
      subject: 'Drafting our AI Implementation Roadmap',
      body: `Hi Sarah,

I hope you're having a productive week. Following up on our last sync, I’ve started drafting the roadmap for integrating Large Language Models into our core product. 

This is a major shift for us, and I want to ensure our strategy is sound before the quarterly review. Could you take a look at the shared document and add your feedback by Thursday?

Best regards,
Mark Thompson
Technical Lead`
    }
  },
  {
    id: '011',
    description: 'Urgent security patch for AI server',
    input: {
      username: 'Kevin Park',
      email: 'kevin.park@company.com',
      from: 'security-alerts@company.com',
      to: 'kevin.park@company.com',
      subject: 'CRITICAL: Vulnerability in AI Training Cluster',
      body: `Hello Kevin,

This is an automated alert followed by a manual override. We have detected an active exploit path targeting the AI training cluster's gateway. 

You must apply the security patch and rotate the access keys immediately to prevent data leakage. Please confirm once the services have been restarted.

Regards,
Security Operations Center`
    }
  },
  {
    id: '012',
    description: 'General informational company update',
    input: {
      username: 'Julia Ortiz',
      email: 'julia.ortiz@company.com',
      from: 'communications@company.com',
      to: 'staff-all@company.com',
      subject: 'Monthly Internal Newsletter - April 2026',
      body: `Hi Team,

Check out this month's newsletter for updates on our new office layout, the charity run results, and a spotlight on the engineering team's recent wins. 

There's no action needed from your side, just wanted to keep everyone in the loop on what’s happening across the departments.

Enjoy the read!
Internal Comms Team`
    }
  },
  {
    id: '013',
    description: 'Meeting invite for AI ethics committee',
    input: {
      username: 'Dr. Aris Varma',
      email: 'aris.varma@company.com',
      from: 'legal-compliance@company.com',
      to: 'aris.varma@company.com',
      subject: 'Invitation: Monthly AI Ethics & Compliance Review',
      body: `Dear Dr. Varma,

You are invited to the monthly review meeting for the AI Ethics Committee. We will be discussing the new regulatory requirements for generative models.

The calendar invite is attached for this Friday at 2:00 PM. Please let us know if you can attend.

Sincerely,
Compliance Office`
    }
  },
  {
    id: '014',
    description: 'Urgent server downtime notification',
    input: {
      username: 'Leo Vance',
      email: 'leo.vance@company.com',
      from: 'devops@company.com',
      to: 'leo.vance@company.com',
      subject: 'URGENT: Main Database Unreachable',
      body: `Hi Leo,

The main production database has just gone offline. Our monitoring systems are showing 100% packet loss. 

We need you to log in to the console and check the instance health immediately. This is a high-priority incident affecting all customers.

Best,
The DevOps Team`
    }
  },
  {
    id: '015',
    description: 'Action required for budget approval',
    input: {
      username: 'Monica Geller',
      email: 'monica.geller@company.com',
      from: 'finance-noreply@company.com',
      to: 'monica.geller@company.com',
      subject: 'Action Required: Q2 Departmental Budget Approval',
      body: `Hello Monica,

The Q2 budget for the Marketing department is now ready for your final sign-off. Please log into the Finance Portal to review the line items and click 'Approve' by end of day Tuesday.

Delays in approval will result in a freeze on new vendor contracts.

Regards,
Finance Department`
    }
  },
  {
    id: '016',
    description: 'Casual meeting request',
    input: {
      username: 'Sam Wilson',
      email: 'sam.wilson@company.com',
      from: 'bucky.barnes@company.com',
      to: 'sam.wilson@company.com',
      subject: 'Quick coffee sync?',
      body: `Hey Sam,

Do you have 15 minutes tomorrow afternoon to grab a coffee and sync on the project hand-off? I want to make sure I haven't missed any details before you head out on leave.

Let me know what time works best for you.

Cheers,
Bucky`
    }
  },
  {
    id: '017',
    description: 'Informational AI industry news',
    input: {
      username: 'Tom Holland',
      email: 'tom.holland@company.com',
      from: 'news-digest@ai-weekly.com',
      to: 'tom.holland@company.com',
      subject: 'AI Weekly: New Breakthroughs in Robotics',
      body: `Hi Tom,

In this week's AI digest, we cover the latest advancements in neural networks and the impact of the new robotics legislation. 

This is just a FYI for your personal development. No response to this newsletter is required.

Best,
AI Weekly Editors`
    }
  },
  {
    id: '018',
    description: 'Urgent response needed for client contract',
    input: {
      username: 'Diana Prince',
      email: 'diana.prince@company.com',
      from: 'legal@company.com',
      to: 'diana.prince@company.com',
      subject: 'URGENT: Missing Signature on Client Master Agreement',
      body: `Dear Diana,

We have noticed that the Master Service Agreement for the Wayne account is still missing your signature. The client is refusing to start the project until this is finalized.

Please sign the attached DocuSign link within the next hour.

Thank you,
Legal Team`
    }
  },
  {
    id: '019',
    description: 'Meeting invitation for AI product launch',
    input: {
      username: 'Bruce Banner',
      email: 'bruce.banner@company.com',
      from: 'product-team@company.com',
      to: 'bruce.banner@company.com',
      subject: 'Launch Planning: AI Assistant Feature',
      body: `Hi Bruce,

We are putting together the launch plan for our new AI Assistant. Your technical expertise is needed for the final verification session.

The meeting is set for Wednesday at 11:00 AM in Conference Room B. Please accept the calendar invite if you can join.

Best,
Natasha`
    }
  },
  {
    id: '020',
    description: 'Urgent request to adjust AI model parameters',
    input: {
      username: 'Robert Ford',
      email: 'robert.ford@company.com',
      from: 'quality-control@company.com',
      to: 'robert.ford@company.com',
      subject: 'URGENT: Bias Detected in AI Recommendation Engine',
      body: `Hi Robert,

We’ve just received a report showing significant bias in the latest AI model deployment. This is a high-priority issue that could lead to reputational damage if not addressed immediately.

Please pause the current rollout and adjust the filtering parameters. We need a status update on this within the next two hours.

Regards,
Theresa Cullen
Head of QA`
    }
  },
  {
    id: '021',
    description: 'Informational email regarding office maintenance',
    input: {
      username: 'Sarah Connor',
      email: 'sarah.connor@company.com',
      from: 'facilities@company.com',
      to: 'all-staff@company.com',
      subject: 'Scheduled Maintenance: HVAC System',
      body: `Hello Everyone,

Please be advised that the HVAC system in the West Wing will undergo routine maintenance this Saturday from 8:00 AM to 1:00 PM. 

This is just a FYI for anyone planning to come into the office over the weekend. No action is required on your part.

Best,
Facilities Management`
    }
  },
  {
    id: '022',
    description: 'Meeting invitation for performance review',
    input: {
      username: 'Miles Dyson',
      email: 'miles.dyson@company.com',
      from: 'hr-department@company.com',
      to: 'miles.dyson@company.com',
      subject: 'Invitation: Annual Performance Review',
      body: `Dear Miles,

It is time for your annual performance review. I have scheduled a session for us to discuss your achievements over the past year and set goals for 2026.

The meeting will take place via video call next Tuesday at 10:00 AM. Please let me know if this works for you.

Sincerely,
Angela Martin
HR Manager`
    }
  },
  {
    id: '023',
    description: 'Important legal update regarding AI usage',
    input: {
      username: 'Arthur Dent',
      email: 'arthur.dent@company.com',
      from: 'legal@company.com',
      to: 'arthur.dent@company.com',
      subject: 'Important: New Policy on Generative AI Usage',
      body: `Hi Arthur,

We have updated the company’s internal policy regarding the use of Generative AI tools. Given the importance of data privacy, please review the attached document to ensure your team remains compliant.

Failure to follow these guidelines could result in significant security risks.

Best regards,
Legal Compliance Team`
    }
  },
  {
    id: '024',
    description: 'Urgent system reboot required',
    input: {
      username: 'Elliot Alderson',
      email: 'elliot.alderson@company.com',
      from: 'it-support@company.com',
      to: 'elliot.alderson@company.com',
      subject: 'URGENT: Unauthorized Access Attempt Detected',
      body: `Elliot,

Our intrusion detection system has flagged an unauthorized login attempt on your workstation. As a precaution, we need you to reboot your machine and change your network password immediately.

Please confirm once this is done so we can clear the alert.

Thanks,
IT Security Team`
    }
  },
  {
    id: '025',
    description: 'Informational AI research paper share',
    input: {
      username: 'Dana Scully',
      email: 'dana.scully@company.com',
      from: 'research@company.com',
      to: 'tech-all@company.com',
      subject: 'FYI: Interesting paper on AI in Healthcare',
      body: `Hi Team,

I came across this fascinating paper regarding AI applications in diagnostic imaging. It’s a great read for anyone interested in how our current tech might evolve in the medical sector.

No need to reply, just sharing for your information.

Cheers,
Fox Mulder`
    }
  },
  {
    id: '026',
    description: 'Action required for travel reimbursement',
    input: {
      username: 'Jack Ryan',
      email: 'jack.ryan@company.com',
      from: 'finance-ops@company.com',
      to: 'jack.ryan@company.com',
      subject: 'Action Required: Missing Receipts for London Trip',
      body: `Hello Jack,

We are processing your travel reimbursement for the London trip, but we noticed that the receipt for the hotel stay is missing.

Please upload the missing document to the portal by Friday to ensure your payment is processed in the next cycle.

Regards,
Finance Operations`
    }
  },
  {
    id: '027',
    description: 'Meeting invitation for AI brainstorm',
    input: {
      username: 'Tony Stark',
      email: 'tony.stark@company.com',
      from: 'pepper.potts@company.com',
      to: 'tony.stark@company.com',
      subject: 'Brainstorming: AI for Sustainable Energy',
      body: `Hi Tony,

I’d like to get the team together to brainstorm how we can leverage our AI infrastructure for the new sustainable energy initiative. 

I’ve put a hold on your calendar for Thursday at 4:00 PM. Hope you can make it.

Best,
Pepper`
    }
  },
  {
    id: '028',
    description: 'Urgent client cancellation',
    input: {
      username: 'Peggy Carter',
      email: 'peggy.carter@company.com',
      from: 'sales-leads@company.com',
      to: 'peggy.carter@company.com',
      subject: 'URGENT: Major Account Cancellation',
      body: `Hi Peggy,

The Strategic National account has just indicated they want to cancel their contract effective immediately. We need to jump on a call with their leadership to understand what happened.

Can you look into their recent support tickets and get back to me within the hour?

Thanks,
Howard Stark`
    }
  },
  {
    id: '029',
    description: 'Informational company holiday reminder',
    input: {
      username: 'Wanda Maximoff',
      email: 'wanda.maximoff@company.com',
      from: 'hr@company.com',
      to: 'all-staff@company.com',
      subject: 'Reminder: Upcoming Public Holiday',
      body: `Hello Team,

This is a friendly reminder that the office will be closed next Monday in observance of the public holiday. 

Enjoy the long weekend! No action required.

Best regards,
HR Team`
    }
  },

  {
    id: '030',
    description: 'Action required for quarterly AI audit',
    input: {
      username: 'Peter Parker',
      email: 'peter.parker@company.com',
      from: 'compliance-office@company.com',
      to: 'peter.parker@company.com',
      subject: 'Action Required: AI Model Transparency Report',
      body: `Hello Peter,

As part of our quarterly compliance audit, we need you to provide the documentation for the 'Web-Slinger' AI model’s decision-making logic. 

Please upload the report to the compliance folder by Friday afternoon. This is necessary to meet the new regulatory standards.

Best regards,
Gwen Stacy
Compliance Officer`
    }
  },
  {
    id: '031',
    description: 'Meeting invitation for AI resource allocation',
    input: {
      username: 'Bruce Wayne',
      email: 'bruce.wayne@company.com',
      from: 'lucius.fox@company.com',
      to: 'bruce.wayne@company.com',
      subject: 'Meeting Invite: GPU Cluster Budgeting for AI',
      body: `Hi Bruce,

I'd like to schedule a quick meeting to discuss the budget for the new GPU clusters required for our advanced AI research projects.

I've sent a calendar invite for Monday at 9:00 AM. Your input on the final allocation is needed.

Cheers,
Lucius`
    }
  },
  {
    id: '032',
    description: 'Informational email about company policy update',
    input: {
      username: 'Clark Kent',
      email: 'clark.kent@company.com',
      from: 'hr-news@company.com',
      to: 'all-staff@company.com',
      subject: 'Update: New Remote Work Guidelines',
      body: `Dear Team,

We have updated the internal portal with our revised remote work guidelines for the second half of the year. 

This is an FYI for everyone to be aware of the changes. No specific response is needed at this time.

Best,
HR Department`
    }
  },
  {
    id: '033',
    description: 'Urgent fix for production bug',
    input: {
      username: 'Jean Grey',
      email: 'jean.grey@company.com',
      from: 'support@company.com',
      to: 'jean.grey@company.com',
      subject: 'URGENT: Customer Checkout failing',
      body: `Hi Jean,

We are seeing a high volume of tickets regarding the checkout page failing for mobile users. This is directly impacting sales.

We need a hotfix deployed within the next few hours. Please let us know once you've identified the root cause.

Regards,
Scott Summers
Customer Success`
    }
  },
  {
    id: '034',
    description: 'Meeting reminder for AI ethics board',
    input: {
      username: 'Charles Xavier',
      email: 'charles.xavier@company.com',
      from: 'secretary@company.com',
      to: 'charles.xavier@company.com',
      subject: 'Reminder: AI Ethics Board Meeting Tomorrow',
      body: `Hello Professor,

This is a reminder of your meeting with the AI Ethics Board tomorrow at 2:00 PM. The agenda includes the discussion on neural link privacy.

Looking forward to seeing you there.

Best,
Hank McCoy`
    }
  },
  {
    id: '035',
    description: 'Action required for software license renewal',
    input: {
      username: 'Steve Rogers',
      email: 'steve.rogers@company.com',
      from: 'it-procurement@company.com',
      to: 'steve.rogers@company.com',
      subject: 'Action Required: Software License Renewal',
      body: `Hi Steve,

The design software licenses for your team are set to expire next week. Please confirm the number of active users so we can proceed with the renewal.

We need your response by Wednesday to avoid any downtime.

Thanks,
IT Team`
    }
  },
  {
    id: '036',
    description: 'Informational AI industry update',
    input: {
      username: 'Natasha Romanoff',
      email: 'natasha.romanoff@company.com',
      from: 'newsletter@tech-trends.com',
      to: 'natasha.romanoff@company.com',
      subject: 'AI Insights: The Rise of Autonomous Systems',
      body: `Hi Natasha,

Our latest newsletter is out, featuring a deep dive into autonomous AI systems and their impact on global logistics. 

Hope you find it interesting! No action is needed.

Best regards,
The Tech Trends Team`
    }
  },
  {
    id: '037',
    description: 'Urgent meeting for critical client escalation',
    input: {
      username: 'Tony Stark',
      email: 'tony.stark@company.com',
      from: 'pepper.potts@company.com',
      to: 'tony.stark@company.com',
      subject: 'URGENT MEETING: Client Contract Dispute',
      body: `Tony,

Our biggest client has just threatened to move their business elsewhere due to the delays. I’ve scheduled an emergency sync for 10:30 AM today.

You must be there. The survival of this partnership depends on it.

Best,
Pepper`
    }
  },
  {
    id: '038',
    description: 'Informational welcome email for new hire',
    input: {
      username: 'Wanda Maximoff',
      email: 'wanda.maximoff@company.com',
      from: 'culture@company.com',
      to: 'wanda.maximoff@company.com',
      subject: 'Welcome to the Team!',
      body: `Hi Wanda,

We are so excited to have you join the company! Feel free to check out the 'Getting Started' guide on our intranet. 

Welcome aboard, and we look forward to seeing you at the team lunch on Friday. No action is required on this email.

Best,
The Culture Committee`
    }
  },
  {
    id: '039',
    description: 'Urgent security breach in AI database',
    input: {
      username: 'Clarice Starling',
      email: 'clarice.starling@company.com',
      from: 'cyber-sec@company.com',
      to: 'clarice.starling@company.com',
      subject: 'URGENT: Data Breach Detected in AI Training Set',
      body: `Hi Clarice,

We have detected unauthorized access to the server hosting our primary AI training datasets. Sensitive client information may have been exposed. 

We need you to revoke all active API keys and initiate the lockdown protocol immediately. This is our top priority today. Please confirm once the keys are rotated.

Regards,
Security Response Team`
    }
  },
  {
    id: '040',
    description: 'Urgent AI server overheat alert',
    input: {
      username: 'Victor Stone',
      email: 'victor.stone@company.com',
      from: 'hardware-monitor@system.com',
      to: 'victor.stone@company.com',
      subject: 'URGENT: Hardware Critical Temperature - AI Node 04',
      body: `Hi Victor,

Our thermal sensors in the Data Center are reporting that AI Node 04 has exceeded 90°C. This is a critical threshold that could lead to permanent hardware damage.

You need to manually offload the current training jobs and initiate a cooling sequence immediately. Please confirm when the node is back to safe levels.

Best,
Systems Monitoring Bot`
    }
  },
  {
    id: '041',
    description: 'Action required for laptop refresh',
    input: {
      username: 'Barry Allen',
      email: 'barry.allen@company.com',
      from: 'it-inventory@company.com',
      to: 'barry.allen@company.com',
      subject: 'Action Required: Laptop Hardware Refresh Cycle',
      body: `Hello Barry,

Your current workstation has reached its 3-year limit and is now eligible for a hardware refresh. 

Please select your preferred replacement model from the attached list and submit your choice by the end of the week so we can place the order.

Thanks,
IT Procurement`
    }
  },
  {
    id: '042',
    description: 'Meeting invitation for AI model demo',
    input: {
      username: 'Arthur Curry',
      email: 'arthur.curry@company.com',
      from: 'research-team@company.com',
      to: 'arthur.curry@company.com',
      subject: 'Invitation: Deep-Sea AI Vision Model Demo',
      body: `Hi Arthur,

The research team is ready to showcase the results of our latest AI vision model trained on underwater datasets. 

We’ve set up a demo session for Thursday at 11:00 AM. We would love to have you there to see the progress.

Regards,
Mera
Lead Researcher`
    }
  },
  {
    id: '043',
    description: 'Important feedback needed on AI ethics draft',
    input: {
      username: 'J’onn J’onzz',
      email: 'jonn.jonzz@company.com',
      from: 'policy-group@company.com',
      to: 'jonn.jonzz@company.com',
      subject: 'Important: Feedback Needed on AI Ethics Charter',
      body: `Dear J’onn,

We have completed the first draft of the company’s AI Ethics Charter. Given your oversight role, your feedback is essential.

Please review the attached document and provide your comments by Wednesday morning so we can present it to the board.

Sincerely,
The Policy Committee`
    }
  },
  {
    id: '044',
    description: 'Informational maintenance completion',
    input: {
      username: 'Hal Jordan',
      email: 'hal.jordan@company.com',
      from: 'network-ops@company.com',
      to: 'all-staff@company.com',
      subject: 'Network Maintenance Successfully Completed',
      body: `Hello Team,

The scheduled network maintenance on our main servers was completed ahead of schedule this morning. All systems are now fully operational.

No further action is required. Thank you for your patience.

Best regards,
Network Operations`
    }
  },
  {
    id: '045',
    description: 'Urgent response for budget overspend',
    input: {
      username: 'Oliver Queen',
      email: 'oliver.queen@company.com',
      from: 'finance@company.com',
      to: 'oliver.queen@company.com',
      subject: 'URGENT: Budget Discrepancy Found',
      body: `Hi Oliver,

During our monthly audit, we found a significant overspend in the 'Project Arrow' budget. We need an immediate explanation for these additional expenses.

Please provide a detailed breakdown by the end of the day. This is an urgent matter that needs to be reported to leadership.

Thanks,
Felicity Smoak
Finance Lead`
    }
  },
  {
    id: '046',
    description: 'Meeting invite for AI partnership',
    input: {
      username: 'Shuri Udaku',
      email: 'shuri@company.com',
      from: 'biz-dev@external.com',
      to: 'shuri@company.com',
      subject: 'Meeting Invite: Strategic AI Collaboration',
      body: `Dear Shuri,

We are very interested in exploring a partnership regarding your AI vibranium-processing algorithms. 

Would you be available for an introductory meeting next Tuesday at 3:00 PM to discuss a potential collaboration?

Best regards,
Everett Ross`
    }
  },
  {
    id: '047',
    description: 'Action required for security awareness training',
    input: {
      username: 'Dick Grayson',
      email: 'dick.grayson@company.com',
      from: 'training@company.com',
      to: 'dick.grayson@company.com',
      subject: 'Action Required: Mandatory Cybersecurity Training',
      body: `Hello Dick,

This is a reminder that you haven't yet completed the mandatory annual cybersecurity training module. 

Please complete the course and the final quiz by Friday to ensure our compliance records are up to date.

Regards,
HR Training Team`
    }
  },
  {
    id: '048',
    description: 'Informational AI industry newsletter',
    input: {
      username: 'Billy Batson',
      email: 'billy.batson@company.com',
      from: 'daily-ai@news.com',
      to: 'billy.batson@company.com',
      subject: 'Daily AI: Understanding Large Language Models',
      body: `Hi Billy,

In today’s edition, we explore how LLMs are being used to automate code reviews. It’s a great overview for developers and tech enthusiasts alike.

This is just for your information. Have a great day!

The Daily AI Team`
    }
  },
  {
    id: '049',
    description: 'Urgent meeting for PR crisis',
    input: {
      username: 'Kara Danvers',
      email: 'kara.danvers@company.com',
      from: 'comms-director@company.com',
      to: 'kara.danvers@company.com',
      subject: 'URGENT MEETING: Media Statement on AI Leak',
      body: `Kara,

A story is about to break regarding a data leak in our AI department. I’ve scheduled an emergency meeting in 10 minutes to draft our official statement.

We need your input on the technical specifics before we go live.

Best,
Cat Grant`
    }
  },
  {
    id: '050',
    description: 'Informational team building photos',
    input: {
      username: 'Zatanna Zatara',
      email: 'zatanna.zatara@company.com',
      from: 'social-club@company.com',
      to: 'all-staff@company.com',
      subject: 'Photos from Last Night’s Event',
      body: `Hello Team,

Thank you to everyone who joined us for the magic show last night! We've uploaded all the photos to the shared drive for you to see.

Hope you had as much fun as we did! No action needed.

Best,
The Social Club`
    }
  }
];

module.exports = {
  emailTestCasesExtended,
};
