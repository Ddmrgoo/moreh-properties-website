import { useState, useRef } from "react";
import audioFile from "../assets/audio/Recording_web-audio.mp3";

export default function Home() {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

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
		<section id="home" className="hero-section">
			<div className="hero-copy">
				<span className="eyebrow">Luxury duplex living</span>
				<h1>
					Welcome to Moreh Properties, where we bring you luxurious living at an
					accessible price
				</h1>
				<p>
					Moreh Properties LTD is proud to introduce our latest premium
					development,an exclusive collection of five semi-detached duplexes and
					five terrace units. Four bedrooms each with its own spacious bathroom.
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
					<a href="/contact" className="button button-ghost">
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
				<p className="crypto-acceptance">We also accept Bitcoin and Ethereum</p>
				<ul className="hero-list">
					<li>5 semi-detached duplexes</li>
					<li>5 terrace units</li>
					<li>4-bed ensuite + boys' quarters</li>
					<li>Achievers Crescent, Awoyaya</li>
				</ul>
				<div className="hero-meta">
					<span>Premium finishes</span>
					<span>Solar inverter system</span>
				</div>
			</div>
		</section>
	);
}
