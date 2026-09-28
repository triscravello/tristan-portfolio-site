import { useEffect } from "react";
import './Projects.css';
import ProjectCard from "../components/ProjectCard";
import { solo_projects, ai_engineering_projects, system_design_projects, lab_projects, data_projects } from "../data/projectsData";

function Projects() {
    useEffect(() => {
        document.title = 'Projects - Tristan Cravello';
    }, []);

    return (
        <main className="projects text-center">
            <h1 id="projects-title">Software Engineering Portfolio</h1>
            <section>
                <h2>Featured Software Projects</h2>

                <p className="section-description">
                    Full-stack applications and production-oriented software projects spanning backend engineering, cloud infrastructure, APIs, and product development.
                </p>

                <div className="projects-grid">
                    {solo_projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            <section className="ai-engineering-section">
                <h2>AI Engineering & Agentic Development</h2>

                <p className="section-description">
                    AI-assisted software engineering projects focused on autonomous repair, specification-driven development, debugging, agent workflows, MCP, and deterministic guardrails.
                </p>

                <div className="projects-grid">
                    {ai_engineering_projects.map((project, index) => (
                        <ProjectCard key={`ai-engineering-${index}`} project={project} />
                    ))}
                </div>
            </section>

            <section className="system-design-section">
                <h2>Systems & Architecture</h2>

                <p className="section-description">
                    System design case studies exploring distributed systems, scalability, data architecture, reliability, performance, consistency, and failure recovery.
                </p>

                <div className="projects-grid">
                    {system_design_projects.map((project, index) => (
                        <ProjectCard key={`system-design-${index}`} project={project} />
                    ))}
                </div>
            </section>

            <section className="lab-section">
                <h2>Cloud, AI & DevOps Labs</h2>

                <p className="section-description">
                    Hands-on cloud infrastructure, AI, containerization, Kubernetes, and CI/CD projects completed through NextWork.
                </p>

                <div className="projects-grid">
                    {lab_projects.map((project, index) => (
                        <ProjectCard key={`lab-${index}`} project={project} />
                    ))}
                </div>
            </section>

            <section className="data-projects">
                <h2>Data Engineering & Analytics Labs</h2>

                <p className="section-description">
                    Hands-on data engineering, analytics engineering, visualization, and AI-assisted workflows completed through NextWork.
                </p>

                <div className="projects-grid">
                    {data_projects.map((project, index) => (
                        <ProjectCard key={`data-${index}`} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;