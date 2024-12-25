import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<h1>Projects</h1>
			<div className="project-cards">
				<ProjectCard
					title="Echolocation"
					description="A real-time collaborative music-making software. Won the Synergy Track award at DubHacks '23."
					tech_used={["React.js", "Socket.io", "Google Cloud Platform"]}
					image="./images/echolocation.png"
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
					image="./images/syncroscribe.jpg"
					link="https://github.com/AlexXLi12/DubHacks-2024"
				/>
				<ProjectCard
					title="ConsciousCapital"
					description="A web-app that creates a stock portfolio for users based on sector, individual companies' progressiveness/social values, and risk tolerance. 
					Won the Best Web Hack award at HackTJ 10.0."
					tech_used={["Flask", "Numpy", "Pandas", "Bootstrap"]}
					image="./images/consciouscapital.png"
					link="https://github.com/AlexXLi12/ConsciousCapital"
				/>
			</div>
		</div>
	);
};

const ProjectCard = ({ title, description, image, tech_used, link }) => {
	return (
		<div className="project-card shadow-effect">
			<h1>{title}</h1>
			<div className="project-card-body">
				<img src={image} alt="" className="project-card-image" />
				<div className="project-card-content">
					<p>{description}</p>
					<h4>Tech Used:</h4>
					<ul>
						{tech_used.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				</div>
			</div>
			<a href={link} rel="noopener noreferrer" target="_blank">
				<button className="project-link-button">Project Link</button>
			</a>
		</div>
	);
};

export default Projects;
