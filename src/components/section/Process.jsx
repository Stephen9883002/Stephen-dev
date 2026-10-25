import './style/Process.css';

const steps = [
	{
		number: '01',
		title: 'Discovery & Strategy',
		description:
			'I start by understanding your goals, your audience, and the problem we are solving. I map out the architecture and create a clear roadmap.',
		icon: 'explore',
	},
	{
		number: '02',
		title: 'Design & Development',
		description:
			'I write clean, scalable code and focus on creating responsive, accessible interfaces. You get regular updates and a working product at every stage.',
		icon: 'code',
	},
	{
		number: '03',
		title: 'Testing & Delivery',
		description:
			'Before launch, I rigorously test for performance, security, and edge cases. We deploy together and I ensure you have the tools to manage it.',
		icon: 'rocket_launch',
	},
];

function Process() {
	return (
		<section className="process-section">
			<div className="process-container">
				<div className="process-header">
					<span className="eyebrow">How I work</span>
					<h2 className="section-title">
						A proven process from idea to launch.
					</h2>
					<p className="process-subtitle">
						Building software isn't just about writing code. It's about
						understanding the problem and delivering a solution that actually
						works.
					</p>
				</div>

				<div className="process-grid">
					{steps.map((step, index) => (
						<div className="process-card" key={index}>
							<div className="process-card-top">
								<span className="process-number">{step.number}</span>
								<div className="process-icon-wrapper">
									<span className="material-icons-sharp">{step.icon}</span>
								</div>
							</div>
							<h3 className="process-title">{step.title}</h3>
							<p className="process-desc">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Process;
