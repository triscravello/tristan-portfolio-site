
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import profilePicture from "../assets/profile-picture.webp";

const featuredProjects = [
    {
        title: "Distributed Ticket Reservation API",
        description:
            "Concurrent booking, Redis coordination, PostgreSQL locking, and idempotency.",
        github:
            "https://github.com/triscravello/ticket-reservation-api"
    },
    {
        title: "Running Readiness ML",
        description:
            "Leakage-resistant machine learning, PyTorch transfer learning, and secure model serving.",
        github:
            "https://github.com/triscravello/running-readiness-ml"
    },
    {
        title: "Threat Event Platform",
        description:
            "Event-driven backend engineering, AWS Fargate, and cloud deployment workflows.",
        github: "https://github.com/triscravello/threat-ingest"
    },
    {
        title: "Policy-Aware AI Repair Controller",
        description:
            "AI-assisted software repair with deterministic authorization and safety gates.",
        github: null
    }
];

function Home() {
    useEffect(() => {
        document.title = "Tristan Cravello | Software Engineer";
    }, []);

    return (
        <main className="home">
            <img
                src={profilePicture}
                alt="Tristan Cravello, software engineer"
                fetchPriority="high"
                className="profile-pic"
            />

            <h1>Software Engineer</h1>

            <p className="home-intro">
                <em>
                    Educator-turned-software engineer building
                    full-stack applications, reliable backend
                    systems, distributed architectures, and
                    AI-powered software.
                </em>
            </p>

            <p className="home-location">
                Based in St. Petersburg, FL | Open to remote
                opportunities
            </p>

            <p className="tech-stack">
                TypeScript • Next.js • Python • Java • Spring Boot •
                PostgreSQL • Redis • AWS • Docker • PyTorch
            </p>

            <div className="cta-buttons">
                <a
                    href={`${import.meta.env.BASE_URL}images/TristanCravello-SoftwareEngineerResume.docx.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    View Resume
                </a>

                <Link
                    to="/projects"
                    className="btn btn-secondary"
                >
                    View Projects
                </Link>

                <Link
                    to="/about"
                    className="btn btn-secondary"
                >
                    About Me
                </Link>

                <Link
                    to="/contact"
                    className="btn btn-secondary"
                >
                    Get in Touch
                </Link>
            </div>

            <section
                className="featured-projects"
                aria-labelledby="featured-projects-title"
            >
                <h2 id="featured-projects-title">
                    Featured Projects
                </h2>

                <p>
                    Selected work across backend engineering,
                    distributed systems, machine learning,
                    and AI-assisted development.
                </p>

                <ul>
                    {featuredProjects.map((project) => (
                        <li key={project.title}>
                            {project.github ? (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>{project.title}</strong>
                                </a>
                            ) : (
                                <Link to="/projects">
                                    <strong>{project.title}</strong>
                                </Link>
                            )}

                            {" — "}
                            {project.description}
                        </li>
                    ))}
                </ul>

                <Link
                    to="/projects"
                    className="btn btn-secondary"
                >
                    Explore All Projects
                </Link>
            </section>
        </main>
    );
}

export default Home;
