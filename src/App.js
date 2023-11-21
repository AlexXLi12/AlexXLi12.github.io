import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</>
	);
}

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="element">
				<img className="portrait" src="./images/nyc_portrait.JPG" alt="" />
			</div>
			<div className="element">
				<h1>Hi, I'm Alex.</h1>
				<div
					className="element"
					style={{ flexDirection: "row", justifyContent: "center" }}
				>
					<object
						className="svg"
						type="image/svg+xml"
						data="./images/github.svg"
						onMouseEnter={(e) => {
							e.target.data = "./images/github_hover.svg";
						}}
						onMouseLeave={(e) => {
							e.target.data = "./images/github.svg";
						}}
					>
						Link to my GitHub
					</object>
					<object
						className="svg"
						type="image/svg+xml"
						data="./images/linkedin.svg"
						onMouseEnter={(e) => {
							e.target.data = "./images/linkedin_hover.svg";
						}}
						onMouseLeave={(e) => {
							e.target.data = "./images/linkedin.svg";
						}}
					>
						Link to my LinkedIn
					</object>
				</div>
			</div>
		</div>
	);
};

const Navbar = () => {
	return (
		<div className="navbar">
			<h3>Alex Li</h3>
		</div>
	);
};
export default App;
