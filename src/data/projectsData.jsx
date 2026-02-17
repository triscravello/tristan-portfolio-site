// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
export const solo_projects = [
    {
        title: "ClassPulse",
        image: "/images/ClassPulse.webp",
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
        image: "/images/portfolio-site.webp",
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
        demo: null
    }, 
    {
        title: "Space Travel", 
        image: "/images/SpaceTravel.webp",
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
        image: "/images/Pokedex.webp",
        description: "A React application that generates two randomized Pokémon hands and determines a winner based on total experience points.",
        architecture: "Component-based React application utilizing props and state management.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        highlights: [
            "Reusable card components",
            "Randomized game logic implementation",
            "State-driven UI updates"
        ],
        features: [
            "Dynamic Pokemon generation",
            "Score comparison system",
            "Interactive UI"
        ],
        status: "Completed",
        github: "https://github.com/triscravello/React-Pokedex",
        demo: "https://reactproppokedex.netlify.app/"
    },
    {
        title: "Dog Adoption API Platform",
        image:"/images/dog-api-postman.webp",
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
]