const About = () => {
	return (
		<section className="hero is-fullheight" id="about">
			<div className="hero-body is-flex is-justify-content-center">
				<figure className="image mr-6">
					<img src="./images/portrait.jpg" alt="Portrait" />
				</figure>
				<div className="has-text-centered">
					<h1 className="block title">Alex Li</h1>
					<h3 className="block subtitle">Undergraduate Researcher</h3>
					<p className="block">
						Hi, my name is Alex and I'm a second year student studying computer
						science at the University of Washington.
						<br />
						I'm interested in low level programming, FPGAs, and machine
						learning. I'm also planning to minor in computational finance.
						<br />
						I'm currently working on research in the UW Sensor Systems Lab under
						Jared Nakahara on acoustic levitation.
					</p>
					<div className="block is-centered is-flex is-justify-content-center">
						<a
							href="https://github.com/AlexXLi12"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-3 "
						>
							<img
								className="image is-96x96"
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
								className="image is-96x96"
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
