import { useState } from 'react';
import './style/Contact.css';

const contactMethods = [
	{
		label: 'Email',
		value: 'geoffreystephen988@gmail.com',
		href: 'mailto:geoffreystephen988@gmail.com',
		icon: 'mail',
	},
	{
		label: 'Phone',
		value: '+234 7019518494',
		href: 'tel:+2347019518494',
		icon: 'phone',
	},
	{ label: 'Location', value: 'Lagos, Nigeria', icon: 'location_on' },
];

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState('idle'); // idle, loading, success, error

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('loading');

		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_URL}/api/messages/contact`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
				},
			);

			if (!res.ok) throw new Error('Failed to send');

			setStatus('success');
			setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
		} catch (err) {
			console.error(err);
			setStatus('error');
		}
	};

	return (
		<section className="contact-section-wrapper">
			<div className="contact-info-bar">
				{contactMethods.map(({ label, value, href, icon }) => (
					<div className="contact-info-item" key={label}>
						<span className="material-icons-sharp contact-icon">{icon}</span>
						<div className="contact-info-text">
							<span className="contact-label">{label}</span>
							{href ? (
								<a href={href} className="contact-value">
									{value}
								</a>
							) : (
								<span className="contact-value">{value}</span>
							)}
						</div>
					</div>
				))}
			</div>

			<div className="contact-form-card">
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-col form-col-left">
						<label htmlFor="message" className="form-label">
							Your message
						</label>
						<textarea
							id="message"
							name="message"
							className="form-textarea"
							placeholder="Tell Me What you want to build"
							maxLength="500"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
						<span className="char-count">
							Replies in 24hrs we appreciate your patience
						</span>
					</div>

					<div className="form-col form-col-right">
						<div className="input-group">
							<label htmlFor="name" className="form-label">
								Your name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-input"
								placeholder="Full name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="input-group">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-input"
								placeholder="you@example.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="input-group">
							<label htmlFor="subject" className="form-label">
								The Idea <span className="optional">Optional</span>
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="form-input"
								placeholder="What is this about?"
								value={formData.subject}
								onChange={handleChange}
							/>
						</div>

						<button
							type="submit"
							className="submit-btn"
							disabled={status === 'loading'}
						>
							{status === 'loading' ? 'Sending...' : 'Send message'}
							<span className="material-icons-sharp">arrow_forward</span>
						</button>

						{status === 'success' && (
							<p
								style={{
									color: 'green',
									marginTop: '10px',
									fontSize: '0.9rem',
								}}
							>
								Message sent successfully! I'll get back to you soon.
							</p>
						)}
						{status === 'error' && (
							<p
								style={{ color: 'red', marginTop: '10px', fontSize: '0.9rem' }}
							>
								Something went wrong. Please try again.
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
}

export default Contact;
