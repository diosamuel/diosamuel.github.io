/**
 * AWS CCP (CLF-C02) In-Scope Services Glossary
 * Categorized list of all in-scope AWS services with explanations
 */

const GLOSSARY = [
  {
    category: "Analytics",
    icon: "M3 3h18v18H3z",
    color: "#8b5cf6",
    services: [
      { name: "Amazon Athena", desc: "Serverless interactive query service that lets you run standard SQL queries on data stored in Amazon S3 without managing any infrastructure. You pay only for the data scanned by each query." },
      { name: "Amazon EMR", desc: "Elastic MapReduce - a managed cluster platform for processing and analyzing large datasets using big data frameworks like Apache Hadoop, Spark, and Presto. Automatically provisions and scales compute resources." },
      { name: "AWS Glue", desc: "A fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics. Includes a data catalog and automates the difficult and time-consuming data discovery tasks." },
      { name: "Amazon Kinesis", desc: "A platform for streaming data on AWS, making it easy to collect, process, and analyze real-time streaming data from sources like IoT devices, application logs, and clickstreams." },
      { name: "Amazon OpenSearch Service", desc: "A managed service that makes it easy to deploy, secure, and run OpenSearch (formerly Elasticsearch) for log analytics, full-text search, application monitoring, and other use cases." },
      { name: "Amazon QuickSight", desc: "A scalable, serverless, machine-learning-powered business intelligence (BI) service that makes it easy to build dashboards and perform data analysis." },
      { name: "Amazon Redshift", desc: "A fully managed petabyte-scale data warehouse service that lets you run complex analytic queries against large datasets using standard SQL with high performance." }
    ]
  },
  {
    category: "Application Integration",
    icon: "M7 10l5 5 5-5z",
    color: "#ec4899",
    services: [
      { name: "Amazon EventBridge", desc: "A serverless event bus service that connects applications together using events. Routes real-time data from various sources to targets like Lambda functions, SNS topics, or Step Functions." },
      { name: "Amazon Simple Notification Service (SNS)", desc: "A fully managed pub/sub messaging service for decoupling microservices, distributed systems, and serverless applications. Sends notifications via SMS, email, or HTTP endpoints." },
      { name: "Amazon Simple Queue Service (SQS)", desc: "A fully managed message queuing service that decouples software components, storing messages reliably between application components to enable asynchronous processing." },
      { name: "AWS Step Functions", desc: "A serverless workflow orchestration service that lets you coordinate multiple AWS services into visual workflows for distributed applications and microservices." }
    ]
  },
  {
    category: "Business Applications",
    icon: "M21 7l-9 4-9-4V5l9 4 9-4v2zM3 19h18v2H3z",
    color: "#f59e0b",
    services: [
      { name: "Amazon Connect", desc: "A cloud-based contact center service that provides omnichannel customer experiences (voice, chat, email) with pay-as-you-go pricing and no infrastructure investment." },
      { name: "Amazon Simple Email Service (SES)", desc: "A cost-effective, flexible, and scalable email service that enables developers to send transactional and marketing email from any application." }
    ]
  },
  {
    category: "Cloud Financial Management",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    color: "#10b981",
    services: [
      { name: "AWS Budgets", desc: "Allows you to set custom spending limits and receive alerts via SNS or email when thresholds are reached. Provides real-time insights into usage, costs, and forecasts." },
      { name: "AWS Cost and Usage Reports", desc: "Provides the most granular data about your AWS costs and usage. Stores hourly detailed reports in an S3 bucket that can be loaded into Athena, Redshift, or QuickSight for analysis." },
      { name: "AWS Cost Explorer", desc: "A cost visualization tool that lets you analyze past spending patterns, filter by service/tag/time period, and predict future costs with up to 12 months of forecasts." },
      { name: "AWS Marketplace", desc: "A digital catalog with thousands of software listings from independent software vendors that you can find, test, and buy to run on AWS. Includes cost management and governance features." }
    ]
  },
  {
    category: "Compute",
    icon: "M4 4h16v16H4z",
    color: "#3b82f6",
    services: [
      { name: "AWS Batch", desc: "A fully managed batch processing service that dynamically provisions the optimal quantity and type of compute resources based on workload volume. Can use Spot Instances for cost savings." },
      { name: "Amazon EC2", desc: "Elastic Compute Cloud - provides resizable virtual servers (instances) in the cloud. Supports On-Demand, Reserved, Spot, and Dedicated Host pricing options with various instance types." },
      { name: "AWS Elastic Beanstalk", desc: "An easy-to-use service for deploying and scaling web applications. Automatically handles deployment, capacity provisioning, load balancing, and health monitoring." },
      { name: "Amazon Lightsail", desc: "Simplified virtual private server (VPS) service designed for developers who need a low-cost easy-to-use compute solution. Provides pre-configured application templates." },
      { name: "AWS Outposts", desc: "Brings AWS services, infrastructure, and operating models to on-premises data centers, enabling a consistent hybrid cloud experience with the same APIs and tools." }
    ]
  },
  {
    category: "Containers",
    icon: "M4 8h16v8H4z",
    color: "#06b6d4",
    services: [
      { name: "Amazon Elastic Container Registry (ECR)", desc: "A fully managed Docker container registry that lets developers store, manage, and deploy container images with high availability and security." },
      { name: "Amazon Elastic Container Service (ECS)", desc: "A fully managed container orchestration service that supports Docker containers. Can run on EC2 instances you manage or on serverless AWS Fargate." },
      { name: "Amazon Elastic Kubernetes Service (EKS)", desc: "A managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own control plane." }
    ]
  },
  {
    category: "Customer Enablement",
    icon: "M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z",
    color: "#8b5cf6",
    services: [
      { name: "AWS Support", desc: "Provides technical support plans: Basic (free, no technical support), Developer (business hours, 12hr response), Business (24/7, 1hr response), Enterprise On-Ramp (30min response), and Enterprise (15min response + TAM)." }
    ]
  },
  {
    category: "Database",
    icon: "M4 6h16v12H4z",
    color: "#ef4444",
    services: [
      { name: "Amazon Aurora", desc: "A MySQL and PostgreSQL-compatible relational database built for the cloud, providing up to five times the throughput of standard MySQL with automatic storage scaling and Multi-AZ high availability." },
      { name: "Amazon DocumentDB", desc: "A fast, scalable, highly available MongoDB-compatible document database service designed for JSON workloads." },
      { name: "Amazon DynamoDB", desc: "A serverless NoSQL database that supports key-value and document data structures with single-digit millisecond latency at any scale. Fully managed with automatic scaling." },
      { name: "Amazon ElastiCache", desc: "An in-memory caching service supporting Redis and Memcached to improve read performance for read-heavy applications by caching frequently accessed data." },
      { name: "Amazon Neptune", desc: "A fast, reliable, fully managed graph database service optimized for storing and querying highly connected data like social networks and recommendation engines." },
      { name: "Amazon RDS", desc: "Relational Database Service - a managed relational database supporting MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB with automated backups, patching, and Multi-AZ deployments." }
    ]
  },
  {
    category: "Developer Tools",
    icon: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z",
    color: "#6366f1",
    services: [
      { name: "AWS CLI", desc: "Command Line Interface - a unified tool to manage AWS services from the command line across Windows, Mac, and Linux. Suitable for scripting and automation." },
      { name: "AWS CodeBuild", desc: "A fully managed continuous integration service that compiles source code, runs tests, and produces software packages ready for deployment." },
      { name: "AWS CodePipeline", desc: "A continuous delivery service that models, visualizes, and automates the steps required to release applications across multiple stages." },
      { name: "AWS X-Ray", desc: "A service that collects data about requests your application serves, providing an end-to-end view of requests as they travel through your application to debug and analyze." }
    ]
  },
  {
    category: "End User Computing",
    icon: "M4 4h16v12H4z",
    color: "#0ea5e9",
    services: [
      { name: "Amazon AppStream 2.0", desc: "A fully managed, non-persistent application streaming service that lets users stream desktop applications from AWS to any device running a web browser." },
      { name: "Amazon WorkSpaces", desc: "A managed, secure Desktop-as-a-Service (DaaS) solution that provisions cloud-based virtual desktops accessible from any supported device." },
      { name: "Amazon WorkSpaces Secure Browser", desc: "A low-cost, fully managed workspace service that provides secure access to internal websites and SaaS applications from any device's web browser." }
    ]
  },
  {
    category: "Frontend Web and Mobile",
    icon: "M17 2H7v20h10V2z",
    color: "#f97316",
    services: [
      { name: "AWS Amplify", desc: "A set of products and tools that enable frontend web and mobile developers to build, ship, and host full-stack applications on AWS. Includes CLI, UI components, and hosting." },
      { name: "AWS AppSync", desc: "A fully managed GraphQL service that simplifies application development by letting you securely access, manipulate, and combine data from one or more data sources with real-time updates." }
    ]
  },
  {
    category: "Internet of Things (IoT)",
    icon: "M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z",
    color: "#14b8a6",
    services: [
      { name: "AWS IoT Core", desc: "A managed cloud service that lets connected devices securely interact with cloud applications and other devices. Supports MQTT and HTTPS protocols with device authentication." }
    ]
  },
  {
    category: "Machine Learning",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20z",
    color: "#a855f7",
    services: [
      { name: "Amazon Comprehend", desc: "A natural-language processing (NLP) service that uses machine learning to find insights and relationships in text including sentiment, key phrases, entities, and topics." },
      { name: "Amazon Kendra", desc: "An intelligent enterprise search service powered by machine learning that enables natural language search across corporate content repositories and databases." },
      { name: "Amazon Lex", desc: "A service for building conversational interfaces (chatbots) into any application using voice and text. Powers the same technology as Amazon Alexa." },
      { name: "Amazon Polly", desc: "A text-to-speech service that turns text into lifelike speech, supporting multiple languages and voices with natural sounding pronunciation." },
      { name: "Amazon Q", desc: "A generative AI assistant designed for work environments that helps answer questions, solve problems, and generate content tailored to your business." },
      { name: "Amazon Rekognition", desc: "A computer vision service that analyzes images and videos to detect objects, scenes, faces, and text, and to recognize celebrities and inappropriate content." },
      { name: "Amazon SageMaker AI", desc: "A fully managed machine learning service that enables data scientists and developers to build, train, and deploy ML models at scale with integrated tools." },
      { name: "Amazon Textract", desc: "A machine learning service that extracts text, handwriting, and data from scanned documents automatically, going beyond simple OCR." },
      { name: "Amazon Transcribe", desc: "An automatic speech recognition (ASR) service that converts speech to text, supporting multiple speakers, custom vocabularies, and various languages." },
      { name: "Amazon Translate", desc: "A neural machine translation service that delivers fast, high-quality, and affordable language translation across many languages." }
    ]
  },
  {
    category: "Management and Governance",
    icon: "M12 2l-10 5v10c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-10-5z",
    color: "#22c55e",
    services: [
      { name: "AWS Auto Scaling", desc: "A service that monitors applications and automatically adjusts capacity to maintain steady and predictable performance at the lowest possible cost. Supports EC2, DynamoDB, ECS, and more." },
      { name: "AWS CloudFormation", desc: "An Infrastructure as Code (IaC) service that lets you model, provision, and manage AWS resources using declarative templates (JSON/YAML) in a predictable, repeatable manner." },
      { name: "AWS CloudTrail", desc: "A logging and auditing service that records API calls and actions made in your AWS account, providing a trail of events for security analysis, compliance, and troubleshooting." },
      { name: "Amazon CloudWatch", desc: "A monitoring and observability service that collects metrics, logs, and events. Enables automated actions via alarms. Logs are encrypted by default with KMS." },
      { name: "AWS Compute Optimizer", desc: "A service that recommends optimal AWS resources to reduce cost and improve performance by analyzing your current usage patterns using machine learning." },
      { name: "AWS Config", desc: "A service that assesses, audits, and evaluates configurations of AWS resources. Detects configuration changes and compliance, storing history in S3." },
      { name: "AWS Control Tower", desc: "A service that provides the easiest way to set up and govern a secure, multi-account AWS environment following best practices (landing zone)." },
      { name: "AWS Health Dashboard", desc: "Provides a personalized view of AWS service health and alerts when your AWS resources are impacted (Personal Health Dashboard) or services are down (Service Health Dashboard)." },
      { name: "AWS License Manager", desc: "Helps administrators manage software licenses across AWS and on-premises, tracking, controlling, and reporting on license usage to prevent violations." },
      { name: "AWS Management Console", desc: "A web-based user interface to manage AWS services through a browser with an organized graphical dashboard and service categories." },
      { name: "AWS Organizations", desc: "A service for managing multiple AWS accounts centrally, with consolidated billing, hierarchical groups (OUs), and Service Control Policies (SCPs) for governance." },
      { name: "AWS Service Catalog", desc: "Enables organizations to create and manage catalogs of approved services (portfolios and products) that end users can deploy in a controlled manner." },
      { name: "Service Quotas", desc: "A service that lets you view and manage your AWS service quotas (limits) from a central location, including requesting quota increases." },
      { name: "AWS Systems Manager", desc: "A management service that helps automatically collect software inventory, apply OS patches, create system images, and configure Windows and Linux operating systems." },
      { name: "AWS Trusted Advisor", desc: "A service that provides best practice checks and recommendations across four categories: cost optimization, performance, security, and fault tolerance." },
      { name: "AWS Well-Architected Tool", desc: "A service in the console that helps you review your workloads against the AWS Well-Architected Framework pillars and provides guidance to improve architectures." }
    ]
  },
  {
    category: "Migration and Transfer",
    icon: "M3 12h18M3 6h18M3 18h18",
    color: "#f43f5e",
    services: [
      { name: "AWS Application Discovery Service", desc: "Helps enterprise customers plan migration to AWS by identifying running applications, dependencies, and performance characteristics on-premises." },
      { name: "AWS Application Migration Service", desc: "Automates the lift-and-shift (rehosting) migration of applications from on-premises to AWS with minimal downtime and automation." },
      { name: "AWS Database Migration Service (DMS)", desc: "Migrates databases to AWS with minimal downtime. Supports both homogeneous (e.g., MySQL to MySQL) and heterogeneous (e.g., Oracle to MySQL) migrations with continuous replication." },
      { name: "Migration Evaluator", desc: "A service that helps assess the cost implications of migrating to AWS by modeling current on-premises workloads and generating business cases." },
      { name: "AWS Migration Hub", desc: "A single location to track the progress of application migrations across multiple AWS and partner migration solutions." },
      { name: "AWS Schema Conversion Tool (AWS SCT)", desc: "A tool that automates the conversion of database schema objects and code objects between different database engines (e.g., Oracle to PostgreSQL)." },
      { name: "AWS Snow Family", desc: "A collection of physical data transfer devices: Snowcone (14 TB, edge computing), Snowball Edge (80 TB, compute or storage optimized), and Snowmobile (up to 100 PB, shipping container-sized)." }
    ]
  },
  {
    category: "Networking and Content Delivery",
    icon: "M3 9h18M3 15h18M7 5v14M17 5v14",
    color: "#3b82f6",
    services: [
      { name: "Amazon API Gateway", desc: "A fully managed service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale." },
      { name: "Amazon CloudFront", desc: "A global Content Delivery Network (CDN) that delivers data, videos, applications, and APIs to users worldwide with low latency through edge locations." },
      { name: "AWS Direct Connect", desc: "A dedicated network connection from on-premises to AWS that bypasses the public internet, providing consistent low-latency performance and potentially lower costs." },
      { name: "AWS Global Accelerator", desc: "A networking service that improves availability and performance of global applications by routing traffic through the AWS global network instead of the public internet." },
      { name: "AWS PrivateLink", desc: "A service that provides private connectivity between VPCs, AWS services, and on-premises applications without exposing traffic to the public internet." },
      { name: "Amazon Route 53", desc: "A highly available and scalable cloud DNS web service with domain registration and multiple routing policies (latency-based, geolocation, failover). Global service." },
      { name: "AWS Transit Gateway", desc: "A hub-and-spoke model that simplifies network management by connecting VPCs and on-premises networks through a central router instead of complex peering relationships." },
      { name: "Amazon VPC", desc: "Virtual Private Cloud - a logically isolated section of the AWS Cloud where you launch resources in a virtual network you define with subnets, route tables, and gateways." },
      { name: "AWS VPN", desc: "Establishes encrypted IPsec VPN connections between on-premises networks and AWS, including Site-to-Site VPN and Client VPN options for secure remote access." },
      { name: "AWS Site-to-Site VPN", desc: "Creates encrypted IPsec tunnels between an on-premises network and AWS, providing secure hybrid cloud connectivity." },
      { name: "AWS Client VPN", desc: "A managed client-based VPN service that enables users to securely access AWS resources and on-premises resources from any location over the internet." }
    ]
  },
  {
    category: "Security, Identity, and Compliance",
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
    color: "#dc2626",
    services: [
      { name: "AWS Artifact", desc: "A free service providing on-demand access to AWS security and compliance reports including SOC, PCI, ISO certifications and other auditor-issued reports." },
      { name: "AWS Audit Manager", desc: "Continuously audits AWS usage to simplify compliance assessment, continuously gathering data and generating evidence reports." },
      { name: "AWS Certificate Manager (ACM)", desc: "Provisions, manages, and deploys Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and internal resources." },
      { name: "AWS CloudHSM", desc: "Cloud Hardware Security Module - a cloud-based hardware security module for generating and managing cryptographic keys for regulated workloads requiring dedicated hardware." },
      { name: "Amazon Cognito", desc: "Adds user sign-up, sign-in, and access control to web and mobile apps. Supports social identity providers (Amazon, Apple, Facebook, Google) and SAML." },
      { name: "Amazon Detective", desc: "Makes it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities using data from GuardDuty, CloudTrail, and VPC Flow Logs." },
      { name: "AWS Directory Service", desc: "Provides multiple ways to set up and run directories in the AWS Cloud or connect to on-premises Active Directory, enabling SSO and centralized management." },
      { name: "AWS Firewall Manager", desc: "Centrally manages firewall rules across accounts and applications in AWS Organizations, ensuring consistent WAF, Security Group, and Network Firewall policies." },
      { name: "Amazon GuardDuty", desc: "A threat detection service that continuously monitors AWS accounts and workloads for malicious activity and detects threats like reconnaissance, account compromise, and instance compromise using anomaly detection." },
      { name: "AWS Identity and Access Management (IAM)", desc: "Enables you to securely control access to AWS services and resources. Manages users, groups, roles, and policies following least privilege. Global service." },
      { name: "AWS IAM Identity Center", desc: "AWS Single Sign-On (SSO) - provides one-click access to multiple AWS accounts and business applications from a central location with federation support." },
      { name: "Amazon Inspector", desc: "An automated security assessment service that helps improve the security and compliance of applications deployed on AWS by scanning for vulnerabilities and network exposure." },
      { name: "AWS Key Management Service (KMS)", desc: "A managed service that creates and controls the cryptographic keys used to encrypt and decrypt data across AWS services, with full audit trail via CloudTrail." },
      { name: "Amazon Macie", desc: "A data security and privacy service that uses machine learning to automatically discover, classify, and protect sensitive data (e.g., PII, PHI) in S3." },
      { name: "AWS Resource Access Manager (AWS RAM)", desc: "Lets you share AWS resources such as subnets, transit gateways, and license configurations across AWS accounts or within AWS Organizations, simplifying multi-account access." },
      { name: "AWS Secrets Manager", desc: "Helps protect secrets needed to access applications, services, and IT resources by enabling rotation, management, and retrieval of database credentials and API keys." },
      { name: "AWS Security Hub", desc: "A central security and compliance service that aggregates security alerts and findings from multiple AWS services, providing a comprehensive view in a single dashboard." },
      { name: "AWS Shield", desc: "A managed Distributed Denial of Service (DDoS) protection service. Shield Standard is free at Layer 3/4; Shield Advanced provides advanced attack mitigation capabilities." },
      { name: "AWS WAF", desc: "Web Application Firewall - protects web applications from common exploits like SQL injection and cross-site scripting at Layer 7 with customizable rules and rate limiting." }
    ]
  },
  {
    category: "Serverless",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20z",
    color: "#fbbf24",
    services: [
      { name: "AWS Fargate", desc: "A serverless compute engine for containers that works with Amazon ECS and EKS. Eliminates the need to manage servers - you define tasks and Fargate runs them." },
      { name: "AWS Lambda", desc: "A serverless compute service that runs your code in response to events and automatically manages the underlying compute resources. You pay only for compute time consumed." }
    ]
  },
  {
    category: "Storage",
    icon: "M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z",
    color: "#f97316",
    services: [
      { name: "AWS Backup", desc: "A fully managed backup service that makes it easy to centralize and automate the backup of data across AWS services (EBS, RDS, DynamoDB, EFS, etc.)." },
      { name: "Amazon Elastic Block Store (EBS)", desc: "Block-level storage for EC2 instances. Offers numerous volume types for different IOPS requirements. Snapshots are stored in S3. Not a regional service." },
      { name: "Amazon Elastic File System (EFS)", desc: "A scalable, elastic file storage service that can be shared by multiple EC2 instances simultaneously. POSIX-compliant and regional with multi-AZ replication." },
      { name: "AWS Elastic Disaster Recovery", desc: "(formerly CloudEndure) - A disaster recovery solution that replicates applications to AWS with low RTO and RPO in real time. Supports cross-cloud and cross-region recovery." },
      { name: "Amazon FSx", desc: "Fully managed third-party file systems, including FSx for Windows File Server and FSx for Lustre (high-performance computing workloads)." },
      { name: "Amazon S3", desc: "Simple Storage Service - object storage with 99.999999999% (11 nines) durability. Storage classes include Standard, Standard-IA, One Zone-IA, Intelligent-Tiering, Glacier, and Glacier Deep Archive." },
      { name: "Amazon S3 Glacier", desc: "Low-cost storage classes designed for data archiving. Includes Instant Retrieval (milliseconds), Flexible Retrieval (minutes/hours), and Deep Archive (12-48 hours)." },
      { name: "AWS Storage Gateway", desc: "A hybrid storage service that connects on-premises environments to cloud storage with multiple gateway types (File, Volume, Tape) for various hybrid use cases." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.GLOSSARY = GLOSSARY;
}