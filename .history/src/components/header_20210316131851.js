import React, { useState } from 'react';
import logoDhomes from '../logodhomes.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="px-4 py-3 bg-gray-900">
        <div className="flex items-center justify-between">
          <img src={logoDhomes} className="w-auto h-8" alt="logo" />
          <button onClick={toggle} className="px-2">
            <svg
              className="w-4 text-white fill-current h4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav className={isOpen ? 'block' : 'hidden'}>
          <div className="pt-4 pb-5 border-b border-gray-800">
            <a
              href="#"
              className="block px-2 py-1 text-white rounded hover:bg-gray-800"
            >
              List your property
            </a>
            <a
              href="#"
              className="block px-2 py-1 mt-1 text-white rounded hover:bg-gray-800"
            >
              Trips
            </a>
            <a
              href="#"
              className="block px-2 py-1 mt-1 text-white rounded hover:bg-gray-800"
            >
              Messages
            </a>
          </div>
          <div className="px-3 py-5">
            <div className="flex items-center">
              <img
                className="object-cover w-10 h-10 border-2 border-gray-600 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
              <span className="ml-4 font-semibold text-white">
                Isla Schoger
              </span>
            </div>
            <div className="mt-5">
              <a href="#" className="block text-gray-400 hover:text-white">
                Account settings
              </a>
              <a href="#" className="block mt-3 text-gray-400 hover:text-white">
                Support
              </a>
              <a href="#" className="block mt-3 text-gray-400 hover:text-white">
                Sign out
              </a>
            </div>
          </div>
        </nav>
      </header>
      <Filter />>
      <main>
        <h1>Los Angeles</h1>
        <p>Live like the stars</p>
      </main>
    </>
  );
}

export default Header;
