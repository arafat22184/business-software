import React from "react";
import teamTwo from "../assets/teamTwo.png";
import SectionTitle from "./common/SectionTitle";
import { TeamPolygonSVG } from "./SVG/HomePageSVG";

const TeamTwo = () => {
  return (
    <div className="py-40 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-17">
        {/* Image  */}
        <img src={teamTwo} className="w-[729px]" alt="team two image" />

        {/* Description */}
        <div className="space-y-6">
          <SectionTitle
            caption={"Stop chasing wrong leads"}
            className={"border-[#2F48B7] text-[#192A48]"}
          />
          <h3 className="font-medium text-4xl mt-6">
            <span className="text-[#253FB6]">Stop wasting time</span> chasing
            the wrong leads.
          </h3>
          <p className="text-2xl">
            Sales and marketing teams spend countless hours trying to identify
            target accounts manually. Without the right insights, your efforts
            are scattered, and opportunities slip through the cracks
          </p>
        </div>
      </div>
      <TeamPolygonSVG className={"absolute bottom-0"} />
    </div>
  );
};

export default TeamTwo;
