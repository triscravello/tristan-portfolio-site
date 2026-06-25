import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Home.css';
import profilePicture from "../assets/profile-picture.webp";

function Home() {
    useEffect(() => {
        document.title = 'Tristan Cravello | Full-Stack Software Engineer';
    }, []);
    
    return (
        <main className="home">
            <img src={profilePicture} alt="Tristan Cravello, full-stack software engineer" fetchPriority="high" className="profile-pic" />
            
            <h1>Full-Stack Software Engineer</h1>
            
            <p><em>Educator-turned-software engineer building full-stack applications, cloud solutions, and AI-powered systems.</em></p>
            
            <p>Based in St. Petersburg, FL | Open to remote opportunities</p>

            <p className="tech-stack">React • Next.js • TypeScript • Node.js • PostgreSQL • AWS • Docker • Kubernetes • dbt • Grafana</p>
            
            <div className="cta-buttons">
                <a href={`${import.meta.env.BASE_URL}images/TristanCravelloSWEResume2026.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
                
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                
                <Link to="/projects" className="btn btn-secondary">View Projects</Link>
                
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>

            <section className="featured-projects">
                <h2>Featured Projects</h2>

                <ul>
                    <li>RunLayer — Personalized running apparel recommendations</li>
                    <li>ClassPulse — Classroom analytics platform</li>
                    <li>AI-Powered RAG API — FastAPI + vector search</li>
                </ul>
            </section>
        </main>
    );
}

export default Home;