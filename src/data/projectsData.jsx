// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
import RunLayerImg from "../assets/RunlayerDemo.webp";
import ThreatEventPlatformImg from "../assets/ThreatEventPlatform.webp";
import ClassPulseImg from "../assets/ClassPulse.webp"
import PortfolioImg from "../assets/portfolio-site.webp";
import PokegameImg from "../assets/Pokegame.webp";
import DogApiImg from "../assets/dog-api-postman.webp";
import HeatRiskAlertImg from "../assets/HeatRiskAlert.webp";

import PolicyRepairControllerImg from "../assets/PolicyRepairController.webp";
import IdempotentReservationAPIImg from "../assets/IdempotentReservation.webp";
import GatedExpressUpgradeImg from "../assets/GatedExpress.webp";
import DebugPaymentOutageImg from "../assets/DebugPaymentOutage.webp";
import RepairEventPipelineImg from "../assets/EventPipelineTeams.webp";

import PrivacySafeNearbyGridImg from "../assets/PrivacySafeGrid.webp";
import PlayerLeaderboardImg from "../assets/PlayerLeaderboard.webp";
import PublishToSearchImg from "../assets/PublishToSearch.webp";
import AISearchModeImg from "../assets/AIandSearchMode.webp";
import StrideSyncDesignImg from "../assets/StrideSyncDesign.webp";

import AISecurityScannerImg from "../assets/AISecurityScannerPython.webp";
import WorldCupDashboardImg from "../assets/WorldCupDashboard.webp";
import DeployNextjstoEKSImg from "../assets/DeployNextjstoEKS.webp";
import ContainerizeNextwithECRImg from "../assets/ContainerizeNextwithECR.webp";
import AutomateCICDforEKSImg from "../assets/AutomateCICDforEKS.webp";
import RAGDeployKubeImg from "../assets/RAGDeployKube.webp";
import RAGFastAPIImg from "../assets/RAGFastAPI.webp";
import SecureSecretsManagerImg from "../assets/SecureSecretsManager.webp";
import AWSSecurityMonitoringImg from "../assets/AWSSecurityMonitoring.webp";

import DbtMCPImg from "../assets/DbtMCP.webp";
import GrafanaImg from "../assets/Grafana.webp";
import JupyterMCPImg from "../assets/JupyterMCP.webp";
import PostgresDockerMCPImg from "../assets/PostgresDockerMCP.webp";

export const solo_projects = [
    {
        title: "RunLayer",
        image: RunLayerImg,
        description: "A personalized running apparel recommendation platform that generates outfit recommendations based on weather conditions, workout type, and runner preferences.",
        architecture: "Full-stack Next.js application with PostgreSQL, Prisma ORM, Redis-backed rate limiting, weather integration, and a personalized recommendation engine.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis", "Upstash Redis", "Tailwind CSS", "REST API"],
        highlights: [
            "Built a recommendation engine that ranks apparel using weather and user preference data",
            "Implemented personalized runner profiles and recommendation history",
            "Designed a PostgreSQL schema with Prisma ORM",
            "Created analytics dashboards showing recommendation and preference insights",
            "Implemented distributed Redis-backed rate limiting with fixed-window algorithms to protect production API endpoints."
        ],
        features: [
            "Personalized outfit recommendations",
            "Weather-aware recommendations",
            "Runner profiles",
            "Recommendation history",
            "Insights dashboard"
        ],
        status: "Active Development",
        github: "https://github.com/triscravello/runlayer-app"
    },
    {
        title: "Threat Event Platform",
        image: ThreatEventPlatformImg,
        description: "A production-oriented threat event API with containerized deployment, automated CI/CD, secure cloud authentication, health monitoring, and rollback workflows.",
        architecture: "Spring Boot application containerized with Docker and deployed to Amazon ECS Fargate through GitHub Actions, Amazon ECR, an Application Load Balancer, AWS Secrets Manager, and CloudWatch.",
        technologies: ["Java", "Spring Boot", "Maven", "Docker", "GitHub Actions", "AWS", "Amazon ECS", "AWS Fargate", "Amazon ECR", "OIDC", "AWS Secrets Manager", "CloudWatch"],
        highlights: [
            "Built a Spring Boot API for ingesting and processing threat events",
            "Automated testing, Docker image builds, ECR publishing, and ECS deployment with GitHub Actions",
            "Used GitHub OIDC authentication to avoid storing long-lived AWS credentials",
            "Configured application health checks and an ECS deployment circuit breaker for automatic rollback",
            "Created a manual rollback workflow for application-level failures discovered after deployment"
        ],
        features: [
            "Threat event API",
            "Automated CI/CD pipeline",
            "Secure OIDC authentication",
            "Health monitoring",
            "Automatic and manual rollback",
        ],
        status: "Completed",
        github: "https://github.com/triscravello/threat-ingest"
    },
    {
        title: "FIFA World Cup Heat Risk Alert System",
        image: HeatRiskAlertImg,
        description: "A cloud-based alert system that monitors FIFA World Cup host city weather conditions and generates heat risk alerts with AI-powered safety briefings.",
        architecture: "Serverless AWS workflow using scheduled checks, weather data, risk scoring, and AI-generated safety summaries.",
        technologies: ["AWS", "Amazon Bedrock", "Open-Meteo API", "AWS Lambda", "Python", "Automation"],
        highlights: [
            "Built a heat risk scoring workflow for World Cup host cities",
            "Generated AI-powered safety briefings with Amazon Bedrock",
            "Automated weather checks and alert logic",
            "Designed a real-world public safety use case around sports and climate risk"
        ],
        features: [
            "Heat risk alerts",
            "Host city weather monitoring",
            "AI safety briefings",
            "Automated alert workflow"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/fifa-world-cup-heat-risk-monitor",
        demo: "http://worldcup-heat-alerts-593489476440.s3-website-us-east-1.amazonaws.com/"
    },
    {
        title: "ClassPulse",
        image: ClassPulseImg,
        description:"A full-stack classroom analytics platform that enables teachers to track student behavior, measure participation rates, and generate exportable performance reports.",
        architecture: "MERN stack application using RESTful API design with JWT authentication and protected routes",
        technologies: ["React", "Node.js", "Express", "JavaScript", "REST API", "CSS", "MongoDB", "JWT Authentication"],
        highlights: [
            "Implemented secure JWT-based authentication and route protection",
            "Designed normalized MongoDB schemas to support scalable behavior logging and report generation",
            "Built real-time participation analytics dashboards using aggregated MongoDB queries",
            "Structured backend using MVC architecture"
        ],
        features: [
            "Class dashboard with behavior insights",
            "Student-level participation tracking",
            "Exportable reports"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/ClassPulse",
        demo: "https://class-pulse-henna.vercel.app/"
    }
];

export const ai_engineering_projects = [
    // Policy-Aware AI Repair Controller
    {
        title: "Policy-Aware AI Repair Controller",
        image: PolicyRepairControllerImg,
        description: "Built an AI-assisted repair controller that diagnoses failing code, proposes bounded fixes, and enforces deterministic policies before changes can be accepted.",
        architecture: "Python-based repair workflow combining AI-assisted diagnosis with deterministic policy gates, scoped repair actions, and pytest verification.",
        technologies: [
            "Python",
            "Claude Code",
            "AI Agents",
            "Pytest",
            "Policy Enforcement",
            "Automated Testing"
        ],
        highlights: [
            "Built a repair workflow that separates AI-generated decisions from deterministic policy enforcement",
            "Restricted automated repairs to explicitly permitted actions and scopes",
            "Used tests as verification gates before accepting proposed repairs",
            "Explored bounded autonomy patterns for safer AI-assisted software engineering"
        ],
        features: [
            "AI-assisted diagnosis",
            "Policy-aware repair decisions",
            "Deterministic safety gates",
            "Automated verification",
            "Bounded repair actions"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/3b68a440-2ee3-4678-b58a-b6655cd83bdd",
    },
    // Idempotent Reservation API
    {
        title: "Idempotent Reservation API",
        image: IdempotentReservationAPIImg,
        description: "Built a specification-driven reservation API that prevents duplicate bookings, preserves capacity under retries, and handles cancellation safely through explicit idempotency rules.",
        architecture: "Node.js HTTP API designed around normalized reservation identity, capacity invariants, idempotent request handling, cancellation tombstones, and automated acceptance tests.",
        technologies: [
            "Node.js",
            "JavaScript",
            "Claude Code",
            "REST API",
            "Idempotency",
            "Automated Testing"
        ],
        highlights: [
            "Translated ambiguous reservation requirements into explicit behavioral contracts",
            "Implemented idempotent reservation handling to prevent duplicate bookings under retries",
            "Protected inventory capacity with deterministic reservation and cancellation rules",
            "Verified the implementation against an automated acceptance test suite"
        ],
        features: [
            "Idempotent reservations",
            "Duplicate booking prevention",
            "Capacity protection",
            "Idempotent cancellation",
            "Acceptance testing"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/2d8bd79a-c6d7-49ae-a32f-ab66ce25bb3e"
    },
    // Gated Express 5 Upgrade
    {
        title: "Gated Express 5 Upgrade",
        image: GatedExpressUpgradeImg,
        description: "Upgraded a Node.js application to Express 5 through a gated migration workflow that exposed compatibility failures, applied bounded repairs, and verified behavior before release.",
        architecture: "Node.js and Express migration workflow using staged validation gates, automated tests, compatibility checks, bounded code repairs, and a final release decision.",
        technologies: [
            "Node.js",
            "JavaScript",
            "Claude Code",
            "Automated Testing",
            "Dependency Migration"
        ],
        highlights: [
            "Performed a controlled Express 5 dependency upgrade instead of accepting an unverified migration",
            "Diagnosed a wildcard route incompatibility introduced by the framework upgrade",
            "Repaired routing behavior using the Express 5-compatible wildcard syntax",
            "Used automated gates to reach a verified repair-and-ship release decision"
        ],
        features: [
            "Dependency migration",
            "Compatibility debugging",
            "Migration safety gates",
            "Regression testing",
            "Release verification"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/30dc9a8d-c0fe-4e6c-b575-10c651de1b97"
    },
    // MCP Payment Outage Debugger
    {
        title: "MCP Payment Outage Debugger",
        image: DebugPaymentOutageImg,
        description: "Investigated a simulated payment outage using Claude Code and MCP tools to gather runtime evidence, trace the failure across system components, and identify the underlying cause.",
        architecture: "Tool-assisted incident investigation workflow connecting Claude Code to system evidence through MCP, with hypothesis-driven debugging and evidence-based root cause analysis.",
        technologies: [
            "Claude Code",
            "MCP",
            "Incident Response",
            "Debugging",
            "Root Cause Analysis",
            "Observability"
        ],
        highlights: [
            "Used MCP-connected tools to investigate a simulated production payment outage",
            "Gathered system evidence before proposing changes instead of relying on assumptions",
            "Traced failure signals across application components to narrow the incident scope",
            "Applied an evidence-driven debugging workflow to identify the root cause"
        ],
        features: [
            "MCP tool integration",
            "Incident investigation",
            "Evidence collection",
            "Root cause analysis",
            "AI-assisted debugging"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/ad701fcb-cd3e-46f8-adc1-2ebcb311e8fb"
    },
    // Event Pipeline Repair with Agent Teams
    {
        title: "Event Pipeline Repair with Agent Teams",
        image: RepairEventPipelineImg,
        description: "Repaired a broken event-processing pipeline using coordinated Claude Code agents with explicit responsibilities, shared contracts, and verification before integration.",
        architecture: "Multi-agent software engineering workflow dividing investigation, implementation, and review responsibilities across agents while preserving shared event contracts and integration gates.",
        technologies: [
            "Claude Code",
            "Agent Teams",
            "AI Agents",
            "Event-Driven Architecture",
            "Automated Testing",
            "Multi-Agent Systems"
        ],
        highlights: [
            "Coordinated specialized agents to investigate and repair different parts of an event pipeline",
            "Used explicit contracts to prevent independently developed fixes from breaking integration boundaries",
            "Separated implementation and review responsibilities across the agent workflow",
            "Verified the repaired pipeline before accepting the combined changes"
        ],
        features: [
            "Multi-agent collaboration",
            "Event pipeline repair",
            "Agent specialization",
            "Contract verification",
            "Integration testing"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/b6d6aef9-e655-4a80-ad87-f3acf66d790c"
    },
];

export const system_design_projects = [
    // Privacy-Safe Nearby Grid
    {
        title: "Privacy-Safe Nearby Grid",
        image: PrivacySafeNearbyGridImg,
        description: "Designed and tested a privacy-aware nearby discovery system that supports geospatial search while limiting precise location exposure and controlling repeated discovery requests.",
        architecture: "PostgreSQL and PostGIS architecture using spatial grid cells, GiST indexing, distance-aware queries, privacy controls, and per-viewer discovery budgets.",
        technologies: [
            "PostgreSQL",
            "PostGIS",
            "SQL",
            "Docker",
            "GiST Indexes",
            "Geospatial Systems"
        ],
        highlights: [
            "Designed geospatial discovery queries for a dataset of more than 100,000 profiles",
            "Used PostGIS and GiST indexing to accelerate location-based searches",
            "Measured an indexed nearby query at approximately 15.78ms",
            "Added per-viewer discovery budgets to limit repeated location probing"
        ],
        features: [
            "Privacy-aware nearby discovery",
            "Geospatial indexing",
            "Distance-based search",
            "Discovery throttling",
            "Query performance analysis"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/9ae28692-aea8-402f-b0cc-58b96cc0adbf"
    },
    // 12 Million-Player Leaderboard
    {
        title: "12 Million-Player Leaderboard",
        image: PlayerLeaderboardImg,
        description: "Designed a distributed leaderboard for 12 million concurrent players that scales high-volume score updates while preserving exact global ranking results.",
        architecture: "Partitioned Redis leaderboard architecture distributing players across 12 sorted-set keys, with global aggregation and a production AWS design using Kinesis, Lambda, DynamoDB, and ElastiCache.",
        technologies: [
            "Python",
            "Redis",
            "AWS",
            "Amazon Kinesis",
            "AWS Lambda",
            "DynamoDB",
            "Amazon ElastiCache",
            "Distributed Systems"
        ],
        highlights: [
            "Designed for 12 million concurrent players and high-volume score updates",
            "Replaced a single Redis sorted-set hotspot with 12 partitioned leaderboard keys",
            "Preserved exact global top-K results across distributed partitions",
            "Designed an AWS production architecture using Kinesis, Lambda, DynamoDB, and ElastiCache"
        ],
        features: [
            "Partitioned architecture",
            "Exact global top-K",
            "Distributed global updates",
            "Hotspot mitigation",
            "Scalabale AWS architecture"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/be23d77b-0cb6-4b20-b295-2990a29f9aff"
    },
    // Publish-to-Search Pipeline
    {
        title: "Publish-to-Search Pipeline",
        image: PublishToSearchImg,
        description: "Built a reliable asynchronous publishing pipeline that keeps search indexing decoupled from primary writes while handling retries, duplicate delivery, and temporary failures.",
        architecture: "Event-driven pipeline using a transactional outbox, asynchronous worker processing, idempotent event handling, replay support, and measurable publish-to-search consistency lag.",
        technologies: [
            "Python",
            "SQLite",
            "SQL",
            "Transactional Outbox",
            "Event-Driven Architecture",
            "Idempotency",
            "Observability"
        ],
        highlights: [
            "Implemented the transactional outbox pattern to coordinate database writes and downstream events",
            "Made event processing idempotent so duplicate delivery could be replayed safely",
            "Measured the delay between publishing data and its appearance in search",
            "Explored eventual consistency and failure recovery in asynchronous systems"
        ],
        features: [
            "Transactional outbox",
            "Asynchronous indexing",
            "Idempotent replay",
            "Failure recovery",
            "Consistency lag measurement"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/45f8c210-31d2-4ccb-a7a2-301c6f40f888"
    },
    // Search and AI Mode Simulator
    {
        title: "Search and AI Mode Simulator",
        image: AISearchModeImg,
        description: "Built a browser-based simulator comparing traditional search with an AI-style retrieval path under latency budgets, concurrent fan-out, and partial backend failures.",
        architecture: "Client-safe search simulation modeling distributed retrieval with concurrent fan-out, latency budgets, backend deadlines, fallback behavior, and replicated search infrastructure.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Distributed Systems",
            "Concurrent Requests",
            "Performance Engineering",
            "Resilience"
        ],
        highlights: [
            "Modeled classic search and AI-style retrieval as different latency-sensitive request paths",
            "Used concurrent fan-out to reduce end-to-end retrieval latency",
            "Tested behavior against a 700 ms classic-search latency objective",
            "Demonstrated approximately 475 ms concurrent fan-out behavior with graceful fallback"
        ],
        features: [
            "Search mode simulation",
            "Concurrent fan-out",
            "Latency budgets",
            "Graceful degradation",
            "Failure simulation"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/49b8da02-6589-4712-b03e-64ff182df3be"
    },
    // StrideSync
    {
        title: "StrideSync",
        image: StrideSyncDesignImg,
        description: "Designed a large-scale social fitness platform supporting activity tracking, GPS ingestion, personalized feeds, and high-volume read and write workloads",
        architecture: "Distributed architecture using Kafka for event ingestion, Redis for feed delivery and caching, TimescaleDB and PostgreSQL for structured activity data, object setup storage for large artifacts, and Cassandra for high-scale workloads",
        technologies: [
            "System Design",
            "Kafka",
            "Redis",
            "PostgreSQL",
            "TimescaleDB",
            "Cassandra",
            "Amazon S3",
            "Distributed Systems"
        ],
        highlights: [
            "Designed the platform around a target of 10 million daily active users",
            "Estimated approximately 35,000 peak feed reads per second",
            "Designed GPS ingestion capacity for approximately 2.4 million location points per second",
            "Separated feed, activity, GPS, and storage workloads across specialized data systems"
        ],
        features: [
            "Activity tracking",
            "GPS ingestion",
            "Personalized activity feeds",
            "High-throughput event processing",
            "Distributed data storage"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/b1c5f4fe-c159-4810-a930-3427fc977e85"
    }
];

export const lab_projects = [
    {
        title: "AI Security Scanner for Python",
        image: AISecurityScannerImg,
        description: "Built an AI-powered command-line tool that analyzes Python source files for security vulnerabilities and returns prioritized remediation guidance.",
        architecture: "Python CLI that validates sources files, send code to a generative AI model, parses structured JSON findings, and formats severity-based security reports.",
        technologies: ["Python", "Gemini API", "Generative AI", "CLI", "JSON", "Colorama", "Application Security"],
        highlights: [
            "Built a reusable CLI for scanning Python source code",
            "Validated file paths, extensions, empty files, and API configuraiton",
            "Parsed and validated structured vulnerability findings from an AI response",
            "Added color-coded severity ratings and prioritized findings by risk"
        ],
        features: [
            "AI-assited code analysis",
            "Severity-based reporting",
            "Input validation",
            "Remediation guidance"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/ai-security-audit-copy"
    },
    {
        title: "AI-Powered RAG API",
        image: RAGFastAPIImg,
        description: "Built a Retrieval-Augmented Generation API that retrieves relevant context from a vector database and returns AI-generated answers through a FastAPI endpoint.",
        architecture: "FastAPI backend with vector search, semantic retrieval, and API testing through Swagger UI.",
        technologies: ["Python", "FastAPI", "ChromaDB", "RAG", "Vector Search", "REST API"],
        highlights: [
            "Created an /ask endpoint for AI question answering",
            "Connected retrieved context to generated responses",
            "Tested API behavior through Swagger UI",
            "Practiced backend AI application design"
        ],
        features: ["RAG Endpoint", "Context retrieval", "API testing"],
        status: "Completed",
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/ai-devops-api",
    },
    {
        title: "World Cup Dashboard with Docker & CI/CD",
        image: WorldCupDashboardImg,
        description: "Containerized a Next.js World Cup dashboard and automated its build and delivery workflow with Docker and GitHub Actions.",
        architecture: "Next.js application packaged as a Docker container with a GitHub Actions pipeline for automated builds, validation, and deployment.",
        technologies: ["Next.js", "TypeScript", "Docker", "GitHub Actions", "CI/CD", "REST API"],
        highlights: [
            "Built an interactive dashboard for exploring World Cup data",
            "Created a production-ready Docker image for the application",
            "Automated build and validation steps with GitHub Actions",
            "Practiced application delivery from source code to a deployable container"
        ],
        features: [
            "Interactive dashboard",
            "Containerized deployment",
            "Automated CI/CD"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/3f398956-0d40-40f2-9e1f-7eb17a6deeb6"
    },
    {
        title: "CI/CD Deployment Pipeline for Amazon EKS",
        image: AutomateCICDforEKSImg,
        description: "Automated build, push, and deployment workflows for an Amazon EKS application using GitHub Actions.",
        architecture: "GitHub Actions pipeline using OIDC authentication, Docker image build, Amazon ECR, kubectl, and Kubernetes rollout verification.",
        technologies: ["GitHub Actions", "AWS", "Amazon EKS", "Amazon ECR", "Docker", "Kubernetes", "OIDC", "CI/CD"],
        highlights: [
            "Configured GitHub Actions to build and push Docker images",
            "Used OIDC for secure AWS authentication without long-lived credentials",
            "Automated Kubernetes deployments to Amazon EKS",
            "Tested failure handling and rollback behavior"
        ],
        features: ["Automated deployment", "OIDC authentication", "Rollback verification"],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/526faeec-70b7-42e6-8eb0-c4e222940bce"
    },
    {
        title: "AWS Security Monitoring System",
        image: AWSSecurityMonitoringImg,
        description: "Built an AWS monitoring workflow that detects access to sensitive secrets and sends email notifications when security-related activity occurs.",
        architecture: "AWS CloudTrail records Secrets Manager activity, CloudWatch Logs and metric filters detect matching events, and CloudWatch Alarms publish notifications through Amazon SNS.",
        technologies: ["AWS", "AWS CloudTrail", "Amazon CloudWatch", "Amazon SNS", "AWS Secrets Manager", "Monitoring", "Alerting"],
        highlights: [
            "Recorded AWS API activity with CloudTrail",
            "Created a CloudWatch metric filter for sensitive secret access",
            "Configured a CloudWatch alarm and SNS email notifications",
            "Triggered test activity and troubleshot the end-to-end alert workflow"
        ],
        features: [
            "Security event detection",
            "Cloud monitoring",
            "Email alerts"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/aws-security-monitoring"
    }
];

export const data_projects = [
    {
        title: "Data Engineering with PostgreSQL & Docker MCP",
        image: PostgresDockerMCPImg,
        description: "Built a PostgreSQL data environment with Docker and managed it through Docker MCP, exploring AI-assisted database workflows and relational data modeling.",
        architecture: "Containerized PostgreSQL database managed with Docker and MCP tooling.",
        technologies: ["PostgreSQL", "Docker", "MCP", "SQL"],
        highlights: [
            "Provisioned a PostgreSQL database with Docker",
            "Explored relational database design",
            "Used Docker MCP to interact with the database",
            "Verified schemas and relationships"
        ],
        features: [
            "Containerized database",
            "Relational data modeling",
            "AI-assisted database workflows"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/mcp-data-engineer1"
    },
    {
        title: "Analytics Engineering with dbt MCP",
        image: DbtMCPImg,
        description: "Built and tested analytics models using dbt, applying transformations and automated data quality checks to create reliable analytics workflows.",
        architecture: "dbt project with SQL transformations, models, and automated tests",
        technologies: ["dbt", "SQL", "PostgreSQL", "MCP"],
        highlights: [
            "Built reusable dbt models",
            "Added automated data quality tests",
            "Validated transformed datasets",
            "Practiced analytics engineering workflows"
        ],
        features: [
            "Data transformations",
            "Automated testing",
            "Analytics-ready models"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/mcp-data-engineer2"
    },
    {
        title: "Data Analysis with Jupyter MCP",
        image: JupyterMCPImg,
        description: "Performed exploratory data analysis using Jupyter notebooks, generating insights and visualizations with Python libraries",
        architecture: "Notebook-based data analysis workflow using Jupyter and MCP.",
        technologies: ["Jupyter", "Python", "Pandas", "Matplotlib", "MCP"],
        highlights: [
            "Queried and analyzed structured datasets",
            "Created visualizations with Matplotlib",
            "Used Jupyter MCP to streamline workflows",
        ],
        features: [
            "Interactive notebooks",
            "Data visualization",
            "Exploratory analysis"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/mcp-data-engineer3"
    },
    {
        title: "Data Visualization with Grafana",
        image: GrafanaImg,
        description: "Built interactive dashboards in Grafana using PostgreSQL data to visualize business metrics and monitor trends.",
        architecture: "Grafana dashboards connected to PostgreSQL for real-time visualization.",
        technologies: ["Grafana", "PostgreSQL", "SQL"],
        highlights: [
            "Connected Grafana to PostgreSQL",
            "Created KPI dashboards",
            "Built charts for trends and business metrics",
            "Practiced observability and visualization concepts"
        ],
        features: [
            "Interactive dashboards",
            "Business metrics",
            "Real-time visualization"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/mcp-data-engineer4"
    }
];