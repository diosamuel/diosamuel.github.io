/**
 * AWS Certified Cloud Practitioner (CLF-C02) Mock Exam
 * 100 Questions - Based on official exam guide weightings:
 *   Domain 1: Cloud Concepts (24%) - 24 questions
 *   Domain 2: Security and Compliance (30%) - 30 questions
 *   Domain 3: Cloud Technology and Services (34%) - 34 questions
 *   Domain 4: Billing, Pricing, and Support (12%) - 12 questions
 *
 * Question types:
 *   type: "single"   -> one correct answer from 4 options
 *   type: "multiple"  -> two or more correct answers from 5 options
 */

const QUESTIONS = [
  {
    id: 1,
    domain: 1,
    type: "multiple",
    question: "Which of the following are benefits of cloud computing? (Select TWO)",
    options: [
      "Trade capital expense (CAPEX) for variable expense (OPEX)",
      "Increased need for on-premises hardware management",
      "Stop guessing capacity by scaling up and down as required",
      "Higher upfront licensing costs",
      "Reduced speed of deployment"
    ],
    answer: [0, 2],
    explanation: "Cloud computing lets you trade capital expense (CAPEX) for variable expense (OPEX), paying only when you consume resources. You also stop guessing capacity because you can access as much or as little capacity as needed and scale up and down as required."
  },
  {
    id: 2,
    domain: 1,
    type: "multiple",
    question: "Which of the following are design principles of the Operational Excellence pillar of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      "Perform operations as code",
      "Guess capacity based on historical averages",
      "Make frequent, small, reversible changes",
      "Avoid failure anticipation",
      "Never refine operations procedures"
    ],
    answer: [0, 2],
    explanation: "Operational Excellence principles include performing operations as code, making frequent small reversible changes, refining operations procedures frequently, anticipating failure, and learning from all operational failures."
  },
  {
    id: 3,
    domain: 1,
    type: "multiple",
    question: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      "Cost Optimization",
      "Monetization",
      "Performance Efficiency",
      "Virtualization",
      "Standardization"
    ],
    answer: [0, 2],
    explanation: "The six pillars of the Well-Architected Framework are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
  },
  {
    id: 4,
    domain: 1,
    type: "single",
    question: "Which pillar of the Well-Architected Framework includes the ability to protect information, systems, and assets while delivering business value?",
    options: [
      "Reliability",
      "Performance Efficiency",
      "Security",
      "Operational Excellence"
    ],
    answer: [2],
    explanation: "The Security pillar includes protecting information, systems, and assets through risk assessments and mitigation strategies including implementing a strong identity foundation, enabling traceability, and applying security at all layers."
  },
  {
    id: 5,
    domain: 1,
    type: "single",
    question: "A startup wants to experiment with different architectures without significant upfront investment. Which Well-Architected Framework pillar supports this approach?",
    options: [
      "Cost Optimization",
      "Performance Efficiency",
      "Reliability",
      "Security"
    ],
    answer: [1],
    explanation: "Performance Efficiency includes experimenting more often, using serverless architectures, and designing systems to go global in minutes. This enables rapid prototyping without large upfront costs."
  },
  {
    id: 6,
    domain: 1,
    type: "single",
    question: "Which Well-Architected Framework pillar includes the principle of adopting a consumption model and using managed services to reduce cost of ownership?",
    options: [
      "Operational Excellence",
      "Sustainability",
      "Cost Optimization",
      "Reliability"
    ],
    answer: [2],
    explanation: "Cost Optimization includes adopting a consumption model, analyzing expenditure, using managed services to reduce cost of ownership, and implementing cloud financial management."
  },
  {
    id: 7,
    domain: 1,
    type: "multiple",
    question: "Which of the following are valid migration strategies in the AWS Cloud? (Select TWO)",
    options: [
      "Rehosting (lift and shift)",
      "Rebooting",
      "Replatforming",
      "Retagging",
      "Reindexing"
    ],
    answer: [0, 2],
    explanation: "The 6 Rs migration strategies are Rehosting (lift and shift), Replatforming, Refactoring/Re-architecting, Repurchasing, Retaining, and Retiring."
  },
  {
    id: 8,
    domain: 1,
    type: "single",
    question: "A company decides to replace its on-premises CRM software with a SaaS solution. Which migration strategy is this?",
    options: [
      "Rehosting",
      "Replatforming",
      "Repurchasing",
      "Retaining"
    ],
    answer: [2],
    explanation: "Repurchasing involves replacing existing software with cloud-based alternatives, typically adopting SaaS solutions with minimal development effort."
  },
  {
    id: 9,
    domain: 1,
    type: "single",
    question: "Which migration strategy involves redesigning applications to be cloud-native with extensive code and architectural changes?",
    options: [
      "Rehosting",
      "Replatforming",
      "Refactoring / Re-architecting",
      "Retaining"
    ],
    answer: [2],
    explanation: "Refactoring/Re-architecting involves going cloud-native for maximum scalability, with extensive code changes and architecture modifications to utilize cloud services and modern best practices."
  },
  {
    id: 10,
    domain: 1,
    type: "single",
    question: "A company keeps a legacy application on-premises because it is not suitable for cloud migration. Which migration strategy is this?",
    options: [
      "Retiring",
      "Retaining",
      "Rehosting",
      "Replatforming"
    ],
    answer: [1],
    explanation: "Retaining means keeping existing applications in their current state, typically for applications not suitable for migration such as legacy or proprietary software."
  },
  {
    id: 11,
    domain: 1,
    type: "single",
    question: "Which component of the AWS Cloud Adoption Framework (CAF) focuses on understanding how cloud adoption contributes to business goals and ROI?",
    options: [
      "People Perspective",
      "Governance Perspective",
      "Business Perspective",
      "Platform Perspective"
    ],
    answer: [2],
    explanation: "The Business Perspective focuses on understanding business value creation, business objectives, risk management, opportunities, and ROI (return on investment)."
  },
  {
    id: 12,
    domain: 1,
    type: "single",
    question: "Which AWS CAF perspective focuses on aligning an organization's skills and capacities with cloud services?",
    options: [
      "Operations Perspective",
      "People Perspective",
      "Security Perspective",
      "Governance Perspective"
    ],
    answer: [1],
    explanation: "The People Perspective focuses on aligning organizational skills with cloud services through training, defining new roles, building teams, and continuous learning."
  },
  {
    id: 13,
    domain: 1,
    type: "multiple",
    question: "Which of the following AWS CAF perspectives focus on security and compliance requirements? (Select TWO)",
    options: [
      "Business Perspective",
      "Security Perspective",
      "Governance Perspective",
      "Operations Perspective",
      "People Perspective"
    ],
    answer: [1, 2],
    explanation: "The Security Perspective addresses IAM, data protection, network security, and compliance. The Governance Perspective covers risk management, compliance, license management, and control mechanisms."
  },
  {
    id: 14,
    domain: 1,
    type: "single",
    question: "In cloud economics, what does the shift from fixed costs to variable costs mean?",
    options: [
      "You pay a fixed monthly fee regardless of usage",
      "You pay only for what you consume",
      "You must purchase hardware upfront",
      "You pay more for cloud than on-premises"
    ],
    answer: [1],
    explanation: "Variable costs mean you pay only for what you consume, rather than investing in fixed upfront capital costs like data centers and servers."
  },
  {
    id: 15,
    domain: 1,
    type: "single",
    question: "What is the concept of 'rightsizing' in cloud economics?",
    options: [
      "Choosing the largest instance type available",
      "Matching resource types and sizes to workload requirements",
      "Using only the smallest instances to save money",
      "Automatically scaling all resources to maximum"
    ],
    answer: [1],
    explanation: "Rightsizing is the process of matching resource types and sizes to actual workload requirements to optimize both cost and performance."
  },
  {
    id: 16,
    domain: 1,
    type: "single",
    question: "Which of the following is a benefit of economies of scale in cloud computing?",
    options: [
      "Higher per-unit costs due to shared infrastructure",
      "Lower variable costs because usage from many customers is aggregated",
      "Fixed costs that remain the same regardless of usage",
      "Increased capital expenditure for each customer"
    ],
    answer: [1],
    explanation: "Economies of scale mean that usage from hundreds of thousands of customers is aggregated in the cloud, allowing providers like AWS to achieve lower pay-as-you-go prices."
  },
  {
    id: 17,
    domain: 1,
    type: "single",
    question: "Which deployment model uses a combination of on-premises infrastructure and cloud services?",
    options: [
      "Cloud-Based Deployment",
      "On-Premises Deployment",
      "Hybrid Deployment",
      "Multi-Cloud Deployment"
    ],
    answer: [2],
    explanation: "Hybrid Deployment combines on-premises infrastructure with cloud services, allowing data and applications to be shared between them."
  },
  {
    id: 18,
    domain: 1,
    type: "single",
    question: "Which Well-Architected Framework pillar focuses on recovering from infrastructure or service disruptions and dynamically acquiring computing resources?",
    options: [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency"
    ],
    answer: [2],
    explanation: "The Reliability pillar focuses on recovering from disruptions, dynamically acquiring computing resources to meet demand, and mitigating issues like misconfigurations or transient network issues."
  },
  {
    id: 19,
    domain: 1,
    type: "single",
    question: "Which Well-Architected Framework pillar addresses the long-term environmental, economic, and societal impact of business activities?",
    options: [
      "Cost Optimization",
      "Sustainability",
      "Reliability",
      "Security"
    ],
    answer: [1],
    explanation: "The Sustainability pillar addresses long-term environmental, economic, and societal impacts including carbon emissions, waste, and resource usage throughout the workload lifecycle."
  },
  {
    id: 20,
    domain: 1,
    type: "multiple",
    question: "Which of the following are benefits of AWS Cloud Adoption Framework (CAF)? (Select TWO)",
    options: [
      "Reduced business risk",
      "Increased need for dedicated hardware",
      "Improved environmental, social, and governance (ESG) performance",
      "Mandatory on-premises servers",
      "Eliminated need for staff training"
    ],
    answer: [0, 2],
    explanation: "AWS CAF benefits include reduced business risk, improved ESG performance, increased revenue, and increased operational efficiency, by guiding holistic cloud adoption across perspectives."
  },
  {
    id: 21,
    domain: 1,
    type: "single",
    question: "A company wants to stop spending money on running and maintaining data centers. Which cloud benefit does this represent?",
    options: [
      "Benefit from massive economies of scale",
      "Stop spending money to run and maintain data centers",
      "Increase speed and agility",
      "Stop guessing capacity"
    ],
    answer: [1],
    explanation: "Cloud computing lets you stop spending money to run and maintain data centers, so you can focus on projects that differentiate your business rather than on infrastructure heavy lifting."
  },
  {
    id: 22,
    domain: 1,
    type: "single",
    question: "Which cloud benefit eliminates the problem of having expensive idle resources or limited capacity?",
    options: [
      "Trade capital expense for variable expense",
      "Stop guessing capacity",
      "Increase speed and agility",
      "Go global in minutes"
    ],
    answer: [1],
    explanation: "With cloud computing, you can access as much or as little capacity as needed and scale up and down as required, eliminating the need to guess capacity and avoiding idle resources or limited capacity."
  },
  {
    id: 23,
    domain: 1,
    type: "single",
    question: "Which AWS CAF perspective focuses on infrastructure design, service selection, and architectural best practices?",
    options: [
      "Business Perspective",
      "Platform Perspective",
      "Operations Perspective",
      "Governance Perspective"
    ],
    answer: [1],
    explanation: "The Platform Perspective focuses on designing and implementing cloud infrastructure and architecture aligned with business needs including infrastructure design, service selection, and architectural best practices."
  },
  {
    id: 24,
    domain: 1,
    type: "single",
    question: "Which AWS CAF perspective covers automation, monitoring, incident management, and CI/CD processes?",
    options: [
      "Security Perspective",
      "Governance Perspective",
      "Operations Perspective",
      "People Perspective"
    ],
    answer: [2],
    explanation: "The Operations Perspective focuses on managing and operating cloud resources effectively including automation, monitoring, incident management, CI/CD, observability, event management, and patch management."
  },
  {
    id: 25,
    domain: 2,
    type: "single",
    question: "In the AWS Shared Responsibility Model, which of the following is the customer's responsibility?",
    options: [
      "Physical security of data centers",
      "Managing the hypervisor",
      "Protecting data stored in databases",
      "Managing network infrastructure"
    ],
    answer: [2],
    explanation: "Customers are responsible for protecting data stored in databases through encryption and IAM access control, managing database settings, building schemas, and network traffic protection."
  },
  {
    id: 26,
    domain: 2,
    type: "single",
    question: "In the AWS Shared Responsibility Model, what is AWS responsible for?",
    options: [
      "Managing customer data encryption",
      "Configuring security groups",
      "Managing the underlying infrastructure and physical hardware",
      "Setting up IAM policies"
    ],
    answer: [2],
    explanation: "AWS is responsible for managing the underlying infrastructure including physical hardware, networking, and facilities that run AWS Cloud services (security OF the cloud)."
  },
  {
    id: 27,
    domain: 2,
    type: "multiple",
    question: "Which of the following are customer responsibilities under the AWS Shared Responsibility Model? (Select TWO)",
    options: [
      "Patching the guest OS on EC2 instances",
      "Physical security of data centers",
      "Configuring security groups and NACLs",
      "Maintaining the underlying hypervisor",
      "Managing the global network infrastructure"
    ],
    answer: [0, 2],
    explanation: "For EC2 (IaaS), the customer patches the guest OS and configures security groups/NACLs. AWS manages the physical data centers, the hypervisor, and the global network infrastructure."
  },
  {
    id: 28,
    domain: 2,
    type: "multiple",
    question: "Which of the following AWS services are used for security and threat detection? (Select TWO)",
    options: [
      "Amazon GuardDuty",
      "AWS Artifact",
      "Amazon Inspector",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    answer: [0, 2],
    explanation: "Amazon GuardDuty detects malicious activities and threats using anomaly-based detection. Amazon Inspector evaluates the security of applications by scanning for vulnerabilities."
  },
  {
    id: 29,
    domain: 2,
    type: "single",
    question: "Which AWS service provides access to security and compliance documentation and reports such as SOC and PCI reports?",
    options: [
      "AWS GuardDuty",
      "AWS Shield",
      "AWS Artifact",
      "AWS Config"
    ],
    answer: [2],
    explanation: "AWS Artifact provides access to security and compliance documentation and reports for AWS accounts, including SOC and PCI reports to support security controls and compliance requirements."
  },
  {
    id: 30,
    domain: 2,
    type: "single",
    question: "Which AWS service automatically detects malicious activities and threats using anomaly-based detection?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Inspector"
    ],
    answer: [2],
    explanation: "Amazon GuardDuty automatically detects malicious activities and threats using anomaly-based detection techniques and provides real-time alerts for identity theft, network attacks, and behavioral anomalies."
  },
  {
    id: 31,
    domain: 2,
    type: "single",
    question: "Which AWS service protects against Distributed Denial of Service (DDoS) attacks?",
    options: [
      "AWS WAF",
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS Inspector"
    ],
    answer: [1],
    explanation: "AWS Shield protects against DDoS attacks and is available globally on Amazon CloudFront Edge Locations. It provides automatic DDoS protection for EC2, ELB, CloudFront, Route 53, and Global Accelerator."
  },
  {
    id: 32,
    domain: 2,
    type: "single",
    question: "AWS WAF provides protection at which OSI layer?",
    options: [
      "Layer 3 (Network)",
      "Layer 4 (Transport)",
      "Layer 7 (Application)",
      "Layer 2 (Data Link)"
    ],
    answer: [2],
    explanation: "AWS WAF provides protection at Layer 7 (Application Layer), protecting against web exploits like SQL injection and cross-site scripting, with rule creation, rate limiting, and IP blocking."
  },
  {
    id: 33,
    domain: 2,
    type: "single",
    question: "Which AWS service provides logging and auditing by recording API calls and actions made within your AWS account?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    answer: [1],
    explanation: "AWS CloudTrail is a logging and auditing service that records API calls and actions made within your account for security and compliance analysis."
  },
  {
    id: 34,
    domain: 2,
    type: "single",
    question: "Which service collects and tracks metrics, logs, and events for AWS resources and enables automated actions based on alarms?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Trusted Advisor"
    ],
    answer: [2],
    explanation: "Amazon CloudWatch is a monitoring and management service that collects and tracks metrics, logs, and events. CloudWatch logs are encrypted by default using AWS KMS."
  },
  {
    id: 35,
    domain: 2,
    type: "multiple",
    question: "Which of the following statements about IAM Users and IAM Roles are true? (Select TWO)",
    options: [
      "IAM Users are directly associated with access keys and passwords",
      "IAM Roles can be used to log in directly with a password",
      "IAM Roles provide temporary permissions without direct login",
      "IAM Users cannot access any AWS services",
      "IAM Roles and IAM Users are identical in functionality"
    ],
    answer: [0, 2],
    explanation: "IAM Users have direct credentials (access keys/passwords). IAM Roles are not associated with IDs or passwords; they provide temporary permissions to services or users, frequently used to grant EC2 instances access to AWS services."
  },
  {
    id: 36,
    domain: 2,
    type: "single",
    question: "Which IAM entity is used to organize and manage multiple AWS users with common permissions?",
    options: [
      "IAM Role",
      "IAM Policy",
      "IAM User Group",
      "IAM User"
    ],
    answer: [2],
    explanation: "IAM User Groups organize and manage multiple users with common permissions. A policy assigned to a group is automatically applied to all users in that group."
  },
  {
    id: 37,
    domain: 2,
    type: "single",
    question: "Which IAM entity should you use to grant an EC2 instance access to an S3 bucket without embedding credentials?",
    options: [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "IAM Policy"
    ],
    answer: [2],
    explanation: "IAM Roles are used to transfer permissions to AWS services for a certain period. They are frequently used to grant EC2 instances secure access to AWS services like S3 without embedding credentials."
  },
  {
    id: 38,
    domain: 2,
    type: "single",
    question: "Which of the following tasks can ONLY be performed by the AWS root user?",
    options: [
      "Creating IAM users",
      "Launching EC2 instances",
      "Changing the account name",
      "Creating S3 buckets"
    ],
    answer: [2],
    explanation: "The root user has special privileges including changing the account name, managing billing and payments, closing accounts, and managing security settings. It is best practice to avoid root for everyday tasks."
  },
  {
    id: 39,
    domain: 2,
    type: "single",
    question: "What is the principle of least privilege in IAM?",
    options: [
      "Granting all permissions to all users",
      "Granting only the permissions needed to perform specific tasks",
      "Granting admin access to developers",
      "Granting permissions based on job title"
    ],
    answer: [1],
    explanation: "The principle of least privilege means granting only the minimum permissions necessary for users to perform their specific tasks, reducing security risk by limiting potential blast radius."
  },
  {
    id: 40,
    domain: 2,
    type: "single",
    question: "Which AWS service provides best practice recommendations in four categories: cost optimization, performance, security, and fault tolerance?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS GuardDuty",
      "AWS Security Hub"
    ],
    answer: [1],
    explanation: "AWS Trusted Advisor provides best practice recommendations across cost optimization, performance, security, and fault tolerance to help optimize AWS resources and detect security vulnerabilities."
  },
  {
    id: 41,
    domain: 2,
    type: "single",
    question: "Security Groups in AWS operate at which level and are what type of firewall?",
    options: [
      "Subnet-level, stateless",
      "Instance-level, stateful",
      "Subnet-level, stateful",
      "Instance-level, stateless"
    ],
    answer: [1],
    explanation: "Security Groups operate at the instance level and are stateful, meaning they automatically allow return traffic for allowed inbound connections."
  },
  {
    id: 42,
    domain: 2,
    type: "single",
    question: "Network ACLs (NACLs) differ from Security Groups because NACLs are:",
    options: [
      "Stateful and operate at the instance level",
      "Stateless and operate at the subnet level",
      "Stateful and operate at the subnet level",
      "Stateless and operate at the instance level"
    ],
    answer: [1],
    explanation: "NACLs are stateless and operate at the subnet level with ordered numbered rules. They support both allow and deny rules, unlike Security Groups which only allow."
  },
  {
    id: 43,
    domain: 2,
    type: "single",
    question: "Which AWS service detects configuration changes and incompatibilities in AWS resources for security and compliance management?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Security Hub"
    ],
    answer: [1],
    explanation: "AWS Config detects configuration changes and incompatibilities, stores configurations in S3, visually presents resource relationships, and checks for compliance with specified rules."
  },
  {
    id: 44,
    domain: 2,
    type: "multiple",
    question: "AWS Shield provides automatic DDoS protection for which of the following AWS services? (Select TWO)",
    options: [
      "Amazon EC2",
      "Amazon EBS volumes without any load balancer",
      "Amazon CloudFront",
      "Amazon RDS only in Multi-AZ deployments",
      "AWS IAM"
    ],
    answer: [0, 2],
    explanation: "AWS Shield provides automatic DDoS protection for Amazon EC2, Elastic Load Balancing, Amazon CloudFront, Amazon Route 53, and AWS Global Accelerator."
  },
  {
    id: 45,
    domain: 2,
    type: "single",
    question: "Which AWS service is the central security and compliance service that aggregates security alerts from multiple AWS services?",
    options: [
      "Amazon GuardDuty",
      "AWS Inspector",
      "AWS Security Hub",
      "AWS Shield"
    ],
    answer: [2],
    explanation: "AWS Security Hub is the central security and compliance service that aggregates alerts from multiple AWS services and provides a comprehensive security dashboard."
  },
  {
    id: 46,
    domain: 2,
    type: "single",
    question: "Which AWS service evaluates the security and compliance of applications deployed on AWS by scanning for vulnerabilities?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon Inspector",
      "AWS Artifact"
    ],
    answer: [2],
    explanation: "Amazon Inspector automatically evaluates security and compliance of applications, scanning for vulnerabilities and compatibility issues, and creates reports with suggestions."
  },
  {
    id: 47,
    domain: 2,
    type: "multiple",
    question: "Which of the following describe ways to protect data in AWS? (Select TWO)",
    options: [
      "Encryption in transit",
      "Disabling all IAM policies",
      "Encryption at rest",
      "Sharing root user credentials with all team members",
      "Using public S3 buckets for sensitive data"
    ],
    answer: [0, 2],
    explanation: "Encryption in transit protects data while being transmitted (using TLS/SSL). Encryption at rest protects data stored on disks. Both are key AWS security best practices."
  },
  {
    id: 48,
    domain: 2,
    type: "single",
    question: "Multi-factor authentication (MFA) adds security by requiring:",
    options: [
      "Only a password",
      "A password and an additional verification factor",
      "Two different passwords",
      "An access key only"
    ],
    answer: [1],
    explanation: "MFA adds security by requiring a password plus an additional verification factor such as a code from a hardware token or mobile app, significantly strengthening authentication."
  },
  {
    id: 49,
    domain: 2,
    type: "single",
    question: "Which AWS service provides a personalized view of the health of AWS services and alerts when your resources are impacted?",
    options: [
      "AWS CloudTrail",
      "AWS Health Dashboard",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    answer: [1],
    explanation: "AWS Health Dashboard (Personal Health Dashboard) provides a personalized view of AWS service health and alerts when your resources are impacted."
  },
  {
    id: 50,
    domain: 2,
    type: "single",
    question: "In the shared responsibility model, who is responsible for patching the operating system when using Amazon EC2?",
    options: [
      "AWS",
      "The customer",
      "Both AWS and the customer equally",
      "Neither - it is automated"
    ],
    answer: [1],
    explanation: "For EC2 (IaaS), the customer is responsible for patching the guest operating system. AWS manages the physical infrastructure and hypervisor."
  },
  {
    id: 51,
    domain: 2,
    type: "single",
    question: "Which service allows you to securely store and manage configuration data, passwords, and secrets with encryption using KMS?",
    options: [
      "AWS CloudTrail",
      "AWS Systems Manager Parameter Store",
      "AWS Config",
      "Amazon CloudWatch"
    ],
    answer: [1],
    explanation: "AWS Systems Manager Parameter Store securely stores configuration data, passwords, and secrets with version control, IAM integration, and KMS encryption of sensitive data."
  },
  {
    id: 52,
    domain: 2,
    type: "multiple",
    question: "Which of the following statements about Security Groups are correct? (Select TWO)",
    options: [
      "They are stateless firewalls",
      "They support deny rules",
      "They accept IP addresses, IP address ranges, and security group IDs",
      "They operate at the instance level",
      "They require numerical rule numbers"
    ],
    answer: [2, 3],
    explanation: "Security Groups operate at the instance level and accept IP addresses, IP address ranges, and security group IDs as source/destination. They are stateful and only support allow rules (no numerical rule numbers)."
  },
  {
    id: 53,
    domain: 2,
    type: "single",
    question: "Which AWS service provides disaster recovery with low RTO and RPO by replicating application data in real time?",
    options: [
      "AWS Config",
      "AWS CloudEndure",
      "AWS Inspector",
      "AWS Artifact"
    ],
    answer: [1],
    explanation: "AWS CloudEndure is a disaster recovery solution that replicates applications to cloud environments with low RTO and RPO, replicating data in real time and automatically converting source types."
  },
  {
    id: 54,
    domain: 2,
    type: "single",
    question: "Which AWS service provides a central dashboard for security and compliance status across AWS accounts?",
    options: [
      "AWS Security Hub",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    answer: [0],
    explanation: "AWS Security Hub continuously monitors the security status of assets in AWS and shows the security profile in your AWS environment in a central dashboard."
  },
  {
    id: 55,
    domain: 3,
    type: "single",
    question: "Which EC2 instance type is ideal for workloads that require high vCPUs to memory ratio, such as scientific modeling and batch processing?",
    options: [
      "General Purpose",
      "Compute Optimized",
      "Memory Optimized",
      "Storage Optimized"
    ],
    answer: [1],
    explanation: "Compute-optimized instances have a high vCPUs to memory ratio and are ideal for scientific modeling, batch processing, and gaming servers."
  },
  {
    id: 56,
    domain: 3,
    type: "single",
    question: "Which EC2 instance type is designed for large in-memory processing, such as in-memory databases and real-time big data analytics?",
    options: [
      "General Purpose",
      "Compute Optimized",
      "Memory Optimized",
      "Accelerated Computing"
    ],
    answer: [2],
    explanation: "Memory-optimized instances are designed for large in-memory processing, perfect for in-memory databases and real-time big data analytics."
  },
  {
    id: 57,
    domain: 3,
    type: "single",
    question: "Which EC2 instance type uses hardware accelerators like GPUs for machine learning and video processing?",
    options: [
      "Compute Optimized",
      "Storage Optimized",
      "Accelerated Computing",
      "General Purpose"
    ],
    answer: [2],
    explanation: "Accelerated computing instances use hardware accelerators like GPUs for machine learning, video processing, and high-performance computing."
  },
  {
    id: 58,
    domain: 3,
    type: "single",
    question: "Which EC2 instance type has high sequential read/write access and is great for distributed file systems and data warehousing?",
    options: [
      "General Purpose",
      "Storage Optimized",
      "Memory Optimized",
      "Accelerated Computing"
    ],
    answer: [1],
    explanation: "Storage optimized instances provide high sequential read/write access, making them great for distributed file systems and data warehousing."
  },
  {
    id: 59,
    domain: 3,
    type: "single",
    question: "An instance store provides what type of storage?",
    options: [
      "Permanent block-level storage replicated across AZs",
      "Temporary block-level storage on disks physically attached to the host",
      "Scalable file storage shared across instances",
      "Object storage with 11 nines durability"
    ],
    answer: [1],
    explanation: "Instance store provides temporary block-level storage on disks physically attached to the host. It is ideal for buffers, caches, scratch data, and temporary content."
  },
  {
    id: 60,
    domain: 3,
    type: "single",
    question: "Which S3 storage class is ideal for data with unknown or changing access patterns?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
      "S3 Glacier Instant Retrieval"
    ],
    answer: [2],
    explanation: "S3 Intelligent-Tiering is ideal for data with unknown or changing access patterns. It requires a small monthly monitoring and automation fee per object."
  },
  {
    id: 61,
    domain: 3,
    type: "single",
    question: "Which S3 storage class provides the lowest cost for long-term archival storage with retrieval within 12 to 48 hours?",
    options: [
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA"
    ],
    answer: [2],
    explanation: "S3 Glacier Deep Archive is the lowest-cost archival storage class, suitable for long-term archiving with data retrieval within 12 to 48 hours."
  },
  {
    id: 62,
    domain: 3,
    type: "single",
    question: "Which S3 storage class stores data in a single Availability Zone and is suitable for data that can be recreated?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Intelligent-Tiering"
    ],
    answer: [2],
    explanation: "S3 One Zone-IA stores data in a single AZ for cost savings, suitable for less frequently accessed data that can be recreated, with a 30-day minimum storage duration."
  },
  {
    id: 63,
    domain: 3,
    type: "multiple",
    question: "Amazon S3 pricing is based on which of the following factors? (Select TWO)",
    options: [
      "Total amount of data stored (in GB)",
      "Number of EC2 instances running",
      "Storage class selected",
      "Number of IAM users in the account",
      "Number of VPC peering connections"
    ],
    answer: [0, 2],
    explanation: "S3 pricing is based on: (1) total data stored in GB, (2) storage class, (3) data transferred out of AWS from S3, and (4) number of requests to S3."
  },
  {
    id: 64,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a managed relational database with support for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon ElastiCache",
      "Amazon Redshift"
    ],
    answer: [1],
    explanation: "Amazon RDS is a managed relational database service supporting multiple engines: MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB with automated backups and Multi-AZ high availability."
  },
  {
    id: 65,
    domain: 3,
    type: "single",
    question: "Which AWS database service is best suited for NoSQL workloads with single-digit millisecond latency?",
    options: [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon ElastiCache"
    ],
    answer: [2],
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast, predictable performance with single-digit millisecond latency at any scale."
  },
  {
    id: 66,
    domain: 3,
    type: "single",
    question: "Which AWS database service provides in-memory caching to improve application performance?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Redshift"
    ],
    answer: [2],
    explanation: "Amazon ElastiCache is a managed in-memory database service that provides caching to significantly improve read performance for applications."
  },
  {
    id: 67,
    domain: 3,
    type: "single",
    question: "Which component of a VPC connects it to the internet and allows instances to directly communicate with the internet?",
    options: [
      "Virtual Private Gateway",
      "NAT Gateway",
      "Internet Gateway",
      "VPC Peering"
    ],
    answer: [2],
    explanation: "An Internet Gateway (IGW) connects a VPC to the internet and allows instances in the VPC to directly communicate with the internet. It is essential for public subnets."
  },
  {
    id: 68,
    domain: 3,
    type: "single",
    question: "Which VPC component allows instances in a private subnet to initiate outbound traffic to the internet while preventing unsolicited inbound traffic?",
    options: [
      "Internet Gateway",
      "NAT Gateway",
      "Virtual Private Gateway",
      "VPC Peering"
    ],
    answer: [1],
    explanation: "A NAT Gateway allows instances in a private subnet to initiate outbound traffic (e.g., for patches/updates) while preventing unsolicited inbound traffic. It is managed by AWS."
  },
  {
    id: 69,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a dedicated network connection from on-premises to AWS, bypassing the public internet?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "VPC Peering",
      "Internet Gateway"
    ],
    answer: [1],
    explanation: "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, bypassing the public internet for more consistent performance and potentially lower costs."
  },
  {
    id: 70,
    domain: 3,
    type: "single",
    question: "Which VPC component is used to connect two VPCs together for private, high-speed communication?",
    options: [
      "VPC Peering",
      "Internet Gateway",
      "NAT Gateway",
      "Virtual Private Gateway"
    ],
    answer: [0],
    explanation: "VPC Peering allows direct network connectivity between two VPCs for private, high-speed communication without routing traffic through the internet."
  },
  {
    id: 71,
    domain: 3,
    type: "single",
    question: "A subnet that does not have direct internet access and is suitable for hosting resources requiring enhanced security is called a:",
    options: [
      "Public subnet",
      "Private subnet",
      "Edge subnet",
      "Global subnet"
    ],
    answer: [1],
    explanation: "A private subnet does not have direct internet access, making it suitable for hosting resources requiring enhanced security or internal communication within the VPC."
  },
  {
    id: 72,
    domain: 3,
    type: "single",
    question: "Which load balancer operates at Layer 7 (Application Layer) and is best for HTTP/HTTPS traffic?",
    options: [
      "Network Load Balancer",
      "Classic Load Balancer",
      "Application Load Balancer",
      "Gateway Load Balancer"
    ],
    answer: [2],
    explanation: "Application Load Balancer (ALB) operates at Layer 7 and is best for HTTP/HTTPS traffic, supporting URL path-based redirection and HTTPS by default."
  },
  {
    id: 73,
    domain: 3,
    type: "single",
    question: "Which load balancer operates at Layer 4 (Transport Layer) and is designed for TCP/UDP traffic with ultra-low latency?",
    options: [
      "Application Load Balancer",
      "Network Load Balancer",
      "Classic Load Balancer",
      "Gateway Load Balancer"
    ],
    answer: [1],
    explanation: "Network Load Balancer (NLB) operates at Layer 4 and is designed for TCP, UDP, and TLS traffic with high performance and ultra-low latencies."
  },
  {
    id: 74,
    domain: 3,
    type: "single",
    question: "Which AWS service allows you to run code without provisioning or managing servers?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS",
      "AWS Batch"
    ],
    answer: [1],
    explanation: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume."
  },
  {
    id: 75,
    domain: 3,
    type: "single",
    question: "Which AWS service provides scalable file storage that can be shared simultaneously by multiple EC2 instances?",
    options: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    answer: [2],
    explanation: "Amazon EFS is a scalable file storage service that can be shared simultaneously by multiple EC2 instances. It is elastic, with data replicated across multiple AZs (regional service)."
  },
  {
    id: 76,
    domain: 3,
    type: "single",
    question: "What is the key difference between Amazon EBS and Amazon EFS?",
    options: [
      "EBS is object storage; EFS is block storage",
      "EBS is block storage for a single instance; EFS is file storage shared across multiple instances",
      "EBS is only for S3; EFS is only for EC2",
      "There is no difference"
    ],
    answer: [1],
    explanation: "EBS provides block-level storage for individual EC2 instances. EFS provides scalable file storage that can be shared by multiple EC2 instances simultaneously across multiple AZs."
  },
  {
    id: 77,
    domain: 3,
    type: "single",
    question: "Which AWS service is used for DNS management and domain name registration?",
    options: [
      "AWS Direct Connect",
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS VPN"
    ],
    answer: [1],
    explanation: "Amazon Route 53 is a scalable DNS web service that routes end-user requests to infrastructure running in AWS or on-premises. It is a global service."
  },
  {
    id: 78,
    domain: 3,
    type: "single",
    question: "Which AWS service is a global content delivery network (CDN) that caches content at edge locations?",
    options: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Global Accelerator"
    ],
    answer: [2],
    explanation: "Amazon CloudFront is a CDN that delivers content through a global network of edge locations, caching content closer to users for lower latency."
  },
  {
    id: 79,
    domain: 3,
    type: "single",
    question: "Which AWS Snow Family member is designed for exabyte-scale data transfers using a shipping container-sized truck?",
    options: [
      "AWS Snowcone",
      "AWS Snowball",
      "AWS Snowmobile",
      "AWS Snowball Edge"
    ],
    answer: [2],
    explanation: "AWS Snowmobile is a massive data migration solution for exabyte-scale datasets, using a 45-foot shipping container that can transfer up to 100 PB per unit."
  },
  {
    id: 80,
    domain: 3,
    type: "single",
    question: "Which AWS Snow Family member has 2 CPUs, 4 GB memory, and up to 14 TB of usable storage?",
    options: [
      "AWS Snowball",
      "AWS Snowcone",
      "AWS Snowmobile",
      "AWS Snowball Edge"
    ],
    answer: [1],
    explanation: "AWS Snowcone is a small, rugged, portable device with 2 CPUs, 4 GB memory, and up to 14 TB usable storage for edge computing and data transfer in constrained environments."
  },
  {
    id: 81,
    domain: 3,
    type: "single",
    question: "Which AWS AI service is used for natural language processing (NLP) to analyze text data?",
    options: [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Lex",
      "Amazon Kendra"
    ],
    answer: [1],
    explanation: "Amazon Comprehend is an NLP service that analyzes text data to gain insights about content including sentiment, entities, and key phrases."
  },
  {
    id: 82,
    domain: 3,
    type: "single",
    question: "Which AWS service is a machine learning-powered enterprise search service?",
    options: [
      "Amazon Comprehend",
      "Amazon Kendra",
      "Amazon Lex",
      "Amazon Polly"
    ],
    answer: [1],
    explanation: "Amazon Kendra is an ML-powered enterprise search service that allows companies to easily discover their content through natural language searches."
  },
  {
    id: 83,
    domain: 3,
    type: "single",
    question: "Which AWS service allows you to run SQL queries on data stored in S3 without managing any infrastructure?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "AWS Glue"
    ],
    answer: [1],
    explanation: "Amazon Athena is a serverless query service that runs SQL queries on S3 data. You pay based on the amount of data scanned by each query."
  },
  {
    id: 84,
    domain: 3,
    type: "single",
    question: "Which of the following is a serverless compute option for running containers without managing servers?",
    options: [
      "Amazon EC2",
      "AWS Fargate",
      "Amazon ECS on EC2",
      "AWS Batch"
    ],
    answer: [1],
    explanation: "AWS Fargate is a serverless compute option for containers (ECS and EKS) that eliminates the need to manage servers - you just define tasks and Fargate runs them."
  },
  {
    id: 85,
    domain: 3,
    type: "multiple",
    question: "Which of the following are AWS serverless services? (Select TWO)",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon EFS"
    ],
    answer: [0, 2],
    explanation: "AWS Lambda (serverless compute) and Amazon DynamoDB (serverless NoSQL database) are serverless services. EC2, RDS, and EFS require managing underlying resources."
  },
  {
    id: 86,
    domain: 3,
    type: "single",
    question: "Which AWS service is used for infrastructure as code (IaC) to provision and manage AWS resources using templates?",
    options: [
      "AWS Systems Manager",
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "AWS Config"
    ],
    answer: [1],
    explanation: "AWS CloudFormation enables infrastructure as code by using templates to provision and manage AWS resources in a predictable and repeatable manner."
  },
  {
    id: 87,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a managed message queue for decoupling microservices and distributed systems?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    answer: [1],
    explanation: "Amazon SQS (Simple Queue Service) is a managed message queue service for decoupling microservices and distributed systems."
  },
  {
    id: 88,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a managed publish/subscribe messaging service for sending notifications and alerts?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    answer: [1],
    explanation: "Amazon SNS (Simple Notification Service) is a managed pub/sub messaging service for sending notifications, alerts, and messages to distributed systems."
  },
  {
    id: 89,
    domain: 4,
    type: "single",
    question: "Which EC2 pricing option is ideal for short-term, irregular workloads that cannot be interrupted?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts"
    ],
    answer: [2],
    explanation: "On-Demand Instances are ideal for short-term, irregular workloads that cannot be interrupted. They have no upfront costs and use pay-as-you-go pricing."
  },
  {
    id: 90,
    domain: 4,
    type: "single",
    question: "Which EC2 pricing option can provide up to 90% discount but may be interrupted?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans"
    ],
    answer: [2],
    explanation: "Spot Instances can provide up to 90% discount compared to On-Demand pricing, but they can be interrupted when AWS needs the capacity back."
  },
  {
    id: 91,
    domain: 4,
    type: "single",
    question: "Which EC2 pricing model offers a discount in exchange for a 1-year or 3-year commitment?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    answer: [2],
    explanation: "Reserved Instances offer significant discounts in exchange for a 1-year or 3-year commitment. They come in Standard and Convertible types."
  },
  {
    id: 92,
    domain: 4,
    type: "multiple",
    question: "Which of the following AWS services help with cost management and budgeting? (Select TWO)",
    options: [
      "AWS Budgets",
      "AWS Trusted Advisor",
      "Amazon CloudFront",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    answer: [0, 1],
    explanation: "AWS Budgets lets you set custom spending limits and receive alerts. AWS Trusted Advisor provides cost optimization recommendations. CloudFront, Shield, and GuardDuty are not cost management services."
  },
  {
    id: 93,
    domain: 4,
    type: "single",
    question: "Which AWS tool helps you estimate the cost of AWS services before deploying resources?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report"
    ],
    answer: [2],
    explanation: "AWS Pricing Calculator is an online tool to estimate AWS service costs, helping plan and budget before deploying resources with user-friendly configuration and cost breakdowns."
  },
  {
    id: 94,
    domain: 4,
    type: "single",
    question: "Which AWS service provides the most granular data about AWS costs and usage, and can store reports in S3?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report (CUR)",
      "AWS Billing Dashboard"
    ],
    answer: [2],
    explanation: "The Cost and Usage Report (CUR) provides the most granular cost and usage data, can create hourly detailed reports stored in S3, and supports analysis by tags. Data can be loaded into Athena, Redshift, or QuickSight."
  },
  {
    id: 95,
    domain: 4,
    type: "single",
    question: "Which AWS service allows you to set custom spending limits and receive alerts when thresholds are reached?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    answer: [1],
    explanation: "AWS Budgets lets you set custom spending limits and receive alerts when thresholds are reached, providing real-time insights into usage, costs, and forecasts."
  },
  {
    id: 96,
    domain: 4,
    type: "single",
    question: "AWS Cost Explorer can forecast estimated expenses for how many months into the future?",
    options: [
      "3 months",
      "6 months",
      "12 months",
      "24 months"
    ],
    answer: [2],
    explanation: "AWS Cost Explorer can calculate estimated expenses for 12 months with high accuracy by analyzing past spending patterns and providing historical and forecasted cost information."
  },
  {
    id: 97,
    domain: 4,
    type: "single",
    question: "Which AWS Support plan includes a designated Technical Account Manager (TAM)?",
    options: [
      "Developer Support",
      "Business Support",
      "Enterprise On-Ramp Support",
      "Enterprise Support"
    ],
    answer: [3],
    explanation: "Enterprise Support includes a designated TAM who provides proactive guidance, architectural design assistance, and acts as a liaison between customers and AWS support teams."
  },
  {
    id: 98,
    domain: 4,
    type: "single",
    question: "Which AWS Support plan provides 24/7 phone and email technical support with a 1-hour response time?",
    options: [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    answer: [2],
    explanation: "Business Support provides 24/7 phone and email technical support with 1-hour response time, use-case guidance, all Trusted Advisor checks, and unlimited access to AWS Consultants."
  },
  {
    id: 99,
    domain: 4,
    type: "multiple",
    question: "Which of the following are benefits of AWS Consolidated Billing? (Select TWO)",
    options: [
      "One bill for all accounts in the organization",
      "Combined usage across accounts to share volume pricing discounts",
      "Each account receives a separate bill",
      "It costs an additional monthly fee to use",
      "It only works for accounts in the same Region"
    ],
    answer: [0, 1],
    explanation: "Consolidated Billing provides one bill, easy tracking, no extra fee, and combined usage across accounts to share volume pricing discounts, Reserved Instance discounts, and Savings Plans."
  },
  {
    id: 100,
    domain: 4,
    type: "single",
    question: "Which AWS Support plan is the only standard-level plan that includes Infrastructure Event Management (IEM) as a standard feature?",
    options: [
      "Business Support",
      "Enterprise On-Ramp Support",
      "Enterprise Support",
      "Developer Support"
    ],
    answer: [2],
    explanation: "Enterprise Support includes Infrastructure Event Management (IEM) as a standard feature. Enterprise On-Ramp includes one IEM per year."
  },
  {
    id: 101,
    domain: 1,
    type: "single",
    question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    options: [
      "Replacing an existing EC2 instance with a larger, more powerful one",
      "Increasing the compute capacity of a single EC2 instance to address growing demands",
      "Adding more RAM capacity to an EC2 instance",
      "Adding more EC2 instances of the same size to handle an increase in traffic"
    ],
    answer: [3],
    explanation: "Horizontal scaling (scaling out) means adding more instances of the same size. Replacing with a larger instance or adding RAM is vertical scaling (scaling up)."
  },
{
    id: 102,
    domain: 1,
    type: "single",
    question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    options: [
      "Deploy the application across multiple Availability Zones and Edge locations",
      "Deploy the application across multiple Availability Zones and subnets",
      "Deploy the application across multiple Regions and Availability Zones",
      "Deploy the application across multiple VPC's and subnets"
    ],
    answer: [2],
    explanation: "Deploying across multiple Regions and Availability Zones provides the highest availability, protecting against both AZ-level and Region-level failures."
  },
{
    id: 103,
    domain: 1,
    type: "single",
    question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    options: [
      "Build security in every layer",
      "Parallelize tasks",
      "Implement elasticity",
      "Adopt monolithic architecture"
    ],
    answer: [2],
    explanation: "Elasticity means dynamically adjusting compute capacity to match demand, which reduces cost by scaling up only when needed and scaling down when demand decreases."
  },
{
    id: 104,
    domain: 1,
    type: "multiple",
    question: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    options: [
      "Increasing speed and agility",
      "There is no need to worry about security",
      "Gaining complete control over the physical infrastructure",
      "Operating applications on behalf of customers",
      "All of the physical security and most of the data/network security are taken care of for you"
    ],
    answer: [0, 4],
    explanation: "AWS increases speed and agility through rapid provisioning and takes care of physical security and most of the data/network security under the shared responsibility model."
  },
{
    id: 105,
    domain: 1,
    type: "single",
    question: "What is the advantage of the AWS-recommended practice of \"decoupling\" applications?",
    options: [
      "Allows treating an application as a single, cohesive unit",
      "Reduces inter-dependencies so that failures do not impact other components of the application",
      "Allows updates of any monolithic application quickly and easily",
      "Allows tracking of any API call made to any AWS service"
    ],
    answer: [1],
    explanation: "Decoupling reduces inter-dependencies between components so that failure of one component does not cascade and impact other components."
  },
{
    id: 106,
    domain: 1,
    type: "single",
    question: "One of the most important AWS best-practices is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
    options: [
      "By automatically scaling your on-premises resources based on changes in demand",
      "By automatically scaling your AWS resources using an Elastic Load Balancer",
      "By reducing interdependencies between application components wherever possible",
      "By automatically provisioning the required AWS resources based on changes in demand"
    ],
    answer: [3],
    explanation: "Elasticity automatically provisions required AWS resources based on changes in demand, ensuring you have enough capacity during spikes and save money during low demand."
  },
{
    id: 107,
    domain: 1,
    type: "single",
    question: "Which of the following does NOT belong to the AWS Cloud Computing models?",
    options: [
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Software as a Service (SaaS)",
      "Networking as a Service (NaaS)"
    ],
    answer: [3],
    explanation: "The three main cloud computing models are IaaS, PaaS, and SaaS. NaaS (Networking as a Service) is not one of the standard AWS cloud computing models."
  },
{
    id: 108,
    domain: 1,
    type: "multiple",
    question: "The principle \"design for failure and nothing will fail\" is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      "Multi-factor authentication",
      "Availability Zones",
      "Elastic Load Balancing",
      "Penetration testing",
      "Vertical Scaling"
    ],
    answer: [1, 2],
    explanation: "Using multiple Availability Zones and Elastic Load Balancing helps design for failure by distributing workloads across isolated locations and routing traffic only to healthy targets."
  },
{
    id: 109,
    domain: 1,
    type: "single",
    question: "Which of the below is a best-practice when building applications on AWS?",
    options: [
      "Strengthen physical security by applying the principle of least privilege",
      "Ensure that the application runs on hardware from trusted vendors",
      "Use IAM policies to maintain performance",
      "Decouple the components of the application so that they run independently"
    ],
    answer: [3],
    explanation: "Decoupling components so they run independently is a core AWS best practice, reducing inter-dependencies and making the system more resilient to failures."
  },
{
    id: 110,
    domain: 1,
    type: "multiple",
    question: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      "Always use Global Services in your architecture rather than Regional Services",
      "Always choose to pay as you go",
      "Treat servers as fixed resources",
      "Automate wherever possible",
      "Remove single points of failure"
    ],
    answer: [3, 4],
    explanation: "AWS design principles recommend automating wherever possible and removing single points of failure to build resilient, efficient architectures."
  },
{
    id: 111,
    domain: 1,
    type: "single",
    question: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
    options: [
      "Elasticity",
      "Global reach",
      "Data durability",
      "High availability"
    ],
    answer: [1],
    explanation: "Global reach allows you to deploy applications in multiple Regions around the world, bringing content closer to international users and reducing latency."
  },
{
    id: 112,
    domain: 1,
    type: "single",
    question: "Which of the following statements describes the AWS Cloud's agility?",
    options: [
      "AWS allows you to host your applications in multiple regions around the world",
      "AWS provides customizable hardware at the lowest possible cost",
      "AWS allows you to provision resources in minutes",
      "AWS allows you to pay upfront to reduce costs"
    ],
    answer: [2],
    explanation: "Agility in AWS means new IT resources are only a click away, reducing the time to make resources available from weeks to just minutes, enabling rapid experimentation and development."
  },
{
    id: 113,
    domain: 1,
    type: "single",
    question: "A company is using EC2 Instances to run their e-commerce site on AWS. If the site becomes unavailable, the company will lose a significant amount of money. Which design principle should the company use to minimize the risk of an outage?",
    options: [
      "Least Privilege",
      "Pilot Light",
      "Fault Tolerance",
      "Multi-threading"
    ],
    answer: [2],
    explanation: "Fault tolerance ensures the system continues operating despite component failures, minimizing the risk of outage for business-critical applications."
  },
{
    id: 114,
    domain: 1,
    type: "multiple",
    question: "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    options: [
      "AWS allows them to pay later when their business succeeds",
      "AWS can build complete data centers faster than any other Cloud provider",
      "Using AWS, they can reduce time-to-market by focusing on business activities rather than building and managing data centers",
      "AWS removes the need to invest in operational expenditure",
      "Using AWS allows companies to replace large capital expenditure with low variable costs"
    ],
    answer: [2, 4],
    explanation: "Startups prefer AWS because it allows them to focus on business activities (reducing time-to-market) and replaces large upfront capital expenditure (CAPEX) with low variable operational costs (OPEX)."
  },
{
    id: 115,
    domain: 1,
    type: "single",
    question: "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    options: [
      "Elastic coupling",
      "Loosely coupling",
      "Scalable coupling",
      "Tightly coupling"
    ],
    answer: [1],
    explanation: "Loose coupling minimizes dependencies between components, ensuring failure of one component does not cascade and impact other components."
  },
{
    id: 116,
    domain: 1,
    type: "single",
    question: "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      "Invest heavily in architecting your environment, as it is not easy to change your design later",
      "Use AWS reservations to reduce costs when testing your production environment",
      "Automate wherever possible to make architectural experimentation easier",
      "Provision a large compute capacity to handle any spikes in load"
    ],
    answer: [2],
    explanation: "AWS recommends automating wherever possible, which allows for easier architectural experimentation since infrastructure can be defined as code and rapidly provisioned/modified."
  },
{
    id: 117,
    domain: 1,
    type: "single",
    question: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "The ability of a system to recover gracefully from failure",
      "The efficient use of computing resources to meet requirements",
      "The ability to monitor systems and improve supporting processes and procedures",
      "The ability to manage datacenter operations more efficiently"
    ],
    answer: [2],
    explanation: "Operational Excellence focuses on the ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures."
  },
{
    id: 118,
    domain: 1,
    type: "single",
    question: "Which deployment model connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
    options: [
      "On-premises",
      "Mixed",
      "Hybrid",
      "Cloud"
    ],
    answer: [2],
    explanation: "Hybrid deployment connects cloud-based resources with on-premises resources, allowing data and applications to be shared between them."
  },
{
    id: 119,
    domain: 1,
    type: "multiple",
    question: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    options: [
      "High availability",
      "Shared security model",
      "Elasticity",
      "Pay-as-you-go pricing",
      "Reliability"
    ],
    answer: [2, 3],
    explanation: "Elasticity allows resources to scale up and down with demand, and pay-as-you-go pricing means you only pay for what you use, making AWS cost effective for workloads with dynamic user demand."
  },
{
    id: 120,
    domain: 1,
    type: "multiple",
    question: "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
    options: [
      "Eliminates the need to monitor servers and applications",
      "Manages all the compliance and auditing tasks",
      "Provides custom hardware to meet any specification",
      "Eliminates the need to guess on infrastructure capacity needs",
      "Enables customers to trade their capital expenses for operational expenses"
    ],
    answer: [3, 4],
    explanation: "AWS eliminates the need to guess capacity (you can scale as needed) and enables trading capital expenses (CAPEX) for variable operational expenses (OPEX)."
  },
{
    id: 121,
    domain: 1,
    type: "single",
    question: "Which is a recommended pattern for designing a highly available architecture on AWS?",
    options: [
      "Ensure that components have low-latency network connectivity",
      "Run enough Amazon EC2 instances to operate at peak load",
      "Ensure that the application is designed to accommodate failure of any single component",
      "Use a monolithic application that handles all operations"
    ],
    answer: [2],
    explanation: "Designing for failure means ensuring the application can accommodate the failure of any single component, which is a key principle of highly available architectures on AWS."
  },
{
    id: 122,
    domain: 1,
    type: "single",
    question: "What is the benefit of the \"Loose Coupling\" architecture principle?",
    options: [
      "It eliminates the need for change management",
      "It allows for Cross-Region Replication",
      "It helps AWS customers reduce Privileged Access to AWS resources",
      "It allows individual application components or services to be modified without affecting other components"
    ],
    answer: [3],
    explanation: "Loose coupling allows individual components to be modified, updated, or fail without affecting other components, improving resilience and maintainability."
  },
{
    id: 123,
    domain: 1,
    type: "single",
    question: "Which of the following describes the AWS Cloud's global infrastructure?",
    options: [
      "Each Region contains exactly two Availability Zones",
      "AWS Regions are geographic locations with multiple Availability Zones",
      "Availability Zones are shared between Regions for redundancy",
      "Edge locations are the same as Availability Zones"
    ],
    answer: [1],
    explanation: "An AWS Region is a geographical location containing multiple Availability Zones. Each AZ is physically isolated from others to provide fault tolerance."
  },
{
    id: 124,
    domain: 1,
    type: "single",
    question: "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    options: [
      "AWS helps customers invest more in capital expenditures",
      "AWS automates all infrastructure operations, so customers save more on human resources costs",
      "AWS continues to lower the cost of cloud computing for its customers",
      "AWS secures AWS resources at no additional charge"
    ],
    answer: [2],
    explanation: "AWS continues to lower the cost of cloud computing through economies of scale and regular price reductions, widening the TCO gap with traditional infrastructure."
  },
{
    id: 125,
    domain: 2,
    type: "single",
    question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    options: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "EC2 Instance Usage Report"
    ],
    answer: [1],
    explanation: "AWS CloudTrail records API calls and actions made within your AWS account, allowing you to determine who terminated the EC2 instances by providing a trail of events."
  },
{
    id: 126,
    domain: 2,
    type: "single",
    question: "Which statement is true regarding the AWS Shared Responsibility Model?",
    options: [
      "Responsibilities vary depending on the services used",
      "Security of the IaaS services is the responsibility of AWS",
      "Patching the guest OS is always the responsibility of AWS",
      "Security of the managed services is the responsibility of the customer"
    ],
    answer: [0],
    explanation: "Responsibilities in the shared responsibility model vary depending on the service used. For IaaS (e.g., EC2), the customer patches the guest OS; for managed services (e.g., Lambda), AWS handles more."
  },
{
    id: 127,
    domain: 2,
    type: "multiple",
    question: "What should you do to keep the data on EBS volumes safe? (Choose TWO)",
    options: [
      "Regularly update firmware on EBS devices",
      "Create EBS snapshots",
      "Ensure that EBS data is encrypted at rest",
      "Store a backup daily in an external drive",
      "Prevent any unauthorized access to AWS data centers"
    ],
    answer: [1, 2],
    explanation: "Creating EBS snapshots (backups stored in S3) and encrypting EBS data at rest are customer responsibilities to protect data. AWS handles firmware and physical data center security."
  },
{
    id: 128,
    domain: 2,
    type: "single",
    question: "What does the \"Principle of Least Privilege\" refer to?",
    options: [
      "You should grant your users only the permissions they need when they need them and nothing more",
      "All IAM users should have at least the necessary permissions to access the core AWS services",
      "All trusted IAM users should have access to any AWS service in the respective AWS account",
      "IAM users should not be granted any permissions; to keep your account safe"
    ],
    answer: [0],
    explanation: "The principle of least privilege means granting only the permissions needed for specific tasks, and nothing more, to reduce security risk and minimize the blast radius of compromised credentials."
  },
{
    id: 129,
    domain: 2,
    type: "multiple",
    question: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What services does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
    options: [
      "AWS Shield",
      "AWS Config",
      "Amazon Cognito",
      "AWS WAF",
      "AWS KMS"
    ],
    answer: [0, 3],
    explanation: "AWS Shield provides DDoS protection, and AWS WAF (Web Application Firewall) helps protect against web exploits. Both work together to defend against different layers of attacks."
  },
{
    id: 130,
    domain: 2,
    type: "multiple",
    question: "Select TWO examples of the AWS shared controls.",
    options: [
      "Patch Management",
      "IAM Management",
      "VPC Management",
      "Configuration Management",
      "Data Center operations"
    ],
    answer: [0, 3],
    explanation: "Shared controls like Patch Management and Configuration Management apply to both the infrastructure layer and the customer layer, with responsibilities shared between AWS and the customer."
  },
{
    id: 131,
    domain: 2,
    type: "single",
    question: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    options: [
      "Client-side encryption",
      "Configuring infrastructure devices",
      "Server-side encryption",
      "Filtering traffic with Security Groups"
    ],
    answer: [1],
    explanation: "AWS is responsible for configuring infrastructure devices, managing the physical infrastructure and the hypervisor. Client-side encryption and security group configuration are customer responsibilities."
  },
{
    id: 132,
    domain: 2,
    type: "multiple",
    question: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Disk disposal",
      "Controlling physical access to compute resources",
      "Patching the Network infrastructure",
      "Setting password complexity rules",
      "Configuring network access rules"
    ],
    answer: [3, 4],
    explanation: "Customers are responsible for setting password complexity rules (IAM policies) and configuring network access rules (security groups, NACLs). AWS handles disk disposal, physical access, and network infrastructure patching."
  },
{
    id: 133,
    domain: 2,
    type: "single",
    question: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: [
      "Encrypted keys",
      "Email verification",
      "AWS KMS",
      "AWS MFA"
    ],
    answer: [3],
    explanation: "AWS MFA (Multi-Factor Authentication) adds an additional layer of security on top of usernames and passwords by requiring a second verification factor such as a code from a hardware token or mobile app."
  },
{
    id: 134,
    domain: 2,
    type: "single",
    question: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: [
      "AWS X-Ray",
      "Network ACL",
      "Security Groups",
      "VPC Flow logs"
    ],
    answer: [2],
    explanation: "Security Groups are associated with EC2 instances and act as instance-level stateful firewalls that filter incoming and outgoing traffic. NACLs operate at the subnet level."
  },
{
    id: 135,
    domain: 2,
    type: "multiple",
    question: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Managing environmental events of AWS data centers",
      "Protecting the confidentiality of data in transit in Amazon S3",
      "Controlling physical access to AWS Regions",
      "Ensuring that the underlying EC2 host is configured properly",
      "Patching applications installed on Amazon EC2"
    ],
    answer: [1, 4],
    explanation: "The customer is responsible for protecting data in transit (e.g., using TLS) and patching applications installed on EC2 instances. AWS manages data centers, physical access, and the underlying host."
  },
{
    id: 136,
    domain: 2,
    type: "multiple",
    question: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: [
      "Amazon Cognito",
      "AWS IAM",
      "Amazon Aurora",
      "AWS WAF",
      "AWS Shield"
    ],
    answer: [3],
    explanation: "AWS WAF (Web Application Firewall) protects web applications from common exploits like SQL injection and cross-site scripting (XSS) by filtering HTTP/HTTPS requests at Layer 7."
  },
{
    id: 137,
    domain: 2,
    type: "multiple",
    question: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      "Monitoring network performance",
      "Installing software on EC2 instances",
      "Creating hypervisors",
      "Configuring Access Control Lists (ACLs)",
      "Hardware maintenance"
    ],
    answer: [2, 4],
    explanation: "AWS is solely responsible for creating and maintaining hypervisors and performing hardware maintenance on the physical infrastructure. Installing software and configuring ACLs are customer responsibilities."
  },
{
    id: 138,
    domain: 2,
    type: "multiple",
    question: "Which of the following services allows you to deploy SSL server certificates? (Choose TWO)",
    options: [
      "Amazon Route 53",
      "AWS ACM",
      "AWS Directory Service",
      "AWS Identity & Access Management",
      "AWS Data Pipeline"
    ],
    answer: [1, 3],
    explanation: "AWS Certificate Manager (ACM) provisions and manages SSL/TLS certificates. IAM can also be used to upload and manage server certificates directly (legacy method)."
  },
{
    id: 139,
    domain: 2,
    type: "single",
    question: "Which AWS service is used to manage user permissions?",
    options: [
      "Security Groups",
      "Amazon ECS",
      "AWS IAM",
      "AWS Support"
    ],
    answer: [2],
    explanation: "AWS Identity and Access Management (IAM) is the service used to manage user permissions, allowing you to control access to AWS services and resources."
  },
{
    id: 140,
    domain: 2,
    type: "single",
    question: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    options: [
      "Key Pair",
      "Access Keys",
      "SDK",
      "MFA"
    ],
    answer: [3],
    explanation: "MFA (Multi-Factor Authentication) adds a layer of security by requiring a second authentication factor beyond just username and password."
  },
{
    id: 141,
    domain: 2,
    type: "single",
    question: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    options: [
      "IAM Users",
      "Key Pair",
      "IAM Roles",
      "IAM Groups"
    ],
    answer: [2],
    explanation: "IAM Roles provide temporary security credentials, making them ideal for granting temporary access to AWS resources for users, applications, or cross-account access scenarios."
  },
{
    id: 142,
    domain: 2,
    type: "multiple",
    question: "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    options: [
      "AWS Resource Groups",
      "IAM Policies",
      "IAM Roles",
      "IAM Users",
      "AWS Organizations"
    ],
    answer: [2, 3],
    explanation: "IAM Roles and IAM Users are types of IAM identities. Policies define permissions and Resource Groups and Organizations are separate AWS features, not IAM identity types."
  },
{
    id: 143,
    domain: 2,
    type: "single",
    question: "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudFront",
      "AWS CloudFormation",
      "Amazon CloudWatch"
    ],
    answer: [0],
    explanation: "AWS CloudTrail logs all API calls made in your AWS account, providing a complete audit trail of who accessed what resources. This is the go-to service for auditors."
  },
{
    id: 144,
    domain: 2,
    type: "single",
    question: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    options: [
      "SNS logs",
      "SQS logs",
      "CloudWatch Logs",
      "CloudTrail logs"
    ],
    answer: [3],
    explanation: "CloudTrail logs record all API calls including S3 bucket deletion, allowing the company to identify which IAM user or role performed the delete action."
  },
{
    id: 145,
    domain: 2,
    type: "multiple",
    question: "Which of the following are examples of the customer's responsibility to implement \"security IN the cloud\"? (Choose TWO)",
    options: [
      "Building a schema for an application",
      "Replacing physical hardware",
      "Creating a new hypervisor",
      "Patching management of the underlying infrastructure",
      "File system encryption"
    ],
    answer: [0, 4],
    explanation: "Security IN the cloud includes customer responsibilities like building database schemas and encrypting file systems. AWS handles physical hardware, hypervisors, and infrastructure patching (security OF the cloud)."
  },
{
    id: 146,
    domain: 2,
    type: "single",
    question: "A company is developing a new application using a microservices framework. The application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    options: [
      "AWS CodePipeline",
      "AWS X-Ray",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    answer: [1],
    explanation: "AWS X-Ray helps developers analyze and debug distributed applications, including microservices, by tracing requests as they travel through the application to identify performance bottlenecks."
  },
{
    id: 147,
    domain: 2,
    type: "single",
    question: "Which of the following strategies helps protect your AWS root account?",
    options: [
      "Delete root user access keys if you do not need them",
      "Apply MFA for the root account and use it for all of your work",
      "Access the root account only from your personal Mobile Phone",
      "Only share your AWS account password or access keys with trusted persons"
    ],
    answer: [0],
    explanation: "Deleting root user access keys when not needed is a best practice. You should also enable MFA on the root account and avoid using it for everyday tasks."
  },
{
    id: 148,
    domain: 2,
    type: "single",
    question: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    options: [
      "Using the AWS ACM service",
      "Using Security Bulletins",
      "Using the AWS Management Console",
      "Using Compliance Resources"
    ],
    answer: [1],
    explanation: "AWS publishes Security Bulletins to notify customers about security and privacy events, vulnerabilities, and patches related to AWS services."
  },
{
    id: 149,
    domain: 2,
    type: "single",
    question: "Which AWS service performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    options: [
      "Amazon Kinesis",
      "Security groups",
      "Amazon Inspector",
      "AWS Network Access Control Lists"
    ],
    answer: [2],
    explanation: "Amazon Inspector automatically assesses EC2 instances for vulnerabilities, security exposures, and deviations from best practices, generating detailed security assessment reports."
  },
{
    id: 150,
    domain: 2,
    type: "multiple",
    question: "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
    options: [
      "Amazon Inspector",
      "AWS Virtual Private Gateway",
      "AWS Batch",
      "Amazon ECS",
      "AWS Config"
    ],
    answer: [0, 4],
    explanation: "Amazon Inspector performs security assessments of applications, and AWS Config records resource configurations to help with compliance auditing by tracking configuration changes over time."
  },
{
    id: 151,
    domain: 2,
    type: "single",
    question: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    options: [
      "Amazon Simple Email Service (Amazon SES)",
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    answer: [2],
    explanation: "Amazon SNS can send SMS text messages to more than 200 countries worldwide. SES is for email, S3 is for storage, and SQS is for message queuing."
  },
{
    id: 152,
    domain: 2,
    type: "single",
    question: "Which AWS service manages the keys used to encrypt customer data?",
    options: [
      "AWS KMS",
      "AWS Service Control Policies (SCPs)",
      "Multi-Factor Authentication (MFA)",
      "Amazon Macie"
    ],
    answer: [0],
    explanation: "AWS Key Management Service (KMS) lets you create and manage cryptographic keys to encrypt and decrypt customer data across AWS services."
  },
{
    id: 153,
    domain: 2,
    type: "single",
    question: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    options: [
      "AWS Well-Architected Tool",
      "AWS Artifact",
      "AWS Glue",
      "Amazon Chime"
    ],
    answer: [1],
    explanation: "AWS Artifact is a free service that provides on-demand access to AWS compliance reports such as SOC, PCI, and ISO certifications."
  },
{
    id: 154,
    domain: 2,
    type: "single",
    question: "Which AWS service helps protect AWS accounts by continuously monitoring for threats such as attacker reconnaissance or account compromise?",
    options: [
      "Amazon GuardDuty",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Shield"
    ],
    answer: [0],
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors AWS accounts and workloads for malicious activity, detecting threats like reconnaissance, account compromise, and unauthorized access."
  },
{
    id: 155,
    domain: 3,
    type: "single",
    question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    options: [
      "AWS CLI",
      "AWS API",
      "AWS SDK",
      "AWS Management Console"
    ],
    answer: [3],
    explanation: "The AWS Management Console is a web-based user interface that allows users to manage AWS services through a browser with an intuitive graphical dashboard."
  },
{
    id: 156,
    domain: 3,
    type: "single",
    question: "What does Amazon CloudFront use to distribute content to global users with low latency?",
    options: [
      "AWS Global Accelerator",
      "AWS Regions",
      "AWS Edge Locations",
      "AWS Availability Zones"
    ],
    answer: [2],
    explanation: "Amazon CloudFront uses Edge Locations worldwide to cache and distribute content to users with low latency. Edge locations are separate from Regions and Availability Zones."
  },
{
    id: 157,
    domain: 3,
    type: "single",
    question: "Which AWS Snow Family service is best for transferring 60 Petabytes of data to AWS?",
    options: [
      "Snowball",
      "S3 Transfer Acceleration",
      "Snowmobile",
      "Amazon VPC"
    ],
    answer: [2],
    explanation: "AWS Snowmobile is designed for exabyte-scale data transfers (up to 100 PB per Snowmobile). For 60 PB, Snowmobile is the best choice. Snowball is for smaller transfers (up to ~80 TB)."
  },
{
    id: 158,
    domain: 3,
    type: "single",
    question: "Which AWS service is best suited for a NoSQL database with key-value data format?",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon RDS"
    ],
    answer: [0],
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service that stores data in key-value format, providing fast and predictable performance with single-digit millisecond latency."
  },
{
    id: 159,
    domain: 3,
    type: "single",
    question: "A company is deploying a two-tier web application. Where should the most frequently accessed data be stored for optimal response time?",
    options: [
      "AWS OpsWorks",
      "AWS Storage Gateway",
      "Amazon EBS volume",
      "Amazon ElastiCache"
    ],
    answer: [3],
    explanation: "Amazon ElastiCache provides in-memory caching (Redis or Memcached) for frequently accessed data, dramatically reducing response time for read-heavy applications."
  },
{
    id: 160,
    domain: 3,
    type: "single",
    question: "Which service provides DNS in the AWS cloud?",
    options: [
      "Route 53",
      "AWS Config",
      "Amazon CloudFront",
      "Amazon EMR"
    ],
    answer: [0],
    explanation: "Amazon Route 53 is a scalable DNS web service that routes end users to infrastructure running in AWS or on-premises, and supports domain registration."
  },
{
    id: 161,
    domain: 3,
    type: "single",
    question: "Which of the following can be described as a global content delivery network (CDN) service?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS Regions",
      "Amazon CloudFront"
    ],
    answer: [3],
    explanation: "Amazon CloudFront is AWS's global content delivery network (CDN) that delivers data, videos, applications, and APIs through edge locations to users worldwide with low latency."
  },
{
    id: 162,
    domain: 3,
    type: "single",
    question: "Which AWS service is best to migrate an Oracle database to AWS without negatively impacting the source database?",
    options: [
      "AWS OpsWorks",
      "AWS Database Migration Service",
      "AWS Server Migration Service",
      "AWS Application Discovery Service"
    ],
    answer: [1],
    explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS with minimal downtime. The source database remains operational during migration, allowing continuous replication."
  },
{
    id: 163,
    domain: 3,
    type: "multiple",
    question: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
    options: [
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda",
      "Amazon EMR",
      "Amazon EBS"
    ],
    answer: [1, 2],
    explanation: "Amazon S3 automatically scales storage capacity as data is added, and AWS Lambda automatically scales concurrency in response to incoming events. EC2, EMR, and EBS require manual configuration or Auto Scaling."
  },
{
    id: 164,
    domain: 3,
    type: "single",
    question: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    options: [
      "AWS CloudFormation",
      "AWS Config",
      "Amazon SES",
      "Amazon EMR"
    ],
    answer: [0],
    explanation: "AWS CloudFormation enables infrastructure as code (IaC) by using templates to define and provision AWS resources in a predictable and repeatable manner."
  },
{
    id: 165,
    domain: 3,
    type: "single",
    question: "Which AWS database service is a MySQL-compatible relational database that can scale automatically based on demand?",
    options: [
      "Amazon Neptune",
      "Amazon Aurora",
      "Amazon RDS for SQL Server",
      "Amazon RDS for PostgreSQL"
    ],
    answer: [1],
    explanation: "Amazon Aurora is a MySQL-compatible (and PostgreSQL-compatible) relational database that automatically scales storage and provides up to five times the throughput of standard MySQL."
  },
{
    id: 166,
    domain: 3,
    type: "single",
    question: "Which AWS service provides block-level storage for EC2 instances?",
    options: [
      "Amazon S3",
      "Amazon EFS",
      "Amazon EBS",
      "AWS Storage Gateway"
    ],
    answer: [2],
    explanation: "Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with EC2 instances. EBS volumes are replicated within a single Availability Zone."
  },
{
    id: 167,
    domain: 3,
    type: "single",
    question: "Which AWS service is a serverless compute service that executes code only when triggered by events?",
    options: [
      "AWS Lambda",
      "Amazon CloudWatch",
      "AWS Transit Gateway",
      "Amazon EC2"
    ],
    answer: [0],
    explanation: "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources. You pay only for the compute time consumed."
  },
{
    id: 168,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a virtual network dedicated to your AWS account?",
    options: [
      "AWS VPN",
      "AWS Subnets",
      "AWS Dedicated Hosts",
      "Amazon VPC"
    ],
    answer: [3],
    explanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network you define."
  },
{
    id: 169,
    domain: 3,
    type: "single",
    question: "Which AWS service can establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Snowball",
      "Amazon Route 53"
    ],
    answer: [0],
    explanation: "AWS Direct Connect provides a dedicated private network connection from your on-premises data center to AWS, bypassing the public internet for consistent, low-latency performance."
  },
{
    id: 170,
    domain: 3,
    type: "single",
    question: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: [
      "Amazon EMR",
      "Amazon MQ",
      "Amazon SNS",
      "Amazon SQS"
    ],
    answer: [0],
    explanation: "Amazon EMR (Elastic MapReduce) is a managed cluster platform for processing and analyzing large datasets using big data frameworks like Apache Hadoop and Spark."
  },
{
    id: 171,
    domain: 3,
    type: "single",
    question: "Which AWS service provides the highest level of control over the underlying virtual infrastructure?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon EC2",
      "Amazon RDS"
    ],
    answer: [2],
    explanation: "Amazon EC2 (IaaS) provides the highest level of control, letting you manage the operating system, network configuration, and application stack. Managed services like RDS and DynamoDB abstract infrastructure management."
  },
{
    id: 172,
    domain: 3,
    type: "single",
    question: "What is the AWS data warehouse service that supports high-performance queries on large datasets?",
    options: [
      "Amazon Redshift",
      "Amazon Kinesis",
      "Amazon DynamoDB",
      "Amazon RDS"
    ],
    answer: [0],
    explanation: "Amazon Redshift is a fully managed data warehouse service designed for high-performance analysis and reporting on large datasets using SQL."
  },
{
    id: 173,
    domain: 3,
    type: "single",
    question: "Which AWS service allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      "Amazon ECS",
      "AWS Data Pipeline",
      "AWS Cloud9",
      "AWS Personal Health Dashboard"
    ],
    answer: [0],
    explanation: "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that lets you run containerized applications on clusters of EC2 instances or on AWS Fargate."
  },
{
    id: 174,
    domain: 3,
    type: "single",
    question: "Which AWS service provides an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    options: [
      "Amazon Elastic File System",
      "Amazon Simple Storage Service",
      "Amazon Elastic Block Store",
      "AWS Storage Gateway"
    ],
    answer: [0],
    explanation: "Amazon EFS provides a simple, scalable, elastic NFS file system for Linux-based workloads that can be mounted concurrently by multiple EC2 instances across multiple Availability Zones."
  },
{
    id: 175,
    domain: 3,
    type: "single",
    question: "Which AWS service is used to route end users to the nearest AWS Region to reduce latency?",
    options: [
      "Amazon Cognito",
      "AWS Systems Manager",
      "AWS Cloud9",
      "Amazon Route 53"
    ],
    answer: [3],
    explanation: "Amazon Route 53 supports latency-based routing, which routes users to the AWS Region that provides the lowest latency based on their geographic location."
  },
{
    id: 176,
    domain: 3,
    type: "single",
    question: "Which AWS service helps route traffic to the endpoint that provides the best application performance for users worldwide?",
    options: [
      "AWS Global Accelerator",
      "AWS Data Pipeline",
      "AWS DAX Accelerator",
      "AWS Transfer Acceleration"
    ],
    answer: [0],
    explanation: "AWS Global Accelerator uses the AWS global network to route traffic to the optimal endpoint based on health, geography, and routing policies, improving performance for global users."
  },
{
    id: 177,
    domain: 3,
    type: "single",
    question: "Which AWS service allows you to quickly deploy and manage applications in the AWS Cloud without cloud computing experience?",
    options: [
      "AWS Fargate",
      "AWS Batch",
      "Amazon Personalize",
      "AWS Elastic Beanstalk"
    ],
    answer: [3],
    explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications, automatically handling deployment, capacity provisioning, load balancing, and health monitoring."
  },
{
    id: 178,
    domain: 3,
    type: "single",
    question: "Which AWS service enables you to run SQL queries on data stored in S3 without managing infrastructure?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "AWS Glue"
    ],
    answer: [1],
    explanation: "Amazon Athena is a serverless interactive query service that lets you run standard SQL queries on data stored in Amazon S3 without managing any infrastructure."
  },
{
    id: 179,
    domain: 3,
    type: "single",
    question: "Which AWS service allows users to use their Amazon, Apple, Facebook, or Google identities to authenticate to an application?",
    options: [
      "Amazon GuardDuty",
      "Amazon Personalize",
      "Amazon Cognito",
      "AWS IAM"
    ],
    answer: [2],
    explanation: "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps, supporting social identity providers like Amazon, Apple, Facebook, and Google."
  },
{
    id: 180,
    domain: 3,
    type: "single",
    question: "Which AWS service is used for facial recognition in an application that automates photo tagging?",
    options: [
      "Amazon Comprehend",
      "AWS IAM",
      "Amazon Polly",
      "Amazon Rekognition"
    ],
    answer: [3],
    explanation: "Amazon Rekognition makes it easy to add image and video analysis to applications, including facial recognition, object detection, and scene analysis."
  },
{
    id: 181,
    domain: 3,
    type: "single",
    question: "Which AWS service simplifies the connection management among hundreds of VPCs in multiple AWS Regions?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "Amazon Connect",
      "Security Groups"
    ],
    answer: [1],
    explanation: "AWS Transit Gateway simplifies network management by connecting VPCs and on-premises networks through a central hub, avoiding complex peering relationships between many VPCs."
  },
{
    id: 182,
    domain: 3,
    type: "single",
    question: "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
    options: [
      "AWS Control Tower",
      "Amazon Macie",
      "AWS Systems Manager Patch Manager",
      "AWS Security Hub"
    ],
    answer: [0],
    explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment based on best-practice blueprints, with ongoing governance."
  },
{
    id: 183,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      "Amazon Lightsail",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Elastic Beanstalk"
    ],
    answer: [1],
    explanation: "Amazon Connect is a cloud-based contact center service that provides omnichannel customer experiences, requiring no infrastructure investment and scaling on demand."
  },
{
    id: 184,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a managed message queue for storing and reliably delivering messages across distributed systems?",
    options: [
      "Amazon Simple Queue Service",
      "AWS Storage Gateway",
      "Amazon Simple Email Service",
      "Amazon Simple Storage Service"
    ],
    answer: [0],
    explanation: "Amazon SQS (Simple Queue Service) is a managed message queue service that decouples components and stores messages reliably, ensuring they aren't lost if components fail."
  },
{
    id: 185,
    domain: 3,
    type: "single",
    question: "Which AWS service provides automated batch processing for large-scale workloads?",
    options: [
      "Amazon EC2",
      "AWS Batch",
      "Lambda@Edge",
      "AWS Fargate"
    ],
    answer: [1],
    explanation: "AWS Batch dynamically provisions the optimal quantity and type of compute resources based on the volume and requirements of batch jobs, handling job scheduling and retry automatically."
  },
{
    id: 186,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a managed data warehouse in the cloud?",
    options: [
      "AWS Shield",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Comprehend"
    ],
    answer: [1],
    explanation: "Amazon Redshift is a fully managed petabyte-scale data warehouse service that lets you run complex analytic queries against large datasets using standard SQL."
  },
{
    id: 187,
    domain: 3,
    type: "single",
    question: "Which AWS service provides a template that programmatically defines policies and configurations of all AWS resources as code, reusable across projects?",
    options: [
      "AWS CloudFormation",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Auto Scaling"
    ],
    answer: [0],
    explanation: "AWS CloudFormation lets you create templates that define your AWS infrastructure as code, making it reusable across multiple projects, environments, and accounts."
  },
{
    id: 188,
    domain: 3,
    type: "single",
    question: "Which AWS service is used when encrypting EBS volumes?",
    options: [
      "AWS WAF",
      "AWS KMS",
      "Amazon Macie",
      "Amazon GuardDuty"
    ],
    answer: [1],
    explanation: "AWS Key Management Service (KMS) is used to create and manage the encryption keys used to encrypt EBS volumes, with full integration and control."
  },
{
    id: 189,
    domain: 4,
    type: "single",
    question: "You have set up consolidated billing for several AWS accounts. One account has purchased Reserved Instances for 3 years. Which of the following is true?",
    options: [
      "The Reserved Instance discounts can only be shared with the master account",
      "All accounts can receive the hourly cost benefit of the Reserved Instances",
      "The purchased instances will have better performance than On-demand instances",
      "There are no cost benefits from using consolidated billing; It is for informational purposes only"
    ],
    answer: [1],
    explanation: "With consolidated billing, Reserved Instance discounts and Savings Plans benefits are shared across all accounts in the organization, maximizing cost savings through combined usage."
  },
{
    id: 190,
    domain: 4,
    type: "single",
    question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which should they use?",
    options: [
      "AWS Health Dashboard",
      "AWS Support Concierge",
      "AWS Customer Service",
      "AWS Operations Support"
    ],
    answer: [1],
    explanation: "The AWS Support Concierge is a team available to Enterprise Support customers for billing and account inquiries, providing one-on-one guidance and proactive recommendations."
  },
{
    id: 191,
    domain: 4,
    type: "single",
    question: "An EC2 Reserved Instance type that allows you to exchange the purchased reserved instance for another with different attributes is called:",
    options: [
      "Elastic RI",
      "Premium RI",
      "Standard RI",
      "Convertible RI"
    ],
    answer: [3],
    explanation: "Convertible Reserved Instances allow you to exchange your reservation for another with different attributes (instance family, size, etc.) during the term, providing flexibility."
  },
{
    id: 192,
    domain: 4,
    type: "single",
    question: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    options: [
      "AWS Identity and Access Management (IAM) user",
      "Infrastructure Event Management (IEM) engineer",
      "AWS Consulting Partners",
      "Technical Account Manager (TAM)"
    ],
    answer: [3],
    explanation: "The Technical Account Manager (TAM) is a designated technical advisor included in the Enterprise Support plan, providing proactive guidance and acting as a primary point of contact."
  },
{
    id: 193,
    domain: 4,
    type: "single",
    question: "How can you view the distribution of AWS spending in one of your AWS accounts?",
    options: [
      "By using Amazon VPC console",
      "By contacting the AWS Support team",
      "By using AWS Cost Explorer",
      "By contacting the AWS Finance team"
    ],
    answer: [2],
    explanation: "AWS Cost Explorer lets you visualize and analyze your AWS spending with charts, filtering by service, tag, or time period, and provides up to 12 months of forecasts."
  },
{
    id: 194,
    domain: 4,
    type: "single",
    question: "Which AWS service provides the most granular data about AWS costs and usage?",
    options: [
      "Amazon Machine Image",
      "AWS Cost Explorer",
      "AWS Cost & Usage Report",
      "Amazon CloudWatch"
    ],
    answer: [2],
    explanation: "The AWS Cost and Usage Report (CUR) provides the most granular data about AWS costs and usage, with hourly detail that can be loaded into Athena, Redshift, or QuickSight."
  },
{
    id: 195,
    domain: 4,
    type: "multiple",
    question: "A startup operating on limited funds wants to be notified when their monthly AWS bill exceeds $2000. (Choose TWO)",
    options: [
      "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded",
      "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis",
      "Configure the AWS Budgets Service to alert the company when the threshold is exceeded",
      "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded",
      "Configure the Amazon Connect Service to alert the company when the threshold is exceeded"
    ],
    answer: [0, 2],
    explanation: "You can set up a CloudWatch billing alarm with an SNS notification, or use AWS Budgets to set custom spending limits with alerts. Both notify you when the threshold is exceeded."
  },
{
    id: 196,
    domain: 4,
    type: "single",
    question: "You want to run a questionnaire application for only one day (without interruption). Which EC2 purchase option should you use?",
    options: [
      "Reserved instances",
      "Spot instances",
      "Dedicated instances",
      "On-demand instances"
    ],
    answer: [3],
    explanation: "On-Demand instances are ideal for short-term, irregular workloads that cannot be interrupted, with no upfront commitment and pay-as-you-go pricing. Perfect for a one-day application."
  },
{
    id: 197,
    domain: 4,
    type: "single",
    question: "You are creating thumbnails from millions of images. Consistent uptime is not required and processing can be interrupted. Which EC2 buying option is most cost-effective?",
    options: [
      "Reserved Instances",
      "On-demand Instances",
      "Dedicated Instances",
      "Spot Instances"
    ],
    answer: [3],
    explanation: "Spot Instances offer up to 90% discount for workloads where interruptions are acceptable, making them ideal for batch image processing where consistent uptime is not required."
  },
{
    id: 198,
    domain: 4,
    type: "single",
    question: "Which AWS tool can help a company visualize their AWS spending in the last few months?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Consolidated Billing"
    ],
    answer: [0],
    explanation: "AWS Cost Explorer provides a visual interface to analyze past spending patterns, filter by service or tag, and forecast future costs, making it ideal for visualizing spending over time."
  },
{
    id: 199,
    domain: 4,
    type: "single",
    question: "Which AWS support plan provides 24x7 access to technical support engineers via phone and chat?",
    options: [
      "Enterprise Support",
      "Developer Support",
      "Basic Support",
      "Business Support"
    ],
    answer: [3],
    explanation: "Business Support provides 24x7 access to Cloud Support Engineers via phone, email, and chat with a 1-hour response time. Enterprise also offers this but at a higher tier."
  },
{
    id: 200,
    domain: 4,
    type: "single",
    question: "A company needs a response time of less than 15 minutes from support for business-critical systems. Which AWS Support Plan is required?",
    options: [
      "AWS Basic Support",
      "AWS Developer Support",
      "AWS Business Support",
      "AWS Enterprise Support"
    ],
    answer: [3],
    explanation: "Enterprise Support provides a 15-minute or less response time for business-critical issues, along with a designated Technical Account Manager (TAM). Business Support offers 1-hour response time."
  }

];

// Export for use in index.html
if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
}