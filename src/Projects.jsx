const Projects = () => {
	return (
		<section className="section" id="projects">
			<h1 className="title is-1">Projects</h1>
			<div className="columns">
				<ProjectCard
					title="Echolocation"
					description="A real-time collaborative music-making software. Won the Synergy Track award at DubHacks '23."
					tech_used={["React.js", "Socket.io", "Google Cloud Platform"]}
					link="https://github.com/TheYuch/Echolocation"
				/>
				<ProjectCard
					title="SyncroScribe"
					description="An AI powered speech-to-text and summarization nurse note-taking software that I developed at DubHacks '24."
					tech_used={[
						"React.js",
						"Express.js",
						"OpenAI Whisper",
						"CloudFlare Workers API",
					]}
					link="https://github.com/AlexXLi12/DubHacks-2024"
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
