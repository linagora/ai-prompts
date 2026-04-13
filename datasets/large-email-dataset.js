// This dataset contains 100 email for test classification task with 10 labels (urgent, review, decision, meeting, followup, informational, spam, important, AI, no_label_adequate) 
const emailTestCasesExtended = [

{
id:'001',
description:'Critical production outage affecting client',
input:{
username:'Laura King',
email:'laura.king@company.com',
from:'ops@company.com',
to:'laura.king@company.com',
subject:'URGENT: Production Outage - Client Impact',
body:`Client reports full outage in production. Emergency bridge at 3PM. Patch required immediately.`
},
expectedOutput:{
labels:['urgent','incident','outage','meeting','client','deployment','action_required']
}
},

{
id:'002',
description:'Invoice pending payment',
input:{
username:'David Ross',
email:'david.ross@company.com',
from:'accounts@company.com',
to:'david.ross@company.com',
subject:'Invoice #4582 Pending',
body:`Please process payment for attached invoice before due date Friday.`
},
expectedOutput:{
labels:['invoice','payment','deadline','document_attached','action_required']
}
},

{
id:'003',
description:'Meeting reminder only',
input:{
username:'Nina Patel',
email:'nina.patel@company.com',
from:'assistant@company.com',
to:'nina.patel@company.com',
subject:'Reminder: Strategy Sync Tomorrow',
body:`Reminder of tomorrow’s strategy sync meeting at 10AM.`
},
expectedOutput:{
labels:['meeting','strategy','informational']
}
},

{
id:'004',
description:'Performance review discussion',
input:{
username:'Mark Lee',
email:'mark.lee@company.com',
from:'hr@company.com',
to:'mark.lee@company.com',
subject:'Annual Performance Review Scheduled',
body:`Your annual performance review is scheduled next Monday.`
},
expectedOutput:{
labels:['hr','performance_review','meeting','informational']
}
},

{
id:'005',
description:'Security vulnerability detected',
input:{
username:'Olivia White',
email:'olivia.white@company.com',
from:'security@company.com',
to:'olivia.white@company.com',
subject:'Critical Security Vulnerability Identified',
body:`Critical vulnerability identified in authentication module. Immediate fix required.`
},
expectedOutput:{
labels:['urgent','security','bug','incident','action_required']
}
},

{
id:'006',
description:'Marketing newsletter',
input:{
username:'Emma Davis',
email:'emma.davis@company.com',
from:'marketing@company.com',
to:'emma.davis@company.com',
subject:'September Product Updates',
body:`Discover our latest product improvements and feature launches.`
},
expectedOutput:{
labels:['newsletter','marketing','informational']
}
},

{
id:'007',
description:'Leave request from employee',
input:{
username:'Tom Harris',
email:'tom.harris@company.com',
from:'employee@company.com',
to:'tom.harris@company.com',
subject:'Leave Request - Next Week',
body:`I would like to request leave from Monday to Wednesday next week.`
},
expectedOutput:{
labels:['hr','leave_request','approval']
}
},

{
id:'008',
description:'Client contract approval required',
input:{
username:'Chloe Martin',
email:'chloe.martin@company.com',
from:'legal@company.com',
to:'chloe.martin@company.com',
subject:'Client Contract Approval Needed',
body:`Review attached client contract and provide approval before signature.`
},
expectedOutput:{
labels:['client','contract','review','approval','signature_required','document_attached']
}
},

{
id:'009',
description:'Deployment completed notification',
input:{
username:'Alex Turner',
email:'alex.turner@company.com',
from:'devops@company.com',
to:'alex.turner@company.com',
subject:'Deployment Completed Successfully',
body:`Production deployment completed without issues.`
},
expectedOutput:{
labels:['deployment','automated','informational']
}
},

{
id:'010',
description:'Budget strategy discussion meeting',
input:{
username:'Grace Kim',
email:'grace.kim@company.com',
from:'finance@company.com',
to:'grace.kim@company.com',
subject:'Q4 Budget Strategy Meeting',
body:`We will review Q4 budget allocation and strategic priorities tomorrow.`
},
expectedOutput:{
labels:['meeting','budget','strategy']
}
},

{
id:'011',
description:'Spam crypto promotion',
input:{
username:'Ryan Scott',
email:'ryan.scott@company.com',
from:'profit@fastcrypto.io',
to:'ryan.scott@company.com',
subject:'Double Your Income Fast!',
body:`Invest today and earn guaranteed profits. Limited offer!`
},
expectedOutput:{
labels:['spam','marketing']
}
},

{
id:'012',
description:'Bug reported by client',
input:{
username:'Sophia Clark',
email:'sophia.clark@company.com',
from:'support@company.com',
to:'sophia.clark@company.com',
subject:'Client Reported Login Bug',
body:`Client experiencing login errors after last deployment.`
},
expectedOutput:{
labels:['client','bug','incident','deployment']
}
},

{
id:'013',
description:'Data access request',
input:{
username:'Daniel Green',
email:'daniel.green@company.com',
from:'manager@company.com',
to:'daniel.green@company.com',
subject:'Request for Sales Data Export',
body:`Please provide Q2 sales data export for analysis.`
},
expectedOutput:{
labels:['data_request','sales','action_required']
}
},

{
id:'014',
description:'Partnership proposal discussion',
input:{
username:'Lily Adams',
email:'lily.adams@company.com',
from:'bizdev@company.com',
to:'lily.adams@company.com',
subject:'New Partnership Opportunity',
body:`We are evaluating a potential strategic partnership next quarter.`
},
expectedOutput:{
labels:['partnership','strategy','informational']
}
},

{
id:'015',
description:'Expense reimbursement submission',
input:{
username:'Kevin Lopez',
email:'kevin.lopez@company.com',
from:'employee@company.com',
to:'kevin.lopez@company.com',
subject:'Expense Reimbursement Submission',
body:`Attached receipts for travel expenses last week.`
},
expectedOutput:{
labels:['expense','payment','document_attached']
}
},

{
id:'016',
description:'Reschedule client meeting',
input:{
username:'Mia Sanders',
email:'mia.sanders@company.com',
from:'client@external.com',
to:'mia.sanders@company.com',
subject:'Request to Reschedule Meeting',
body:`Can we move tomorrow’s meeting to next week?`
},
expectedOutput:{
labels:['client','meeting','reschedule','followup']
}
},

{
id:'017',
description:'Quarterly financial report',
input:{
username:'Noah Scott',
email:'noah.scott@company.com',
from:'finance@company.com',
to:'noah.scott@company.com',
subject:'Quarterly Financial Report Attached',
body:`Please find attached Q2 financial report for review.`
},
expectedOutput:{
labels:['financial_report','document_attached','review']
}
},

{
id:'018',
description:'Automated password reset email',
input:{
username:'Ella Brooks',
email:'ella.brooks@company.com',
from:'no-reply@system.com',
to:'ella.brooks@company.com',
subject:'Password Reset Confirmation',
body:`Your password has been successfully reset.`
},
expectedOutput:{
labels:['security','automated','informational']
}
},

{
id:'019',
description:'Recruitment candidate review',
input:{
username:'Isaac Long',
email:'isaac.long@company.com',
from:'hr@company.com',
to:'isaac.long@company.com',
subject:'Candidate CV for Review',
body:`Please review the attached CV for backend engineer position.`
},
expectedOutput:{
labels:['hr','recruitment','review','document_attached']
}
},

{
id:'020',
description:'Company-wide announcement',
input:{
username:'Hazel Armstrong',
email:'hazel.armstrong@company.com',
from:'ceo@company.com',
to:'all@company.com',
subject:'Company Expansion Announcement',
body:`We are expanding to three new international markets this year.`
},
expectedOutput:{
labels:['announcement','strategy','informational']
}
},

{
id:'021',
description:'Critical deadline for contract signature',
input:{
username:'Ethan Moore',
email:'ethan.moore@company.com',
from:'legal@company.com',
to:'ethan.moore@company.com',
subject:'Contract Signature Deadline Tomorrow',
body:`Client contract must be signed before tomorrow 5PM to proceed.`
},
expectedOutput:{
labels:['client','contract','signature_required','deadline','urgent','action_required']
}
},

{
id:'022',
description:'Minor UI bug low priority',
input:{
username:'Ava Walker',
email:'ava.walker@company.com',
from:'qa@company.com',
to:'ava.walker@company.com',
subject:'Minor UI Misalignment Issue',
body:`Small UI misalignment detected on settings page. Can be fixed next sprint.`
},
expectedOutput:{
labels:['bug','low_priority']
}
},

{
id:'023',
description:'Sales meeting request with client',
input:{
username:'Lucas Hall',
email:'lucas.hall@company.com',
from:'sales@company.com',
to:'lucas.hall@company.com',
subject:'Client Sales Call Scheduling',
body:`Please schedule a call with client to discuss pricing options.`
},
expectedOutput:{
labels:['client','sales','followup']
}
},

{
id:'024',
description:'Security incident investigation ongoing',
input:{
username:'Harper Young',
email:'harper.young@company.com',
from:'security@company.com',
to:'harper.young@company.com',
subject:'Ongoing Security Investigation',
body:`Security team investigating potential data exposure incident.`
},
expectedOutput:{
labels:['security','incident','high_priority']
}
},

{
id:'025',
description:'Payment overdue reminder',
input:{
username:'Jack Wright',
email:'jack.wright@company.com',
from:'accounts@company.com',
to:'jack.wright@company.com',
subject:'Overdue Payment Notice',
body:`Invoice #4921 is now overdue. Please process payment immediately.`
},
expectedOutput:{
labels:['invoice','payment','urgent','action_required']
}
},

{
id:'026',
description:'Strategy review document attached',
input:{
username:'Aria Torres',
email:'aria.torres@company.com',
from:'strategy@company.com',
to:'aria.torres@company.com',
subject:'Strategy Review Document',
body:`Attached updated strategy roadmap for your review.`
},
expectedOutput:{
labels:['strategy','review','document_attached']
}
},

{
id:'027',
description:'Client requesting urgent data export',
input:{
username:'Henry Collins',
email:'henry.collins@company.com',
from:'support@company.com',
to:'henry.collins@company.com',
subject:'Urgent Data Export Required',
body:`Client urgently needs full data export before compliance audit tomorrow.`
},
expectedOutput:{
labels:['client','data_request','urgent','deadline','action_required']
}
},

{
id:'028',
description:'Internal HR policy update',
input:{
username:'Luna Mitchell',
email:'luna.mitchell@company.com',
from:'hr@company.com',
to:'luna.mitchell@company.com',
subject:'Updated Remote Work Policy',
body:`Please review updated HR remote work guidelines.`
},
expectedOutput:{
labels:['hr','informational']
}
},

{
id:'029',
description:'Production deployment scheduled',
input:{
username:'Owen Perez',
email:'owen.perez@company.com',
from:'devops@company.com',
to:'owen.perez@company.com',
subject:'Production Deployment Tonight',
body:`Deployment scheduled tonight at 22:00 UTC. Expect brief downtime.`
},
expectedOutput:{
labels:['deployment','outage','informational']
}
},

{
id:'030',
description:'Vendor contract review required',
input:{
username:'Scarlett Diaz',
email:'scarlett.diaz@company.com',
from:'legal@company.com',
to:'scarlett.diaz@company.com',
subject:'Vendor Contract Review',
body:`Please review attached vendor contract draft before approval.`
},
expectedOutput:{
labels:['contract','review','approval','document_attached']
}
},

{
id:'031',
description:'Meeting follow-up waiting for response',
input:{
username:'Benjamin Reed',
email:'benjamin.reed@company.com',
from:'manager@company.com',
to:'benjamin.reed@company.com',
subject:'Follow-up on Budget Meeting',
body:`Waiting for your feedback on yesterday’s budget discussion.`
},
expectedOutput:{
labels:['meeting','budget','followup']
}
},

{
id:'032',
description:'System outage resolved notification',
input:{
username:'Zoe Kelly',
email:'zoe.kelly@company.com',
from:'ops@company.com',
to:'zoe.kelly@company.com',
subject:'Outage Resolved',
body:`Earlier production outage has been resolved successfully.`
},
expectedOutput:{
labels:['outage','incident','informational']
}
},

{
id:'033',
description:'Recruitment interview scheduling',
input:{
username:'Gabriel Cox',
email:'gabriel.cox@company.com',
from:'hr@company.com',
to:'gabriel.cox@company.com',
subject:'Interview Schedule Confirmation',
body:`Confirming your interview slot tomorrow at 2PM.`
},
expectedOutput:{
labels:['hr','recruitment','meeting']
}
},

{
id:'034',
description:'Marketing campaign performance report',
input:{
username:'Victoria Barnes',
email:'victoria.barnes@company.com',
from:'marketing@company.com',
to:'victoria.barnes@company.com',
subject:'Campaign Performance Report',
body:`Attached performance analytics for Q3 marketing campaign.`
},
expectedOutput:{
labels:['marketing','financial_report','document_attached','informational']
}
},

{
id:'035',
description:'Urgent production bug affecting payments',
input:{
username:'Julian Rivera',
email:'julian.rivera@company.com',
from:'support@company.com',
to:'julian.rivera@company.com',
subject:'URGENT: Payment Processing Bug',
body:`Critical payment bug impacting multiple clients. Immediate fix required.`
},
expectedOutput:{
labels:['urgent','bug','client','payment','incident','action_required']
}
},

{
id:'036',
description:'Client contract renewal reminder',
input:{
username:'Isabella Foster',
email:'isabella.foster@company.com',
from:'sales@company.com',
to:'isabella.foster@company.com',
subject:'Contract Renewal Reminder',
body:`Client contract renewal deadline approaching end of month. Please review terms.`
},
expectedOutput:{
labels:['client','contract','deadline','review']
}
},

{
id:'037',
description:'Internal budget approval required',
input:{
username:'Matthew Price',
email:'matthew.price@company.com',
from:'finance@company.com',
to:'matthew.price@company.com',
subject:'Budget Approval Needed',
body:`Requesting approval for revised departmental budget allocation.`
},
expectedOutput:{
labels:['budget','approval','action_required']
}
},

{
id:'038',
description:'Critical database incident',
input:{
username:'Amelia Bennett',
email:'amelia.bennett@company.com',
from:'ops@company.com',
to:'amelia.bennett@company.com',
subject:'Critical Database Incident',
body:`Database cluster experiencing failures. Immediate investigation required.`
},
expectedOutput:{
labels:['urgent','incident','outage','action_required']
}
},

{
id:'039',
description:'Meeting reschedule by client',
input:{
username:'William Gray',
email:'william.gray@company.com',
from:'client@enterprise.com',
to:'william.gray@company.com',
subject:'Reschedule Strategy Call',
body:`Client requests to move strategy call to next Tuesday.`
},
expectedOutput:{
labels:['client','meeting','strategy','reschedule','followup']
}
},

{
id:'040',
description:'Quarterly sales performance review',
input:{
username:'Charlotte Hayes',
email:'charlotte.hayes@company.com',
from:'sales@company.com',
to:'charlotte.hayes@company.com',
subject:'Quarterly Sales Review Meeting',
body:`Let’s review quarterly sales performance metrics tomorrow.`
},
expectedOutput:{
labels:['sales','meeting','performance_review']
}
},

{
id:'041',
description:'Invoice sent with attachment',
input:{
username:'Elijah Brooks',
email:'elijah.brooks@company.com',
from:'billing@company.com',
to:'elijah.brooks@company.com',
subject:'Invoice #5023 Attached',
body:`Please find attached invoice for March services rendered.`
},
expectedOutput:{
labels:['invoice','document_attached','payment']
}
},

{
id:'042',
description:'Security access review required',
input:{
username:'Mila Simmons',
email:'mila.simmons@company.com',
from:'security@company.com',
to:'mila.simmons@company.com',
subject:'Access Rights Review',
body:`Please review user access permissions for compliance audit.`
},
expectedOutput:{
labels:['security','review','action_required']
}
},

{
id:'043',
description:'Recruitment offer approval',
input:{
username:'James Bennett',
email:'james.bennett@company.com',
from:'hr@company.com',
to:'james.bennett@company.com',
subject:'Candidate Offer Approval',
body:`Need final approval before sending offer letter to selected candidate.`
},
expectedOutput:{
labels:['hr','recruitment','approval','action_required']
}
},

{
id:'044',
description:'Automated system alert high CPU usage',
input:{
username:'Avery Powell',
email:'avery.powell@company.com',
from:'monitoring@system.com',
to:'avery.powell@company.com',
subject:'High CPU Usage Alert',
body:`CPU usage exceeded 95% threshold on production server.`
},
expectedOutput:{
labels:['automated','incident','high_priority']
}
},

{
id:'045',
description:'Expense approval rejected',
input:{
username:'Sebastian Rivera',
email:'sebastian.rivera@company.com',
from:'finance@company.com',
to:'sebastian.rivera@company.com',
subject:'Expense Request Rejected',
body:`Your expense reimbursement request requires additional documentation.`
},
expectedOutput:{
labels:['expense','approval','followup']
}
},

{
id:'046',
description:'Client requesting urgent meeting',
input:{
username:'Emily Watson',
email:'emily.watson@company.com',
from:'client@globalcorp.com',
to:'emily.watson@company.com',
subject:'Urgent Client Meeting Request',
body:`Client requesting urgent meeting regarding service disruption.`
},
expectedOutput:{
labels:['client','urgent','incident','action_required']
}
},

{
id:'047',
description:'Marketing campaign budget increase',
input:{
username:'Daniel Turner',
email:'daniel.turner@company.com',
from:'marketing@company.com',
to:'daniel.turner@company.com',
subject:'Request to Increase Campaign Budget',
body:`Proposing 20% increase in campaign budget for next month.`
},
expectedOutput:{
labels:['marketing','budget','approval']
}
},

{
id:'048',
description:'Annual leave approved notification',
input:{
username:'Sofia Hughes',
email:'sofia.hughes@company.com',
from:'hr@company.com',
to:'sofia.hughes@company.com',
subject:'Leave Request Approved',
body:`Your leave request has been approved by management.`
},
expectedOutput:{
labels:['hr','leave_request','informational']
}
},

{
id:'049',
description:'Deployment rollback after failure',
input:{
username:'Logan Peterson',
email:'logan.peterson@company.com',
from:'devops@company.com',
to:'logan.peterson@company.com',
subject:'Deployment Rollback Executed',
body:`Deployment rolled back due to authentication failures.`
},
expectedOutput:{
labels:['deployment','incident','bug','informational']
}
},

{
id:'050',
description:'Strategic partnership contract draft',
input:{
username:'Abigail Richardson',
email:'abigail.richardson@company.com',
from:'bizdev@company.com',
to:'abigail.richardson@company.com',
subject:'Partnership Agreement Draft Attached',
body:`Please review attached draft for upcoming strategic partnership.`
},
expectedOutput:{
labels:['partnership','strategy','contract','review','document_attached']
}
},

{
id:'051',
description:'Critical client production outage escalation',
input:{
username:'Nathan Cooper',
email:'nathan.cooper@company.com',
from:'support@company.com',
to:'nathan.cooper@company.com',
subject:'URGENT: Client Production Down',
body:`Major enterprise client reports full production outage. Immediate response required.`
},
expectedOutput:{
labels:['urgent','client','outage','incident','action_required']
}
},

{
id:'052',
description:'Reminder to approve vendor invoice',
input:{
username:'Lily Ward',
email:'lily.ward@company.com',
from:'accounts@company.com',
to:'lily.ward@company.com',
subject:'Approval Needed – Vendor Invoice',
body:`Please review and approve attached vendor invoice before payment processing.`
},
expectedOutput:{
labels:['invoice','approval','document_attached','payment','action_required']
}
},

{
id:'053',
description:'Weekly team sync meeting',
input:{
username:'Aaron Bailey',
email:'aaron.bailey@company.com',
from:'manager@company.com',
to:'aaron.bailey@company.com',
subject:'Weekly Team Sync',
body:`Weekly sync scheduled tomorrow at 9AM.`
},
expectedOutput:{
labels:['meeting','informational']
}
},

{
id:'054',
description:'Security breach confirmed',
input:{
username:'Claire Jenkins',
email:'claire.jenkins@company.com',
from:'security@company.com',
to:'claire.jenkins@company.com',
subject:'Confirmed Security Breach',
body:`Unauthorized data access confirmed. Investigation and containment ongoing.`
},
expectedOutput:{
labels:['urgent','security','incident','action_required']
}
},

{
id:'055',
description:'Recruitment interview feedback needed',
input:{
username:'Jason Ramirez',
email:'jason.ramirez@company.com',
from:'hr@company.com',
to:'jason.ramirez@company.com',
subject:'Interview Feedback Required',
body:`Please provide interview feedback for candidate by end of day.`
},
expectedOutput:{
labels:['hr','recruitment','deadline','action_required']
}
},

{
id:'056',
description:'Budget variance alert',
input:{
username:'Hannah Morales',
email:'hannah.morales@company.com',
from:'finance@company.com',
to:'hannah.morales@company.com',
subject:'Budget Variance Exceeded',
body:`Department budget exceeded forecast by 12%. Review required.`
},
expectedOutput:{
labels:['budget','high_priority','review']
}
},

{
id:'057',
description:'Client requesting pricing update',
input:{
username:'Caleb Foster',
email:'caleb.foster@company.com',
from:'sales@company.com',
to:'caleb.foster@company.com',
subject:'Client Pricing Update Request',
body:`Client requesting updated pricing proposal for renewal.`
},
expectedOutput:{
labels:['client','sales','followup','action_required']
}
},

{
id:'058',
description:'System automated maintenance notice',
input:{
username:'Samantha Perry',
email:'samantha.perry@company.com',
from:'no-reply@system.com',
to:'samantha.perry@company.com',
subject:'Scheduled Maintenance Notification',
body:`System maintenance scheduled Sunday 02:00 UTC.`
},
expectedOutput:{
labels:['automated','outage','informational']
}
},

{
id:'059',
description:'Expense reimbursement overdue',
input:{
username:'Dominic Nguyen',
email:'dominic.nguyen@company.com',
from:'finance@company.com',
to:'dominic.nguyen@company.com',
subject:'Expense Reimbursement Pending',
body:`Your expense submission is missing documentation. Please update.`
},
expectedOutput:{
labels:['expense','followup','action_required']
}
},

{
id:'060',
description:'Partnership strategy discussion meeting',
input:{
username:'Natalie Howard',
email:'natalie.howard@company.com',
from:'bizdev@company.com',
to:'natalie.howard@company.com',
subject:'Partnership Strategy Meeting',
body:`Discussing long-term strategic partnership roadmap tomorrow.`
},
expectedOutput:{
labels:['partnership','strategy','meeting']
}
},

{
id:'061',
description:'Minor backend bug reported internally',
input:{
username:'Tyler Richardson',
email:'tyler.richardson@company.com',
from:'qa@company.com',
to:'tyler.richardson@company.com',
subject:'Backend Logging Bug',
body:`Logging inconsistency detected in staging environment.`
},
expectedOutput:{
labels:['bug','low_priority']
}
},

{
id:'062',
description:'Client requesting contract amendment',
input:{
username:'Lucy Cox',
email:'lucy.cox@company.com',
from:'legal@company.com',
to:'lucy.cox@company.com',
subject:'Client Contract Amendment',
body:`Client requesting clause modification in current agreement.`
},
expectedOutput:{
labels:['client','contract','review']
}
},

{
id:'063',
description:'Quarterly financial approval',
input:{
username:'Evan Flores',
email:'evan.flores@company.com',
from:'finance@company.com',
to:'evan.flores@company.com',
subject:'Quarterly Financial Approval Required',
body:`Please approve attached quarterly financial statement.`
},
expectedOutput:{
labels:['financial_report','approval','document_attached','action_required']
}
},

{
id:'064',
description:'Meeting reminder for security audit',
input:{
username:'Maya Bryant',
email:'maya.bryant@company.com',
from:'security@company.com',
to:'maya.bryant@company.com',
subject:'Reminder: Security Audit Meeting',
body:`Reminder of security audit meeting at 3PM today.`
},
expectedOutput:{
labels:['meeting','security','informational']
}
},

{
id:'065',
description:'Deployment causing temporary outage',
input:{
username:'Jordan Kim',
email:'jordan.kim@company.com',
from:'devops@company.com',
to:'jordan.kim@company.com',
subject:'Deployment Causing Temporary Downtime',
body:`Deployment may cause temporary service interruption tonight.`
},
expectedOutput:{
labels:['deployment','outage','informational']
}
},

{
id:'066',
description:'Strategic expansion announcement',
input:{
username:'Bella Simmons',
email:'bella.simmons@company.com',
from:'ceo@company.com',
to:'bella.simmons@company.com',
subject:'Strategic Expansion Plans',
body:`Announcing company expansion into new markets next quarter.`
},
expectedOutput:{
labels:['announcement','strategy','informational']
}
},

{
id:'067',
description:'Data access compliance deadline',
input:{
username:'Leo Patterson',
email:'leo.patterson@company.com',
from:'manager@company.com',
to:'leo.patterson@company.com',
subject:'Data Access Compliance Deadline',
body:`Ensure requested compliance data export completed by Friday.`
},
expectedOutput:{
labels:['data_request','deadline','action_required']
}
},

{
id:'068',
description:'Urgent payment processing issue',
input:{
username:'Zara Coleman',
email:'zara.coleman@company.com',
from:'billing@company.com',
to:'zara.coleman@company.com',
subject:'URGENT: Payment Processing Failure',
body:`Multiple payment transactions failing in production.`
},
expectedOutput:{
labels:['urgent','payment','incident','bug','action_required']
}
},

{
id:'069',
description:'HR recruitment budget discussion',
input:{
username:'Ian Griffin',
email:'ian.griffin@company.com',
from:'hr@company.com',
to:'ian.griffin@company.com',
subject:'Recruitment Budget Discussion',
body:`Discussing hiring budget allocation for next quarter.`
},
expectedOutput:{
labels:['hr','recruitment','budget','meeting']
}
},

{
id:'070',
description:'Social company event invitation',
input:{
username:'Eva Russell',
email:'eva.russell@company.com',
from:'hr@company.com',
to:'eva.russell@company.com',
subject:'Company Social Event',
body:`Join us for team dinner this Friday evening.`
},
expectedOutput:{
labels:['social','informational']
}
},

{
id:'071',
description:'Client escalation awaiting response',
input:{
username:'Miles Hayes',
email:'miles.hayes@company.com',
from:'support@company.com',
to:'miles.hayes@company.com',
subject:'Client Escalation – Awaiting Your Response',
body:`Client awaiting urgent response regarding open ticket.`
},
expectedOutput:{
labels:['client','urgent','action_required']
}
},

{
id:'072',
description:'Marketing campaign performance approval',
input:{
username:'Nora Jenkins',
email:'nora.jenkins@company.com',
from:'marketing@company.com',
to:'nora.jenkins@company.com',
subject:'Campaign Performance Approval Needed',
body:`Please approve performance-based budget increase.`
},
expectedOutput:{
labels:['marketing','approval','budget','action_required']
}
},

{
id:'073',
description:'Incident postmortem review meeting',
input:{
username:'Omar Wallace',
email:'omar.wallace@company.com',
from:'ops@company.com',
to:'omar.wallace@company.com',
subject:'Incident Postmortem Review',
body:`Postmortem review meeting scheduled after yesterday’s outage.`
},
expectedOutput:{
labels:['incident','outage','meeting','review']
}
},

{
id:'074',
description:'Spam investment opportunity',
input:{
username:'Chase Fuller',
email:'chase.fuller@company.com',
from:'profit@crypto-fast.biz',
to:'chase.fuller@company.com',
subject:'Guaranteed Crypto Returns',
body:`Invest now and triple your income instantly.`
},
expectedOutput:{
labels:['spam','marketing']
}
},

{
id:'075',
description:'Annual HR performance review reminder',
input:{
username:'Ruby West',
email:'ruby.west@company.com',
from:'hr@company.com',
to:'ruby.west@company.com',
subject:'Performance Review Reminder',
body:`Reminder to complete performance self-evaluation form.`
},
expectedOutput:{
labels:['hr','performance_review','deadline','action_required']
}
},

{
id:'076',
description:'Sales contract awaiting signature',
input:{
username:'Adam Fisher',
email:'adam.fisher@company.com',
from:'sales@company.com',
to:'adam.fisher@company.com',
subject:'Sales Contract Awaiting Signature',
body:`Please sign attached contract to finalize deal.`
},
expectedOutput:{
labels:['sales','contract','signature_required','document_attached','action_required']
}
},

{
id:'077',
description:'Production monitoring automated alert',
input:{
username:'Layla Price',
email:'layla.price@company.com',
from:'monitor@system.com',
to:'layla.price@company.com',
subject:'Monitoring Alert: Memory Spike',
body:`Automated alert: memory spike detected in production cluster.`
},
expectedOutput:{
labels:['automated','incident','high_priority']
}
},

{
id:'078',
description:'Expense reimbursement approved',
input:{
username:'Xavier Diaz',
email:'xavier.diaz@company.com',
from:'finance@company.com',
to:'xavier.diaz@company.com',
subject:'Expense Approved',
body:`Your expense reimbursement has been approved.`
},
expectedOutput:{
labels:['expense','informational']
}
},

{
id:'079',
description:'Client feature request discussion',
input:{
username:'Penelope Reed',
email:'penelope.reed@company.com',
from:'product@company.com',
to:'penelope.reed@company.com',
subject:'Client Feature Request Discussion',
body:`Client requesting new feature addition to reporting module.`
},
expectedOutput:{
labels:['client','meeting','strategy']
}
},

{
id:'080',
description:'Deployment approval required',
input:{
username:'Thomas Sanders',
email:'thomas.sanders@company.com',
from:'devops@company.com',
to:'thomas.sanders@company.com',
subject:'Deployment Approval Required',
body:`Awaiting final approval before deploying to production.`
},
expectedOutput:{
labels:['deployment','approval','action_required']
}
},

{
id:'081',
description:'Quarterly strategy document review',
input:{
username:'Alice Nguyen',
email:'alice.nguyen@company.com',
from:'strategy@company.com',
to:'alice.nguyen@company.com',
subject:'Quarterly Strategy Document',
body:`Attached strategic roadmap document for Q3 review.`
},
expectedOutput:{
labels:['strategy','review','document_attached']
}
},

{
id:'082',
description:'Critical authentication bug',
input:{
username:'Victor Morales',
email:'victor.morales@company.com',
from:'qa@company.com',
to:'victor.morales@company.com',
subject:'Critical Authentication Bug',
body:`Authentication module failing under load. Immediate fix needed.`
},
expectedOutput:{
labels:['urgent','bug','incident','action_required']
}
},

{
id:'083',
description:'Meeting reschedule internal',
input:{
username:'Gabriella Stone',
email:'gabriella.stone@company.com',
from:'manager@company.com',
to:'gabriella.stone@company.com',
subject:'Reschedule Internal Planning Meeting',
body:`Need to move internal planning meeting to Thursday.`
},
expectedOutput:{
labels:['meeting','reschedule']
}
},

{
id:'084',
description:'Financial audit preparation documents',
input:{
username:'Connor Ellis',
email:'connor.ellis@company.com',
from:'finance@company.com',
to:'connor.ellis@company.com',
subject:'Audit Documents Attached',
body:`Please review attached financial audit documents.`
},
expectedOutput:{
labels:['financial_report','review','document_attached']
}
},

{
id:'085',
description:'Data export automated confirmation',
input:{
username:'Madison Perry',
email:'madison.perry@company.com',
from:'no-reply@system.com',
to:'madison.perry@company.com',
subject:'Data Export Completed',
body:`Your requested data export is now complete.`
},
expectedOutput:{
labels:['data_request','automated','informational']
}
},

{
id:'086',
description:'Urgent SLA breach with client',
input:{
username:'Joshua Bennett',
email:'joshua.bennett@company.com',
from:'support@company.com',
to:'joshua.bennett@company.com',
subject:'URGENT: SLA Breach Notification',
body:`Client SLA breach detected. Immediate escalation required.`
},
expectedOutput:{
labels:['urgent','client','incident','action_required']
}
},

{
id:'087',
description:'Marketing performance review meeting',
input:{
username:'Sophie Graham',
email:'sophie.graham@company.com',
from:'marketing@company.com',
to:'sophie.graham@company.com',
subject:'Marketing Performance Review',
body:`Scheduling review meeting for campaign metrics.`
},
expectedOutput:{
labels:['marketing','meeting','performance_review']
}
},

{
id:'088',
description:'Recruitment candidate approval needed',
input:{
username:'Brandon Ortiz',
email:'brandon.ortiz@company.com',
from:'hr@company.com',
to:'brandon.ortiz@company.com',
subject:'Approval Required for Job Offer',
body:`Please approve final offer package for selected candidate.`
},
expectedOutput:{
labels:['hr','recruitment','approval','action_required']
}
},

{
id:'089',
description:'Minor outage notification',
input:{
username:'Leah Watkins',
email:'leah.watkins@company.com',
from:'ops@company.com',
to:'leah.watkins@company.com',
subject:'Minor Service Interruption',
body:`Short service interruption occurred overnight. Now resolved.`
},
expectedOutput:{
labels:['outage','informational']
}
},

{
id:'090',
description:'Client sales follow-up reminder',
input:{
username:'Dylan Pierce',
email:'dylan.pierce@company.com',
from:'sales@company.com',
to:'dylan.pierce@company.com',
subject:'Client Follow-up Reminder',
body:`Reminder to follow up with client regarding proposal.`
},
expectedOutput:{
labels:['client','sales','followup','action_required']
}
},

{
id:'091',
description:'Strategy decision required',
input:{
username:'Elena Woods',
email:'elena.woods@company.com',
from:'strategy@company.com',
to:'elena.woods@company.com',
subject:'Strategic Direction Decision Required',
body:`Need decision on expansion strategy before board meeting.`
},
expectedOutput:{
labels:['strategy','decision','deadline','action_required']
}
},

{
id:'092',
description:'Automated billing confirmation',
input:{
username:'Ryan Cole',
email:'ryan.cole@company.com',
from:'billing@system.com',
to:'ryan.cole@company.com',
subject:'Billing Confirmation',
body:`Your monthly billing cycle has been processed.`
},
expectedOutput:{
labels:['payment','automated','informational']
}
},

{
id:'093',
description:'High priority compliance review',
input:{
username:'Hailey Stewart',
email:'hailey.stewart@company.com',
from:'legal@company.com',
to:'hailey.stewart@company.com',
subject:'Compliance Review Required',
body:`Compliance documentation requires immediate review.`
},
expectedOutput:{
labels:['high_priority','review','action_required']
}
},

{
id:'094',
description:'Internal announcement system upgrade',
input:{
username:'Oliver Grant',
email:'oliver.grant@company.com',
from:'it@company.com',
to:'oliver.grant@company.com',
subject:'System Upgrade Announcement',
body:`Announcing infrastructure upgrade this weekend.`
},
expectedOutput:{
labels:['announcement','informational']
}
},

{
id:'095',
description:'Urgent budget freeze notice',
input:{
username:'Grace Porter',
email:'grace.porter@company.com',
from:'finance@company.com',
to:'grace.porter@company.com',
subject:'URGENT: Budget Freeze Effective Immediately',
body:`All discretionary spending paused effective immediately.`
},
expectedOutput:{
labels:['urgent','budget','announcement']
}
},

{
id:'096',
description:'Deployment readiness review',
input:{
username:'Samuel Hayes',
email:'samuel.hayes@company.com',
from:'devops@company.com',
to:'samuel.hayes@company.com',
subject:'Deployment Readiness Review',
body:`Please review deployment checklist before production release.`
},
expectedOutput:{
labels:['deployment','review','action_required']
}
},

{
id:'097',
description:'Client requesting urgent pricing decision',
input:{
username:'Ariana Price',
email:'ariana.price@company.com',
from:'sales@company.com',
to:'ariana.price@company.com',
subject:'URGENT: Pricing Decision Needed',
body:`Client awaiting final pricing decision today.`
},
expectedOutput:{
labels:['urgent','client','sales','decision','action_required']
}
},

{
id:'098',
description:'Annual financial report distribution',
input:{
username:'David Kim',
email:'david.kim@company.com',
from:'finance@company.com',
to:'david.kim@company.com',
subject:'Annual Financial Report',
body:`Annual financial report attached for information.`
},
expectedOutput:{
labels:['financial_report','document_attached','informational']
}
},

{
id:'099',
description:'Security training announcement',
input:{
username:'Megan Ward',
email:'megan.ward@company.com',
from:'hr@company.com',
to:'megan.ward@company.com',
subject:'Mandatory Security Training',
body:`All employees must complete security training by end of month.`
},
expectedOutput:{
labels:['security','announcement','deadline','action_required']
}
},

{
id:'100',
description:'Sales quarterly results announcement',
input:{
username:'Christopher Ross',
email:'christopher.ross@company.com',
from:'sales@company.com',
to:'christopher.ross@company.com',
subject:'Quarterly Sales Results',
body:`Announcing record quarterly sales performance across regions.`
},
expectedOutput:{
labels:['sales','announcement','informational']
}
}

];


const EXTENDED_EMAIL_LABELS = [

  { id: 'urgent', description: 'Requires immediate action or time-sensitive' },
  { id: 'high_priority', description: 'Important but not immediate' },
  { id: 'low_priority', description: 'Can be handled later' },

  { id: 'followup', description: 'Requires response or follow-up' },
  { id: 'action_required', description: 'Explicit action required' },

  { id: 'meeting', description: 'Meeting related' },
  { id: 'deadline', description: 'Contains a deadline' },
  { id: 'reschedule', description: 'Rescheduling discussion' },

  { id: 'review', description: 'Needs review' },
  { id: 'approval', description: 'Needs approval' },
  { id: 'decision', description: 'Requires decision' },
  { id: 'signature_required', description: 'Needs official signature' },
  { id: 'document_attached', description: 'Contains attachment for processing' },

  { id: 'invoice', description: 'Invoice related' },
  { id: 'payment', description: 'Payment related' },
  { id: 'budget', description: 'Budget discussion' },
  { id: 'expense', description: 'Expense related' },
  { id: 'financial_report', description: 'Financial reporting' },

  { id: 'hr', description: 'Human resources topic' },
  { id: 'recruitment', description: 'Hiring / recruitment' },
  { id: 'performance_review', description: 'Employee performance review' },
  { id: 'leave_request', description: 'Time off request' },

  { id: 'bug', description: 'Bug or technical issue' },
  { id: 'incident', description: 'System incident' },
  { id: 'outage', description: 'Service outage' },
  { id: 'deployment', description: 'Deployment related' },
  { id: 'security', description: 'Security issue' },
  { id: 'data_request', description: 'Data access or request' },

  { id: 'client', description: 'Client related communication' },
  { id: 'sales', description: 'Sales topic' },
  { id: 'contract', description: 'Contract discussion' },
  { id: 'partnership', description: 'Partnership topic' },
  { id: 'strategy', description: 'Strategic discussion' },

  { id: 'informational', description: 'FYI only' },
  { id: 'announcement', description: 'Company announcement' },
  { id: 'newsletter', description: 'Newsletter' },

  { id: 'spam', description: 'Spam or promotional' },
  { id: 'social', description: 'Social/personal message' },
  { id: 'marketing', description: 'Marketing promotion' },
  { id: 'automated', description: 'Automated system email' }

];
module.exports = {
  EXTENDED_EMAIL_LABELS,
  EXTENDED_EMAIL_TEST_CASES
};
