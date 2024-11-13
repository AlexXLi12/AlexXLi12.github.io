import { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects">
			<h1>Projects</h1>
			<div className="project-cards">
				<ProjectCard
					title="Echolocation"
					description="A real-time collaborative music-making software that I developed with 2 other hackers at DubHacks '23."
					tech_used={["React", "Node.js", "Socket.io", "Google Cloud Platform"]}
					image="./images/echolocation.png"
					link="https://github.com/TheYuch/Echolocation"
				/>
				<ProjectCard
					title="Project 2"
					description="This is a description of project 2."
					tech_used={[]}
					image="./images/nyc_portrait.JPG"
					link=""
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
					Project Link
				</a>
			</div>
		</div>
	);
};

export default Projects;
