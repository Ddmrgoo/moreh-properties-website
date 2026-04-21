import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		setForm({ name: "", email: "", phone: "", message: "" });
	};

	return (
		<section id="contact" className="section contact-section">
			<SectionHeading
				title="Get In Touch"
				subtitle="Reach out today to book an inspection or request more details."
			/>
			<div className="contact-grid">
				<div className="contact-info-card">
					<p className="contact-label">Contact details</p>
					<p>
						Email:{" "}
						<a href="mailto:morehproperties@gmail.com">
							morehproperties@gmail.com
						</a>
					</p>
					<p>
						Phone: <a href="tel:+2349058256913">+234 905 825 6913</a>
					</p>
					<p>Location: Achievers Crescent, Awoyaya</p>
				</div>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label>
						Name
						<input
							name="name"
							type="text"
							value={form.name}
							onChange={handleChange}
							placeholder="Your name"
							required
						/>
					</label>
					<label>
						Email
						<input
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							placeholder="you@example.com"
							required
						/>
					</label>
					<label>
						Phone
						<input
							name="phone"
							type="tel"
							value={form.phone}
							onChange={handleChange}
							placeholder="+234 905 825 6913"
							required
						/>
					</label>
					<label>
						Message
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="I'm interested in booking an inspection."
							rows="5"
							required
						/>
					</label>
					<button type="submit" className="button button-primary">
						Send Message
					</button>
					{submitted && (
						<p className="form-confirmation">
							Thank you! Your request is received.
						</p>
					)}
				</form>
			</div>
		</section>
	);
}
