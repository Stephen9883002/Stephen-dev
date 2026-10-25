import './style/Hero.css';
import { Link } from 'react-router-dom';
// Changed path to match your VS Code sidebar
import heroImage from '../../assets/logo.jpeg';

function Hero() {
	return (
		<section className="hero-section">
			<div className="hero-container">
				{/* Left Side: Text Content */}
				<div className="hero-content">
					<span className="hero-eyebrow">Software Developer</span>
					<h1 className="hero-title">
						Thoughtful Software, <br />
						<span className="text-accent">made for people.</span>
					</h1>
					<p className="hero-description">
						I build responsive digital experiences with a focus on clear design,
						accessible interfaces, and dependable code.
					</p>

					<div className="hero-actions">
						<Link className="btn btn-primary" to="/projects">
							<span className="material-icons-sharp">grid_view</span>
							View My Work
						</Link>
						<Link className="btn btn-outline" to="/contact">
							<span className="material-icons-sharp">handshake</span>
							Get in touch
						</Link>
						<Link className="btn btn-outline" to="/hire" id="mobile">
							<span className="material-icons-sharp">handshake</span>
							Hire Me
						</Link>
					</div>
				</div>

				{/* Right Side: Portrait & Graphics */}
				<div className="hero-visual">
					<div className="visual-backdrop"></div>
					<div className="visual-frame">
						{/* Using heroImage here */}
						<img src={heroImage} alt="Stephen" className="portrait-img" />
					</div>
					<div className="floating-tag">
						<span className="status-dot"></span>
						Hi, I'm Stephen.
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
