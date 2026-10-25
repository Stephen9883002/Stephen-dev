import './style/TechMarquee.css';

const techStack = [
	{ name: 'React', icon: 'code' },
	{ name: 'Node.js', icon: 'dns' },
	{ name: 'PostgreSQL', icon: 'storage' },
	{ name: 'Express', icon: 'router' },
	{ name: 'JavaScript', icon: 'javascript' },
	{ name: 'Tailwind', icon: 'brush' },
	{ name: 'Git', icon: 'account_tree' },
	{ name: 'Figma', icon: 'design_services' },
	{ name: 'Python', icon: 'terminal' },
	{ name: 'Docker', icon: 'view_in_ar' },
];

function TechMarquee() {
	return (
		<section className="tech-marquee-section">
			<div className="tech-marquee-container">
				<div className="marquee-track">
					{/* We duplicate the array to make the infinite scroll seamless */}
					{[...techStack, ...techStack].map((tech, index) => (
						<div className="tech-card" key={index}>
							<span className="material-icons-sharp tech-icon">
								{tech.icon}
							</span>
							<span className="tech-name">{tech.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default TechMarquee;
