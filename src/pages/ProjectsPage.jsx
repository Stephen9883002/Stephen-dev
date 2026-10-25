import Projects from '../components/section/Projects.jsx';
import { projects } from '../data/projects.js';
import '../components/section/style/AboutPage.css';

function ProjectsPage() {
	return (
		<div className="about-page-wrapper">
			<header className="about-page-header">
				<span className="eyebrow">My Work</span>
				<h1 className="page-title">Featured projects.</h1>
				<p className="page-lede">
					A selection of things I've designed and built, from frontend
					interfaces to full-stack web apps.
				</p>
			</header>

			<section
				style={{
					maxWidth: '1100px',
					width: '100%',
					padding: '0 20px 100px',
					margin: '0 auto',
				}}
			>
				<Projects projects={projects} />
			</section>
		</div>
	);
}

export default ProjectsPage;
