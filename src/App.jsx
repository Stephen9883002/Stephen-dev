import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/section/Footer.jsx';
import NavBar from './components/section/NavBar.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import HirePage from './pages/HirePage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import SupportSuccessPage from './pages/SupportSuccessPage.jsx';

function App() {
	return (
		<BrowserRouter>
			<div className="app-shell">
				<NavBar title="Stephen" />
				<main className="main-content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/hire" element={<HirePage />} />
						<Route path="/support" element={<SupportPage />} />{' '}
						<Route path="/support-success" element={<SupportSuccessPage />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
