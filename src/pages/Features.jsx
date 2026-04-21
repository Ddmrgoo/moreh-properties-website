import SectionHeading from "../components/SectionHeading";

const featureItems = [
	{
		title: "4-Bedroom Ensuite",
		description:
			"Four bedrooms each with its own spacious bathroom and elegant finishes.",
	},
	{
		title: "Boys' Quarters",
		description:
			"A fully finished boys' quarters for staff or guests, providing generous space.",
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

export default function Features() {
	return (
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
	);
}
