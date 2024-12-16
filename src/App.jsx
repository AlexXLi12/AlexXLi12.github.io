import "./App.css";
import Jumbotron from "./Jumbotron";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Experience from "./Experience";
const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Jumbotron />
			<Projects />
			<Experience />
		</div>
	);
}
export default App;
