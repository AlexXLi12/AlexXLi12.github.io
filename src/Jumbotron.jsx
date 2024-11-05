import "./Jumbotron.css";
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="element">
				<h1>Hi, I'm Alex.</h1>
				<div
					className="element"
					style={{ flexDirection: "row", justifyContent: "center" }}
				>
					<a
						href="https://github.com/AlexXLi12"
						style={{ marginRight: "0.5%" }}
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
						target="_blank"
						rel="noopener noreferrer"
						style={{ marginLeft: "0.5%" }}
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

export default Jumbotron;