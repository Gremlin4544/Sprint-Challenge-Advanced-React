import React from 'react';
import logo from '../src/img/logo.png';
import './App.css';

import Players from "../src/components/Players";

function App() {
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
      </header>
      <Players />
    </div>
  );
}

export default App;
