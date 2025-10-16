import React from "react";
import { Calendar } from "@/components/ui/calendar";

const Schedule = () => {
  const date = new Date();
  return (
    <section className="py-[112px] bg-[#F2F1F1]">
      <div className="max-w-7xl mx-auto">
        {/* Title Description */}
        <div>
          <h3 className="text-[#192A48] text-5xl font-semibold">
            Get a demo of customer data
          </h3>
          <p className="text-[#192A48] text-xl pt-6 pb-10">
            See how to grow your product faster with deep customer insights.
          </p>
          <button className="bg-[#253FB6] text-white text-lg font-semibold rounded-[1332px] px-12 py-4 cursor-pointer hover:bg-[#3953c7]">
            Schedule
          </button>
        </div>
        {/* Calender */}
        <div>
          <Calendar
            mode="single"
            selected={date}
            className="rounded-lg border"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
