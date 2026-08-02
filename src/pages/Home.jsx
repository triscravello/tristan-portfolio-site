import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import profilePicture from "../assets/profile-picture.webp";

function Home() {
    useEffect(() => {
        document.title = "Tristan Cravello | Full-Stack Software Engineer";
    }, []);

    return (
        <main className="home">
            <img
                src={profilePicture}
                alt="Tristan Cravello, full-stack software engineer"
                fetchPriority="high"
                className="profile-pic"
            />

            <h1>Full-Stack Software Engineer</h1>

            <p>
                <em>
                    Educator-turned-software engineer building full-stack
                    applications, backend systems, cloud infrastructure, and
                    AI-powered solutions.
                </em>
            </p>

            <p>Based in St. Petersburg, FL | Open to remote opportunities</p>

            <p className="tech-stack">
                React • Next.js • TypeScript • Java • Spring Boot • PostgreSQL • AWS • Docker • Kubernetes
            </p>

            <div className="cta-buttons">
                <a
                    href={`${import.meta.env.BASE_URL}images/TristanCravelloSWEResume7162026.pdf`}
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
                            RunLayer — Weather-driven running apparel
                            recommendations
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects">
                            Threat Event Platform — Spring Boot, AWS Fargate,
                            and automated CI/CD
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects">
                            FIFA World Cup Heat Risk Alert System — AWS Lambda, weather data,
                            and AI-generated safety alerts
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Home;