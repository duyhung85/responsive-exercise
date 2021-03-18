import React from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <>
      <header className="bg-gray-900">
        <img src={logoDhomes} className="w-auto h-8" alt="logo" />
      </header>
      <div className="bg-gray-800">
        <input />
        <button>Filters</button>
      </div>
      <main>
        <h1>Los Angeles</h1>
        <p>Live like the stars</p>
      </main>
    </>
  );
}

export default Header;
