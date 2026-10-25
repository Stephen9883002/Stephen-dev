import { useState } from 'react'; // <-- Add this
import './style/Projects.css';

function ProjectCard({ project }) {
	// State for the lightbox
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

	const handleLinkClick = (e) => {
		if (project.inDevelopment) {
			e.preventDefault();
			alert(`🚧 ${project.title} is still in development! Check back soon.`);
		}
	};

	const openLightbox = (e) => {
		e.preventDefault(); // Stop the card from doing anything else
		setIsLightboxOpen(true);
	};

	return (
		<>
			<article className="project-card">
				{/* Project Image / Placeholder */}
				<div className="project-image-wrapper">
					{/* Eye Icon (Only shows if there is an image) */}
					{project.image && (
						<button
							className="expand-image-btn"
							onClick={openLightbox}
							aria-label="Expand image"
						>
							<span className="material-icons-sharp">visibility</span>
						</button>
					)}

					{project.image ? (
						<img
							src={project.image}
							alt={project.title}
							className="project-img"
						/>
					) : (
						<div className="project-placeholder">
							<span className="placeholder-text">IMAGE COMING SOON</span>
						</div>
					)}
				</div>

				{/* Project Content */}
				<div className="project-content">
					<h3 className="project-title">{project.title}</h3>
					<p className="project-description">{project.description}</p>

					<div className="project-tech-stack">
						{project.tech &&
							project.tech.map((techItem, index) => (
								<span key={index} className="tech-pill">
									{techItem}
								</span>
							))}
					</div>

					<div className="project-card-footer">
						<a
							href={project.inDevelopment ? '#' : project.link}
							className={`project-link ${project.inDevelopment ? 'disabled-link' : ''}`}
							onClick={handleLinkClick}
							target={project.inDevelopment ? '_self' : '_blank'}
							rel="noreferrer"
						>
							View project{' '}
							<span className="material-icons-sharp">north_east</span>
						</a>

						{project.inDevelopment && (
							<div className="dev-badge-inline">
								<span className="status-dot-red"></span>
								In Development
							</div>
						)}
					</div>
				</div>
			</article>

			{/* THE LIGHTBOX OVERLAY */}
			{isLightboxOpen && project.image && (
				<div
					className="lightbox-overlay"
					onClick={() => setIsLightboxOpen(false)}
				>
					<button
						className="lightbox-close"
						onClick={() => setIsLightboxOpen(false)}
					>
						<span className="material-icons-sharp">close</span>
					</button>
					<img
						src={project.image}
						alt={project.title}
						className="lightbox-img"
						onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
					/>
				</div>
			)}
		</>
	);
}

export default ProjectCard;
