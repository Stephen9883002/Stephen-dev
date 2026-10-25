import AboutMe from '../components/section/AboutMe.jsx';
import Skills from '../components/section/Skills.jsx';
import VideoIntro from '../components/section/VideoIntro.jsx';
import '../components/section/style/AboutPage.css';
function AboutPage() {
	return (
		<div className="about-page-wrapper">
			<header className="about-page-header">
				<span className="eyebrow">About</span>
				<h1 className="page-title">A bit about how I work.</h1>
				<p className="page-lede">
					Thoughtful design, practical engineering, and a focus on making the
					web easier to use.
				</p>
			</header>

			{/* Reusing the AboutMe component */}
			<div className="about-me-reused">
				<AboutMe />
			</div>

			<Skills />
			<VideoIntro />
		</div>
	);
}

export default AboutPage;
