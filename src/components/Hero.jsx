import React from "react";
import bgImage from "../assets/bg.png";  
import logo from "../assets/logo.png";

const Hero = () => {
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
      <nav className="absolute top-6 w-full flex justify-between items-center px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="CarbonCrunch Logo" className="h-12" />
          
        </div>

        {/* Navbar */}
      
<ul
  className="flex bg-white shadow-md text-center"
  style={{
    width: "497px",
    height: "53px",
    justifyContent: "space-between",
    borderRadius: "16px",
    paddingTop: "16px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    display: "flex",
    alignItems: "center",
    fontFamily: "DM Sans",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0%",
  }}
>
  <li className="hover:text-green-500 cursor-pointer">Home</li>
  <li className="hover:text-green-500 cursor-pointer">Services</li>
  <li className="hover:text-green-500 cursor-pointer">Blog</li>
  <li className="hover:text-green-500 cursor-pointer">About Us</li>
  <li className="hover:text-green-500 cursor-pointer">Contact</li>
</ul>


        {/* Buttons */}
        <div
  className="flex"
  style={{
    width: "286px",
    height: "41px",
    gap: "16px",
    display: "flex",
    alignItems: "center",
  }}
>
  <button
    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow-md hover:bg-green-200 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95"
    style={{
      fontFamily: "DM Sans",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "2%",
    }}
  >
    Login
  </button>
  <button
    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95"
    style={{
      fontFamily: "DM Sans",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "2%",
    }}
  >
    Book Demo
  </button>
</div>


      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div
  className="inline-block px-4 py-2 bg-black text-white rounded-full mb-4 animate-fadeIn animate-bounce"
  style={{
    fontFamily: "DM Sans",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out, bounce 2s infinite",
  }}
>
  👋 Let’s Save our Environment
</div>



        {/* Main Heading */}
        <h1
  className="text-gray-900 leading-tight text-center"
  style={{
    fontFamily: "Aeonik TRIAL",
    fontWeight: "700",
    fontSize: "70px",
    lineHeight: "100%",
    letterSpacing: "-5%",
    textAlign: "center",
  }}
>
  Streamline Your Sustainability Reporting With{" "}
  <span className="text-green-600">CARBON CRUNCH</span>
</h1>


        {/* Subtitle */}
        <p
  className="mt-3 text-gray-600"
  style={{
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "100%",
    letterSpacing: "0%",
  }}
>
  <span
    style={{
      fontWeight: "900",
      fontFamily: "DM Sans",
    }}
    className="text-green-600"
  >
    95%
  </span>{" "}
  Accurate Carbon Calculations Trusted by Industry Leaders
</p>



       {/* CTA Buttons */}
<div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
  
  <button
    className="px-6 py-3 bg-white border-2 border-green-500 text-green-500 rounded-lg shadow-md 
               hover:bg-green-100 transition-all duration-300 ease-in-out 
               transform hover:-translate-y-1 hover:scale-105 active:scale-95"
    style={{
      fontFamily: "DM Sans",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "2%",
    }}
  >
    Free Calculator
  </button>

  <button
    className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md 
               hover:bg-green-700 transition-all duration-300 ease-in-out 
               transform hover:-translate-y-1 hover:scale-105 active:scale-95"
    style={{
      fontFamily: "DM Sans",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "2%",
    }}
  >
    Book Demo
  </button>

</div>



      </div>
    </section>
  );
};

export default Hero;
