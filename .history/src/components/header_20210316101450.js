import React from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  return (
    <>
      <header className="px-4 py-3 bg-gray-900">
        <img src={logoDhomes} className="w-auto h-8" alt="logo" />
      </header>
      <div className="flex justify-between px-4 py-1 bg-gray-800">
        <div className="relative ">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <svg
              className="w-4 text-gray-500 fill-current h4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            className="py-2 pl-8 pr-2 text-white bg-gray-900 rounded-lg focus:bg-white focus:text-gray-900"
            placeholder="Search by keywords"
          />
        </div>
        <div>
          <button className="flex px-3 py-2 text-gray-100 bg-gray-500 rounded-lg">
            <svg
              className="w-4 text-white fill-current h4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" />
            </svg>
            <span>Filters</span>
          </button>
        </div>
      </div>
      <main>
        <h1>Los Angeles</h1>
        <p>Live like the stars</p>
      </main>
    </>
  );
}

export default Header;
