import React from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <header className="App-header">
      <img src={logoDhomes} className="w-auto h-8" alt="logo" />
      {/* prettier-ignore */}
    </header>
  );
}

export default Header;
