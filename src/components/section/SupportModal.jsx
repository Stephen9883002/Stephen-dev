import { useState, useEffect } from 'react';
import './style/SupportModal.css';

const predefinedAmounts = [2000, 5000, 10000, 20000];

function SupportModal({ isOpen, onClose, initialAmount = '' }) {
	const [amount, setAmount] = useState(initialAmount);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [isProcessing, setIsProcessing] = useState(false);
	const [error, setError] = useState('');

	// Update amount if opened via a specific button
	useEffect(() => {
		if (isOpen) {
			setAmount(initialAmount);
			setError('');
		}
	}, [isOpen, initialAmount]);

	if (!isOpen) return null;

	const handleSupport = async (e) => {
		e.preventDefault();
		setError('');

		if (!amount || amount < 100) {
			setError('Please enter a valid amount (min ₦100).');
			return;
		}
		if (!email) {
			setError('Please enter your email address.');
			return;
		}

		setIsProcessing(true);

		try {
			// Connect to our new Express Backend
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/support/initialize`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						amount: Number(amount),
						email: email,
						name: name,
					}),
				},
			);

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to initialize payment');
			}

			// Redirect the user to the Paystack Checkout page
			window.location.href = data.authorization_url;
		} catch (err) {
			setError(err.message || 'Something went wrong.  Abeg try again.');
			setIsProcessing(false);
		}
	};
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{/* Header */}
				<div className="modal-header">
					<div>
						<h3 className="modal-title">Support Stephen</h3>
						<p className="modal-subtitle">
							Keep the free code, guides, and projects coming.
						</p>
					</div>
					<button className="modal-close" onClick={onClose} aria-label="Close">
						<span className="material-icons-sharp">close</span>
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSupport} className="support-form">
					{error && <div className="form-error">{error}</div>}

					<div className="form-group">
						<label className="form-label">Amount</label>
						<div className="amount-input-wrapper">
							<span className="currency-symbol">₦</span>
							<input
								type="number"
								className="form-input amount-input"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								placeholder="5,000"
								min="100"
								required
							/>
						</div>

						{/* Quick select buttons */}
						<div className="quick-amounts">
							{predefinedAmounts.map((amt) => (
								<button
									type="button"
									key={amt}
									className={`quick-amount-btn ${amount === amt ? 'active' : ''}`}
									onClick={() => setAmount(amt)}
								>
									₦{amt.toLocaleString()}
								</button>
							))}
							<button
								type="button"
								className="quick-amount-btn"
								onClick={() => setAmount('')}
							>
								Other
							</button>
						</div>
					</div>

					<div className="form-group">
						<label className="form-label">Email</label>
						<input
							type="email"
							className="form-input"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
							required
						/>
					</div>

					<div className="form-group">
						<label className="form-label">
							Name <span className="optional">(optional)</span>
						</label>
						<input
							type="text"
							className="form-input"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Your name"
						/>
					</div>

					<button
						type="submit"
						className="support-submit-btn"
						disabled={isProcessing}
					>
						{isProcessing ? (
							'Securing Payment...'
						) : (
							<>
								<span className="material-icons-sharp">favorite</span>
								Support with ₦{amount ? Number(amount).toLocaleString() : '0'}
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
}

export default SupportModal;
