import React from "react";
import teamThree from "../assets/teamThree.png";
import SectionTitle from "./common/SectionTitle";

const TeamThree = () => {
  return (
    <div className="bg-[#2F48B7] py-40 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-17">
        <div className="space-y-6">
          <SectionTitle
            caption={"Stop chasing wrong leads"}
            className={"text-white border-white"}
          />
          <h3 className="text-white font-medium text-4xl mt-6">
            Stop wasting time chasing the wrong leads.
          </h3>
          <p className="text-white text-2xl">
            Sales and marketing teams spend countless hours trying to identify
            target accounts manually. Without the right insights, your efforts
            are scattered, and opportunities slip through the cracks.
          </p>
        </div>
        <img src={teamThree} className="w-[729px]" alt="team one image" />
      </div>
    </div>
  );
};

export default TeamThree;
