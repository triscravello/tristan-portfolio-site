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
                    Software engineer with a background in education, bringing strong communication, leadership, and problem-solving skills into modern application development. After 3 years teaching middle school social studies, I transitioned into technology and now build full-stack web applications, cloud-native solutions, and AI-powered systems. My recent work includes React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, and MongoDB, along with deploying containerized workloads with Docker, AWS, and Kubernetes. I enjoy designing scalable systems, building intuitive user experiences, and continuously expanding my skills across software engineering, cloud computing, AI, and data engineering.
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
                    <li>Pandas</li>
                    <li>dbt</li>
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
                    <li>Grafana</li>
                    <li>Docker Compose</li>
                </ul>

                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Jupyter Notebook</li>
                    <li>Swagger UI</li>
                    <li>Agile Development</li>
                    <li>Data Structures & Algorithms</li>
                </ul>
            </section>

            <hr />
            <section>
                <h2>Cloud, AI, & Data Engineering Experience</h2>
                <ul>
                    <li>Built and deployed applications using AWS services including S3, IAM, VPC, ECR, and EKS</li>
                    <li>Containerized applications with Docker and deployed workloads with Kubernetes</li>
                    <li>Developed Retrieval-Augmented Generation (RAG) APIs using FastAPI</li>
                    <li>Implemented CI/CD workflows using GitHub Actions</li>
                    <li>Built AI-powered solutions using Amazon Bedrock</li>
                    <li>Built data engineering pipelines and analytics workflows using PostgreSQL, dbt, Jupyter, and Grafana</li>
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
                    <li>Distributed Systems</li>
                </ul>
            </section>
            
            <hr/>
            <section>
                <h2>Hobbies & Interests</h2>
                <p>
                    Outside of development, I'm a competitive runner racing distances from the mile to the marathon. Running has taught me discipline, consistency, and long-term thinking — qualities that translate directly to software development. I also enjoy reading, traveling, and occasionally visiting theme parks.
                </p>

                <p>
                    I'm currently seeking opportunities where I can contribute to full-stack, cloud, or AI-focused engineering teams while continuing to grow as a software engineer.
                </p>
            </section>
        </main>
    );
}

export default About;