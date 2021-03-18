import React, { useState } from 'react';
import logoDhomes from '../logodhomes.svg';
import Filter from './Filter';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="px-4 py-3 bg-gray-900 sm:flex sm:justify-between">
        <div className="flex items-center justify-between">
          <img src={logoDhomes} className="w-auto h-8" alt="logo" />
          <button onClick={toggle} className="px-2 sm:hidden">
            <svg
              className="w-4 text-white fill-current h4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav
          className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'} `}
        >
          <div className="pt-4 pb-5 border-b border-gray-800 sm:border-0 sm:flex sm:pt-0 sm:pb-0">
            <a
              href="#"
              className="block px-2 py-1 text-white rounded hover:bg-gray-800"
            >
              List your property
            </a>
            <a
              href="#"
              className="block px-2 py-1 mt-1 text-white rounded sm:mt-0 hover:bg-gray-800"
            >
              Trips
            </a>
            <a
              href="#"
              className="block px-2 py-1 mt-1 text-white rounded sm:mt-0 hover:bg-gray-800"
            >
              Messages
            </a>
          </div>
          <div className="px-3 py-5 sm:py-0">
            <div className="flex items-center">
              <img
                className="object-cover w-10 h-10 border-2 border-gray-600 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
              <span className="ml-4 font-semibold text-white sm:hidden">
                Isla Schoger
              </span>
            </div>
            <div className="mt-5 sm:hidden">
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
      <Filter />
      <main className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">Los Angeles</h1>
        <p className="mt-4 text-gray-600">
          Live like the stars in these luxurious Southern California estates.
        </p>
        <div className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80"
            className="rounded-lg shadow-md"
          />
          <div className="px-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <span className="px-4 py-1 font-semibold text-gray-800 uppercase bg-green-400">
                Plus
              </span>
              <span className="ml-2 text-gray-600">3 Beds &bull. 2 Baths</span>
              <h1 className="font-semibold text-gray-800">
                Modern home in city center
              </h1>
              <div>
                <span className="text-gray-800">$1400</span>
                <span className="text-gray-600">/wk</span>
              </div>
              <div>
                <span>Sao</span>
                <span className="text-gray-600">34 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Header;
