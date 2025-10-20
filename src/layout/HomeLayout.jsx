/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../shared/Navbar";
import Banner from "../component/Banner";
import TeamOne from "../component/TeamOne";
import TeamTwo from "../component/TeamTwo";
import TeamThree from "../component/TeamThree";
import Demo from "../component/Demo";
import FAQ from "../component/FAQ";
import Schedule from "../component/Schedule";
import Footer from "../component/Footer";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/DataProvider";
import CarouselCard from "../component/CarouselCard";

const HomeLayout = () => {
  const { setActiveSection } = useContext(AuthContext);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("how");
    } else {
      setActiveSection(null);
    }
  }, [inView]);

  return (
    <div className="custom-scrollbar overflow-y-auto h-screen poppins">
      <Navbar />
      {/* Banner */}
      <Banner />
      <section ref={ref} id="how">
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

      {/* Carousel */}
      <CarouselCard />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
