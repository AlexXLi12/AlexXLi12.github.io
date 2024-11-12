import "./App.css";
import Jumbotron from "./Jumbotron";
import Projects from "./Projects";
import Navbar from "./Navbar";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Jumbotron />
			<Projects />
		</div>
	);
}
export default App;
