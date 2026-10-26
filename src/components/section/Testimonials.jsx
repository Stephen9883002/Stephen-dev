import './style/Testimonials.css';

const testimonials = [
	{
		quote:
			'Stephen took our vague idea and turned it into a fully functional web app ahead of schedule. His attention to detail on the UI is unmatched.',
		author: 'Prince Autos',
		role: 'CEC Of Prince Autos',
		initials: 'CEO',
	},
	{
		quote:
			"Working with Stephen was seamless. He doesn't just write code; he asks the right questions to ensure the product actually solves the business problem.",
		author: 'Rapheal Simon',
		role: 'Product Manager',
		initials: 'PM',
	},
	{
		quote:
			"The best developer I've collaborated with. The code was clean, the handoff was perfect, and the site looks absolutely stunning on mobile.",
		author: 'Amara Kehinde',
		role: 'Lead Designer, Studio X',
		initials: 'Ak',
	},
];

function Testimonials() {
	return (
		<section className="testimonials-section">
			<div className="testimonials-container">
				<div className="testimonials-header">
					<span className="eyebrow">Kind Words</span>
					<h2 className="section-title">What people I've worked with say.</h2>
				</div>

				<div className="testimonials-grid">
					{testimonials.map((testimonial, index) => (
						<div className="testimonial-card" key={index}>
							<span className="quote-mark-large" aria-hidden="true">
								“
							</span>
							<p className="testimonial-quote">{testimonial.quote}</p>

							<div className="testimonial-author">
								<div className="author-avatar">{testimonial.initials}</div>
								<div className="author-info">
									<span className="author-name">{testimonial.author}</span>
									<span className="author-role">{testimonial.role}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
