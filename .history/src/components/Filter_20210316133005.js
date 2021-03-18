import React from 'react';

export default function Filter() {
  return (
    <div className="px-4 py-2 bg-gray-700 ">
      <div className="flex justify-between pb-2 border-b border-gray-900">
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
          <button className="flex items-center px-3 py-2 text-gray-100 bg-gray-600 rounded-lg">
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
      <form>
        <div className="flex flex-wrap py-4 border-b border-gray-900">
          <label htmlFor="bedroom" className="w-1/2 px-2">
            <span className="block">Bedrooms</span>
            <select id="bedroom" className="w-full">
              <option>4</option>
            </select>
          </label>
          <label htmlFor="bathroom" className="w-1/2 px-2">
            <span className="block">Bathrooms</span>
            <select id="bathroom" className="w-full">
              <option>2</option>
            </select>
          </label>
          <label htmlFor="price" className="w-full mt-4">
            <span className="block">Price Range</span>
            <select id="price" className="w-full">
              <option>Up to $2,000 /wk</option>
            </select>
          </label>
        </div>
        <div className="border-b border-gray-800">
          <label htmlFor="propertyType">Property Type</label>
          <label htmlFor="house">
            <input type="radio" id="house" name="propertyType" />
            House
          </label>
          <label htmlFor="apartment">
            <input type="radio" id="apartment" name="propertyType" />
            Apartment
          </label>
          <label htmlFor="loft">
            <input type="radio" id="loft" name="propertyType" />
            Loft
          </label>
          <label htmlFor="townhouse">
            <input type="radio" id="townhouse" name="propertyType" />
            Townhouse
          </label>
        </div>
        <div>
          <label htmlFor="amenities">Amenities</label>
          <label htmlFor="balcony">
            <input type="checkbox" id="balcony" name="amenities" />
            Balcony
          </label>
          <label htmlFor="airConditioning">
            <input type="checkbox" id="airConditioning" name="amenities" />
            Air conditioning
          </label>
          <label htmlFor="pool">
            <input type="checkbox" id="pool" name="amenities" />
            Pool
          </label>
          <label htmlFor="beach">
            <input type="checkbox" id="beach" name="amenities" />
            Beach
          </label>
          <label htmlFor="petFriendly">
            <input type="checkbox" id="petFriendly" name="amenities" />
            Pet friendly
          </label>
          <label htmlFor="kidFriendly">
            <input type="checkbox" id="kidFriendly" name="amenities" />
            Kid friendly
          </label>
          <label htmlFor="parking">
            <input type="checkbox" id="parking" name="amenities" />
            Parking
          </label>
        </div>
      </form>
    </div>
  );
}
