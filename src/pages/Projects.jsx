import { useEffect } from "react";
import './Projects.css';
import ProjectCard from "../components/ProjectCard";
import { solo_projects, lab_projects } from "../data/projectsData";

function Projects() {
    useEffect(() => {
        document.title = 'Projects - Tristan Cravello';
    }, []);

    return (
        <main className="projects text-center">
            <h1 id="projects-title">Software Engineering Portfolio</h1>
            <section>
                <h2>Featured Software Projects</h2>

                <div className="projects-grid">
                    {solo_projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            <section className="lab-section">
                <h2>Cloud, AI & DevOps Labs</h2>

                <p className="section-description">
                    Hands-on cloud, AI, containerization, Kubernetes, and CI/CD projects completed through NextWork
                </p>

                <div className="projects-grid">
                    {lab_projects.map((project, index) => (
                        <ProjectCard key={`lab-${index}`} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;