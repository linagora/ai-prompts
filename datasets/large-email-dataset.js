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
      subject: 'Q2 Departmental Budget Approval',
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
      subject: 'Missing Receipts for London Trip',
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

Enjoy the long weekend.

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
      subject: 'AI Model Transparency Report',
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
      subject: 'Software License Renewal',
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
      subject: 'Laptop Hardware Refresh Cycle',
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
  },
  {
    id: "051",
    description: "Personal reminder about mom's birthday",
    input: {
      username: "Peter Parker",
      email: "peter.parker@company.com",
      from: "aunt.may@family.net",
      to: "peter.parker@company.com",
      tosubject: "Don't forget!",
      body: "Hey Peter,\n\nJust a quick reminder that your mother's birthday is next Saturday. I'm putting together a small dinner at my place around 7pm.\n\nLet me know if you can make it!\n\nLove,\nAunt May"
    }
  },
  {
    id: "052",
    description: "Tax filing deadline reminder",
    input: {
      username: "Bruce Banner",
      email: "bruce.banner@company.com",
      from: "no-reply@irs-tax-portal.com",
      to: "bruce.banner@company.com",
      tosubject: "Final Notice: Tax Filing Due April 15",
      body: "Dear Bruce Banner,\n\nOur records indicate that you have not yet submitted your Form 1040 for the previous fiscal year. The deadline is April 15.\n\nPlease file or request an extension to avoid penalties and interest charges.\n\nRegards,\nTax Processing Center"
    }
  },
  {
    id: "053",
    description: "Request to review a pull request",
    input: {
      username: "Tony Stark",
      email: "tony.stark@company.com",
      from: "rhodey@company.com",
      to: "tony.stark@company.com",
      tosubject: "Code review needed on PR #1472",
      body: "Hey Tony,\n\nCould you take a look at PR #1472 when you have a moment? It's the refactor of the repulsor control firmware and I'd like your sign-off before merging to main.\n\nThanks,\nRhodey"
    }
  },
  {
    id: "054",
    description: "NDA signature request from legal",
    input: {
      username: "Natasha Romanoff",
      email: "natasha.romanoff@company.com",
      from: "legal@company.com",
      to: "natasha.romanoff@company.com",
      tosubject: "Please sign: Non-Disclosure Agreement - Project Widow",
      body: "Hello Natasha,\n\nAttached is the NDA for your participation in Project Widow. Please review and sign via DocuSign by EOD Thursday so we can proceed with the vendor onboarding.\n\nLet me know if you have any questions.\n\nBest,\nMatt Murdock\nLegal Department"
    }
  },
  {
    id: "055",
    description: "Nigerian prince scam email",
    input: {
      username: "Wade Wilson",
      email: "wade.wilson@company.com",
      from: "prince.adewale@royalmail-ng.biz",
      to: "wade.wilson@company.com",
      tosubject: "CONFIDENTIAL BUSINESS PROPOSAL - URGENT REPLY NEEDED",
      body: "Dear Beloved Friend,\n\nI am Prince Adewale of Nigeria. I have $42,000,000 USD trapped in a foreign account and I require your urgent assistance to transfer these funds. In exchange, you will receive 30% of the total sum.\n\nPlease reply immediately with your full banking details to proceed.\n\nGod bless,\nPrince Adewale"
    }
  },
  {
    id: "056",
    description: "Weekly tech industry newsletter",
    input: {
      username: "Barry Allen",
      email: "barry.allen@company.com",
      from: "newsletter@techcrunch-weekly.com",
      to: "barry.allen@company.com",
      tosubject: "TechCrunch Weekly: Top Stories from the Valley",
      body: "Hi Barry,\n\nThis week's highlights:\n- Series B funding rounds surge 12%\n- New Rust compiler release brings 20% build time improvement\n- Debate grows around EU AI Act enforcement\n\nRead the full digest on our website.\n\nThe TechCrunch Team"
    }
  },
  {
    id: "057",
    description: "Project kickoff meeting invitation",
    input: {
      username: "Diana Prince",
      email: "diana.prince@company.com",
      from: "steve.trevor@company.com",
      to: "diana.prince@company.com",
      tosubject: "Kickoff: Themyscira Integration Project",
      body: "Hi Diana,\n\nYou're invited to the kickoff meeting for the Themyscira Integration Project on Monday, 10am in Conference Room B.\n\nAgenda and pre-read will be shared Friday. See calendar invite for details.\n\nCheers,\nSteve"
    }
  },
  {
    id: "058",
    description: "AI-focused newsletter digest",
    input: {
      username: "Hal Jordan",
      email: "hal.jordan@company.com",
      from: "digest@ai-weekly.io",
      to: "hal.jordan@company.com",
      tosubject: "AI Weekly: GPT-5 Rumors, Diffusion Breakthroughs",
      body: "Hello Hal,\n\nIn this week's edition:\n- Speculation mounts around OpenAI's next flagship model\n- New paper shows 4x speed-up in diffusion sampling\n- Anthropic publishes interpretability research\n\nRead more on aiweekly.io.\n\n- The AI Weekly Team"
    }
  },
  {
    id: "059",
    description: "Open enrollment for employee benefits",
    input: {
      username: "Arthur Curry",
      email: "arthur.curry@company.com",
      from: "benefits@company.com",
      to: "arthur.curry@company.com",
      tosubject: "Action Required: Open Enrollment Closes Nov 30",
      body: "Hi Arthur,\n\nOpen enrollment for next year's benefits closes on November 30. You must log into the benefits portal and confirm or change your health, dental, and 401(k) elections.\n\nIf no action is taken, your current elections will default and you will not be able to change them for 12 months.\n\nHR Benefits Team"
    }
  },
  {
    id: "060",
    description: "Automated package delivery notification",
    input: {
      username: "Clark Kent",
      email: "clark.kent@company.com",
      from: "no-reply@shipping-tracker.com",
      to: "clark.kent@company.com",
      tosubject: "Your package has been delivered",
      body: "Hello Clark,\n\nYour package (tracking #1Z999AA10123456784) was delivered today at 2:47pm to the front door.\n\nThank you for using our service. This is an automated message; please do not reply.\n\nShipping Tracker"
    }
  },
  {
    id: "061",
    description: "Wedding invitation requiring RSVP",
    input: {
      username: "Selina Kyle",
      email: "selina.kyle@company.com",
      from: "harley.quinzel@friends.net",
      to: "selina.kyle@company.com",
      tosubject: "You're invited to our wedding!",
      body: "Hi Selina!\n\nIvy and I are finally tying the knot on June 21 in Gotham Gardens! We'd love for you to be there.\n\nPlease RSVP by May 15 so we can finalize the seating chart. Hope to see you!\n\nLove,\nHarley"
    }
  },
  {
    id: "062",
    description: "Urgent credit card fraud alert",
    input: {
      username: "Victor Stone",
      email: "victor.stone@company.com",
      from: "fraud-alerts@my-bank.com",
      to: "victor.stone@company.com",
      tosubject: "URGENT: Suspicious transaction on your card ending 4429",
      body: "Dear Mr. Stone,\n\nWe detected a suspicious $2,340 charge on your card ending in 4429 at an electronics retailer in Bucharest. If this was not you, please respond immediately to confirm so we can freeze the card and issue a replacement.\n\nIf you do not respond within 24 hours, we may auto-approve the charge.\n\nFraud Prevention Team\nMy Bank"
    }
  },
  {
    id: "063",
    description: "Scheduled server maintenance notification",
    input: {
      username: "John Stewart",
      email: "john.stewart@company.com",
      from: "sysadmin@company.com",
      to: "all-engineering@company.com",
      tosubject: "Scheduled maintenance: production DB Sunday 02:00-04:00 UTC",
      body: "Team,\n\nHeads up: we will be performing maintenance on the primary production database this Sunday from 02:00 to 04:00 UTC. Expect read-only mode during that window.\n\nNo action required from you. Tickets for follow-up work will be created automatically if needed.\n\nInfra Team"
    }
  },
  {
    id: "064",
    description: "Contract renewal decision needed",
    input: {
      username: "Matt Murdock",
      email: "matt.murdock@company.com",
      from: "procurement@company.com",
      to: "matt.murdock@company.com",
      tosubject: "Action Needed: AWS Enterprise Agreement renewal",
      body: "Hi Matt,\n\nOur AWS Enterprise Agreement expires on May 31. Please review the renewal terms (attached) and confirm whether you approve the new 3-year commitment or want to renegotiate.\n\nWe need your decision by May 10 to avoid a lapse in support.\n\nThanks,\nProcurement"
    }
  },
  {
    id: "065",
    description: "Crypto investment scam email",
    input: {
      username: "Stephen Strange",
      email: "stephen.strange@company.com",
      from: "opportunities@cryptomax-returns.biz",
      to: "stephen.strange@company.com",
      tosubject: "Turn $500 into $50,000 in 30 Days - GUARANTEED",
      body: "Dr. Strange,\n\nOur AI-powered trading bot has produced returns of over 9,900% for early investors. Don't miss out! Deposit as little as $500 today and watch your portfolio explode.\n\nClick here to get started: [link]\n\nTo your wealth,\nCryptoMax Returns"
    }
  },
  {
    id: "066",
    description: "Monthly personal finance newsletter",
    input: {
      username: "Jessica Jones",
      email: "jessica.jones@company.com",
      from: "digest@smartmoney-monthly.com",
      to: "jessica.jones@company.com",
      tosubject: "Smart Money Monthly: Roth vs. Traditional, Rate Outlook",
      body: "Hi Jessica,\n\nThis month we break down:\n- Roth vs. Traditional IRAs: which is right for you?\n- Fed rate expectations for Q2\n- Top 5 index funds for long-term savers\n\nEnjoy the read!\n\nSmart Money Monthly"
    }
  },
  {
    id: "067",
    description: "Quarterly all-hands meeting invitation",
    input: {
      username: "Luke Cage",
      email: "luke.cage@company.com",
      from: "exec-office@company.com",
      to: "all-staff@company.com",
      tosubject: "Q2 All-Hands: Thursday 3pm",
      body: "Team,\n\nJoin us for the Q2 all-hands on Thursday at 3pm in the main auditorium (or via Zoom). We'll cover financial results, roadmap, and welcome new hires.\n\nQ&A at the end. No pre-read required.\n\nExec Office"
    }
  },
  {
    id: "068",
    description: "Meeting invite about AI vendor evaluation",
    input: {
      username: "Sam Wilson",
      email: "sam.wilson@company.com",
      from: "procurement@company.com",
      to: "sam.wilson@company.com",
      tosubject: "Meeting: AI vendor evaluation - Anthropic vs. OpenAI vs. Cohere",
      body: "Hi Sam,\n\nWe're scheduling a 1-hour working session next Wednesday at 11am to evaluate AI vendor options for the new summarization feature.\n\nYour technical input will be essential. Please accept the invite.\n\nProcurement"
    }
  },
  {
    id: "069",
    description: "Annual performance review scheduled",
    input: {
      username: "Carol Danvers",
      email: "carol.danvers@company.com",
      from: "nick.fury@company.com",
      to: "carol.danvers@company.com",
      tosubject: "Your annual performance review - Tuesday 2pm",
      body: "Carol,\n\nI've scheduled your annual performance review for Tuesday at 2pm in my office. Please complete your self-assessment form beforehand and bring examples of your top three accomplishments this year.\n\nLooking forward to the discussion.\n\nNick"
    }
  },
  {
    id: "070",
    description: "Automated password expiration notice",
    input: {
      username: "T'Challa Udaku",
      email: "tchalla@company.com",
      from: "no-reply@identity.company.com",
      to: "tchalla@company.com",
      tosubject: "Your password will expire in 3 days",
      body: "Hello T'Challa,\n\nYour company password will expire on April 27. Please change it before then to avoid being locked out of your account.\n\nThis is an automated message; please do not reply.\n\nIT Identity Services"
    }
  },
  {
    id: "071",
    description: "Informal dinner invitation from colleague",
    input: {
      username: "Scott Lang",
      email: "scott.lang@company.com",
      from: "hope.vandyne@company.com",
      to: "scott.lang@company.com",
      tosubject: "Dinner this weekend?",
      body: "Hey Scott,\n\nA few of us from the engineering team are grabbing dinner at that new Thai place on Saturday around 7. Want to come?\n\nNo pressure, just let me know when you can.\n\nHope"
    }
  },
  {
    id: "072",
    description: "Expense report rejected, needs resubmission",
    input: {
      username: "Jean Grey",
      email: "jean.grey@company.com",
      from: "expenses@company.com",
      to: "jean.grey@company.com",
      tosubject: "Expense report #ER-8821 rejected - resubmission required",
      body: "Hi Jean,\n\nYour expense report #ER-8821 was rejected because receipts are missing for two line items (line 4 and line 7).\n\nPlease attach the missing receipts and resubmit within 7 days, otherwise the charges will be reversed to your personal account.\n\nFinance Operations"
    }
  },
  {
    id: "073",
    description: "Announcement of new AI model deployment",
    input: {
      username: "Ororo Munroe",
      email: "ororo.munroe@company.com",
      from: "ml-platform@company.com",
      to: "all-engineering@company.com",
      tosubject: "Rolling out new AI recommendation model v3.2",
      body: "Team,\n\nStarting Monday we will be gradually rolling out AI recommendation model v3.2 to 10% of production traffic. Early benchmarks show a 7% lift in CTR with no latency regression.\n\nNo action required. Monitor dashboards and file a ticket if you see anything unusual.\n\nML Platform Team"
    }
  },
  {
    id: "074",
    description: "Mandatory GDPR compliance training",
    input: {
      username: "Charles Xavier",
      email: "charles.xavier@company.com",
      from: "compliance@company.com",
      to: "charles.xavier@company.com",
      tosubject: "Mandatory GDPR Compliance Training - Complete by May 15",
      body: "Dear Charles,\n\nAs a manager with access to personal data, you are required to complete the GDPR refresher training by May 15. Failure to complete on time may result in revocation of data access privileges.\n\nClick the link in the learning portal to begin.\n\nCompliance Office"
    }
  },
  {
    id: "075",
    description: "Weight loss miracle spam",
    input: {
      username: "Bruce Wayne",
      email: "bruce.wayne@company.com",
      from: "deals@miracle-slim-pills.info",
      to: "bruce.wayne@company.com",
      tosubject: "Doctors HATE this one weird trick - lose 30lbs in 2 weeks!",
      body: "Hi there,\n\nStruggling with belly fat? Our patented herbal formula helps you burn fat while you sleep! Over 1 million bottles sold.\n\nLimited time: 70% OFF today only. Click here to claim your discount!\n\nMiracleSlim Team"
    }
  },
  {
    id: "076",
    description: "Marketing industry newsletter",
    input: {
      username: "Lois Lane",
      email: "lois.lane@company.com",
      from: "news@marketing-brew.com",
      to: "lois.lane@company.com",
      tosubject: "Marketing Brew: TikTok ad spend hits new high",
      body: "Good morning Lois,\n\nToday's top stories:\n- TikTok ad spend reaches record $5B in Q1\n- Influencer marketing ROI dips for first time in 3 years\n- Case study: how Duolingo's owl meme campaign went viral\n\nHave a great day,\nMarketing Brew"
    }
  },
  {
    id: "077",
    description: "Weekly 1:1 with manager",
    input: {
      username: "Jen Walters",
      email: "jen.walters@company.com",
      from: "bruce.banner@company.com",
      to: "jen.walters@company.com",
      tosubject: "Our 1:1 this Friday",
      body: "Hey Jen,\n\nJust confirming our weekly 1:1 on Friday at 11am. If there's anything specific you want to cover, add it to our shared doc.\n\nSee you then,\nBruce"
    }
  },
  {
    id: "078",
    description: "Research newsletter summarizing AI papers",
    input: {
      username: "Reed Richards",
      email: "reed.richards@company.com",
      from: "newsletter@arxiv-digest.org",
      to: "reed.richards@company.com",
      tosubject: "arXiv Weekly: top cs.AI papers for April 20",
      body: "Hi Reed,\n\nThis week's curated picks:\n- \"Scaling Laws for Mixture of Experts\"\n- \"Sparse Attention Revisited\"\n- \"Efficient Fine-Tuning via LoRA+\"\n\nAbstracts and links inside.\n\narXiv Digest"
    }
  },
  {
    id: "079",
    description: "Exit interview with departing employee",
    input: {
      username: "Susan Storm",
      email: "susan.storm@company.com",
      from: "hr@company.com",
      to: "susan.storm@company.com",
      tosubject: "Please schedule your exit interview",
      body: "Dear Susan,\n\nAs you are leaving the company on May 3, we would like to schedule a 30-minute exit interview. Please pick a slot from the attached calendar link by Friday.\n\nYour candid feedback helps us improve.\n\nHR Team"
    }
  },
  {
    id: "080",
    description: "Automated calendar sync notification",
    input: {
      username: "Ben Grimm",
      email: "ben.grimm@company.com",
      from: "no-reply@calendar-sync.com",
      to: "ben.grimm@company.com",
      tosubject: "Calendar sync complete - 4 events added",
      body: "Hello Ben,\n\nYour calendar has been successfully synced. 4 new events were added and 1 was updated.\n\nNo action needed. This is an automated message.\n\nCalendar Sync Service"
    }
  },
  {
    id: "081",
    description: "Sympathy / condolences message to team",
    input: {
      username: "Logan Howlett",
      email: "logan.howlett@company.com",
      from: "ceo@company.com",
      to: "all-staff@company.com",
      tosubject: "Remembering our colleague, Kurt Wagner",
      body: "Team,\n\nIt is with great sadness that I share the passing of our colleague Kurt Wagner after a long illness. Kurt was a beloved member of our engineering team for 12 years.\n\nWe will be holding a memorial service on Friday at 2pm. Counseling services are available through our EAP.\n\nWith deepest condolences,\nThe CEO"
    }
  },
  {
    id: "082",
    description: "Overdue invoice reminder from vendor",
    input: {
      username: "Wally West",
      email: "wally.west@company.com",
      from: "billing@acme-cloud-services.com",
      to: "wally.west@company.com",
      tosubject: "Overdue invoice #INV-55321 - please pay immediately",
      body: "Dear Wally,\n\nInvoice #INV-55321 in the amount of $14,200 is 18 days overdue. Please remit payment by April 30 to avoid a 5% late fee and potential service suspension.\n\nIf payment has already been sent, please reply with the reference number.\n\nBilling, Acme Cloud Services"
    }
  },
  {
    id: "083",
    description: "CI/CD pipeline failure alert",
    input: {
      username: "Kamala Khan",
      email: "kamala.khan@company.com",
      from: "ci-bot@company.com",
      to: "kamala.khan@company.com",
      tosubject: "[FAILED] main pipeline - commit 3af89b2",
      body: "Hi Kamala,\n\nThe main pipeline has failed on your recent commit (3af89b2). Failing stage: integration-tests. 3 tests failing in test_user_api.py.\n\nPlease investigate and push a fix. Main is currently blocked.\n\nCI Bot"
    }
  },
  {
    id: "084",
    description: "Trademark infringement legal notice",
    input: {
      username: "Wanda Maximoff",
      email: "wanda.maximoff@company.com",
      from: "ip-counsel@lawfirm-external.com",
      to: "wanda.maximoff@company.com",
      tosubject: "Cease and desist - trademark infringement on \"ScarletCloud\"",
      body: "Dear Ms. Maximoff,\n\nWe represent ScarletTech Holdings, owners of the registered trademark \"ScarletCloud\". Your company's use of a confusingly similar mark constitutes infringement under 15 U.S.C. § 1114.\n\nPlease respond in writing within 10 business days with your intended course of action.\n\nRegards,\nFoggy Nelson, Esq."
    }
  },
  {
    id: "085",
    description: "Fake lottery win scam",
    input: {
      username: "Vision",
      email: "vision@company.com",
      from: "claims@euromillion-winners.tk",
      to: "vision@company.com",
      tosubject: "CONGRATULATIONS! You have won €2,500,000.00",
      body: "Dear Winner,\n\nYour email address was randomly selected in our International EuroMillion Lottery draw. You have won a cash prize of €2,500,000.00.\n\nTo claim, send us a copy of your ID, proof of address, and a $350 processing fee.\n\nSincerely,\nClaims Dept"
    }
  },
  {
    id: "086",
    description: "Health and wellness newsletter",
    input: {
      username: "Gamora Zen",
      email: "gamora.zen@company.com",
      from: "wellness@company.com",
      to: "all-staff@company.com",
      tosubject: "Wellness Weekly: desk stretches and mindful breathing",
      body: "Hi team,\n\nThis week's wellness tips:\n- Try this 5-minute desk stretch routine\n- Box breathing for stress relief\n- Sign up for the spring hiking group (optional!)\n\nStay healthy!\n\nWellness Committee"
    }
  },
  {
    id: "087",
    description: "Prep meeting for a client demo",
    input: {
      username: "Rocket Racoon",
      email: "rocket.racoon@company.com",
      from: "peter.quill@company.com",
      to: "rocket.racoon@company.com",
      tosubject: "Prep meeting: Nova Corp demo Thursday",
      body: "Rocket,\n\nLet's do a 45-minute prep for the Nova Corp demo on Wednesday at 4pm. Please have the latest slide deck ready and be prepared to walk through the live environment.\n\nThey're making a $2M decision next week, so this one matters.\n\nQuill"
    }
  },
  {
    id: "088",
    description: "Urgent AI model retraining deadline",
    input: {
      username: "Groot",
      email: "groot@company.com",
      from: "cto@company.com",
      to: "groot@company.com",
      tosubject: "URGENT: retrain fraud model before Monday release",
      body: "Groot,\n\nWe just discovered data drift in the fraud detection AI model. We need a full retrain and A/B test before Monday's release or we'll have to roll back.\n\nPlease confirm you can own this and send me an ETA by end of day.\n\nCTO"
    }
  },
  {
    id: "089",
    description: "Office relocation announcement",
    input: {
      username: "Drax Destroyer",
      email: "drax.destroyer@company.com",
      from: "facilities@company.com",
      to: "all-staff@company.com",
      tosubject: "Important: office moving to new location in June",
      body: "Dear Team,\n\nWe are pleased to announce that our office will be relocating to 500 Market Street on June 15. The new space offers more meeting rooms, a larger cafeteria, and secure bike parking.\n\nFull move logistics and FAQ will be shared in a follow-up email next week.\n\nFacilities Team"
    }
  },
  {
    id: "090",
    description: "Automated backup success notification",
    input: {
      username: "Mantis Empath",
      email: "mantis@company.com",
      from: "no-reply@backup-service.company.com",
      to: "mantis@company.com",
      tosubject: "Nightly backup completed successfully",
      body: "Hello Mantis,\n\nYour nightly backup completed successfully at 03:12 UTC. 247GB backed up; 0 errors.\n\nThis is an automated message.\n\nBackup Service"
    }
  },
  {
    id: "091",
    description: "Friend asking for pet-sitting favor",
    input: {
      username: "Bucky Barnes",
      email: "bucky.barnes@company.com",
      from: "steve.rogers@friends.net",
      to: "bucky.barnes@company.com",
      tosubject: "Can you watch Dodger next weekend?",
      body: "Hey Buck,\n\nI'm heading out of town next weekend (Fri-Sun) and my usual dog-sitter bailed. Any chance you could watch Dodger? I'll drop off food and his bed.\n\nLet me know asap so I can find backup if you can't.\n\nSteve"
    }
  },
  {
    id: "092",
    description: "Salary increase notification",
    input: {
      username: "Nebula",
      email: "nebula@company.com",
      from: "hr@company.com",
      to: "nebula@company.com",
      tosubject: "Your salary adjustment effective May 1",
      body: "Dear Nebula,\n\nFollowing your annual review, we are pleased to confirm a salary increase of 8%, effective May 1. Your updated compensation letter is attached for your records.\n\nThank you for your continued contributions.\n\nHR Team"
    }
  },
  {
    id: "093",
    description: "Security vulnerability requires immediate patching",
    input: {
      username: "Yondu Udonta",
      email: "yondu.udonta@company.com",
      from: "security@company.com",
      to: "yondu.udonta@company.com",
      tosubject: "CRITICAL: patch CVE-2026-12345 in your services today",
      body: "Yondu,\n\nA critical RCE vulnerability (CVE-2026-12345, CVSS 9.8) has been disclosed in a library used by your services. You must upgrade to the patched version within 24 hours.\n\nReply with confirmation once patched, or escalate to security@ if you need help.\n\nSecurity Team"
    }
  },
  {
    id: "094",
    description: "Legal subpoena for records",
    input: {
      username: "Pepper Potts",
      email: "pepper.potts@company.com",
      from: "legal@company.com",
      to: "pepper.potts@company.com",
      tosubject: "Action required: subpoena for records (Civil Case No. 26-CV-7712)",
      body: "Dear Pepper,\n\nWe have received a subpoena duces tecum in connection with civil case 26-CV-7712. You are asked to preserve all documents and emails related to \"Project Mandarin\" between 2023 and 2025.\n\nPlease acknowledge receipt and do NOT delete any related records. I will schedule a meeting to walk through the preservation protocol.\n\nGeneral Counsel"
    }
  },
  {
    id: "095",
    description: "Phishing email impersonating IT",
    input: {
      username: "Happy Hogan",
      email: "happy.hogan@company.com",
      from: "it-support@compnay-secure.com",
      to: "happy.hogan@company.com",
      tosubject: "Your email account will be deactivated",
      body: "Dear User,\n\nYour mailbox has exceeded its storage limit. To prevent deactivation within the next 24 hours, please verify your account by clicking the link below and entering your credentials.\n\n[Verify Account]\n\nIT Support"
    }
  },
  {
    id: "096",
    description: "Cybersecurity industry newsletter",
    input: {
      username: "Agatha Harkness",
      email: "agatha.harkness@company.com",
      from: "newsletter@krebs-on-security.com",
      to: "agatha.harkness@company.com",
      tosubject: "This week: ransomware trends and zero-day roundup",
      body: "Hi Agatha,\n\nIn this issue:\n- LockBit affiliates shift to new extortion model\n- Chrome zero-day patched; update now\n- Phishing campaign targeting SSO portals\n\nRead the full stories at krebsonsecurity.com.\n\n- The KOS Team"
    }
  },
  {
    id: "097",
    description: "AI ethics committee meeting",
    input: {
      username: "Monica Rambeau",
      email: "monica.rambeau@company.com",
      from: "ai-ethics-chair@company.com",
      to: "monica.rambeau@company.com",
      tosubject: "Meeting: AI Ethics Committee - review of new model release",
      body: "Hi Monica,\n\nThe AI Ethics Committee is meeting next Thursday at 1pm to review the responsible-release checklist for our upcoming generative AI feature. We'd value your perspective as a committee member.\n\nCalendar invite attached.\n\nAI Ethics Chair"
    }
  },
  {
    id: "098",
    description: "AI research conference invitation",
    input: {
      username: "Moon Knight",
      email: "marc.spector@company.com",
      from: "events@neurips.cc",
      to: "marc.spector@company.com",
      tosubject: "NeurIPS 2026 - Registration open",
      body: "Dear Dr. Spector,\n\nRegistration for NeurIPS 2026 in Vancouver (Dec 7-12) is now open. As a past contributor, you qualify for early-bird pricing through May 31.\n\nWe hope to see you and your team there.\n\nNeurIPS Organizing Committee"
    }
  },
  {
    id: "099",
    description: "Monthly book club gathering",
    input: {
      username: "Dinah Lance",
      email: "dinah.lance@company.com",
      from: "book-club@company.com",
      to: "dinah.lance@company.com",
      tosubject: "This month's pick: Project Hail Mary",
      body: "Hi Dinah,\n\nThis month we're reading Project Hail Mary by Andy Weir! Our next gathering is May 10 at 6:30pm in the 4th floor lounge.\n\nSnacks and drinks provided. Drop in if you can.\n\n- The Book Club"
    }
  },
  {
    id: "100",
    description: "Automated welcome email for new SaaS signup",
    input: {
      username: "Kate Bishop",
      email: "kate.bishop@company.com",
      from: "welcome@no-reply.taskflow.io",
      to: "kate.bishop@company.com",
      tosubject: "Welcome to TaskFlow!",
      body: "Hi Kate,\n\nThanks for signing up for TaskFlow! Your free trial is active for the next 14 days.\n\nCheck out our getting-started guide to create your first project. This is an automated message; please do not reply.\n\n- The TaskFlow Team"
    }
  }
];

module.exports = {
  emailTestCasesExtended,
};
