import React from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <header className="bg-gray-900 ">
      <img src={logoDhomes} className="w-auto h-8" alt="logo" />
      {/* prettier-ignore */}
    </header>
  );
}

export default Header;
