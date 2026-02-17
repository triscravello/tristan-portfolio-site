import './About.css';
import { useEffect } from 'react';

function About () {
    useEffect(() => {
        document.title = 'About Me - Tristan Cravello';
    }, []);
    
    return (
        <main className='about'>
            <section>
                <h1>About Me</h1>
                <p>
                    Full-stack developer with a background in education, bringing strong communication, leadership, and problem-solving skills into software engineering. After three years teaching middle school social studies, I transitioned into tech and now build responsive, user-focused web applications using the MERN stack and SQL-based systems. I enjoy designing clean interfaces, structuring scalable backends, and continuously improving through iteration and feedback.
                </p>
            </section>
            
            <hr/>
            <section>
                <h2>Technical Skills</h2>

                <h3>Frontend</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                </ul>

                <h3>Backend & Databases</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL (PostgreSQL / MySQL)</li>
                    <li>MongoDB</li>
                </ul>

                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GraphQL</li>
                    <li>REST APIs</li>
                    <li>Data Structures & Algorithms</li>
                </ul>
            </section>
            
            <hr />
            <section>
                <h2>Currently Learning</h2>
                <ul>
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Advanced React patterns</li>
                    <li>System design fundamentals</li>
                </ul>
            </section>
            
            <hr/>
            <section>
                <h2>Hobbies & Interests</h2>
                <p>
                    Outside of development, I'm a competitive runner racing distances from the mile to the marathon. Training and racing have strengthened my discipline, consistency, and long-term goal setting — qualities I also bring to software development. I also enjoy reading, traveling, and occasionally visiting theme parks.
                </p>
            </section>
        </main>
    );
}

export default About;