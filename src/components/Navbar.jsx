function Navbar() {
	return (
		<header className="site-header">
			<div className="brand">
				<span className="brand-mark">M</span>
				<div>
					<p className="brand-label">Moreh Properties LTD</p>
					<p className="brand-tag">Luxury duplex development</p>
				</div>
			</div>
			<nav className="nav-links" aria-label="Primary navigation">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#features">Features</a>
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
		</header>
	);
}

export default Navbar;
