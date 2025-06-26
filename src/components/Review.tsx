'use client';
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

function Review() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];

  return (
    <div className="px-4">
      {/* Tooltip Section */}
      <div className="flex flex-row items-center justify-center mb-5 w-full">
        <AnimatedTooltip items={people} />
      </div>

      {/* Review Section */}
      <div className="text-center mx-auto max-w-3xl">
        <p className="font-bold text-md text-white">John Doe</p>
        <p className="text-sm md:text-md text-gray-500 mb-3">
          Software Engineer, NWO
        </p>

        <h1 className="mb-2 text-lg md:text-2xl font-bold text-white">
          "Absolutely love my Thunderbolt! Smooth ride, sleek design, and
          unbeatable performance."
        </h1>
        <h1 className="text-lg md:text-2xl text-white">- John Doe</h1>
      </div>
    </div>
  );
}

export default Review;
