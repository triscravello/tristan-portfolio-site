// /src/components/ProjectCard.jsx
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className='project-card text-center'>
            <h3 className='project-title'>
                <strong>{project.title}</strong>
            </h3>

            {project.status && (
                <p className='project-status'>
                    <em><strong>Status:</strong> {project.status}</em>
                </p>
            )}

            {project.image && (
                <img
                    src={project.image}
                    alt={`${project.title} application interface preview`}
                    className='project-image'
                    loading='lazy'
                />
            )}

            <p>
                <strong>Description:</strong> {project.description}
            </p>

            {project.architecture && (
                <p className="project-architecture">
                    <strong>Architecture:</strong> {project.architecture}
                </p>
            )}

            {project.technologies && (
                <div className='tech-badges'>
                    {project.technologies.map((tech) => (
                        <span key={tech} className='badge bg-secondary me-2 mb-2'>
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            {project.highlights && (
                <div className="project-highlights">
                    <strong>Engineering Highlights:</strong>
                    <ul>
                        {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="project-links">
                <a
                    className='github-link'
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                >
                    View Code
                </a>

                {project.demo && (
                    <a
                        className='live-site-link'
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`View ${project.title} live demo`}
                    >
                        Live Demo
                    </a>
                )}
            </div>

            {project.demoNote && (
                <p className='demo-note'>
                    <em>{project.demoNote}</em>
                </p>
            )}
        </div>
    );
}

export default ProjectCard;