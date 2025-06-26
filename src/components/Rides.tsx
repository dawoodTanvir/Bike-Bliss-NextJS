import React from "react";
import Link from "next/link";

function Rides() {
  return (
    <div>
      {/* Header Section */}
      <div className="text-center justify-center mt-10 px-4">
        <h2 className="text-sm font-bold text-purple-700">Main feature</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-white">Discover The Perfect Ride</h1>
        <p className="text-sm md:text-base text-gray-400">
          Explore the key features that make our bikes stand out in a crowd.
        </p>
      </div>

      {/* Bikes Section */}
      <div className="space-y-10 bg-[#14121F] text-white">
        {/* First Image Div */}
        <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/images/Dirt-Bike-PNG-Picture.png"
              alt="Bike"
              className="max-w-[90%] md:max-w-[70%] scale-90"
            />
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Dirt Bike</h1>
            <p className="text-sm md:text-base text-gray-400">
              Embrace the perfect blend of style and
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              performance. Conquer every journey with ease.
            </p>
            <button className="focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2.5">
              Buy Now
            </button>
          </div>
        </div>

        {/* Second Image Div */}
        <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4">
          <div className="w-full md:w-1/2 px-6 md:px-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Thunderbolt</h1>
            <p className="text-sm md:text-base text-gray-400 mb-2">
              Unleash the power within. Dominate the streets
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              with unmatched agility and design.
            </p>
            <button className="focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2.5">
              Buy Now
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src="/images/Sports-Bike-PNG-Background.png"
              alt="Bike"
              className="max-w-[90%] md:max-w-[70%] scale-90"
            />
          </div>
        </div>

        {/* Third Image Div */}
        <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/images/ChatGPT Image Jun 25, 2025, 11_50_04 AM.png"
              alt="Bike"
              className="max-w-[90%] md:max-w-[70%] scale-90"
            />
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">The Bat Cycle</h1>
            <p className="text-sm md:text-base text-gray-400 mb-2">
              Elevate your riding experience. Precision
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              engineering meets unparalleled comfort and control.
            </p>
            <button className="focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2.5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rides;
