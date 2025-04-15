const Resume = () => {
	return (
		<div className="section is-flex is-flex-direction-column is-justify-content-center" id="resume">
			<h1 className="title is-1">Resume</h1>
            <embed src="resume.pdf" type="application/pdf" style={{height: "100vh"}} />
		</div>
	);
};

export default Resume;
