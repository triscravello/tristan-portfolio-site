// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
import RunLayerImg from "../assets/RunlayerDemo.webp";
import ThreatEventPlatformImg from "../assets/ThreatEventPlatform.webp";
import ClassPulseImg from "../assets/ClassPulse.webp"
import HeatRiskAlertImg from "../assets/HeatRiskAlert.webp";
import DistributedTicketReservationAPIImg from "../assets/ticketreservationAPI.webp";

import PolicyRepairControllerImg from "../assets/PolicyRepairController.webp";
import RunningReadinessMLImg from "../assets/RunningReadinessML.webp";
import GatedExpressUpgradeImg from "../assets/GatedExpress.webp";
import DebugPaymentOutageImg from "../assets/DebugPaymentOutage.webp";
import RepairEventPipelineImg from "../assets/EventPipelineTeams.webp";

import TapToPayAuthorizationImg from "../assets/TapToPayAuthorization.webp";
import RideDispatchEngineImg from "../assets/RideDispatchEngine.webp";
import TicketDropConcurrencyImg from "../assets/TicketDropConcurrency.webp";
import PrivacySafeNearbyGridImg from "../assets/PrivacySafeGrid.webp";
import PlayerLeaderboardImg from "../assets/PlayerLeaderboard.webp";
import PublishToSearchImg from "../assets/PublishToSearch.webp";
import StrideSyncDesignImg from "../assets/StrideSyncDesign.webp";

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
        title: "Distributed Ticket Reservation API",
        image: DistributedTicketReservationAPIImg,
        description: "Built a distributed ticket reservation API that coordinates concurrent booking requests across multiple application instances while preventing duplicate seat reservations and preserving transactional correctness.",
        architecture: "Java Spring Boot architecture with two containerized API instances, Redis Lua-based distributed admission control, and PostgreSQL transactions using pessimistic row locking, idempotency keys, and unique seat constraints. Docker Compose orchestrates the services, with k6 supporting load testing.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Lua", "Docker", "Docker Compose", "Maven", "k6", "REST API"],
        highlights: [],
        features: [
            "Distributed admission control",
            "Concurrent ticket reservations",
            "Idempotent booking requests",
            "Transactional seat locking",
            "Duplicate reservation prevention", 
            "Redis outage handling",
            "Load testing and correctness verification"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/ticket-reservation-api"
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
    // Running Readiness ML
    {
        title: "Running Readiness ML",
        image: RunningReadinessMLImg,
        description: "Built an end-to-end machine learning system that predicts next-day running recovery needs using leakage-resistant data pipelines, group-safe model evaluation, PyTorch transfer learning, and a containerized inference API.",
        architecture: "Seven-stage Python ML pipeline with runner-isolated data splitting, fold-local preprocessing, scikit-learn model evaluation, PyTorch encoder pretraining and fine-tuning, SHA-256 artifact lineage verification, and a FastAPI inference service with strict Pydantic validation and Docker-based CPU deployment.",
        technologies: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy", "FastAPI", "Pydantic", "Docker", "Machine Learning", "Transfer Learning", "REST API"],
        highlights: [
            "Developed a seven-stage ML workflow covering data validation, feature engineering, model selection, transfer learning, and inference deployment",
            "Prevented runner-level data leakage through group-aware splitting and training-fold-only preprocessing",
            "Evaluated a decision tree against a majority-class baseline, documenting 83.3% accuracy and a 0.875 F1 score",
            "Implemented PyTorch encoder pretraining and fine-tuning using a self-supervised denoising task",
            "Added SHA-256 artifact verification to detect modified model checkpoints and prevent unverified packaging",
            "Built a FastAPI inference boundary with strict Pydantic schemas that reject unexpected features and invalid numeric inputs",
            "Designed a multi-stage Docker serving image that excludes development data from the runtime environment"
        ],
        features: [
            "Next-day running recovery prediction",
            "Leakage-resistant data preprocessing",
            "Group-safe model evaluation",
            "Feature contract enforcement",
            "PyTorch transfer learning",
            "Model artifact integrity verification",
            "Strict inference API validation",
            "Containerized CPU inference",
            "Automated verification tests"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/running-readiness-ml"
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
    // Tap-to-Pay Authorization System
    {
        title: "Tap-to-Pay Authorization System",
        image: TapToPayAuthorizationImg,
        description: "Built a payment authorization system designed to process concurrent tap-to-pay requests, prevent duplicate charges, and recover safely from uncertain transaction outcomes.",
        architecture: "Java Spring Boot backend with PostgreSQL for durable authorization records and transactional correctness, Redis for non-authoritative performance hints, and idempotency controls to coordinate payment requests and issuer responses.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "REST API", "Docker", "Distributed Systems", "Idempotency"],
        highlights: [
            "Designed an idempotent authorization workflow to prevent duplicate payment processing",
            "Used PostgreSQL as the authoritative store for payment state and transaction correctness",
            "Modeled issuer timeouts and uncertain authorization outcomes requiring reconciliation",
            "Separated Redis performance optimization from durable financial correctness",
            "Developed concurrency and failure scenarios to evaluate duplicate-tap handling and recovery behavior"
        ],
        features: [
            "Payment authorization API",
            "Idempotent payment processing",
            "Duplicate-tap protection",
            "Durable transaction records",
            "Issuer timeout handling",
            "Unknown-outcome reconciliation",
            "Concurrency and failure testing"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/triscravello/docs/61062024-4105-480b-8435-66c5df9e24f8"
    },
    // Ride Dispatch Engine
    {
        title: "Ride Dispatch Engine",
        image: RideDispatchEngineImg,
        description: "Built a real-time ride dispatch and surge pricing engine that matches riders with available drivers, coordinates concurrent assignments, and evaluates dispatch reliability under simulated demand spikes.",
        architecture: "Python FastAPI backend with Redis-backed driver availability, atomic assignment operations, deterministic dispatch simulations, and automated concurrency tests for duplicate-assignment prevention.",
        technologies: ["Python", "FastAPI", "Redis", "REST API", "Docker", "Pytest", "Concurrency", "Distributed Systems"],
        highlights: [
            "Implemented driver matching and dispatch workflows for simulated ride requests",
            "Used Redis atomic operations to coordinate driver claims across concurrent workers",
            "Reproduced duplicate-assignment race conditions to investigate dispatch correctness",
            "Modeled demand spikes and surge pricing behavior using deterministic simulations",
            "Developed automated concurrency tests and benchmark workflows to evaluate assignment reliability"
        ],
        features: [
            "Real-time ride dispatch",
            "Driver availability tracking",
            "Atomic driver assignments",
            "Duplicate-assignment prevention",
            "Surge pricing simulation",
            "Concurrent worker processing",
            "Reliability benchmarking"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/triscravello/docs/a54824cf-bd8f-4c34-bd78-1c03acb66f68"
    },
    // Ticket Drop Concurrency
    {
        title: "Ticket Drop Concurrency",
        image: TicketDropConcurrencyImg,
        description: "Explored concurrency challenges in high-demand ticket releases, focusing on how simultaneous purchase requests compete for limited inventory and how race conditions can affect reservation correctness.",
        architecture: "Java concurrency lab modeling simultaneous ticket purchase attempts, shared inventory state, and contention scenarios to investigate safe coordination of competing requests.",
        technologies: ["Java", "Concurrency", "Multithreading", "System Design"],
        highlights: [
            "Investigated concurrent purchase requests competing for limited ticket inventory",
            "Explored race conditions and shared-state correctness during high-demand ticket releases",
            "Examined the relationship between request concurrency, inventory limits, and overselling risks",
            "Applied concurrency concepts to a ticket reservation scenario"
        ],
        features: [
            "Concurrent ticket requests",
            "Shared inventory modeling",
            "Race condition analysis",
            "Inventory contention",
            "Concurrency experimentation"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/triscravello/docs/df8312bc-22f5-44c8-b83d-7c775c98dc53"
    },
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