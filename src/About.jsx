const About = () => {
	return (
		<section className="section" id="about">
			<div className="about-container">
				<figure className="about-image">
					<img src="./images/portrait.jpg" alt="Portrait" />
				</figure>
				<div className="about-content">
					<h1 className="title">Alex Li</h1>
					<h3 className="subtitle">Undergraduate Researcher</h3>
					<p>
						Hi, my name is Alex and I'm a second year student studying computer
						science at the University of Washington.
						<br />
						I'm interested in low level programming, FPGAs, and machine
						learning. I'm also planning to minor in computational finance.
						<br />
						I'm currently working on research in the UW Sensor Systems Lab under
						Jared Nakahara on acoustic levitation.
						<br />
						<br />
					</p>
					<h3 className="subtitle">What I'm Working On:</h3>
					<div className="about-project-desc">
						<p>
							Building out a web interface for an Othello/Reversi game where
							users can play against my engine! The engine uses negamax and
							alpha-beta pruning to search the game tree. Also looking into
							accelerating the engine with bitboards and converting the engine
							to C++.
						</p>
					</div>
					<div className="about-links">
						<a
							href="https://github.com/AlexXLi12"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="about-icon"
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
								className="about-icon"
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
