import React from 'react';
import logo from '../logo.svg';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logoDhomes} className="h-8 w-30" alt="logo" />
      {/* prettier-ignore */}
    </header>
  );
}

export default Header;
