import React from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <>
      <header className="px-4 py-3 bg-gray-900">
        <img src={logoDhomes} className="w-auto h-8" alt="logo" />
      </header>
      <div className="flex justify-between px-4 py-3 bg-gray-800">
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            className="text-white bg-gray-900 rounded-lg"
            placeholder="Search by keywords"
          />
        </div>
        <button className="px-3 py-2 text-gray-100 bg-gray-500 rounded-lg">
          Filters
        </button>
      </div>
      <main>
        <h1>Los Angeles</h1>
        <p>Live like the stars</p>
      </main>
    </>
  );
}

export default Header;
