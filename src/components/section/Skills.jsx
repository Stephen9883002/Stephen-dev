import SkillsCard from './SkillsCard.jsx';
import './style/Skills.css';

const skills = [
	{
		title: 'Frontend development',
		description:
			'Building responsive interfaces with HTML, CSS, JavaScript, and React.',
		icon: 'code',
	},
	{
		title: 'Interface design',
		description:
			'Creating clear layouts and consistent experiences across screen sizes.',
		icon: 'design_services',
	},
	{
		title: 'APIs and backend',
		description:
			'Working with Node.js and REST APIs to connect interfaces to services.',
		icon: 'dns',
	},
	{
		title: 'Data and security',
		description:
			'Learning to build reliable data flows with PostgreSQL and secure practices.',
		icon: 'shield',
	},
];

function Skills() {
	return (
		<section className="skills-section">
			<div className="skills-header">
				<div className="skills-header-left">
					<span className="eyebrow">What I work with</span>
					<h2 className="section-title">Skills & focus</h2>
				</div>
				<p className="skills-header-right">
					A practical toolkit for creating useful, well-crafted web products.
				</p>
			</div>
			<div className="skills-grid">
				{skills.map((skill, index) => (
					<SkillsCard
						key={skill.title}
						title={skill.title}
						description={skill.description}
						icon={skill.icon}
						number={index + 1}
					/>
				))}
			</div>
		</section>
	);
}

export default Skills;
