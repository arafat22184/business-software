/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/bannerImage.png";
import { BannerPolygonSVG } from "./SVG/HomePageSVG";

const Banner = () => {
  const transition = {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <div
      id="home"
      className="text-center mx-auto pt-5 lg:pt-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="text-3xl lg:text-5xl text-[#192A48] font-semibold px-4 xl:px-0"
      >
        Automate your business with the best in class software
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.6 }}
        className="text-xl lg:text-2xl text-[#798090] mt-1 lg:mt-3 mb-5 lg:mb-10 px-4 xl:px-0"
      >
        "LeadTalk empowers sales and marketing teams to identify and prioritize
        high-fit accounts,
        <br className="hidden lg:block" /> helping you focus on what matters
        most: closing deals and driving revenue."
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        transition={transition}
        className="bg-[#253FB6] text-white lg:text-lg font-semibold rounded-[1332px] px-6 lg:px-12 py-2 lg:py-4 cursor-pointer hover:bg-[#3953c7]"
      >
        Start for free
      </motion.button>

      <div className="flex flex-col items-center relative mt-6 lg:mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 -z-50 w-full"
        >
          <BannerPolygonSVG />
        </motion.div>

        <div className="relative">
          <motion.img
            src={bannerImage}
            alt="Banner Image"
            className="max-w-[1131px] w-full z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { duration: 1.5, delay: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          />
          {/* Flare effect with animation */}
          <motion.div
            className="absolute inset-0 -bottom-100 left-1/5 -z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="absolute w-[800px] h-[600px] bg-[#223DAF80] blur-[300px]  hidden lg:block"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
