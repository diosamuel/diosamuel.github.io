/**
 * AWS CCP (CLF-C02) Cheatsheet - Quick Reference, Tips & Tricks
 */

const CHEATSHEET = {
  examFacts: [
    { label: "Exam Code", value: "CLF-C02" },
    { label: "Duration", value: "90 minutes" },
    { label: "Scored Questions", value: "50 (15 unscored)" },
    { label: "Question Types", value: "Multiple choice & multiple response" },
    { label: "Passing Score", value: "700 / 1000 (scaled)" },
    { label: "Cost", value: "USD $100 (practice: $20)" },
    { label: "Prerequisite", value: "None" },
    { label: "Validity", value: "3 years" }
  ],
  domainWeight: [
    { domain: "Domain 1: Cloud Concepts", weight: "24%", tip: "Know the 6 pillars, 6 Rs, and CAF perspectives" },
    { domain: "Domain 2: Security and Compliance", weight: "30%", tip: "Hardest section. Master shared responsibility & IAM" },
    { domain: "Domain 3: Cloud Technology and Services", weight: "34%", tip: "Identifying services by name and use case is key" },
    { domain: "Domain 4: Billing, Pricing, and Support", weight: "12%", tip: "Easiest section. Memorize support plans and EC2 pricing" }
  ],
  pillars: [
    { name: "Operational Excellence", emoji: "OPS", color: "#3b82f6", points: "Operations as code, frequent small reversible changes, refine procedures, anticipate failure, learn from failures" },
    { name: "Security", emoji: "SEC", color: "#ef4444", points: "Strong identity foundation, enable traceability, security at all layers, automated best practices, protect data in transit & at rest, keep people away from data, prepare for events" },
    { name: "Reliability", emoji: "REL", color: "#f59e0b", points: "Dynamically acquire compute resources, automatic recovery, horizontal scaling, stop guessing capacity, test recovery" },
    { name: "Performance Efficiency", emoji: "PERF", color: "#22c55e", points: "Experiment more often, use serverless, go global in minutes, select right resource types" },
    { name: "Cost Optimization", emoji: "COST", color: "#a855f7", points: "Adopt consumption model, analyze/attribute spend, managed services for lower TCO, remove unneeded resources" },
    { name: "Sustainability", emoji: "SUS", color: "#14b8a6", points: "Understand impact, establish sustainability goals, maximize utilization, anticipate efficient hardware/software, use managed services, reduce downstream impact" }
  ],
  migrationStrategies: [
    { code: "Rehost", aka: "Lift and shift", desc: "Move app as-is with minimal changes. Quick, low risk." },
    { code: "Replatform", aka: "Lift, tinker, shift", desc: "Make some optimizations during migration. Some code/config changes." },
    { code: "Refactor", aka: "Re-architect", desc: "Redesign to be cloud-native. Maximum scalability, heavy changes." },
    { code: "Repurchase", aka: "Move to SaaS", desc: "Replace existing software with a cloud-based (SaaS) alternative." },
    { code: "Retain", aka: "Keep", desc: "Leave on-premises. For legacy or proprietary apps not ready for cloud." },
    { code: "Retire", aka: "Remove", desc: " Decommission apps no longer needed. Streamlines operations." }
  ],
  ec2Pricing: [
    { option: "On-Demand", desc: "Pay-as-you-go, no commitment. Best for short-term/irregular workloads.", discount: "Baseline" },
    { option: "Reserved (Standard)", desc: "Commit 1 or 3 years. Steady-state workloads.", discount: "Up to 72%" },
    { option: "Reserved (Convertible)", desc: "Commit 1 or 3 years. Can change instance attributes.", discount: "Up to 54%" },
    { option: "Spot", desc: "Bid on spare capacity. Can be interrupted. Best for flexible/batch workloads.", discount: "Up to 90%" },
    { option: "Dedicated Host", desc: "Physical server dedicated to you. For licensing/compliance (BYOL).", discount: "Variable" },
    { option: "Savings Plans", desc: "Commit to $/hour spend. Apply to EC2, Fargate, Lambda.", discount: "Up to 72%" }
  ],
  s3StorageClasses: [
    { name: "S3 Standard", desc: "Frequently accessed data (3+ AZs). Default class.", retrieval: "Milliseconds" },
    { name: "S3 Standard-IA", desc: "Infrequent access (3+ AZs). Lower storage, higher retrieval. Min 30 days.", retrieval: "Milliseconds" },
    { name: "S3 One Zone-IA", desc: "Infrequent access (1 AZ). Cheaper than Std-IA. For re-creatable data.", retrieval: "Milliseconds" },
    { name: "S3 Intelligent-Tiering", desc: "Auto-tiers for unknown/changing access patterns. Small monitoring fee.", retrieval: "Milliseconds" },
    { name: "S3 Glacier Instant Retrieval", desc: "Archive needing immediate access. Min 90 days.", retrieval: "Milliseconds" },
    { name: "S3 Glacier Flexible Retrieval", desc: "Long-term archive. Min 90 days.", retrieval: "1-5 min to hours" },
    { name: "S3 Glacier Deep Archive", desc: "Lowest cost. Long-term, rarely accessed. Min 180 days.", retrieval: "12-48 hours" }
  ],
  sharedResponsibility: [
    { area: "Security OF the cloud (AWS)", responsibilities: "Physical data centers, hardware, network infrastructure, hypervisor, managed services patching, Region/Edge location security" },
    { area: "Security IN the cloud (Customer)", responsibilities: "Customer data, IAM, security groups, NACLs, OS patching (EC2), application code, firewall configuration, encryption of data at rest/in transit" },
    { area: "Shared responsibilities", responsibilities: "Patch management, configuration management, IAM awareness" }
  ],
  iamEntities: [
    { entity: "User", desc: "A person or app needing AWS access. Has credentials (password/access keys). Permanent.", example: "dev-john" },
    { entity: "Group", desc: "Collection of users sharing permissions. Attach a policy once, applies to all members.", example: "Developers group" },
    { entity: "Role", desc: "Temporary permission set. Assumed by users/services. No credentials attached.", example: "S3-Write-Role for an EC2 instance" },
    { entity: "Policy", desc: "JSON document defining permissions (Effect/Action/Resource/Condition). Attached to users/groups/roles.", example: "AmazonS3ReadOnlyAccess" }
  ],
  securityServices: [
    { service: "AWS Shield", use: "DDoS protection", layerNote: "Standard (free) / Advanced (paid). Layer 3/4." },
    { service: "AWS WAF", use: "Web app firewall (SQLi, XSS)", layerNote: "Layer 7. Custom rules & rate limit." },
    { service: "AWS GuardDuty", use: "Threat detection", layerNote: "Anomaly-based ML, real-time alerts." },
    { service: "AWS Inspector", use: "Vulnerability scan", layerNote: "EC2 & container security assessments." },
    { service: "AWS Artifact", use: "Compliance reports", layerNote: "Free SOC/PCI/ISO reports download." },
    { service: "AWS Secrets Manager", use: "Rotate/stores secrets", layerNote: "Encrypts with KMS. Auto-rotation." },
    { service: "AWS KMS", use: "Encryption key management", layerNote: "Create/manage cryptographic keys." },
    { service: "CloudHSM", use: "Hardware HSM", layerNote: "FIPS 140-2 Level 3. Dedicated hardware." },
    { service: "Macie", use: "Discover/classify PII in S3", layerNote: "ML-based sensitive data detection." },
    { service: "Security Hub", use: "Central security dashboard", layerNote: "Aggregates findings from many services." },
    { service: "Cognito", use: "User sign-up/sign-in + social IDPs", layerNote: "JWT tokens, social logins (Google/FB)." },
    { service: "IAM", use: "Identity & access control", layerNote: "Users/Groups/Roles/Policies. Global." }
  ],
  storageComparison: [
    { service: "S3", type: "Object", durability: "11 nines (99.999999999%))", scale: "Unlimited", bestFor: "Backups, static sites, images, archives" },
    { service: "EBS", type: "Block", durability: "Replicated within one AZ", scale: "Up to 64 TB per volume", bestFor: "Boot volumes, databases, file systems on EC2" },
    { service: "EFS", type: "File (NFS)", durability: "Multi-AZ (11 nines)", scale: "Petabyte, elastic", bestFor: "Shared file storage across many EC2 instances" },
    { service: "FSx", type: "File (SMB/Lustre)", durability: "Multi-AZ", scale: "Up to tens of PB", bestFor: "Windows file shares, HPC workloads" },
    { service: "Instance Store", type: "Block (ephemeral)", durability: "Lost on stop/terminate", scale: "Per-instance size", bestFor: "Temporary buffers, caches, scratch data" },
    { service: "Storage Gateway", type: "Hybrid file/volume/tape", durability: "Backed by S3/EBS", scale: "Cache-backed local", bestFor: "Bridge on-prem ↔ cloud storage" }
  ],
  databaseServices: [
    { service: "RDS", use: "Managed relational DB", engines: "MySQL, PostgreSQL, Oracle, SQL Server, MariaDB" },
    { service: "Aurora", use: "AWS-optimized MySQL/PostgreSQL", engines: "MySQL & PostgreSQL compatible (5x faster)" },
    { service: "DynamoDB", use: "NoSQL key-value", engines: "Proprietary. Serverless, single-digit ms latency." },
    { service: "ElastiCache", use: "In-memory cache", engines: "Redis & Memcached. Cache reads." },
    { service: "Neptune", use: "Graph database", engines: "For highly connected data (social, recommendations)." },
    { service: "DocumentDB", use: "Document DB", engines: "MongoDB-compatible (JSON workloads)." },
    { service: "Redshift", use: "Data warehouse", engines: "Columnar SQL warehouse for analytics at scale." }
  ],
  networking: [
    { service: "VPC", use: "Isolated virtual network in your account" },
    { service: "Subnet", use: "Range of IPs in a VPC (public = has IGW route; private = no direct internet)" },
    { service: "Internet Gateway (IGW)", use: "Connects VPC to internet for public subnets" },
    { service: "NAT Gateway", use: "Allows private subnet instances outbound internet (AWS-managed)" },
    { service: "Virtual Private Gateway (VGW)", use: "VPN endpoint connecting VPC to on-premises" },
    { service: "Direct Connect", use: "Dedicated private circuit (1/10 Gbps) to AWS, no internet" },
    { service: "VPC Peering", use: "Private direct connection between two VPCs" },
    { service: "Transit Gateway", use: "Hub-and-spoke router simplifying many VPC connections" },
    { service: "Route 53", use: "DNS service + domain registration. Global service." },
    { service: "CloudFront", use: "Global CDN caching at edge locations" },
    { service: "Global Accelerator", use: "Routes via AWS backbone, static IPs, non-HTTP use cases" },
    { service: "API Gateway", use: "Create/publish/manage/secure REST/WebSocket APIs" },
    { service: "PrivateLink", use: "Private connection to AWS services without internet" }
  ],
  loadBalancers: [
    { lb: "Application LB (ALB)", layer: "Layer 7", best: "HTTP/HTTPS, path-based routing, microservices" },
    { lb: "Network LB (NLB)", layer: "Layer 4", best: "TCP/UDP/TLS, ultra-low latency, high throughput" },
    { lb: "Classic LB (CLB)", layer: "4 & 7 (legacy)", best: "Existing EC2-Classic or EC2-Classic-VPC apps" },
    { lb: "Gateway LB (GWLB)", layer: "Layer 3", best: "Inserting third-party virtual network appliances" }
  ],
  compute: [
    { service: "EC2", use: "Virtual servers. Max control. Choose: On-Demand, Reserved, Spot, Dedicated." },
    { service: "Lambda", use: "Serverless functions. Event-driven. Per-100ms billing. No infra to manage." },
    { service: "ECS", use: "Container orchestration. Run on EC2 or Fargate. Docker-compatible." },
    { service: "EKS", use: "Managed Kubernetes control plane. Same APIs as upstream k8s." },
    { service: "Fargate", use: "Serverless container compute. Pay per task. No host management." },
    { service: "Elastic Beanstalk", use: "PaaS. Upload code, AWS handles capacity/LoadBalancer/monitoring." },
    { service: "Lightsail", use: "Simplified VPS for devs. Bundles compute/storage/network at fixed price." },
    { service: "Batch", use: "Batch processing at scale. Dynamically provisions/Scales compute." },
    { service: "Outposts", use: "Extend AWS services/equipment to on-prem data center." }
  ],
  supportPlans: [
    { plan: "Basic", cost: "Free", response: "N/A", features: "Customer service + Trusted Advisor 7 checks. No technical support." },
    { plan: "Developer", cost: "$29/mo", response: "12 hrs (business hours)", features: "Email access to support engineers. Best practice guidance." },
    { plan: "Business", cost: "From $100/mo", response: "1 hr (24/7)", features: "Phone + chat. All Trusted Advisor checks. 3rd-party software support." },
    { plan: "Enterprise On-Ramp", cost: "From $5,500/mo", response: "30 min (24/7)", features: "Pool of TAMs, 1 IEM/year, Concierge billing support." },
    { plan: "Enterprise", cost: "From $15,000/mo", response: "15 min (24/7)", features: "Dedicated TAM, unlimited IEM, Concierge support, TAM + IEM." }
  ],
  costTools: [
    { tool: "AWS Pricing Calculator", use: "Estimate cost BEFORE you deploy. Compare configs." },
    { tool: "AWS Cost Explorer", use: "Visualize past spend. Forecast up to 12 months." },
    { tool: "AWS Budgets", use: "Alerts when spend/usage crosses custom thresholds." },
    { tool: "Cost & Usage Report (CUR)", use: "Most granular hourly data. Save in S3. Load in Athena/QuickSight." },
    { tool: "Cost Allocation Tags", use: "Tags on resources appear in billing reports to split by team/project." },
    { tool: "Consolidated Billing (Organizations)", use: "One bill + combined usage = volume discounts + RI sharing, no fee." }
  ],
  snowFamily: [
    { device: "Snowcone", capacity: "8 TB (14 TB usable)", compute: "2 CPU / 4 GB", use: "Edge computing, small offline transfer" },
    { device: "Snowball Edge (Storage Optimized)", capacity: "80 TB", compute: "40 vCPU / 80 GiB", use: "Large data migration + local compute" },
    { device: "Snowball Edge (Compute Optimized)", capacity: "40 TB", compute: "104 vCPU / 416 GiB", use: "ML, motion video, analytics on edge" },
    { device: "Snowmobile", capacity: "Up to 100 PB", compute: "N/A", use: "Exabyte-scale data migration truck" }
  ],
  globalVsZonal: [
    { type: "Global Services", list: "IAM, Route 53, CloudFront, WAF, Shield, Organizations, ACM, WorkSpaces" },
    { type: "Zonal Services", list: "EC2, RDS, EBS, ElastiCache, VPC (in one AZ), Redshift" }
  ],
  ec2InstanceTypes: [
    { family: "General Purpose", code: "M, T", use: "Balanced CPU/memory/network. Web servers, dev envs, small DBs." },
    { family: "Compute Optimized", code: "C", use: "High CPU-to-memory. Batch processing, gaming, ML inference." },
    { family: "Memory Optimized", code: "R, X, z", use: "In-memory DBs, real-time analytics, SAP HANA." },
    { family: "Accelerated Computing", code: "P, G, Inf", use: "GPU/FPGA. ML/DL training, HPC, video encoding." },
    { family: "Storage Optimized", code: "I, D, H", use: "High sequential R/W. Data warehousing, Hadoop, NoSQL." }
  ],
  aiMlServices: [
    { service: "SageMaker AI", use: "Build/train/deploy ML models at scale" },
    { service: "Amazon Q", use: "Generative AI assistant for work" },
    { service: "Comprehend", use: "NLP - sentiment, entities in text" },
    { service: "Kendra", use: "ML-powered enterprise search (natural language)" },
    { service: "Lex", use: "Build chatbots (voice/text) - Alexa tech" },
    { service: "Polly", use: "Text-to-speech lifelike voices" },
    { service: "Rekognition", use: "Computer vision - faces, objects, scenes" },
    { service: "Textract", use: "Extract text/data from scanned documents (beyond OCR)" },
    { service: "Transcribe", use: "Speech-to-text automatic transcription" },
    { service: "Translate", use: "Neural machine translation across languages" }
  ],
  analyticsServices: [
    { service: "Athena", use: "Serverless SQL on S3. Pay per TB scanned." },
    { service: "EMR", use: "Managed Hadoop/Spark cluster for big data." },
    { service: "Glue", use: "ETL service + data catalog (serverless)." },
    { service: "Kinesis", use: "Stream real-time data (video, IoT, logs)." },
    { service: "OpenSearch", use: "Managed search engine (was Elasticsearch)." },
    { service: "QuickSight", use: "Serverless BI dashboard & visual analytics." },
    { service: "Redshift", use: "Petabyte-scale data warehouse (columnar)." }
  ],
  tips: [
    { category: "Exam Strategy", tip: "Eliminate 2 obviously wrong options first to improve guessing odds on multiple choice." },
    { category: "Exam Strategy", tip: "For 'Select TWO' questions, eliminate clearly incorrect options first, then pick best remaining 2." },
    { category: "Exam Strategy", tip: "There is NO penalty for guessing - never leave a blank answer." },
    { category: "Exam Strategy", tip: "Domain 2 (Security) is the hardest and largest (30%) - invest extra study there." },
    { category: "Shared Responsibility", tip: "AWS = 'Security OF the Cloud' (facilities/hardware). Customer = 'Security IN the Cloud' (data/IAM/configs)." },
    { category: "Shared Responsibility", tip: "More managed = more AWS responsibility. EC2? You patch OS. Lambda/RDS? AWS patches more." },
    { category: "Pricing", tip: "General rule: On-Demand > Reserved > Spot in cost. Spot cheapest but interruptible." },
    { category: "Pricing", tip: "All Upfront Reserved = biggest discount. No Upfront = least discount. Convertible < Standard discount." },
    { category: "Pricing", tip: "Data Transfer IN to AWS is generally free. Data Transfer OUT has a cost (first 100 GB/mo free)." },
    { category: "Pricing", tip: "Consolidated Billing combines usage for volume discount - FREE in AWS Organizations." },
    { category: "Security", tip: "Root user: enable MFA, delete access keys, never use for daily work. Only root can close account / change name." },
    { category: "Security", tip: "Security Groups = stateful (return traffic auto-allowed) + allow rules only. NACLs = stateless + allow AND deny rules." },
    { category: "Security", tip: "Principle of Least Privilege: grant only the permissions needed, when needed, nothing more." },
    { category: "Security", tip: "IAM is a GLOBAL service. EC2/RDS/EBS are ZONAL. Route 53, CloudFront also global." },
    { category: "Storage", tip: "S3: objects up to 5 TB. Bucket names are globally unique. 11 nines durability, NOT 11 nines availability." },
    { category: "Storage", tip: "Lifecycle policy moves S3 → Standard-IA → Glacier → Deep Archive automatically based on age." },
    { category: "Storage", tip: "EBS is attached to ONE EC2 in ONE AZ. For multi-AZ shared, use EFS (Linux only) or FSx (Windows)." },
    { category: "Storage", tip: "Instance Store = ephemeral. Data lost when instance stops/terminates. Use for temp cache/buffer only." },
    { category: "Compute", tip: "Lambda max runtime = 15 minutes. Auto-scales. Pay per request + execution time (ms)." },
    { category: "Compute", tip: "Fargate = serverless containers. You don't manage EC2. Pay per task. Works with ECS & EKS." },
    { category: "Network", tip: "Public Subnet = has route to IGW. Private Subnet = no IGW route; uses NAT Gateway for outbound." },
    { category: "Network", tip: "Direct Connect = dedicated private line, consistent latency. NOT encrypted by default (use MACsec or VPN)." },
    { category: "Network", tip: "CloudFront caches content at Edge Locations worldwide. Reduces latency, lowers origin load." },
    { category: "Network", tip: "Global Accelerator = non-HTTP apps, static IPs, AWS backbone routing. CloudFront = HTTP/HTTPS caching." },
    { category: "Database", tip: "RDS Multi-AZ = standby for automatic failover (high availability). Read Replicas = for read scaling." },
    { category: "Database", tip: "DynamoDB = NoSQL, serverless, single-digit ms latency. Reserved capacity available." },
    { category: "Database", tip: "Aurora is 5x faster than standard MySQL, 3x faster than PostgreSQL (AWS-tuned)." },
    { category: "Well-Architected", tip: "6 Pillars: OPS, SECURITY, RELIABILITY, PERFORMANCE EFFICIENCY, COST OPT, SUSTAINABILITY." },
    { category: "Migration", tip: "6 Rs: Rehost (lift&shift), Replatform, Refactor (re-architect), Repurchase (SaaS), Retain, Retire." },
    { category: "Support", tip: "Only Enterprise Support gives 15-min response for business-critical + dedicated TAM." },
    { category: "Support", tip: "Business Support: 1-hr response 24/7, all Trusted Advisor checks, phone+chat access." },
    { category: "Billing", tip: "AWS Cost Explorer forecasts up to 12 months. CUR is most granular (hourly in S3)." },
    { category: "Shared Responsibility", tip: "For S3: AWS secures infrastructure & data durability. Customer: bucket policy, encryption, versioning, access." },
    { category: "AI/ML", tip: "Match service to task: Polly=TTS, Transcribe=STT, Comprehend=NLP, Rekognition=vision, Lex=chatbot." },
    { category: "Security", tip: "KMS = shared service with AWS. CloudHSM = single-tenant dedicated hardware, FIPS 140-2 L3." },
    { category: "Common Traps", tip: "AWS doesn't 'automatically encrypt' your data - you opt in. KMS lets you manage keys." },
    { category: "Common Traps", tip: "Availability Zones ARE NOT countries - they're isolated data centers within ONE Region." },
    { category: "Common Traps", tip: "S3 Standard vs S3 One Zone-IA: One Zone-IA saves money but loses if the AZ fails. Used for re-creatable data." }
  ]
};

if (typeof window !== 'undefined') {
  window.CHEATSHEET = CHEATSHEET;
}