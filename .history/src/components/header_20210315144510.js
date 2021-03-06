import React from 'react';
import logo from '../logo.svg';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
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
      {/* prettier-ignore */}
      <img src={logoDhomes} className="w-20" alt="logo" />
    </header>
  );
}

export default Header;
