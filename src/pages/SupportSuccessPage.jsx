import { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../components/section/style/AboutPage.css';
import './SupportSuccessPage.css';

function SupportSuccessPage() {
	const [searchParams] = useSearchParams();
	const reference = searchParams.get('reference');

	const [status, setStatus] = useState('verifying');
	const [errorMsg, setErrorMsg] = useState('');
	const verificationRef = useRef(false);

	useEffect(() => {
		if (verificationRef.current) return;
		verificationRef.current = true;

		if (!reference) {
			setStatus('error');
			setErrorMsg('No payment reference found.');
			return;
		}

		const verifyPayment = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_URL}/api/support/verify-payment/${reference}`,
				);

				// Check if backend returned an error (HTML instead of JSON)
				if (!res.ok) {
					const textError = await res.text();
					console.error('Backend returned non-JSON:', textError);
					throw new Error(
						`Server error: ${res.status}. Please check backend terminal.`,
					);
				}

				const data = await res.json();

				if (!data.verified) {
					throw new Error(data.message || 'Verification failed');
				}

				setStatus('success');
			} catch (err) {
				console.error(err);
				setStatus('error');
				setErrorMsg(err.message || 'We could not confirm your payment.');
			}
		};
		verifyPayment();
	}, [reference]);

	return (
		<div className="about-page-wrapper">
			<div className="support-success-container">
				{status === 'verifying' && (
					<div className="success-card">
						<div className="spinner"></div>
						<h2>Verifying your payment...</h2>
						<p>Please hold on while we confirm with Paystack.</p>
					</div>
				)}

				{status === 'success' && (
					<div className="success-card">
						<div className="success-icon">
							<span className="material-icons-sharp">check_circle</span>
						</div>
						<h2>Thank you for the support! 🎉</h2>
						<p>
							Your payment has been confirmed. We truly appreciate you believing
							in this vision.
						</p>
						<p className="ref-text">
							Reference: <strong>{reference}</strong>
						</p>
						<Link
							to="/"
							className="btn btn-primary"
							style={{ marginTop: '24px' }}
						>
							Back to Home
						</Link>
					</div>
				)}

				{status === 'error' && (
					<div className="success-card">
						<div className="error-icon">
							<span className="material-icons-sharp">error</span>
						</div>
						<h2>We couldn't verify the payment.</h2>
						<p>{errorMsg}</p>
						<p className="ref-text">
							If you were charged, please contact support with reference:{' '}
							<strong>{reference}</strong>
						</p>
						<Link
							to="/"
							className="btn btn-outline"
							style={{ marginTop: '24px' }}
						>
							Back to Home
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default SupportSuccessPage;
