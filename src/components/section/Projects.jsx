import ProjectCard from './ProjectCard.jsx';
import './style/Projects.css';

function Projects({ projects }) {
	return (
		<div className="projects-grid">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}

export default Projects;
