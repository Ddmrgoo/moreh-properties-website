import SectionHeading from "../components/SectionHeading";

export default function Location() {
	return (
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
						Greensprings School—ranked among the top three schools in Nigeria—is
						just a short, five-minute drive away.
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
	);
}
