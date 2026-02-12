import { useEffect } from "react";
import './Projects.css';
import ProjectCard from "../components/ProjectCard";
import { solo_projects } from "../data/projectsData";

function Projects() {
    useEffect(() => {
        document.title = 'Projects - Tristan Cravello';
    }, []);

    return (
        <main className="projects text-center">
            <h1 id="projects-title">My Projects</h1>
            <section>
                <h2>Individual Projects</h2>
                <div className="projects-grid">
                    {solo_projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Projects;