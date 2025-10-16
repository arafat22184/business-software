import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "../component/Banner";
import TeamOne from "../component/TeamOne";
import TeamTwo from "../component/TeamTwo";
import TeamThree from "../component/TeamThree";
import Demo from "../component/Demo";
import FAQ from "../component/FAQ";
import Schedule from "../component/Schedule";

const HomeLayout = () => {
  return (
    <div className="custom-scrollbar overflow-y-auto h-screen">
      <Navbar />
      {/* Banner */}
      <Banner />
      <section id="how">
        {/* Team  */}
        <TeamOne />
        <TeamTwo />
        <TeamThree />
      </section>
      {/* Demo */}
      <Demo />

      {/* FAQ */}
      <FAQ />

      {/* Schedule */}
      <Schedule />
    </div>
  );
};

export default HomeLayout;
