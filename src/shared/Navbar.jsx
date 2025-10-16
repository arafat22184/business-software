import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#2340B4] sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-3">
        <h1 className="text-4xl font-bold text-white">Logo</h1>
        <ul className="flex items-center gap-16 text-white text-lg font-medium">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#demo">Demo</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <button className="bg-white text-lg font-semibold rounded-[1332px] px-12 py-4 hover:bg-[#b3bde4] cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
