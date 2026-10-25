import { Link } from 'react-router-dom';
import Hero from '../components/section/Hero.jsx';
import TechMarquee from '../components/section/TechMarquee.jsx';
import AboutMe from '../components/section/AboutMe.jsx';
import Projects from '../components/section/Projects.jsx';
import { projects } from '../data/projects.js';
import '../components/section/style/Projects.css';
import Contact from '../components/section/Contact.jsx';
import SocialMedia from '../components/section/SocialMedia.jsx';
import Process from '../components/section/Process.jsx';
import Testimonials from '../components/section/Testimonials.jsx';
import SupportBanner from '../components/section/SupportBanner.jsx';

function HomePage() {
	return (
		<>
			<Hero />

			<TechMarquee />

			<AboutMe />

			{/* UPDATED: The Projects Section */}
			<section className="home-projects-section">
				<div className="home-projects-header">
					<div>
						<span className="eyebrow">View My work</span>
						<h2 className="section-title">Featured Projects</h2>
					</div>
					<Link className="view-all-link" to="/projects">
						View all projects{' '}
						<span className="material-icons-sharp">arrow_forward</span>
					</Link>
				</div>

				<Projects projects={projects.slice(0, 3)} />
			</section>

			<section className="section home-cta">
				<p className="eyebrow">Have a project in mind?</p>
				<h2 className="section-title">Let’s make something useful.</h2>
				<Link className="button button-primary" to="/hire">
					Hire Me <span aria-hidden="true">↗</span>
				</Link>
			</section>
			<Process />
			{/*  <Testimonials /> later i will uncommit it out */}
			<SocialMedia />
			<Contact />
			<SupportBanner />
		</>
	);
}

export default HomePage;
