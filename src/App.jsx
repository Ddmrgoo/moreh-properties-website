import { useState, useRef } from "react";
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
import audioFile from "./assets/audio/Recording_web-audio.mp3";
import "./App.css";

const featureItems = [
	{
		title: "4-Bedroom Ensuite",
		description:
			"Four bedrooms each with its own spacious bathroom and elegant finishes.",
	},
	{
		title: "Boys’ Quarters",
		description:
			"A fully finished boys’ quarters for staff or guests, providing generous space.",
	},
	{
		title: "Solar Inverter",
		description:
			"Modern solar inverter system for reliable energy, efficiency, and sustainability.",
	},
	{
		title: "Premium Finishes",
		description:
			"Open-plan design with premium finishes, contemporary kitchen, and elegant spaces.",
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
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		setForm({ name: "", email: "", phone: "", message: "" });
	};

	const toggleAudio = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const stopAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
			setIsPlaying(false);
		}
	};

	return (
		<div className="app-shell">
			<Navbar />
			<main>
				<section id="home" className="hero-section">
					<div className="hero-copy">
						<span className="eyebrow">Luxury duplex living</span>
						<h1>
							Welcome to Moreh Properties, where we bring you luxurious living
							at an accessible price
						</h1>
						<p>
							Moreh Properties LTD is proud to introduce our latest premium
							development—an exclusive collection of five semi-detached duplexes
							and five terrace units. Four bedrooms each with its own spacious
							bathroom.
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
						<div className="audio-controls">
							<button
								onClick={toggleAudio}
								className="button button-primary audio-button">
								{isPlaying ? "Pause Audio" : "Play Audio"}
							</button>
							<button
								onClick={stopAudio}
								className="button button-secondary audio-button">
								Stop Audio
							</button>
							<audio
								ref={audioRef}
								src={audioFile}
								onEnded={() => setIsPlaying(false)}
								preload="metadata"
							/>
						</div>
					</div>
					<div className="hero-card">
						<p className="offer-label">Price Per Unit</p>
						<p className="hero-price">$147,000</p>
						<p className="crypto-acceptance">
							We also accept Bitcoin and Ethereum
						</p>
						<ul className="hero-list">
							<li>5 semi-detached duplexes</li>
							<li>5 terrace units</li>
							<li>4-bed ensuite + boys’ quarters</li>
							<li>Achievers Crescent, Awoyaya</li>
						</ul>
						<div className="hero-meta">
							<span>Premium finishes</span>
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
						Priced at one hundred and forty-seven thousand dollars—with flexible
						payment options including Bitcoin and Ethereum—this is more than
						just a home; it's a refined investment in a premium neighborhood.
						Every detail has been crafted for comfort, convenience, and
						long-term value. Experience the peace of mind that comes with a
						dedicated solar inverter system, ensuring your home remains powered,
						efficient, and sustainable.
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
						<div className="gallery-item gallery-item-large">
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
						subtitle="Easy access, strong neighborhood appeal, and proximity to top schools."
					/>
					<div className="location-grid">
						<div className="location-copy">
							<p>
								Situated on Achievers Crescent in Awoyaya, this development
								perfectly balances city access with peaceful suburban living.
								Greensprings School—ranked among the top three schools in
								Nigeria—is just a short, five-minute drive away.
							</p>
							<ul>
								<li>Near Greensprings School</li>
								<li>Off Awoyaya Bus Stop</li>
								<li>Premium Awoyaya neighborhood</li>
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
									<strong>Location:</strong> Achievers Crescent, Awoyaya
									<br />
									Near Greensprings School (5-min drive)
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
