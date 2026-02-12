import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Home.css';

function Home() {
    useEffect(() => {
        document.title = 'Tristan Cravello - Full Stack Developer';
    }, []);
    
    return (
        <main className="home">
            <h1>Full-Stack Developer</h1>
            <p><em>Educator-turned-developer building human-centered web applications with the MERN stack and SQL.</em></p>
            <p>Open to opportunities in St. Petersburg, Tampa, and remote.</p>
            <div className="cta-buttons">
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                <Link to="/projects" className="btn btn-secondary">View Projects</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
        </main>
    );
}

export default Home;