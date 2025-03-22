import React from "react";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* First Background Image (Lazy Loaded) */}
      <div
        className="absolute bg-cover bg-center"
        style={{
          width: "1452px",
          height: "1000px",
          top: "-44px",
          left: "-6px",
          backgroundImage: "url('/path-to-bg.png')",
          zIndex: "-1",
          willChange: "background-image",
          backgroundSize: "cover",
        }}
      >
        {/* Lazy Loading via intersection observer (could be added here with IntersectionObserver in React) */}
      </div>

      {/* Second Background (Black Section) */}
      <div
        className="absolute bg-black w-full h-full"
        style={{
          top: "0px",
          left: "0px",
          width: "1440px",
          height: "999px",
          overflowX: "hidden",
          zIndex: "-2",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row gap-6 items-center">
        {/* Placeholder for Image (with Lazy Loading) */}
        <div
          className="absolute bg-gray-300"
          style={{
            width: "610px",
            height: "742px",
            top: "80px",
            left: "130px",
            willChange: "background-image",
            backgroundImage: "url('/path-to-placeholder.jpg')",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Stats Section */}
        <div className="relative w-full max-w-xl">
          {/* Global Animation Definition */}
          <style>
            {`
              @keyframes fadeInSlideUp {
                0% {
                  opacity: 0;
                  transform: translateY(20px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>

          {/* Card 1 - Top Right */}
          <motion.div
            className="absolute bg-green-500 text-black font-bold shadow-lg p-6 rounded-lg transform transition-all hover:scale-105 hover:bg-green-400"
            style={{
              width: "446px",
              height: "246.05px",
              top: "130.73px",
              left: "857px",
              borderRadius: "11.91px",
              padding: "10.99px 14.65px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <span
              className="text-[87.92px] font-bold uppercase tracking-[1%] leading-[100%]"
              style={{ fontFamily: "Aeonik TRIAL" }}
            >
              3X
            </span>
            <p
              className="text-[29.31px] font-normal capitalize tracking-[1%] leading-[100%]"
              style={{ fontFamily: "DM Sans" }}
            >
              ESG High Performers Deliver A Higher Total Shareholder Return
            </p>
          </motion.div>

          {/* Card 2 - Center */}
          <motion.div
            className="absolute bg-gray-800 text-white shadow-lg p-6 rounded-lg transform transition-all hover:scale-105 hover:bg-gray-700"
            style={{
              background: "#3A3A3A",
              width: "492px",
              height: "173.53px",
              top: "342.07px",
              left: "596px",
              borderRadius: "11.24px",
              padding: "9.51px 13.83px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span
              style={{
                fontFamily: "Aeonik TRIAL",
                fontWeight: "700",
                fontSize: "55.34px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textTransform: "uppercase",
              }}
            >
              98%
            </span>
            <p
              style={{
                fontFamily: "DM Sans",
                fontWeight: "400",
                fontSize: "31.13px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textTransform: "capitalize",
              }}
            >
              Of CEOs Agree Sustainability Is Their Responsibility
            </p>
          </motion.div>

          {/* Card 3 - Bottom Right */}
          <motion.div
            className="absolute text-white shadow-lg flex flex-col justify-end text-right p-6 rounded-lg transform transition-all hover:scale-105 hover:bg-gray-800"
            style={{
              background: "#2D2D2D",
              width: "380.02px",
              height: "186.12px",
              top: "476px",
              left: "857px",
              borderRadius: "12.85px",
              padding: "8.84px 12.85px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span
              style={{
                fontFamily: "Aeonik TRIAL",
                fontWeight: "700",
                fontSize: "51.42px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              18%
            </span>
            <p
              style={{
                fontFamily: "DM Sans",
                fontWeight: "400",
                fontSize: "25.71px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textTransform: "capitalize",
                textAlign: "right",
                marginTop: "10px",
              }}
            >
              Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
            </p>
          </motion.div>

          {/* Card 4 - Bottom Left */}
          <motion.div
            className="absolute bg-white text-green-600 shadow-lg p-6 rounded-lg transform transition-all hover:scale-105 hover:bg-green-500"
            style={{
              width: "446px",
              height: "181px",
              top: "630px",
              left: "559px",
              borderRadius: "10px",
              padding: "11px 16px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span
              style={{
                fontFamily: "Aeonik TRIAL",
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              37%
            </span>
            <p
              style={{
                fontFamily: "DM Sans",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "1%",
                textTransform: "capitalize",
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
