function SkillsCard({ title, description, number, icon }) {
	return (
		<article className="skill-card">
			<div className="skill-card-top">
				<span className="skill-number">{String(number).padStart(2, '0')}</span>
				<span className="material-icons-sharp skill-icon">{icon}</span>
			</div>
			<h3 className="skill-title">{title}</h3>
			<p className="skill-desc">{description}</p>
		</article>
	);
}

export default SkillsCard;
