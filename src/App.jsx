import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./Jumbotron";
import Projects from "./Projects";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Jumbotron />
			<Projects />
		</div>
	);
}

const Navbar = () => {
	return (
		<div className="navbar">
			<h3>Alex Li</h3>
		</div>
	);
};
export default App;
