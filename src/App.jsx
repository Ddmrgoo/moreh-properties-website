import { useState } from "react";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import bathroom11 from "./assets/images/bathroom11.png";
import bedroom1 from "./assets/images/bedroom1.png";
import bedroom11 from "./assets/images/bedroom11.png";
import building1 from "./assets/images/building1.png";
import building2 from "./assets/images/building2.png";
import kitchen11 from "./assets/images/Kitchen11.png";
import lShapedKitchen from "./assets/images/l-shaped-modular-kitchen.jpg";
import sittingroom21 from "./assets/images/sittingroom21.png";
import smallLivingRoom from "./assets/images/Small-Living-Room-Arrangement-02-0503030007.jpg";
import "./App.css";

const featureItems = [
	{
		title: "4-Bedroom Ensuite",
		description:
			"Private bedrooms with full ensuite bathrooms and elegant finishes.",
	},
	{
		title: "Boys’ Quarters",
		description: "A fully finished boys’ quarters for staff or guests.",
	},
	{
		title: "Solar Inverter",
		description:
			"Modern solar inverter system for reliable energy and efficiency.",
	},
	{
		title: "Spacious Layout",
		description:
			"Open-plan design with premium finishes and generous living spaces.",
	},
];

function App() {
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
		<div className="app-shell">
			<Navbar />
			<main>
				<section id="home" className="hero-section">
					<div className="hero-copy">
						<span className="eyebrow">Luxury duplex living</span>
						<h1>
							Moreh Properties LTD presents a premium 5-unit duplex development
						</h1>
						<p>
							Discover modern 4-bedroom ensuite units with boys’ quarters, solar
							inverter support, and refined finishes in Awoyaya.
						</p>
						<div className="hero-actions">
							<a href="tel:+2349058256913" className="button button-primary">
								Call Now
							</a>
							<a
								href="mailto:morehproperties@gmail.com"
								className="button button-secondary">
								Email Us
							</a>
							<a href="#contact" className="button button-ghost">
								Book Inspection
							</a>
						</div>
					</div>
					<div className="hero-card">
						<p className="offer-label">Price Per Unit</p>
						<p className="hero-price">$135,000</p>
						<ul className="hero-list">
							<li>5-unit semi-detached duplex</li>
							<li>4-bed ensuite + boys’ quarters</li>
							<li>Achievers Crescent, Awoyaya</li>
						</ul>
						<div className="hero-meta">
							<span>Modern finishes</span>
							<span>Solar inverter system</span>
						</div>
					</div>
				</section>

				<section id="about" className="section about-section">
					<SectionHeading
						title="About the development"
						subtitle="A refined property offering in a premium Awoyaya neighborhood."
					/>
					<p>
						Moreh Properties LTD is delivering an exclusive 5-unit semi-detached
						duplex community. Each unit includes a spacious 4-bedroom ensuite
						setup, separate boys’ quarters, modern finishes, and a dedicated
						solar inverter system. The development is positioned on Achievers
						Crescent beside Attwool School, off Awoyaya Bus Stop, before Mayfair
						Gardens.
					</p>
				</section>

				<section id="features" className="section features-section">
					<SectionHeading
						title="Designed for modern family living"
						subtitle="Every detail is crafted for comfort, convenience, and long-term value."
					/>
					<div className="features-grid">
						{featureItems.map((feature) => (
							<article key={feature.title} className="feature-card">
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</article>
						))}
					</div>
				</section>

				<section id="gallery" className="section gallery-section">
					<SectionHeading
						title="Interior highlights"
						subtitle="Explore the elegant spaces and modern design of our duplex units."
					/>
					<div className="gallery-grid">
						<div className="gallery-item">
							<img src={building1} alt="Exterior view of the duplex building" />
							<p>Modern duplex exterior</p>
						</div>
						<div className="gallery-item">
							<img src={building2} alt="Another exterior view" />
							<p>Premium building design</p>
						</div>
						<div className="gallery-item">
							<img src={sittingroom21} alt="Spacious sitting room" />
							<p>Elegant living area</p>
						</div>
						<div className="gallery-item">
							<img src={bedroom1} alt="Comfortable bedroom" />
							<p>Master bedroom suite</p>
						</div>
						<div className="gallery-item">
							<img src={bedroom11} alt="Another bedroom view" />
							<p>Ensuite bedroom</p>
						</div>
						<div className="gallery-item">
							<img src={kitchen11} alt="Modern kitchen" />
							<p>Contemporary kitchen</p>
						</div>
						<div className="gallery-item">
							<img src={bathroom11} alt="Luxury bathroom" />
							<p>Full ensuite bathroom</p>
						</div>
						<div className="gallery-item">
							<img src={lShapedKitchen} alt="L-shaped modular kitchen" />
							<p>Functional kitchen design</p>
						</div>
						<div className="gallery-item">
							<img src={smallLivingRoom} alt="Cozy living room arrangement" />
							<p>Comfortable living space</p>
						</div>
					</div>
				</section>

				<section id="location" className="section location-section">
					<SectionHeading
						title="Prime Awoyaya location"
						subtitle="Easy access, strong neighborhood appeal, and clear direction to the site."
					/>
					<div className="location-grid">
						<div className="location-copy">
							<p>
								Ideally located on Achievers Crescent near Attwool School and
								before Mayfair Gardens, this development gives buyers a
								residential address that balances city access with peaceful
								suburban living.
							</p>
							<ul>
								<li>Beside Attwool School</li>
								<li>Off Awoyaya Bus Stop</li>
								<li>Before Mayfair Gardens</li>
							</ul>
						</div>
						<div className="map-frame">
							<iframe
								title="Moreh Properties location - Achievers Crescent, Awoyaya"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0!2d3.836!3d6.607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d7f0d04d97%3A0xbd6e565e3b4fa1ab!2sAchievers%20Crescent%2C%20Awoyaya%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
								width="100%"
								height="400"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
							<div className="map-overlay">
								<p className="map-address">
									<strong>Location:</strong> Achievers Crescent, Beside Attwool
									School
									<br />
									Off Awoyaya Bus Stop, Before Mayfair Gardens
								</p>
								<a
									href="https://www.google.com/maps/dir/?api=1&destination=Achievers+Crescent+Awoyaya+Lagos"
									target="_blank"
									rel="noopener noreferrer"
									className="button button-primary map-directions">
									Get Directions
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="contact" className="section contact-section">
					<SectionHeading
						title="Get in touch"
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
							<p>
								Location: Achievers Crescent, Beside Attwool School, Off Awoyaya
								Bus Stop
							</p>
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
									placeholder="I’m interested in booking an inspection."
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
			</main>

			<footer className="site-footer">
				<p>Moreh Properties LTD © 2026</p>
				<p>Premium 5-unit duplex development near Awoyaya.</p>
			</footer>
		</div>
	);
}

export default App;
