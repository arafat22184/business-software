import React from "react";

const SectionTitle = ({ caption, className }) => {
  return (
    <span
      className={`px-4 lg:px-8.5 py-2 lg:py-4 rounded-[40px] font-semibold border ${className}`}
    >
      {caption}
    </span>
  );
};

export default SectionTitle;
