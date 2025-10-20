/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import teamThree from "../assets/teamThree.png";
import SectionTitle from "./common/SectionTitle";

const TeamThree = () => {
  return (
    <div className="bg-[#2F48B7] py-20 xl:py-40 relative">
      {/* Flare effect with animation */}
      <motion.div
        className="absolute inset-0 -top-50 -left-100 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute w-[600px] h-[600px] bg-pink-300/20 blur-[90px] rounded-full hidden lg:block"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse justify-center items-center xl:flex-row xl:justify-between gap-8 xl:gap-17 px-4 xl:px-0">
        <motion.div
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 1.5 }}
          className="space-y-6"
        >
          <SectionTitle
            caption={"Stop chasing wrong leads"}
            className={"text-white border-white"}
          />
          <h3 className="text-white font-medium text-2xl lg:text-4xl mt-6">
            Stop wasting time chasing the wrong leads.
          </h3>
          <p className="text-white lg:text-2xl">
            Sales and marketing teams spend countless hours trying to identify
            target accounts manually. Without the right insights, your efforts
            are scattered, and opportunities slip through the cracks.
          </p>
        </motion.div>
        <motion.img
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 1.5 }}
          src={teamThree}
          className="w-[729px]"
          alt="team one image"
        />
      </div>
    </div>
  );
};

export default TeamThree;
