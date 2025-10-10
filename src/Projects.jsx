const Projects = () => {
	return (
		<section className="section" id="projects">
			<h1 className="title is-1">Projects</h1>
			<div className="columns">
				<ProjectCard
					title="Othello Game AI"
					description="An optimized AI to play the game Othello, implemented in C++.
              Uses minimax algorithm with alpha-beta pruning and iterative deepening to make optimal moves within a time limit."
					tech_used={["C++", "Profiling", "Multithreading"]}
					link="https://github.com/AlexXLi12/othello-engine-grpc"
				/>
				<ProjectCard
					title="Renaissance Research"
					description="A web app that helps researchers find novel applications for old/overlooked research. Won the Best use of AI and Best Finance/Data Analytics Project awards at HackTech 2025."
					tech_used={["Next.js", "React.js", "BeautifulSoup", "Google Gemini API", "Pydantic"]}
					link="https://renresearch.co"
				/>
				<ProjectCard
					title="ConsciousCapital"
					description="A web-app that creates a stock portfolio for users based on sector, individual companies' progressiveness/social values, and risk tolerance. 
					Won the Best Web Hack award at HackTJ 10.0."
					tech_used={["Flask", "Numpy", "Pandas", "Bootstrap"]}
					link="https://github.com/AlexXLi12/ConsciousCapital"
				/>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, tech_used, link }) => {
	return (
		<div className="column card is-flex is-flex-direction-column m-2">
			<div className="card-content is-flex is-flex-direction-column">
				<h1 className="title is-3">{title}</h1>
				<p className="content block">{description}</p>
				<h4>Technologies Used:</h4>
				<ul className="list">
					{tech_used.map((tech, index) => (
						<li key={index} className="list-item">
							{tech}
						</li>
					))}
				</ul>
			</div>
			<footer className="card-footer mt-auto">
				<a
					href={link}
					rel="noopener noreferrer"
					target="_blank"
					className="card-footer-item"
				>
					<p className="is-fullwidth">Project Link</p>
				</a>
			</footer>
		</div>
	);
};

export default Projects;
