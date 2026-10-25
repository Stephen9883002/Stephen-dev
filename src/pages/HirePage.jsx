import HireMe from '../components/section/HireMe.jsx';
import '../components/section/style/AboutPage.css';

function HirePage() {
	return (
		<div className="about-page-wrapper">
			<header className="about-page-header">
				<span className="eyebrow">Hire Me</span>
				<h1 className="page-title">Let's build something great.</h1>
				<p className="page-lede">
					Tell me about your project and I'll get back to you with the better
					solution.
				</p>
			</header>

			<HireMe />
		</div>
	);
}

export default HirePage;
