import React, { useState } from "react";
import bgImage from "../assets/bg.png";  
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
  className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "1440px", 
    height: "891px", 
    overflowX: "hidden",
    display: "flex",
    flexWrap: "wrap",
  }}
>
      {/* Header Section */}
      <nav className="absolute top-6 w-full flex justify-between items-center px-6 sm:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="CarbonCrunch Logo" 
            className="h-10 sm:h-12 transform transition-transform duration-300 hover:scale-110" 
            loading="lazy"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navbar */}
        <ul
          className={`lg:flex bg-white shadow-md text-center rounded-lg p-4 space-x-4 absolute lg:static top-16 right-6 lg:right-auto flex-col lg:flex-row items-center transition-all duration-300 ${isOpen ? "flex" : "hidden"}`}
        >
          <li className="hover:text-green-500 cursor-pointer py-2 lg:py-0">Home</li>
          <li className="hover:text-green-500 cursor-pointer py-2 lg:py-0">Services</li>
          <li className="hover:text-green-500 cursor-pointer py-2 lg:py-0">Blog</li>
          <li className="hover:text-green-500 cursor-pointer py-2 lg:py-0">About Us</li>
          <li className="hover:text-green-500 cursor-pointer py-2 lg:py-0">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow-md hover:bg-green-200 transition transform hover:scale-105">
            Login
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition transform hover:scale-105">
            Book Demo
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-black text-white rounded-full mb-4 animate-bounce">
          👋 Let’s Save our Environment
        </div>

        {/* Main Heading */}
        <h1 className="text-gray-900 font-bold text-3xl sm:text-5xl md:text-6xl leading-tight text-center animate__animated animate__fadeInUp animate__delay-1s">
          Streamline Your Sustainability Reporting With 
          <span className="text-green-600"> CARBON CRUNCH</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg animate__animated animate__fadeInUp animate__delay-2s">
          <span className="text-green-600 font-bold">95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <button className="px-6 py-3 bg-white border-2 border-green-500 text-green-500 rounded-lg shadow-md hover:bg-green-100 transition transform hover:scale-105">
            Free Calculator
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition transform hover:scale-105">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
