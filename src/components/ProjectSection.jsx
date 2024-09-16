import { projects } from '../constants/projects';
import '../styled/ProjectSection.css';

function ProjectSection() {
  return (
    <div id="projects" className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-card-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
