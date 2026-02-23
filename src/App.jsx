import { useEffect } from "react";
import "./AppDark.css";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import News from "./News";
import Resume from "./Resume";

const App = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
		);

		document.querySelectorAll("[data-animate]").forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="app">
			<Navbar />
			<About />
			<div className="section-divider" />
			<News />
			<div className="section-divider" />
			<Projects />
			<div className="section-divider" />
			<Resume />
		</div>
	);
};

export default App;
