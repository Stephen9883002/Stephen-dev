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
						I'm a Software Developer focused on turning ideas into fast, clear,
						and genuinely useful web products. I care about the details — from
						thoughtful layouts to buttons that just feel right.
					</p>
					<p className="about-text">
						I build responsive interfaces with React on the frontend and
						Node.js, Express, and PostgreSQL on the backend, among other tools.
						I’m flexible with my stack and choose what makes the product most
						useful, scalable, and satisfying to use. I’m constantly learning as
						the web evolves.My goal is simple: build products that solve real
						problems and feel considered at every screen size.
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
