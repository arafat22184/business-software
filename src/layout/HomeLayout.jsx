import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "../component/Banner";
import TeamOne from "../component/TeamOne";
import TeamTwo from "../component/TeamTwo";
import TeamThree from "../component/TeamThree";
import Demo from "../component/Demo";

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
    </div>
  );
};

export default HomeLayout;
