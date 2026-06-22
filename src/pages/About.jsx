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
                    Software engineer with a background in education, bringing strong communication, leadership, and problem-solving skills into technology. After 3 years teaching middle school social studies, I transitioned into software development and now build full-stack web applications, cloud-native solutions, and AI-powered systems. My recent work includes developing applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB, as well as deploying containerized workloads with Docker, AWS, and Kubernetes. I enjoy designing scalable systems, building intuitive user experiences, and continuously learning new technologies across software engineering, cloud computing, and artificial intelligence.
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
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                </ul>

                <h3>Backend & Databases</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>FastAPI</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Prisma ORM</li>
                    <li>REST APIs</li>
                </ul>

                <h3>Cloud & DevOps</h3>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>GitHub Actions</li>
                    <li>CI/CD</li>
                    <li>Amazon EKS</li>
                    <li>Amazon ECR</li>
                </ul>

                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GraphQL</li>
                    <li>Agile Development</li>
                    <li>Data Structures & Algorithms</li>
                </ul>
            </section>

            <hr />
            <section>
                <h2>Cloud & AI Experience</h2>
                <ul>
                    <li>Built and deployed applications using AWS services including S3, IAM, VPC, ECR, and EKS</li>
                    <li>Containerized applications with Docker and deployed workloads with Kubernetes</li>
                    <li>Developed Retrieval-Augmented Generation (RAG) APIs using FastAPI</li>
                    <li>Implemented CI/CD workflows using GitHub Actions</li>
                    <li>Built AI-powered solutions using Amazon Bedrock</li>
                </ul>
            </section>
            
            <hr />
            <section>
                <h2>Currently Learning</h2>
                <ul>
                    <li>System Design</li>
                    <li>Cloud Architecture</li>
                    <li>Machine Learning Fundamentals</li>
                    <li>Infrastructure as Code (Terraform)</li>
                    <li>Advanced TypeScript Patterns</li>
                </ul>
            </section>
            
            <hr/>
            <section>
                <h2>Hobbies & Interests</h2>
                <p>
                    Outside of development, I'm a competitive runner racing distances from the mile to the marathon. Running has taught me discipline, consistency, and long-term thinking — qualities that translate directly to software development. I also enjoy reading, traveling, and occasionally visiting theme parks.
                </p>
            </section>
        </main>
    );
}

export default About;