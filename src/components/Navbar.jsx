import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="site-header">
			<div className="brand">
				<img
					src={logo}
					alt="Moreh Properties Logo"
					className="brand-mark-svg"
				/>
				<div>
					<p className="brand-label">Moreh Properties LTD</p>
					<p className="brand-tag">Luxury duplex development</p>
				</div>
			</div>
			<button
				className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
				aria-label="Toggle navigation"
				aria-expanded={menuOpen}
				onClick={() => setMenuOpen((open) => !open)}>
				<span />
				<span />
				<span />
			</button>
			<div className={`nav-content ${menuOpen ? "open" : ""}`}>
				<nav
					className="nav-links"
					aria-label="Primary navigation"
					onClick={() => setMenuOpen(false)}>
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#features">Features</a>
					<a href="#gallery">Gallery</a>
					<a href="#location">Location</a>
					<a href="#contact">Contact</a>
				</nav>
				<div className="nav-actions">
					<a href="tel:+2349058256913" className="button button-secondary">
						Call Now
					</a>
					<a
						href="mailto:morehproperties@gmail.com"
						className="button button-primary">
						Email Us
					</a>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
