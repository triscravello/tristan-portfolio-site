import './About.css';
import { useEffect } from 'react';

function About () {
    useEffect(() => {
        document.title = 'About Me - Tristan Cravello';
    }, []);
    
    return (
        <main className='about'>
            <h1>About Me</h1>
            <p>
                Passionate and motivated software developer with a strong foundation in problem solving, communication, and critical thinking, honed through 3 years of experience teaching middle school social studies. Recently transitioned into tech, combining a love for coding with an analytical mindset to build clean, efficient, and user-focused software solutions. Adept at learning new technologies quickly and collaborating effectively in team environments. Eager to contribute creativity and dedication to a forward-thinking development team.
            </p>
            <hr></hr>
            <h2>Technical Skills</h2>
            <ul>
                <li><strong>Frontend: </strong> HTML, CSS, JavaScript, React, TypeScript, Tailwind</li>
                <li><strong>Backend & Database: </strong>NodeJS, Express.js, Next.js, SQL, MongoDB</li>
                <li><strong>Tools & Methodologies: </strong>Git, GitHub, ES6+, GraphQL, Data Structures & Algorithms</li>
            </ul>
            <hr></hr>
            <h2>Hobbies & Interests</h2>
            <p>In my free time, I enjoy running, reading, and listening to music. I'm a competitive runner, running race distances from the mile to the marathon. I also like to travel and occassionally go to theme parks.</p>
        </main>
    );
}

export default About;