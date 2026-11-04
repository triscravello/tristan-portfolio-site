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
                    I'm a software engineer with a background in education, focused on building reliable full-stack appliations, backend services, distributed systems, and AI-powered software. My projects combine modern application development with practical engineering challenges involving concurrency, database correctness, scalability, automated testing, and failure recovery.
                </p>

                <p>
                    My recent work includes Java and Spring Boot APIs, TypeScript and Next.js applications, Redis-backed distributed systems, and machine learning pipelines built with Python and PyTorch. I enjoy understanding how systems behave under real-world constraints and using reproducible experiments to validate engineering decisions.
                </p>

                <p>
                    Before transitioning into software engineering, I spent three years teaching middle school social studies. That experience strengthened my communication, leadership, and problem-solving skills, which I now bring to technical collaboration and community learning experiences.
                </p>
            </section>

            <hr />

            <section>
                <h2>Technical Skills</h2>

                <h3>Languages & Frontend</h3>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                </ul>

                <h3>Backend & Databases</h3>
                <ul>
                    <li>Spring Boot</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>FastAPI</li>
                    <li>REST APIs</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Prisma ORM</li>
                </ul>

                <h3>Cloud & DevOps</h3>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>GitHub Actions</li>
                    <li>CI/CD</li>
                    <li>Terraform</li>
                </ul>

                <h3>AI Engineering & Machine Learning</h3>
                <ul>
                    <li>PyTorch</li>
                    <li>scikit-learn</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>RAG</li>
                    <li>AI agents</li>
                    <li>Claude Code</li>
                    <li>MCP</li>
                </ul>

                <h3>Systems & Engineering Practices</h3>
                <ul>
                    <li>Distributed Systems</li>
                    <li>Concurrency</li>
                    <li>Idempotency</li>
                    <li>Event-driven architecture</li>
                    <li>Testing</li>
                    <li>Observability</li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Engineering Experience</h2>
                <ul>
                    <li>
                        Built full-stack applications using React, Next.js, TypeScript, PostgreSQL, and Prisma, with an emphasis on API integration, authentication, and application reliability.
                    </li>
                    <li>
                        Developed Java Spring Boot backend systems exploring concurrent reservations, transactional correctness, idempotency, and distributed admission control.
                    </li>
                    <li>
                        Built an end-to-end machine learning pipeline using Python, scikit-learn, and PyTorch, incorporating group-safe evaluation, leakage-resistant preprocessing, transfer learning, and containerized inference.
                    </li>
                    <li>
                        Developed AI-powered engineering workflows exploring deterministic policy enforcement, bounded automated repair, debugging, and multi-agent collaboration.
                    </li>
                    <li>
                        Applied Docker, AWS, automated testing, and infrastructure tooling to build, validate, and deploy software projects.
                    </li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Technical Leadership & Community</h2>

                <h3>Build Master — NextWork</h3>

                <p>
                    Drawing on my background in education, I design and facilitate Build & Brew
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
                    <li>Distributed Systems & Backend Reliability</li>
                    <li>AI Agent Security & Observability</li>
                    <li>Machine Learning Engineering & MLOps</li>
                    <li>Cloud-Native Architecture & Platform Engineering</li>
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