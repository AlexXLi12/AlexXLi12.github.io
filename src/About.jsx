const About = () => {
	return (
		<section className="section hero" id="about">
			<div className="about-container">
				<figure className="about-image" data-animate>
					<img src="./images/portrait.jpg" alt="Alex Li" />
				</figure>
				<div className="about-content">
					<p className="prompt-line" data-animate>
						<span className="prompt">$</span> whoami
					</p>
					<h1 className="hero-name" data-animate data-delay="1">
						Alex Li
						<span className="cursor" />
					</h1>
					<p className="hero-tagline" data-animate data-delay="2">
						<span className="prompt">{">"}</span> distributed systems &
						databases
					</p>
					<p className="hero-bio" data-animate data-delay="3">
						Hi, my name is Alex and I'm a third year student studying computer
						science at the University of Washington. I'm broadly interested in
						distributed systems and data infrastructure.
					</p>
					<div className="about-project-section" data-animate data-delay="4">
						<p className="about-project-label">
							<span className="prompt">$</span> cat current_project.txt
						</p>
						<div className="about-project-desc">
							<p className="about-project-text">
								An Othello Game Engine in C++, reimplementing an engine I wrote
								in Python with a focus on optimizing performance using bitboards
								and concurrency.
							</p>
						</div>
					</div>
					<div className="about-links" data-animate data-delay="5">
						<a
							href="https://github.com/AlexXLi12"
							target="_blank"
							rel="noopener noreferrer"
							className="about-icon-link"
						>
							<img
								className="about-icon"
								src="./images/github.svg"
								alt="GitHub"
							/>
							<span className="link-label">github</span>
						</a>
						<a
							href="https://www.linkedin.com/in/alex-li12"
							target="_blank"
							rel="noopener noreferrer"
							className="about-icon-link"
						>
							<img
								className="about-icon"
								src="./images/linkedin.svg"
								alt="LinkedIn"
							/>
							<span className="link-label">linkedin</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
