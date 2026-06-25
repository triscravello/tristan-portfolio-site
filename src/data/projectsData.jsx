// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
import RunLayerImg from "../assets/RunlayerDemo.webp";
import ClassPulseImg from "../assets/ClassPulse.webp"
import PortfolioImg from "../assets/portfolio-site.webp";
import SpaceTravelImg from "../assets/SpaceTravel.webp";
import PokegameImg from "../assets/Pokegame.webp";
import DogApiImg from "../assets/dog-api-postman.webp";

import AmazonBedrockChatbotImg from "../assets/AmazonBedrockChatbot.webp";
import DeployEKSImg from "../assets/DeployEKS.webp";
import DockerDesktopImg from "../assets/DockerDesktop.webp";
import GitHubActionTestFlowImg from "../assets/GitHubActionTestFlow.webp";
import RAGDeployKubeImg from "../assets/RAGDeployKube.webp";
import RAGFastAPIImg from "../assets/RAGFastAPI.webp";

import DbtMCPImg from "../assets/DbtMCP.webp";
import GrafanaImg from "../assets/Grafana.webp";
import JupyterMCPImg from "../assets/JupyterMCP.webp";
import PostgresDockerMCPImg from "../assets/PostgresDockerMCP.webp";

export const solo_projects = [
    {
        title: "RunLayer",
        image: RunLayerImg,
        description: "A personalized running apparel recommendation platform that generates outfit recommendations based on weather conditions, workout type, and runner preferences.",
        architecture: "Full-stack Next.js application with PostgreSQL, Prisma ORM, recommendation services, and weather-driven personalization.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "React", "Tailwind CSS", "REST API"],
        highlights: [
            "Built a recommendation engine that ranks apparel using weather and user preference data",
            "Implemented personalized runner profiles and recommendation history",
            "Designed a PostgreSQL schema with Prisma ORM",
            "Created analytics dashboards showing recommendation and preference insights"
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
        status: "In Progress",
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
        title: "Space Travel", 
        image: SpaceTravelImg,
        description: "A React single-page application simulating an interplanetary evacuation experience with dynamic routing and state management.",
        architecture: "React SPA utilizing React Router, Context API, and mock API integration.",
        technologies: ["React", "React Router", "Mock REST API", "Context API", "State Management", "JavaScript", "Netlify"],
        highlights: [
            "Implemented client-side routing with protected views",
            "Managed global state using Context API",
            "Integrated mock API for asynchronous data handling"
        ],
        features: [
            "Dynamic routing",
            "User interaction testing",
            "Simulated API responses"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/space-travel",
        demo: "https://command-spacetravel.netlify.app/",
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
        title: "CI/CD Pipeline with GitHub Actions",
        image: GitHubActionTestFlowImg,
        description: "Configured an automated CI workflow that runs semantic tests to catch degraded RAG knowledge base content before deployment",
        architecture: "GitHub Actions workflow running Python-based tests on repository changes.",
        technologies: ["GitHub Actions", "Python", "CI/CD", "Semantic Testing"],
        highlights: [
            "Created a GitHub Actions workflow file",
            "Automated semantic quality checks",
            "Triggered CI through GitHub pushes",
            "Used failing tests to catch degraded content"
        ],
        features: ["Automated testing", "CI workflow", "Failure detection"],
        status: "Completed",
        github: "https://github.com/triscravello/nextwork-rag-api",
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/ai-devops-githubactions",
    },
    {
        title: "Kubernetes Backend Deployment on Amazon EKS",
        image: DeployEKSImg,
        description: "Deployed a backend application to a Kubernetes cluster using Amazon EKS, Docker, ECR, kubectl, and Kubernetes manifests",
        architecture: "Containerized backend deployed to Amazon EKS using Deployment and Service manifests.",
        technologies: ["AWS", "Amazon EKS", "Amazon ECR", "Docker", "Kubernetes", "kubectl"],
        highlights: [
            "Built and pushed a Docker image to Amazon ECR",
            "Created Kubernetes Deployment and Service manifests",
            "Deployed the backend application using kubectl",
            "Verified the workload in the EKS console",
        ],
        features: ["Container deployment", "Kubernetes service exposure", "Cloud hosting"],
        status: "Completed",
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/aws-compute-eks4"
    },
    {
        title: "Dockerized Application Deployment",
        image: DockerDesktopImg,
        description: "Containerized a web application with Docker and deployed it to Amazon Elastic Beanstalk.",
        architecture: "Docker-based deployment workflow using a custom container image and AWS Elastic Beanstalk.",
        technologies: ["Docker", "AWS Elastic Beanstalk", "Nginx", "Cloud Deployment"],
        highlights: [
            "Built a custom Docker image",
            "Ran the application locally in a container",
            "Deployed the containerized app to AWS",
            "Practiced production-style deployment concepts",
        ],
        features: ["Docker image", "Container runtime", "Cloud deployment"],
        status: "Completed",
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/aws-compute-eb"
    },
    {
        title: "Amazon Bedrock AI Chatbot",
        image: AmazonBedrockChatbotImg,
        description: "Built a generative AI chatbot using Amazon Bedrock to practice prompt engineering and cloud-based AI application development.",
        architecture: "AWS-based generative AI project using Amazon Bedrock for managed foundation model access.",
        technologies: ["AWS", "Amazon Bedrock", "Generative AI", "Prompt Engineering"],
        highlights: [
            "Built a chatbot using Amazon Bedrock",
            "Practiced prompt engineering concepts",
            "Explored managed foundation model workflows",
            "Connected cloud services to AI application behavior"
        ],
        features: ["AI chatbot", "Prompt-based responses", "Cloud AI workflow"],
        status: "Completed",
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/aws-genai-bedrock-chatbot"
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
        architecture: "Notebook-based daya analysis workflow using Jupyter and MCP.",
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