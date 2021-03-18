import React, { useState } from 'react';

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-full px-4 py-2 bg-gray-700">
        <div className="flex justify-between">
          <div className="relative ">
            <div className="absolute inset-y-0 flex items-center pl-3">
              <svg
                className="w-4 text-gray-500 fill-current h4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
            <input
              className="py-2 pl-10 pr-2 text-white bg-gray-900 rounded-lg focus:bg-white focus:text-gray-900"
              placeholder="Search by keywords"
            />
          </div>
          <div>
            <button
              onClick={toggle}
              className="flex items-center px-3 py-2 text-gray-100 bg-gray-600 rounded-lg"
            >
              <svg
                className="w-4 text-white fill-current h4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" />
              </svg>
              <span className="ml-1">Filters</span>
            </button>
          </div>
        </div>
        <div className={`border-t border-gray-900 ${isOpen} ? 'block' : 'hidden' 1}>
          <form className="h-full overflow-y-auto">
            <div className="flex flex-wrap py-4 border-b border-gray-900">
              <label htmlFor="bedroom" className="w-1/2 px-2">
                <span className="block text-sm text-gray-400">Bedrooms</span>
                <select
                  id="bedroom"
                  className="w-full text-white bg-gray-500 rounded-lg"
                >
                  <option>4</option>
                </select>
              </label>
              <label htmlFor="bathroom" className="w-1/2 px-2">
                <span className="block text-sm text-gray-400">Bathrooms</span>
                <select
                  id="bathroom"
                  className="w-full text-white bg-gray-500 rounded-lg"
                >
                  <option>2</option>
                </select>
              </label>
              <label htmlFor="price" className="w-full mt-4">
                <span className="block text-sm text-gray-400">Price Range</span>
                <select
                  id="price"
                  className="w-full text-white bg-gray-500 rounded-lg"
                >
                  <option>Up to $2,000 /wk</option>
                </select>
              </label>
            </div>
            <div className="pb-4 mt-4 border-b border-gray-800">
              <label
                htmlFor="propertyType"
                className="block text-sm text-gray-400"
              >
                Property Type
              </label>
              <label htmlFor="house" className="flex items-center mt-2">
                <input type="radio" id="house" name="propertyType" />
                <span className="ml-2 text-white">House</span>
              </label>
              <label htmlFor="apartment" className="flex items-center mt-2">
                <input type="radio" id="apartment" name="propertyType" />
                <span className="ml-2 text-white">Apartment</span>
              </label>
              <label htmlFor="loft" className="flex items-center mt-2">
                <input type="radio" id="loft" name="propertyType" />
                <span className="ml-2 text-white">Loft</span>
              </label>
              <label htmlFor="townhouse" className="flex items-center mt-2">
                <input type="radio" id="townhouse" name="propertyType" />
                <span className="ml-2 text-white">Townhouse</span>
              </label>
            </div>
            <div className="mt-4">
              <label
                htmlFor="amenities"
                className="block text-sm text-gray-400"
              >
                Amenities
              </label>
              <label htmlFor="balcony" className="flex items-center mt-2">
                <input type="checkbox" id="balcony" name="amenities" />
                <span className="ml-2 text-white">Balcony</span>
              </label>
              <label
                htmlFor="airConditioning"
                className="flex items-center mt-2"
              >
                <input type="checkbox" id="airConditioning" name="amenities" />
                <span className="ml-2 text-white">Air conditioning</span>
              </label>
              <label htmlFor="pool" className="flex items-center mt-2">
                <input type="checkbox" id="pool" name="amenities" />
                <span className="ml-2 text-white">Pool</span>
              </label>
              <label htmlFor="beach" className="flex items-center mt-2">
                <input type="checkbox" id="beach" name="amenities" />
                <span className="ml-2 text-white">Beach</span>
              </label>
              <label htmlFor="petFriendly" className="flex items-center mt-2">
                <input type="checkbox" id="petFriendly" name="amenities" />
                <span className="ml-2 text-white">Pet friendly</span>
              </label>
              <label htmlFor="kidFriendly" className="flex items-center mt-2">
                <input type="checkbox" id="kidFriendly" name="amenities" />
                <span className="ml-2 text-white">Kid friendly</span>
              </label>
              <label htmlFor="parking" className="flex items-center mt-2">
                <input type="checkbox" id="parking" name="amenities" />
                <span className="ml-2 text-white">Parking</span>
              </label>
            </div>
          </form>
          <div className="p-4 bg-gray-900">
            <button className="w-full py-2 text-white bg-indigo-500 rounded-lg">
              Update results
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
