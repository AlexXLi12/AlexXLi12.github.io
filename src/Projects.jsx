import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<h1>Projects</h1>
			<div className="project-cards">
				<ProjectCard
					title="Echolocation"
					description="A real-time collaborative music-making software that I developed with 2 other hackers at DubHacks '23. Won the Synergy Track award."
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
						"CloudFlare Workers",
					]}
					image="./images/syncroscribe.jpg"
					link="https://github.com/AlexXLi12/DubHacks-2024"
				/>
				<ProjectCard
					title="Project 3"
					description="This is a description of project 3."
					tech_used={[]}
					image="./images/nyc_portrait.JPG"
					link=""
				/>
			</div>
		</div>
	);
};

const ProjectCard = ({ title, description, image, tech_used, link }) => {
	return (
		<div className="project-card shadow-effect">
			<img src={image} alt="" className="project-card-image" />
			<div className="project-card-content">
				<h1>{title}</h1>
				<p>{description}</p>
				<h4>Tech Used:</h4>
				<ul>
					{tech_used.map((tech, index) => (
						<li key={index}>{tech}</li>
					))}
				</ul>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<button className="project-link-button">Project Link</button>
				</a>
			</div>
		</div>
	);
};

export default Projects;
