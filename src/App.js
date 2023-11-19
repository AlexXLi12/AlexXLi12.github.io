import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
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
        <img src="./images/nyc_portrait.JPG" alt="" />
      </div>
      <div className="element">
        <h1>Hi, I'm Alex.</h1>
      </div>
    </div>
);
}
export default App;
