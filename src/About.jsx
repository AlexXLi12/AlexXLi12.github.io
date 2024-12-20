import "./About.css";

const About = () => {
	return (
		<div className="about shadow-effect">
			<h1>Alex Li</h1>
			<h3>Undergraduate Researcher</h3>
			<p>
				Hi, my name is Alex and I'm a second year student studying computer
				science at the University of Washington.
				<br />
				I'm interested in low level programming (FPGAs), machine learning, and applied math.<br />
				<br />
				I'm currently working on research in the UW Sensor Systems Lab under Jared Nakahara on acoustic levitation.
			</p>
			<div className="socials">
				<a
					href="https://github.com/AlexXLi12"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="svg"
						src="./images/github.svg"
						alt="Github"
						onMouseEnter={(e) => {
							e.target.src = "./images/github_hover.svg";
						}}
						onMouseLeave={(e) => {
							e.target.src = "./images/github.svg";
						}}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/alex-li12"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="svg"
						src="./images/linkedin.svg"
						alt="LinkedIn"
						onMouseEnter={(e) => {
							e.target.src = "./images/linkedin_hover.svg";
						}}
						onMouseLeave={(e) => {
							e.target.src = "./images/linkedin.svg";
						}}
					/>
				</a>
			</div>
		</div>
	);
};

export default About;
