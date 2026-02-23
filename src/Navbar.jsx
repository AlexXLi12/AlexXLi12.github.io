const Navbar = () => {
	return (
		<nav>
			<div className="nav-left">
				<span className="nav-mode">NORMAL</span>
				<span className="nav-path">~/alex-li</span>
			</div>
			<div className="nav-links">
				<a href="#about">about</a>
				<a href="#news">news</a>
				<a href="#projects">projects</a>
				<a href="#resume">resume</a>
			</div>
		</nav>
	);
};

export default Navbar;
