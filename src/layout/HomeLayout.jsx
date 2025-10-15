import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "../component/Banner";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Banner */}
      <Banner />
    </div>
  );
};

export default HomeLayout;
