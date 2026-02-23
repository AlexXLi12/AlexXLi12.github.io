const Resume = () => {
	return (
		<section className="section" id="resume">
			<h1 className="section-title" data-animate>
				<span className="title-hash">#</span> Resume
			</h1>
			<div className="resume-viewer" data-animate data-delay="1">
				<div className="card-header">
					<div className="card-dots">
						<span className="dot dot-close" />
						<span className="dot dot-minimize" />
						<span className="dot dot-expand" />
					</div>
					<span className="card-filename">resume.pdf</span>
				</div>
				<embed
					className="resume-embed"
					src="resume.pdf"
					type="application/pdf"
				/>
			</div>
		</section>
	);
};

export default Resume;
