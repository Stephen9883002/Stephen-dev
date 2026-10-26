import { useState } from 'react';
import './style/HireMe.css';

const projectTypes = [
	{
		id: 'mobile',
		label: 'Mobile app',
		desc: 'iOS or Android app',
		icon: 'smartphone',
	},
	{
		id: 'web',
		label: 'Web app',
		desc: 'Website or web platform',
		icon: 'language',
	},
	{
		id: 'ai',
		label: 'AI system',
		desc: 'Chatbot, automation, AI tool',
		icon: 'psychology',
	},
	{
		id: 'other',
		label: 'Other',
		desc: 'Something different',
		icon: 'more_horiz',
	},
];

const contactPrefs = [
	{ id: 'whatsapp', label: 'WhatsApp', icon: 'chat' },
	{ id: 'email', label: 'Email', icon: 'mail' },
	{ id: 'phone', label: 'Phone call', icon: 'phone' },
];

function HireMe() {
	const [selectedType, setSelectedType] = useState('web');
	const [contactPref, setContactPref] = useState('email');
	const [isWhatsApp, setIsWhatsApp] = useState(true);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [status, setStatus] = useState('idle');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('loading');

		const payload = {
			...formData,
			projectType: selectedType,
			contactPreference: contactPref,
		};
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 60000);

		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_URL}/api/messages/hire`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
					signal: controller.signal,
				},
			);
			clearTimeout(timeoutId);

			if (!res.ok) throw new Error('Failed to send');

			setStatus('success');
			setFormData({ name: '', email: '', phone: '', message: '' });
		} catch (err) {
			clearTimeout(timeoutId);
			console.error(err);
			setStatus('error');
		}
	};

	return (
		<section className="hire-section">
			<div className="hire-card">
				<form className="hire-form" onSubmit={handleSubmit}>
					{/* LEFT COLUMN */}
					<div className="hire-col hire-col-left">
						<span className="eyebrow">Send a request</span>
						<h2 className="hire-title">Tell me about your project</h2>
						<p className="hire-desc">
							Share what you need and I'll get back to you with the best
							solution.
						</p>

						<div className="form-group">
							<label className="form-label">
								What do you want me to build?
							</label>
							<div className="type-grid">
								{projectTypes.map((type) => (
									<button
										type="button"
										key={type.id}
										className={`type-card ${selectedType === type.id ? 'active' : ''}`}
										onClick={() => setSelectedType(type.id)}
									>
										<div className="type-card-top">
											<span className="material-icons-sharp type-icon">
												{type.icon}
											</span>
											<span className="type-radio"></span>
										</div>
										<span className="type-title">{type.label}</span>
										<span className="type-desc">{type.desc}</span>
									</button>
								))}
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="project-desc" className="form-label">
								Describe your project
							</label>
							<textarea
								id="project-desc"
								name="message"
								className="form-textarea"
								placeholder="Tell me more about what you need..."
								maxLength="2000"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
							<span className="char-count">
								I will reply within 24hrs thank you for your patience
							</span>
						</div>
					</div>

					{/* RIGHT COLUMN */}
					<div className="hire-col hire-col-right">
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
							<label htmlFor="phone" className="form-label">
								Phone number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								className="form-input"
								placeholder="+234-555-555"
								value={formData.phone}
								onChange={handleChange}
							/>

							<label className="checkbox-wrapper">
								<input
									type="checkbox"
									checked={isWhatsApp}
									onChange={() => setIsWhatsApp(!isWhatsApp)}
								/>
								<span className="checkbox-custom">
									<span className="material-icons-sharp">check</span>
								</span>
								<span className="checkbox-text">Same number on WhatsApp</span>
							</label>
						</div>

						<div className="form-group">
							<label className="form-label">
								Use Email and send the request
							</label>
							<span className="form-sublabel">
								{' '}
								🚨 Email is the only option availabel for now, thank you.
							</span>
							<div className="prefs-grid">
								{contactPrefs.map((pref) => (
									<button
										type="button"
										key={pref.id}
										className={`pref-btn ${contactPref === pref.id ? 'active' : ''}`}
										onClick={() => setContactPref(pref.id)}
									>
										<span className="material-icons-sharp">{pref.icon}</span>
										{pref.label}
									</button>
								))}
							</div>
						</div>

						<button
							type="submit"
							className="submit-btn"
							disabled={status === 'loading'}
						>
							{status === 'loading'
								? 'Sending... (Please wait)'
								: 'Send Request'}
							<span className="material-icons-sharp">arrow_forward</span>
						</button>

						{status === 'success' && (
							<p
								style={{
									color: 'green',
									marginTop: '15px',
									fontSize: '0.9rem',
								}}
							>
								Request sent! I'll review your project and get back to you.
							</p>
						)}
						{/* {status === 'error' && (
							<p
								style={{ color: 'red', marginTop: '15px', fontSize: '0.9rem' }}
							>
								Something went wrong. Please try again.
							</p>
						)} */}
						{status === 'error' && (
							<p
								style={{ color: 'red', marginTop: '15px', fontSize: '0.9rem' }}
							>
								Network error. Please refresh the page and try again. (please
								wait...).
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
}

export default HireMe;
