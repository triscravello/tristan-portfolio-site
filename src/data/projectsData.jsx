// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
import RunLayerImg from "../assets/RunlayerDemo.webp";
import ThreatEventPlatformImg from "../assets/ThreatEventPlatform.webp";
import ClassPulseImg from "../assets/ClassPulse.webp"
import PortfolioImg from "../assets/portfolio-site.webp";
import PokegameImg from "../assets/Pokegame.webp";
import DogApiImg from "../assets/dog-api-postman.webp";
import HeatRiskAlertImg from "../assets/HeatRiskAlert.webp";

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
        technologies: ["Java", "Spring Boot", "Maven", "Docker", "GitHub Actions", "AWS", "Amazon ECS", "AWS Fargate", "Amazon ECR", "OIDC", "AWS Secrets Manager", "OIDC"],
        highlights: [
            "Built a Spring Boot API for ingesting and processing threat evens",
            "Automated testing, Docker image builds, ECR publishing, and ECS deployment with GitHub Actions",
            "Used GitHub OIDC authentication to avoid storing long-lived AWS credentials",
            "Configured application health checks and an ECS deployment circuit breaker for automatic rollback",
            "Crated a manual rollback workflow for application-level failures discovered after deployment"
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
        description: "A cloud-based alert system that monitors FIFA World Cup host city weather condition and generates heat risk alerts with AI-powered safety briefings",
        architecture: "Serverless AWS workflow using scheduled checks, weather data, risk scoring, and AI-generated safety summaries",
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
    },
    {
        title: "Personal Portfolio",
        image: PortfolioImg,
        description: "A modern, responsive portfolio website showcasing full-stack development projects and technical skills.",
        architecture: "React SPA with component-based architecture and responsive design principles.",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        highlights: [
            "Component-driven architecture",
            "Responsive layout using modern CSS",
            "Optimized for performance and accessibility",
            "Dynamic project rendering via data-driven structure"
        ],
        features: [
            "Projects showcase",
            "Responsive navigation",
            "Clean semantic HTML structure"
        ],
        status: "Current",
        github: "https://github.com/triscravello/tristan-portfolio-site",
        demo: "https://triscravello.github.io/tristan-portfolio-site/"
    }, 
    {
        title: "Pokedex",
        image: PokegameImg,
        description: "A interactive React game that generates two randomized Pokémon hands and determines a winner based on total experience points, featuring dynamic UI feedback and enhanced user interaction.",
        architecture: "Component-based React application utilizing props, state management, and conditional rendering to power dynamic game logic and interactive UI behavior.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        highlights: [
            "Implemented randomized game logic with conditional 'legendary roll' for enhanced gameplay",
            "Added dynamic UI refresh functionality for re-generating game states",
            "Enhanced UX with visible game instructions and personalized design system",
            "Integrated hover-based micro-interactions for improved user engagement"
        ],
        features: [
            "Dynamic Pokemon generation",
            "Score comparison system",
            "Interactive UI"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/React-Pokedex",
        demo: "https://repokedexact.netlify.app/"
    },
    {
        title: "Dog Adoption API Platform",
        image: DogApiImg,
        description: "A secure RESTful API with JWT authentication and protected routes. Direct endpoint access requires a valid Bearer token.",
        architecture: "Node.js + Express backend following MVC architecture with authentication middleware",
        technologies: ["Node.js", "Express", "MongoDB", "REST API", "Chai", "Supertest"],
        highlights: [
            "Implemented user registration and login with authentication middleware",
            "Designed RESTful endpoints for CRUD operations",
            "Wrote integration tests using Chai and Supertest"
        ],
        features: [
            "User authentication",
            "Dog CRUD operations",
            "Adoption logic",
            "API testing suite"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/dog-adoption-platform",
        demo: "https://dog-adoption-platform-api.onrender.com/",
        demoNote: "Protected API endpoints — requires JWT for access. Screenshot shows GET /dogs with Bearer token."
    }
];

export const lab_projects = [
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
        title: "RAG API Deployment with Kubernetes",
        image: RAGDeployKubeImg,
        description: "Deployed a containerized RAG API to a local Kubernetes cluster using Deployment and Service manifests",
        architecture: "FastAPI RAG API containerized with Docker and deployed through Kubernetes manifests.",
        technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "kubectl", "NodePort"],
        highlights: [
            "Containerized a FastAPI RAG API",
            "Created Kubernetes Deployment and Service manifests",
            "Exposed the API using a NodePort Service",
            "Tested request flow from local machine to Kubernetes pod"
        ],
        features: ["Container orchestration", "Service exposure", "API testing"],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/ai-devops-kubernetes",
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
        title: "Next.js Application Deployment on Amazon EKS",
        image: DeployNextjstoEKSImg,
        description: "Deployed a containerized Next.js application to Amazon EKS using Docker, Amazon ECR, kubectl, and Kubernetes manifests.",
        architecture: "Next.js application containerized with Docker, pushed to Amazon ECR, and deployed to Amazon EKS using Kubernetes Deployment and Service manifests.",
        technologies: ["AWS", "Amazon EKS", "Amazon ECR", "Docker", "Kubernetes", "kubectl", "Next.js"],
        highlights: [
            "Built and pushed a Next.js Docker image to Amazon ECR",
            "Created Kubernetes Deployment and Service manifests",
            "Deployed the application to an Amazon EKS cluster",
            "Verified application health, pods, services, and workload status using kubectl and the EKS console"
        ],
        features: [
            "Containerized Next.js app", 
            "Kubernetes deployment", 
            "Cloud-hosted workload"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/2a469dba-2377-4301-b590-d12e014b4221"
    },
    {
        title: "Containerizing a Next.js App with Docker & Amazon ECR",
        image: ContainerizeNextwithECRImg,
        description: "Containerized a Next.js application with Docker and pushed the image to Amazon Elastic Container Registry.",
        architecture: "Docker-based build workflow using a production Dockerfile, local container testing, and Amazon ECR as a private image registry.",
        technologies: ["Next.js", "Docker", "Amazon ECR", "AWS", "Containerization"],
        highlights: [
            "Created a production-ready Docker image for a Next.js application",
            "Implemented Docker HEALTHCHECK and verified production container behavior locally",
            "Tagged and pushed the image to Amazon ECR",
            "Practiced container registry workflows used in cloud deployments"
        ],
        features: [
            "Docker image build", 
            "Local container testing", 
            "Private container registry"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/a57d517a-5bc9-4424-a0ea-be0028f374b2"
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
            "Triggered test activity and troubleshoot the end-to-end alert workflow"
        ],
        features: [
            "Security event detection",
            "Cloud monitoring",
            "Email alerts"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/aws-security-monitoring"
    },
    {
        title: "Secure Application Secrets with AWS Secrets Manager",
        image: SecureSecretsManagerImg,
        description: "Removed hard-coded AWS credentials from a Python application and retrieved configuration securely from AWS Secrets Manager.",
        architecture: "Python application using the AWS SDK to retrieve a JSON secret at runtime and expose the required values through application configuration variables.",
        technologies: ["AWS", "AWS Secrets Manager", "Python", "Boto3", "Git", "Credential Management"],
        highlights: [
            "Stored application credentials securely in AWS Secrets Manager",
            "Created a Python function to retrieve and parse the secret at runtime",
            "Removed hard-coded credentials from the application source code",
            "Resolved a merge conflict while rebasing local work onto updated project code"
        ],
        features: [
            "Runtime secret retrieval",
            "Secure configuration",
            "Credential protection"
        ],
        status: "Completed",
        documentation: "https://nextwork.ai/intense_teal_innocent_alligator/docs/aws-security-secretsmanager"
    },
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