import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Home.css';
import profilePicture from "../assets/profile-picture.webp";

function Home() {
    useEffect(() => {
        document.title = 'Tristan Cravello | Full-Stack Developer';
    }, []);
    
    return (
        <main className="home">
            <img src={profilePicture} alt="Tristan Cravello, Web Developer" fetchPriority="high" className="profile-pic" />
            
            <h1>Full-Stack Developer</h1>
            
            <p><em>Educator-turned-developer building human-centered web applications with the MERN stack & SQL.</em></p>
            
            <p>Based in St. Petersburg, FL | Open to remote opportunities</p>
            
            <div className="cta-buttons">
                <a href="/tristan-portfolio-site/images/TristanCravello2026SoftwareEngineering.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
                
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                
                <Link to="/projects" className="btn btn-secondary">View Projects</Link>
                
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
        </main>
    );
}

export default Home;