import { useState } from 'react';
import SupportModal from './SupportModal.jsx';
import './style/SupportBanner.css';

const priceOptions = [2000, 5000, 10000, 20000];

function SupportBanner() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedAmount, setSelectedAmount] = useState('');

	const openModal = (amount = '') => {
		setSelectedAmount(amount);
		setIsModalOpen(true);
	};

	return (
		<>
			<section className="support-banner-section">
				<div className="support-banner-container">
					<div className="support-banner-left">
						<h3 className="support-banner-title">
							<span className="material-icons-sharp heart-icon">favorite</span>
							Support my journey
						</h3>
						<p className="support-banner-desc">
							Enjoyed the work or found a project useful? You can buy me a
							coffee to keep the code flowing and the servers running!
						</p>
					</div>

					<div className="support-banner-right">
						{priceOptions.map((amt) => (
							<button
								key={amt}
								className="price-pill"
								onClick={() => openModal(amt)}
							>
								₦{amt.toLocaleString()}
							</button>
						))}
						<button
							className="price-pill other-btn"
							onClick={() => openModal('')}
						>
							Other
						</button>
					</div>
				</div>
			</section>

			{/* The Modal */}
			<SupportModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				initialAmount={selectedAmount}
			/>
		</>
	);
}

export default SupportBanner;
