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
                    Software engineer with a background in education, bringing strong communication, leadership, and problem-solving skills into modern application development. After three years teaching middle school social studies, I transitioned into technology and now build full-stack applications, backend services, cloud-native infrastructure, and AI-powered systems. My recent work spans React, Next.js, TypeScript, Java, Spring Boot, Node.js, FastAPI, PostgreSQL, MongoDB, Docker, Kubernetes, and AWS. I enjoy designing scalable systems, building secure cloud solutions, and continuously expanding my skills across software engineering, cloud computing, AI, DevOps, and data engineering.
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
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>FastAPI</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Prisma ORM</li>
                    <li>Redis</li>
                    <li>REST APIs</li>
                </ul>

                <h3>Cloud & DevOps</h3>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>GitHub Actions</li>
                    <li>CI/CD</li>
                    <li>Amazon ECS</li>
                    <li>Amazon EKS</li>
                    <li>Amazon ECR</li>
                    <li>AWS Lambda</li>
                    <li>Terraform</li>
                    <li>Docker Compose</li>
                    <li>AWS Secrets Manager</li>
                    <li>Amazon GuardDuty</li>
                    <li>Amazon KMS</li>
                </ul>

                <h3>AI & Data</h3>
                <ul>
                    <li>Retrieval-Augmented Generation (RAG)</li>
                    <li>Vector Databases (ChromaDB)</li>
                    <li>AI-assisted code analysis</li>
                    <li>Prompt engineering</li>
                    <li>Amazon Bedrock</li>
                    <li>Pandas</li>
                    <li>dbt</li>
                    <li>Jupyter Notebook</li>
                    <li>Grafana</li>
                </ul>

                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Swagger UI</li>
                    <li>Agile Development</li>
                    <li>Data Structures & Algorithms</li>
                </ul>
            </section>

            <hr />
            <section>
                <h2>Cloud, AI, & Data Engineering Experience</h2>
                <ul>
                    <li>Designed and deployed cloud-native applications using AWS services including ECS, EKS, Lambda, ECR, S3, IAM, VPC, Secrets Manager, CloudWatch, and SNS</li>
                    <li>Built secure CI/CD pipelines with GitHub Actions, Docker, OIDC authentication, and automated deployments</li>
                    <li>Containerized applications with Docker and orchestrated workloads using Kubernetes</li>
                    <li>Developed AI-powered APIs using FastAPI, Retrieval-Augmented Generation (RAG), vector search, Amazon Bedrock, ang generative AI APIs</li>
                    <li>Implemented cloud monitoring, security alerting, and secrets management on AWS</li>
                    <li>Built data engineering pipelines and analytics workflows using PostgreSQL, dbt, Jupyter Notebook, and Grafana</li>
                </ul>
            </section>
            
            <hr />
            <section>
                <h2>Currently Learning</h2>
                <ul>
                    <li>Advanced System Design</li>
                    <li>Cloud Architecture</li>
                    <li>Platform Engineering</li>
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