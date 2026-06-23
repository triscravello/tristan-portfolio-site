// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
import ClassPulseImg from "../assets/ClassPulse.webp"
import PortfolioImg from "../assets/portfolio-site.webp";
import SpaceTravelImg from "../assets/SpaceTravel.webp";
import PokegameImg from "../assets/Pokegame.webp";
import DogApiImg from "../assets/dog-api-postman.webp";

export const solo_projects = [
    {
        title: "ClassPulse",
        image: ClassPulseImg,
        description:"A full-stack classroom analytics platform that enables teachers to track student behavior, measure participation rates, and generate exportable performance reports.",
        architecture: "MERN stack application using RESTful API design with JWT authentication and protected routes",
        technologies: ["React", "Node.js", "Express", "JavaScript", "REST API", "CSS", "MongoDB", "JWT Authentication"],
        highlights: [
            "Implemented secure JWT-based authentication and route protection",
            "Designed normalized MongoDB schemas to support scalable behavior logging and report generation",
            "Built real-time partcipation analytics dashboards using aggregated MongoDB queries",
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
        image: null,
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
        image: null,
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
        image: null,
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
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/ai-devops-githubactions",
    },
    {
        title: "Kubernetes Backend Deployment on Amazon EKS",
        image: null,
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
        image: null,
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
        image: null,
        description: "Built a generative AI chatbot using Amazon Bedrock to practice prompt engineering and cloud-based AI application development.",
        architecture: "AWS-based generative AI project using Amazon Bedrock for managed foundation model access.",
        technologies: ["AWS", "Amazon Bedrock", "Generative AI", "Prompt Engineering"],
        highlights: [
            "Built a chatbot using Amazon Bedrock",
            "Practiced prompt engineering concepts",
            "Explored managed foundation model workflows",
            "Connected cloud services to AI application behavior"
        ],
        features: ["AI chabot", "Prompt-based responses", "Cloud AI workflow"],
        status: "Completed",
        documentation: "https://learn.nextwork.org/intense_teal_innocent_alligator/docs/aws-genai-bedrock-chatbot"
    }
];