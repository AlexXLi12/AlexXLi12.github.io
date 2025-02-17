import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Experience from "./Experience";
const App = () => {
	return (
		<div>
			<Navbar />
			<section className="section mt-5">
				<About />
				<Projects />
				<Experience />
			</section>
		</div>
	);
}
export default App;
