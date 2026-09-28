import './About.css';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        document.title = 'About Me - Tristan Cravello';
    }, []);

    return (
        <main className='about'>
            <section>
                <h1>About Me</h1>
                <p>
                    Software engineer with a background in education, bringing strong communication,
                    leadership, and problem-solving skills into modern application development.
                    After three years teaching middle school social studies, I transitioned into
                    technology and now build full-stack applications, backend services, cloud-native
                    infrastructure, AI-powered systems, and distributed system prototypes. My recent
                    work spans React, Next.js, TypeScript, Python, Java, Spring Boot, Node.js, FastAPI,
                    PostgreSQL, Redis, Docker, Kubernetes, AWS, and AI-assisted development. I enjoy
                    designing scalable systems, solving backend and infrastructure problems, and
                    exploring how AI agents can support reliable software engineering workflows.
                </p>
            </section>

            <hr />

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
                    <li>Python</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>FastAPI</li>
                    <li>REST APIs</li>
                    <li>PostgreSQL</li>
                    <li>PostGIS</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Prisma ORM</li>
                </ul>

                <h3>Cloud & DevOps</h3>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Docker Compose</li>
                    <li>Kubernetes</li>
                    <li>GitHub Actions</li>
                    <li>CI/CD</li>
                    <li>Amazon ECS / Fargate</li>
                    <li>Amazon EKS</li>
                    <li>Amazon ECR</li>
                    <li>AWS Lambda</li>
                    <li>AWS Secrets Manager</li>
                    <li>Amazon CloudWatch</li>
                    <li>OIDC Authentication</li>
                    <li>Terraform</li>
                </ul>

                <h3>AI Engineering & Data</h3>
                <ul>
                    <li>Retrieval-Augmented Generation (RAG)</li>
                    <li>Vector Search & ChromaDB</li>
                    <li>Claude Code</li>
                    <li>AI Agent Workflows</li>
                    <li>Model Context Protocol (MCP)</li>
                    <li>AI-assisted Debugging & Code Analysis</li>
                    <li>Prompt Engineering</li>
                    <li>Amazon Bedrock</li>
                    <li>Pandas</li>
                    <li>dbt</li>
                    <li>Jupyter Notebook</li>
                    <li>Grafana</li>
                </ul>

                <h3>Systems & Architecture</h3>
                <ul>
                    <li>Distributed Systems</li>
                    <li>System Design</li>
                    <li>Event-Driven Architecture</li>
                    <li>Idempotency</li>
                    <li>Transactional Outbox Pattern</li>
                    <li>Geospatial Systems</li>
                    <li>Caching & Rate Limiting</li>
                    <li>Scalability & Performance</li>
                    <li>Observability & Failure Recovery</li>
                </ul>

                <h3>Tools & Practices</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Swagger UI</li>
                    <li>Pytest</li>
                    <li>Automated Testing</li>
                    <li>Agile Development</li>
                    <li>Data Structures & Algorithms</li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Engineering Experience</h2>
                <ul>
                    <li>
                        Built full-stack applications and backend APIs using React, Next.js,
                        Node.js, Spring Boot, FastAPI, PostgreSQL, MongoDB, and Redis
                    </li>
                    <li>
                        Designed and deployed cloud-native applications using AWS, Docker,
                        Kubernetes, ECS, EKS, Lambda, ECR, and supporting cloud services
                    </li>
                    <li>
                        Built secure CI/CD workflows using GitHub Actions, Docker, OIDC
                        authentication, automated verification, and deployment rollback
                    </li>
                    <li>
                        Developed AI-powered applications using RAG, vector search,
                        generative AI APIs, Amazon Bedrock, and AI-assisted engineering tools
                    </li>
                    <li>
                        Built agentic engineering workflows for debugging, bounded repair,
                        incident investigation, specification-driven development, and
                        multi-agent collaboration
                    </li>
                    <li>
                        Designed distributed systems exploring partitioning, caching,
                        event-driven architecture, eventual consistency, geospatial search,
                        idempotency, and failure recovery
                    </li>
                    <li>
                        Built data engineering and analytics workflows using PostgreSQL,
                        dbt, Jupyter, Pandas, and Grafana
                    </li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Technical Leadership & Community</h2>

                <h3>Build Master — NextWork</h3>

                <p>
                    As a Build Master with NextWork, I help lead collaborative Build & Brew
                    sessions where developers learn by building hands-on software, cloud,
                    and AI projects. I design and facilitate portfolio-ready technical
                    projects, guide participants through engineering challenges, and help
                    create an environment where members can experiment, troubleshoot, and
                    learn together.
                </p>

                <ul>
                    <li>
                        Design and lead hands-on software engineering and AI project sessions
                        focused on practical, portfolio-ready skills
                    </li>
                    <li>
                        Create project scenarios that teach concepts such as APIs, RAG,
                        evaluation, debugging, AI-assisted development, and system reliability
                    </li>
                    <li>
                        Guide developers through technical obstacles while encouraging
                        independent problem-solving and engineering judgment
                    </li>
                    <li>
                        Collaborate with other Build Masters to plan sessions, support
                        participants, and improve the Build & Brew learning experience
                    </li>
                    <li>
                        Translate complex engineering concepts into structured,
                        approachable project experiences
                    </li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Currently Learning</h2>
                <ul>
                    <li>Advanced System Design</li>
                    <li>AI Agents & Agentic Software Engineering</li>
                    <li>Cloud Architecture</li>
                    <li>Platform Engineering</li>
                    <li>Infrastructure as Code</li>
                    <li>Distributed Systems</li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Hobbies & Interests</h2>
                <p>
                    Outside of development, I'm a competitive runner racing distances from
                    the mile to the marathon. Running has taught me discipline, consistency,
                    and long-term thinking — qualities that translate directly to software
                    development. I also enjoy reading, traveling, and occasionally visiting
                    theme parks.
                </p>

                <p>
                    I'm currently seeking opportunities where I can contribute to full-stack,
                    backend, cloud, or AI-focused engineering teams while continuing to grow
                    as a software engineer.
                </p>
            </section>
        </main>
    );
}

export default About;