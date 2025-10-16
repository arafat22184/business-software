import React from "react";
import bannerImage from "../assets/bannerImage.png";
import { BannerPolygonSVG } from "./SVG/HomePageSVG";

const Banner = () => {
  return (
    <div className="text-center mx-auto pt-20">
      {/* Title */}
      <h1 className="text-5xl text-[#192A48] font-semibold">
        Automate your business with the best in class software
      </h1>
      <p className="text-2xl text-[#798090] mt-3 mb-10">
        "LeadTalk empowers sales and marketing teams to identify and prioritize
        high-fit accounts,
        <br className="hidden lg:block" /> helping you focus on what matters
        most: closing deals and driving revenue.
      </p>
      <button className="bg-[#253FB6] text-white text-lg font-semibold rounded-[1332px] px-12 py-4 cursor-pointer hover:bg-[#3953c7]">
        Start for free
      </button>

      <div className="flex flex-col items-center relative mt-12">
        <BannerPolygonSVG className={"absolute bottom-0 -z-50"} />
        <img
          src={bannerImage}
          className="max-w-[1131px] z-20"
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
