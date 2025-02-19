import "./About.css";

const About = () => {
	return (
		<section className="hero is-fullheight" id="about">
			<div className="hero-body is-flex is-justify-content-center columns">
				<div className="media-left is-half">
					<figure 
					className="image">
						<img
						src="./images/portrait.jpg"
						alt="Portrait"
						/>
					</figure>
				</div>
				<div className="media-right has-text-centered is-half column">
					<h1 className="block title">Alex Li</h1>
					<h3 className="block subtitle">Undergraduate Researcher</h3>
					<p className="block">
						Hi, my name is Alex and I'm a second year student studying computer
						science at the University of Washington.
						<br />
						I'm interested in low level programming (FPGAs), machine learning, and applied math.<br />
						<br />
						I'm currently working on research in the UW Sensor Systems Lab under Jared Nakahara on acoustic levitation.
					</p>
					<div className="block is-centered">
						<a
							href="https://github.com/AlexXLi12"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-3"
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
			</div>
		</section>
	);
};

export default About;
