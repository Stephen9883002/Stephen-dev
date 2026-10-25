import SupportModal from '../components/section/SupportModal.jsx';
import '../components/section/style/AboutPage.css';
import '../components/section/style/SupportPage.css';

function SupportPage() {
	return (
		<div className="about-page-wrapper">
			<header className="about-page-header">
				<span className="eyebrow">Support</span>
				<h1 className="page-title">Fuel the journey.</h1>
				<p className="page-lede">
					Your support keeps the servers running, the tools free, and the code
					flowing. Thank you for believing in this vision.
				</p>
			</header>

			{/* We can just render the SupportBanner component here, 
			    but centered, or we can build a dedicated card. 
			    Let's use a dedicated centered card for the page. */}
			<div className="support-page-content">
				<div className="support-info-card">
					<div className="support-icon-large">
						<span className="material-icons-sharp">favorite</span>
					</div>
					<h2 className="support-page-title">Why Support?</h2>
					<p className="support-page-text">
						I spend countless hours building open-source projects, writing
						guides, and creating tools to make the web a better place. Your
						contribution goes directly into hosting, domain renewals, and coffee
						(lots of it).
					</p>

					{/* Here we could embed the modal trigger or just a big button */}
					<SupportButtonTrigger />
				</div>
			</div>
		</div>
	);
}

// A small component just to handle the button state for the page
import { useState } from 'react';
function SupportButtonTrigger() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button
				className="btn btn-primary support-page-btn"
				onClick={() => setIsModalOpen(true)}
			>
				<span className="material-icons-sharp">favorite</span>
				Support Now
			</button>

			<SupportModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				initialAmount=""
			/>
		</>
	);
}

export default SupportPage;
