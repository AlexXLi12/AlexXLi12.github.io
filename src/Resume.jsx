const Resume = () => {
	return (
		<div className="section" id="resume">
			<h1 className="title is-1">Resume</h1>
			<div className="resume-viewer">
				<embed
					src="resume.pdf"
					type="application/pdf"
					style={{ height: "100vh", width: "100%" }}
				/>
			</div>
		</div>
	);
};

export default Resume;
