import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="app-shell">
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/features" element={<Features />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/location" element={<Location />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>

				<footer className="site-footer">
					<p>Moreh Properties LTD © 2026</p>
					<p>Premium 5-unit duplex development near Awoyaya.</p>
				</footer>
			</div>
		</Router>
	);
}

export default App;
