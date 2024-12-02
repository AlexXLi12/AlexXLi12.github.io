import "./Jumbotron.css";
import About from "./About";
const Jumbotron = () => {
	return (
		<div className="jumbotron" id='about'>
			<div className="element" style={{ flexDirection: "row" }}>
				<img className="portrait shadow-effect" src="./images/portrait.jpg" alt="Portrait" />
				<About />
			</div>
		</div>
	);
};

export default Jumbotron;