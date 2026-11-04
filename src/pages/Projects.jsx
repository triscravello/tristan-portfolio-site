
import { useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

import {
    solo_projects,
    ai_engineering_projects,
    system_design_projects
} from "../data/projectsData";

function Projects() {
    useEffect(() => {
        document.title = "Projects - Tristan Cravello";
    }, []);

    return (
        <main className="projects text-center">
            <h1 id="projects-title">
                Software Engineering Portfolio
            </h1>

            {/* Featured Software Projects */}
            <section aria-labelledby="featured-projects-title">
                <h2 id="featured-projects-title">
                    Featured Software Projects
                </h2>

                <p className="section-description">
                    Full-stack applications and backend systems
                    built with an emphasis on API design,
                    database correctness, cloud infrastructure,
                    automated testing, and reliable software delivery.
                </p>

                <div className="projects-grid">
                    {solo_projects.map((project) => (
                        <ProjectCard
                            key={project.github || project.documentation || project.title}
                            project={project}
                        />
                    ))}
                </div>
            </section>

            {/* AI Engineering & Machine Learning */}
            <section
                className="ai-engineering-section"
                aria-labelledby="ai-projects-title"
            >
                <h2 id="ai-projects-title">
                    AI Engineering & Machine Learning
                </h2>

                <p className="section-description">
                    AI engineering and machine learning projects
                    exploring agent safety, multi-agent workflows,
                    leakage-resistant model training, automated
                    verification, and secure inference deployment.
                </p>

                <div className="projects-grid">
                    {ai_engineering_projects.map((project) => (
                        <ProjectCard
                            key={project.github || project.documentation || project.title}
                            project={project}
                        />
                    ))}
                </div>
            </section>

            {/* System Design & Distributed Systems */}
            <section
                className="system-design-section"
                aria-labelledby="system-design-title"
            >
                <h2 id="system-design-title">
                    System Design & Distributed Systems
                </h2>

                <p className="section-description">
                    Backend engineering and system design projects
                    focused on concurrency, distributed coordination,
                    transactional correctness, scalability,
                    performance testing, and failure recovery.
                </p>

                <div className="projects-grid">
                    {system_design_projects.map((project) => (
                        <ProjectCard
                            key={project.github || project.documentation || project.title}
                            project={project}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;
