/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import teamTwo from "../assets/teamTwo.png";
import SectionTitle from "./common/SectionTitle";
import { TeamPolygonSVG } from "./SVG/HomePageSVG";

const TeamTwo = () => {
  return (
    <div className="py-20 xl:py-40 relative">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center xl:flex-row xl:justify-between gap-8 xl:gap-17 px-4 xl:px-0">
        {/* Image  */}
        <motion.img
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 1.5 }}
          src={teamTwo}
          className="w-[729px]"
          alt="team two image"
        />

        {/* Description */}
        <motion.div
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 1.5 }}
          className="space-y-6"
        >
          <SectionTitle
            caption={"Stop chasing wrong leads"}
            className={"border-[#2F48B7] text-[#192A48]"}
          />
          <h3 className="font-medium text-2xl lg:text-4xl mt-6">
            <span className="text-[#253FB6]">Stop wasting time</span> chasing
            the wrong leads.
          </h3>
          <p className="lg:text-2xl">
            Sales and marketing teams spend countless hours trying to identify
            target accounts manually. Without the right insights, your efforts
            are scattered, and opportunities slip through the cracks
          </p>
        </motion.div>
      </div>
      <TeamPolygonSVG className={"absolute bottom-0 -z-20"} />
    </div>
  );
};

export default TeamTwo;
