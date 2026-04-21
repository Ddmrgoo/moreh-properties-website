import SectionHeading from "../components/SectionHeading";
import building1 from "../assets/images/building1.png";
import building2 from "../assets/images/building2.png";
import sittingroom21 from "../assets/images/sittingroom21.png";
import bedroom1 from "../assets/images/bedroom1.png";
import bedroom11 from "../assets/images/bedroom11.png";
import kitchen11 from "../assets/images/Kitchen11.png";
import lShapedKitchen from "../assets/images/l-shaped-modular-kitchen.jpg";
import bathroom11 from "../assets/images/bathroom11.png";
import smallLivingRoom from "../assets/images/Small-Living-Room-Arrangement-02-0503030007.jpg";

export default function Gallery() {
	return (
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
	);
}
