
# Tristan Cravello | Software Engineering Portfolio

A responsive software engineering portfolio built with React, Vite, and React Router.

This website showcases my work across full-stack development, backend engineering, distributed systems, cloud infrastructure, artificial intelligence, and machine learning.

With a background in education, I bring communication, technical leadership, and structured problem-solving into software engineering.

## Live Website

**[View My Portfolio](https://triscravello.github.io/tristan-portfolio-site/)**

## Portfolio Overview

The website features four primary pages:

- **Home:** Professional introduction, technology stack, résumé, and selected projects.
- **Projects:** Detailed engineering projects organized into three categories.
- **About:** Technical skills, engineering work, educational background, and community leadership.
- **Contact:** Contact form integrated with Formspree.

### Project Categories

#### Featured Software Projects

Full-stack applications and backend services focused on API development, database design, cloud infrastructure, automated testing, and reliable software delivery.

#### AI Engineering & Machine Learning

Projects exploring AI-assisted software engineering, deterministic agent safety, machine learning pipelines, model evaluation, transfer learning, and secure inference deployment.

#### System Design & Distributed Systems

Engineering projects examining concurrency, distributed coordination, scalability, transactional consistency, performance, and failure recovery.

## Selected Projects

### Distributed Ticket Reservation API

A Java Spring Boot reservation system designed to coordinate concurrent booking requests while preserving database correctness.

**Technologies:** Java, Spring Boot, PostgreSQL, Redis, Lua, Docker, k6

**Engineering focus:**
- Distributed admission control
- Transactional seat locking
- Idempotent booking operations
- Duplicate reservation prevention
- Load testing and failure handling

[View Repository](https://github.com/triscravello/ticket-reservation-api)

### Running Readiness ML

An end-to-end machine learning system predicting next-day running recovery needs using leakage-resistant data pipelines and secure inference.

**Technologies:** Python, scikit-learn, PyTorch, FastAPI, Pydantic, Docker

**Engineering focus:**
- Group-safe train/test separation
- Leakage-resistant feature preprocessing
- Model evaluation and selection
- Self-supervised encoder pretraining
- Transfer learning and fine-tuning
- SHA-256 artifact integrity verification
- Containerized CPU inference

[View Repository](https://github.com/triscravello/running-readiness-ml)

### Threat Event Platform

An event-driven backend engineering project exploring cloud-based event processing, deployment infrastructure, and system reliability.

**Technologies:** Java, Spring Boot, Kafka, Elasticsearch, AWS ECS Fargate

[View Repository](https://github.com/triscravello/threat-ingest)

### Policy-Aware AI Repair Controller

An AI-assisted software engineering system exploring bounded repair operations, deterministic authorization gates, and automated verification.

**Technologies:** Python, Claude Code, Pytest

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React 19, JavaScript, JSX, HTML5, CSS3 |
| Routing | React Router 7 |
| Build Tool | Vite 7 |
| UI Frameworks | Bootstrap 5, React Bootstrap |
| Forms | Formspree |
| Code Quality | ESLint |
| Deployment | GitHub Pages |
| Package Management | npm |

## Project Structure

```text
tristan-portfolio-site/
├── public/
│   └── images/
│       └── TristanCravello-SoftwareEngineerResume.docx.pdf
├── src/
│   ├── assets/
│   │   └── ... project images and visual assets
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCard.css
│   ├── data/
│   │   └── projectsData.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The `dist/` directory is generated during production builds and is excluded from version control.

## Getting Started

### Prerequisites

- Node.js compatible with Vite 7 (20.19+ or 22.12+)
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/triscravello/tristan-portfolio-site.git
cd tristan-portfolio-site
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite, typically:

http://localhost:5173/

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Vite development server |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for the default base path |
| `npm run build:gh` | Build with the GitHub Pages repository base path |
| `npm run preview` | Preview a production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with automatic fixes |
| `npm run deploy` | Build for GitHub Pages and publish `dist/` with `gh-pages` |

## Deployment

The portfolio is hosted on GitHub Pages:

https://triscravello.github.io/tristan-portfolio-site/

The Vite configuration uses a deployment-specific base path:

```javascript
base: isGithubPages ? "/tristan-portfolio-site/" : "/"
```

To create a GitHub Pages-compatible production build:

```bash
npm run build:gh
```

To deploy using the configured `gh-pages` script:

```bash
npm run deploy
```

The deployment command runs `predeploy` automatically, creating the GitHub Pages build before publishing.

### Deployment Notes

- Static assets in `public/` are copied into the production build.
- Imported images are processed by Vite and assigned hashed filenames.
- The production output is written to `dist/`.
- Client-side routes require appropriate GitHub Pages routing or fallback configuration for direct navigation.

## Contact

Interested in discussing software engineering opportunities, technical projects, or collaboration?

Visit the [Contact page](https://triscravello.github.io/tristan-portfolio-site/contact).

## Author

**Tristan Cravello**

Software Engineer | Backend Development | Distributed Systems | AI Engineering & Machine Learning

- [GitHub](https://github.com/triscravello)
- [Portfolio](https://triscravello.github.io/tristan-portfolio-site/)
```

