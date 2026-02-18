import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar' aria-label='Main navigation'>
            <ul>
                <li><NavLink to="/" aria-label='Home Page'>Home </NavLink></li>
                
                <li><NavLink to="/about" aria-label='About page'>About</NavLink></li>
                
                <li><NavLink to="/projects" aria-label='Projects page'>Projects</NavLink></li>
                
                <li><NavLink to="/contact" aria-label='Contact page'>Contact</NavLink></li>

                <li><a href="/tristan-portfolio-site/images/TristanCravello2026SoftwareEngineering.pdf" target='_blank' rel='noopener noreferrer' aria-label='View Resume PDF' className='resume-link'>Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;