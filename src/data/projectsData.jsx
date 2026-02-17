// src/data/projectsData.jsx
// Project data for the portfolio's Projects page
export const solo_projects = [
    {
        title: "ClassPulse",
        image: "/images/ClassPulse.webp",
        description:"A full-stack classroom analytics platform that enables teachers to track student behavior, measure participation rates, and generate exportable performance reports.",
        technologies: ["React", "Node.js", "Express", "JavaScript", "REST API", "CSS", "MongoDB", "JWT Auth"],
        status: "In Progress",
        github: "https://github.com/triscravello/ClassPulse",
        demo: "https://class-pulse-henna.vercel.app/"
    },
    {
        title: "Personal Portfolio",
        image: "/images/portfolio-site.webp",
        description: "A modern, responsive portfolio website showcasing full-stack development projects and technical skills.",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        status: "Current",
        github: "https://github.com/triscravello/tristan-portfolio-site"
    }, 
    {
        title: "Space Travel", 
        image: "/images/SpaceTravel.webp",
        description: "A React single-page application simulating an interplanetary evacuation experience with dynamic routing and state management.",
        technologies: ["React", "React Router", "Mock API", "Context API", "State Management", "Netlify"],
        status: "Completed",
        github: "https://github.com/triscravello/space-travel",
        demo: "https://command-spacetravel.netlify.app/",
    },
    {
        title: "Pokedex",
        image: "/images/Pokedex.webp",
        description: "A React application that generates two randomized Pokémon hands and determines a winner based on total experience points.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        status: "Completed",
        github: "https://github.com/triscravello/React-Pokedex",
        demo: "https://reactproppokedex.netlify.app/"
    },
    {
        title: "Dog Adoption API Platform",
        image:"/images/dog-api-postman.webp",
        description: "A secure RESTful API with JWT authentication and protected routes. Direct endpoint access requires a valid Bearer token.",
        technologies: ["Node.js", "Express", "MongoDB", "REST API", "Chai", "Supertest"],
        status: "Completed",
        github: "https://github.com/triscravello/dog-adoption-platform",
        demo: "https://dog-adoption-platform-api.onrender.com/",
        demoNote: "Protected API endpoints — requires JWT for access. Screenshot shows GET /dogs with Bearer token."
    }
]