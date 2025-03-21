import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo.png"  className="h-10 w-auto mr-3" />
        <span className="text-xl font-semibold text-gray-900">CarbonCrunch</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg font-medium text-gray-800">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">Services</li>
        <li className="hover:text-green-500 cursor-pointer">Blog</li>
        <li className="hover:text-green-500 cursor-pointer">About Us</li>
        <li className="hover:text-green-500 cursor-pointer">Contact</li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-lg shadow-md hover:bg-green-200 transition">
          Login
        </button>
        <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
          Book Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
