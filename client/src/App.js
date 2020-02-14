import React from 'react';
import logo from '../src/img/logo.png';
import './App.css';

import Players from "../src/components/Players";
import useDarkMode from "../src/hooks/useDarkMode";

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.fifa.com/womensworldcup/teams/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View 2019 Teams
        </a>
        <br />
        <a
          className="App-link2"
          href="https://www.fifa.com/womensworldcup/awards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View 2019 Awards
        </a>
        <button onClick={toggleDarkMode} data-testid="darkModeButton">Toggle Dark Mode</button>
      </header>
      <Players />
    </div>
  );
}

export default App;
