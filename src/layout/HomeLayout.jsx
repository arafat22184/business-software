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
import { useContext } from "react";
import { AuthContext } from "../provider/DataProvider";

const HomeLayout = () => {
  const { setActiveSection, activeSection } = useContext(AuthContext);
  const { ref, inView } = useInView();

  if (inView) {
    setActiveSection("how");
  }

  console.log(activeSection);

  return (
    <div className="custom-scrollbar overflow-y-auto h-screen">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
