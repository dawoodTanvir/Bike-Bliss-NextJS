import React from "react";
import Link from "next/link";

function TheEnd() {
  return (
    <div className="bg-custom-blue flex flex-col justify-center items-center h-[40vh] py-8">
      <h1 className="lg:text-4xl text-center text-white font-bold text-2xl">
        Explore our collection and find the perfect
      </h1>
      <h1 className="lg:text-4xl text-center text-white font-bold text-2xl">bike for you.</h1>

      <div className="flex justify-center mt-6">
        <Link href="/">
          <button
            className="focus:outline-none text-white bg-purple-800 hover:bg-purple-900
                       focus:ring-4 focus:ring-purple-800 font-medium rounded-lg text-sm px-9 py-2.5
                       dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>


  );
}

export default TheEnd;