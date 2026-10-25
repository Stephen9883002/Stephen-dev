import { Link } from 'react-router-dom';
import './style/Footer.css';

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-container">
				{/* Top Row: Brand & Back to Top */}
				<div className="footer-top">
					<Link className="footer-brand" to="/">
						<span className="brand-icon">
							<span className="material-icons-sharp">terminal</span>
						</span>
						<span className="brand-name">Software Developer</span>
					</Link>

					<button
						className="back-to-top"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						aria-label="Back to top"
					>
						<span className="material-icons-sharp">arrow_upward</span>
					</button>
				</div>

				{/* Middle Row: Description */}
				<div className="footer-middle">
					<p className="footer-desc">
						Design-minded Software developer based in Lagos, Nigeria. Building
						clear, thoughtful experiences for the modern web.
					</p>
				</div>

				{/* Bottom Row: Copyright & Links */}
				<div className="footer-bottom">
					<p className="footer-copyright">
						© {new Date().getFullYear()} Stephen Geoffrey.
					</p>
					<div className="footer-links">
						<Link to="/about">About</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
