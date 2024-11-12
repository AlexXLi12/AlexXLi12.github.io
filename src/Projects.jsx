import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects">
			<h1>Projects</h1>
			<div className="project-cards">
				<ProjectCard
					title="Project 1"
					description="This is a description of project 1."
					image="./images/nyc_portrait.JPG"
					link=""
				/>
				<ProjectCard
					title="Project 2"
					description="This is a description of project 2."
					image="./images/nyc_portrait.JPG"
					link=""
				/>
				<ProjectCard
					title="Project 3"
					description="This is a description of project 3."
					image="./images/nyc_portrait.JPG"
					link=""
				/>
			</div>
		</div>
	);
};

const ProjectCard = ({ title, description, image, link }) => {
	return (
		<div className="project-card bend-effect">
			<img src={image} alt="" className="project-card-image" />
			<div className="project-card-content">
				<h3>{title}</h3>
				<p>{description}</p>
				<a href={link}>Learn More</a>
			</div>
		</div>
	);
};

export default Projects;