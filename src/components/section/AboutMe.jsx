import './style/About.css';

function AboutMe() {
	return (
		<section className="home-about-section">
			<div className="home-about-container">
				{/* Left Side: The Copy */}
				<div className="about-copy-block">
					<span className="about-eyebrow">My approach</span>
					<h2 className="about-title">
						Good work starts with understanding people.
					</h2>
					<p className="about-text">
						I’m a Software developer who enjoys turning ideas into websites &
						apps that are clear, fast, and genuinely useful. I care about the
						details—from a thoughtful layout to a button that feels right to
						use.
					</p>
					<p className="about-text">
						I build responsive interfaces for my projects and use React
						framework for my frontend, PostgreSQL, Express, node.js for the
						backend just few tech stack mentioned. and also flexible using
						different softwares to make projects usefull scalable & satisfying.
						and keep learning as the web evolves. My goal is to make products
						that solve real problems and feel considered at every screen size.
					</p>
				</div>

				{/* Right Side: The Note / Quote Card */}
				<div className="about-note-card">
					<span className="quote-mark" aria-hidden="true">
						“
					</span>
					<p className="note-text">
						Curious by nature. Focused on the craft. Always learning by
						building.
					</p>
					<span className="note-caption">A little about how I work</span>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
