import { useState } from "react";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import bedroom1 from "./assets/images/bedroom1.png";
import building1 from "./assets/images/building1.png";
import building2 from "./assets/images/building2.png";
import kitchen11 from "./assets/images/Kitchen11.png";
import sittingroom21 from "./assets/images/sittingroom21.png";
import "./App.css";

function App() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setForm({ name: "", email: "", phone: "", message: "" });
	};

	return (
		<div className="app-shell">
			<Navbar />
			<main>
				{/* PICTURE FIRST: HERO SECTION */}
				<section
					id="home"
					className="hero-section"
					style={{
						backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${building1})`,
					}}>
					<div className="hero-container">
						<div className="hero-text-content">
							<span className="eyebrow">Luxury Duplex Living</span>
							<h1>
								Moreh Properties LTD <br />
								<span>Premium 5-Unit Development</span>
							</h1>
							<p>
								Discover modern 4-bedroom ensuite units with boys’ quarters,
								solar inverter support, and refined finishes in Awoyaya.
							</p>
							<div className="hero-actions">
								<a href="tel:+2349058256913" className="btn btn-gold">
									Call Now
								</a>
								<a href="#contact" className="btn btn-outline">
									Book Inspection
								</a>
							</div>
						</div>
						<div className="hero-floating-card">
							<p className="label">Price Per Unit</p>
							<p className="price">$135,000</p>
							<ul>
								<li>5-unit semi-detached</li>
								<li>4-bed ensuite + BQ</li>
								<li>Achievers Crescent, Awoyaya</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ABOUT SECTION */}
				<section id="about" className="section bg-light">
					<div className="container">
						<SectionHeading
							title="About the development"
							subtitle="A refined property offering in a premium Awoyaya neighborhood."
						/>
						<p className="about-text">
							Moreh Properties LTD is delivering an exclusive 5-unit
							semi-detached duplex community. Each unit includes a spacious
							4-bedroom ensuite setup, separate boys’ quarters, modern finishes,
							and a dedicated solar inverter system.
						</p>
					</div>
				</section>

				{/* GALLERY SECTION */}
				<section id="gallery" className="section">
					<div className="container">
						<SectionHeading
							title="Interior highlights"
							subtitle="Explore the elegant spaces and modern design of our duplex units."
						/>
						<div className="gallery-grid">
							<div className="gallery-card large">
								<img src={building1} alt="Exterior" />
								<div className="overlay">Exterior View</div>
							</div>
							<div className="gallery-card">
								<img src={building2} alt="Building" />
								<div className="overlay">Premium Design</div>
							</div>
							<div className="gallery-card">
								<img src={sittingroom21} alt="Living" />
								<div className="overlay">Living Area</div>
							</div>
							<div className="gallery-card">
								<img src={bedroom1} alt="Bedroom" />
								<div className="overlay">Master Bedroom</div>
							</div>
							<div className="gallery-card">
								<img src={kitchen11} alt="Kitchen" />
								<div className="overlay">Modern Kitchen</div>
							</div>
						</div>
					</div>
				</section>

				{/* CONTACT SECTION */}
				<section id="contact" className="section bg-light">
					<div className="container">
						<SectionHeading
							title="Get in touch"
							subtitle="Reach out today to book an inspection."
						/>
						<div className="contact-flex">
							<div className="contact-info">
								<h3>Contact Details</h3>
								<p>
									<strong>Email:</strong> morehproperties@gmail.com
								</p>
								<p>
									<strong>Phone:</strong> +234 905 825 6913
								</p>
								<p>
									<strong>Location:</strong> Achievers Crescent, Awoyaya
								</p>
							</div>
							<form className="contact-form" onSubmit={handleSubmit}>
								<input
									name="name"
									placeholder="Name"
									value={form.name}
									onChange={handleChange}
									required
								/>
								<input
									name="email"
									type="email"
									placeholder="Email"
									value={form.email}
									onChange={handleChange}
									required
								/>
								<textarea
									name="message"
									placeholder="Message"
									value={form.message}
									onChange={handleChange}
									required
									rows="4"></textarea>
								<button type="submit" className="btn btn-gold">
									Send Message
								</button>
								{submitted && (
									<p className="success-msg">Message sent successfully!</p>
								)}
							</form>
						</div>
					</div>
				</section>
			</main>
			<footer className="footer">
				<p>Moreh Properties LTD © 2026 | Premium Real Estate</p>
			</footer>
		</div>
	);
}

export default App;
