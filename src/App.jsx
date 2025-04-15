import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import News from "./News";
import Resume from "./Resume";
const App = () => {
	return (
		<div>
			<Navbar />
			<About />
			<News />
			<Projects />
			<Resume />
		</div>
	);
}
export default App;
