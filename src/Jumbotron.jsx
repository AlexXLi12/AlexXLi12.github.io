import "./Jumbotron.css";
import About from "./About";
const Jumbotron = () => {
	return (
		<div className="jumbotron" id="about">
			<img
				className="portrait shadow-effect"
				src="./images/portrait.jpg"
				alt="Portrait"
			/>
			<About />
		</div>
	);
};

export default Jumbotron;
