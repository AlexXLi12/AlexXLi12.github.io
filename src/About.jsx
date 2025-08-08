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
						Hi, my name is Alex and I'm a rising third year student studying computer
						science at the University of Washington.
						<br />
						I'm broadly interested in low level programming, distributed systems, and
						data infrastructure.
						<br />
						I am currently interning at Chewy as a Software Engineer Intern on the
						Sponsored Ads Data team.
						<br />
						<br />
					</p>
					<h3 className="subtitle">What I'm Working On:</h3>
					<div className="block" style={{ width: "40vw"}}>
						<p className="has-text-justified m-3">
							Building an Othello Game Engine in C++. The goal of this project <br/>
							is to reimplement an engine I wrote in Python, but with a focus on<br/>
							optimizing the performance of the engine using bitboards and concurrency.<br/>
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
