import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>Alex Li</h1>
        <div className="links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
        </div>
        </nav>
    );
}
    
export default Navbar;