import Contact from '../components/section/Contact.jsx';

function ContactPage() {
	return (
		<>
			<div className="page-heading">
				<p className="eyebrow">Contact</p>
				<h1 className="page-title">Let’s talk about what’s next.</h1>
				<p className="page-lede">
					Have a question, an idea, or a project to discuss? I’d be glad to
					hear from you.
				</p>
			</div>
			<Contact />
		</>
	);
}

export default ContactPage;
