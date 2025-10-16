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
    <div className="text-center mx-auto pt-20 overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="text-5xl text-[#192A48] font-semibold"
      >
        Automate your business with the best in class software
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.6 }}
        className="text-2xl text-[#798090] mt-3 mb-10"
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
        className="bg-[#253FB6] text-white text-lg font-semibold rounded-[1332px] px-12 py-4 cursor-pointer hover:bg-[#3953c7]"
      >
        Start for free
      </motion.button>

      <div className="flex flex-col items-center relative mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 -z-50 w-full"
        >
          <BannerPolygonSVG />
        </motion.div>

        <motion.img
          src={bannerImage}
          alt="Banner Image"
          className="max-w-[1131px] z-20"
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
      </div>
    </div>
  );
};

export default Banner;
