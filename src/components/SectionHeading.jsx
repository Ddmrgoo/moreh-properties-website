function SectionHeading({ title, subtitle }) {
	return (
		<div className="section-heading">
			<p className="section-eyebrow">Moreh Properties LTD</p>
			<h2>{title}</h2>
			<p className="section-copy">{subtitle}</p>
		</div>
	);
}

export default SectionHeading;
