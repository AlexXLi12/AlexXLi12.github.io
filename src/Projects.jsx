const Projects = () => {
	return (
		<section className="section" id="projects">
			<h1 className="section-title" data-animate>
				<span className="title-hash">#</span> Projects
			</h1>
			<div className="columns">
				<ProjectCard
					title="C++ Othello Engine"
					description="A Dockerized C++ Othello game engine with negamax search, alpha-beta pruning, and multithreading."
					tech_used={["C++", "Multithreading", "gprof"]}
					link="https://github.com/AlexXLi12/othello-engine-grpc"
					delay={1}
				/>
				<ProjectCard
					title="Renaissance Research"
					description="A web app that helps researchers find novel applications for old/overlooked research. Won the Best use of AI and Best Finance/Data Analytics Project awards at HackTech 2025."
					tech_used={[
						"Next.js",
						"React.js",
						"BeautifulSoup",
						"Google Gemini API",
						"Pydantic",
					]}
					link="https://renresearch.co"
					delay={2}
				/>
				<ProjectCard
					title="ConsciousCapital"
					description="A web-app that creates a stock portfolio for users based on sector, individual companies' progressiveness/social values, and risk tolerance. Won the Best Web Hack award at HackTJ 10.0."
					tech_used={["Flask", "Numpy", "Pandas", "Bootstrap"]}
					link="https://github.com/AlexXLi12/ConsciousCapital"
					delay={3}
				/>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, tech_used, link, delay }) => {
	return (
		<div className="card" data-animate data-delay={String(delay)}>
			<div className="card-header">
				<div className="card-dots">
					<span className="dot dot-close" />
					<span className="dot dot-minimize" />
					<span className="dot dot-expand" />
				</div>
				<span className="card-filename">{title}</span>
			</div>
			<div className="card-body">
				<p className="card-description">{description}</p>
				<div className="card-tags">
					{tech_used.map((tech, index) => (
						<span key={index} className="card-tag">
							{tech}
						</span>
					))}
				</div>
			</div>
			<a
				href={link}
				rel="noopener noreferrer"
				target="_blank"
				className="card-link"
			>
				<span className="prompt">$</span> open project{" "}
				<span className="card-link-arrow">&crarr;</span>
			</a>
		</div>
	);
};

export default Projects;
