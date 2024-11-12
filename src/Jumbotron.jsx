import "./Jumbotron.css";
import About from "./About";
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="element" style={{ flexDirection: "row" }}>
				<img className="portrait bend-effect" src="./images/portrait.jpg" alt="Portrait" />
				<About />
			</div>
			
		</div>
	);
};

export default Jumbotron;