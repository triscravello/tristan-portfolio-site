import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import profilePicture from "../assets/profile-picture.webp";

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

            <p>
                <em>
                    Educator-turned-software engineer building full-stack
                    applications, backend systems, cloud infrastructure,
                    AI-powered solutions, and scalable distributed systems.
                </em>
            </p>

            <p>
                Based in St. Petersburg, FL | Open to remote opportunities
            </p>

            <p className="tech-stack">
                React • Next.js • TypeScript • Python • Java • Spring Boot • PostgreSQL •
                Redis • AWS • Docker • Kubernetes • AI Engineering
            </p>

            <div className="cta-buttons">
                <a
                    href={`${import.meta.env.BASE_URL}images/TristanCravelloSoftware-EngineerResume.docx.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    View Resume
                </a>

                <Link to="/projects" className="btn btn-secondary">
                    View Projects
                </Link>

                <Link to="/about" className="btn btn-secondary">
                    About Me
                </Link>

                <Link to="/contact" className="btn btn-secondary">
                    Get in Touch
                </Link>
            </div>

            <section className="featured-projects">
                <h2>Featured Projects</h2>

                <ul>
                    <li>
                        <Link to="/projects">
                            RunLayer — Personalized, weather-aware running
                            apparel recommendations
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects">
                            Threat Event Platform — Spring Boot, AWS Fargate,
                            secure CI/CD, and deployment recovery
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects">
                            Policy-Aware AI Repair Controller — AI-assisted
                            software repair with deterministic safety gates
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects">
                            12 Million-Player Leaderboard — Distributed Redis
                            architecture and global ranking at scale
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Home;