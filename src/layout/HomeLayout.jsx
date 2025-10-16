import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "../component/Banner";
import TeamOne from "../component/TeamOne";
import TeamTwo from "../component/TeamTwo";
import TeamThree from "../component/TeamThree";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Team  */}
      <TeamOne />
      <TeamTwo />
      <TeamThree />
    </div>
  );
};

export default HomeLayout;
