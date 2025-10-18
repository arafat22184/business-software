import React, { useContext, useEffect } from "react";
import { motion } from "motion/react";
import { DemoPolygonSVG } from "./SVG/HomePageSVG";
import { useInView } from "react-intersection-observer";
import { AuthContext } from "../provider/DataProvider";

const Demo = () => {
  const { setActiveSection } = useContext(AuthContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("demo");
    } else {
      setActiveSection("null");
    }
  }, [inView]);
  return (
    <section id="demo" ref={ref} className="mt-[146px] relative">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Title*/}
        <h4 className="font-semibold text-5xl text-[#192A48] mb-14">
          Watch the demo
        </h4>
        {/* Iframe */}
        <iframe
          className="min-w-[1232px] min-h-[691px] rounded-lg"
          src="https://www.youtube.com/embed/ag7HXbgJtuk?si=pHghqdKde95T6cKm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="font-medium text-[#798090] text-center max-w-[1065px] mt-8">
          "Transform the way you work with our exclusive software sale! 🚀 Save
          up to [X]% on powerful tools designed to boost your productivity,
          creativity, and efficiency. From [feature 1] to [feature 2], our
          software offers everything you need to succeed. But hurry—this
          limited-time offer ends soon! Visit [website/link] now and elevate
          your workflow today!"
        </p>
      </motion.div>
      <DemoPolygonSVG className={"absolute bottom-0 -z-30"} />
    </section>
  );
};

export default Demo;
