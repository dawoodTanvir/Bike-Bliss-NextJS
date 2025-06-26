'use client';

import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="flex flex-wrap justify-between items-center py-4 px-6 md:px-17 bg-[#14121F] border-b border-gray-800">
            {/* Brand Section */}
            <div className="text-sm text-white mb-4 md:mb-0">
                <Link href="/">Bike Bliss</Link>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap justify-center space-x-5 mb-4 md:mb-0">
                <Link href="/" className="text-white hover:text-gray-400 text-sm">Features</Link>
                <Link href="/" className="text-white hover:text-gray-400 text-sm">Testimonials</Link>
                <Link href="/" className="text-white hover:text-gray-400 text-sm">Faqs</Link>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-auto flex justify-center md:justify-end">
                <Link href="/">
                    <button
                        className="focus:outline-none text-white bg-purple-800 hover:bg-purple-900
                                   focus:ring-4 focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2
                                   dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                        Contact
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
