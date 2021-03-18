import React from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <>
      <header className="px-4 py-3 bg-gray-900">
        <img src={logoDhomes} className="w-auto h-8" alt="logo" />
      </header>
      <div className="flex justify-between px-4 py-3 bg-gray-800">
        <input className="" />
        <button className="px-3 py-2 bg-gray-500 rounded-md">Filters</button>
      </div>
      <main>
        <h1>Los Angeles</h1>
        <p>Live like the stars</p>
      </main>
    </>
  );
}

export default Header;
