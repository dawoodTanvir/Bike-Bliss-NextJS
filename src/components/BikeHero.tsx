import React from "react";
import Link from "next/link";

function BikeHero() {
  return (
    <div className="bg-[#14121F] py-10">
      {/* Text Section */}
      <div className="text-center mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Ride with passion
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Ride with us
        </h1>
        <p className="mt-4 text-white text-sm md:text-base">
          Experience the thrill of the open road with our premium selection of bikes
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-6">
        <Link href="/">
          <button
            className="focus:outline-none text-white bg-purple-800 hover:bg-purple-900
                       focus:ring-4 focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2
                       md:px-9 md:py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Buy Now
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative flex items-center justify-center mt-10 px-4">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 opacity-50 blur-2xl rounded-full max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto"></div>

        {/* Bike Image */}
        <img
          src="/images/Motorcycle-Bike-Transparent-Background.png"
          alt="Bike"
          className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default BikeHero;
