import './style/Navbar.css';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
	{ label: 'Home', to: '/', icon: 'code' },
	{ label: 'About', to: '/about', icon: 'person' },
	{ label: 'Projects', to: '/projects', icon: 'folder_open' },
	{ label: 'Contact', to: '/contact', icon: 'mail' },
];

function NavBar({ title }) {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);

	return (
		<header className="header-container">
			<nav className="nav-floating" aria-label="Main navigation">
				{/* Brand / Logo */}
				<Link className="nav-brand" to="/" onClick={closeMenu}>
					<span className="brand-icon">
						<span className="material-icons-sharp">terminal</span>
					</span>
					<span className="brand-text">{title}</span>
				</Link>

				{/* Desktop & Mobile Links */}
				<div
					className={`nav-menu ${isOpen ? 'is-open' : ''}`}
					id="primary-navigation"
				>
					<div className="nav-links">
						{navigation.map(({ label, to, icon }) => (
							<NavLink
								key={to}
								to={to}
								end={to === '/'}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								onClick={closeMenu}
							>
								<span className="material-icons-sharp nav-icon">{icon}</span>
								<span>{label}</span>
							</NavLink>
						))}
					</div>
					<Link
						className="nav-link"
						to="/support"
						// style={{ cursor: 'pointer' }}
						onClick={closeMenu}
					>
						<span className="material-icons-sharp">volunteer_activism</span>
						Support me
					</Link>

					<Link className="nav-cta" to="/hire" onClick={closeMenu}>
						Hire Me
						<span className="material-icons-sharp">north_east</span>
					</Link>
				</div>

				{/* Mobile Hamburger */}
				<button
					className={`hamburger ${isOpen ? 'open' : ''}`}
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</nav>
		</header>
	);
}

export default NavBar;
