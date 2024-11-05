import "./App.css";
import Jumbotron from "./Jumbotron";
import Projects from "./Projects";
import About from "./About";
function App() {
	return (
		<div className="App">
			<Jumbotron />
			<About />
			<Projects />
		</div>
	);
}
export default App;
