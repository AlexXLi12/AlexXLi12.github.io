import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Projects />
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</>
	);
}

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="element">
				<img className="portrait" src="./images/nyc_portrait.JPG" alt="" />
			</div>
			<div className="element">
				<h1>Hi, I'm Alex.</h1>
				<div
					className="element"
					style={{ flexDirection: "row", justifyContent: "center" }}
				>
					<a
						href="https://github.com/AlexXLi12"
						style={{ marginRight: "2%" }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="svg"
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
						style={{ marginLeft: "2%" }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="svg"
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
	);
};

const Navbar = () => {
	return (
		<div className="navbar">
			<h3>Alex Li</h3>
		</div>
	);
};

const Projects = () => {
	return (
		<div className="projects">
			<h1>Projects</h1>
			<div className="project-cards">
				<ProjectCard
					title="Project 1"
					description="This is a description of project 1."
					image="./images/nyc_portrait.JPG"
					link="" />
				<ProjectCard
					title="Project 2"
					description="This is a description of project 2."
					image="./images/nyc_portrait.JPG"
					link="" />
				<ProjectCard
					title="Project 3"
					description="This is a description of project 3."
					image="./images/nyc_portrait.JPG"
					link="" />
			</div>
		</div>
	);
};

const ProjectCard = ({ title, description, image, link }) => {
	return (
		<div className="project-card">
				<img src={image} alt="" className="project-card-image" />
			<div className="project-card-content">
				<h3>{title}</h3>
				<p>{description}</p>
				<a href={link}>Learn More</a>
			</div>
		</div>
	);
}
export default App;
