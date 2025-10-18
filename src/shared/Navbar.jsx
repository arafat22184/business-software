import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/DataProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { activeSection } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "how", label: "How it works" },
    { id: "demo", label: "Demo" },
    { id: "faq", label: "FAQ" },
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#2340B4] sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-4 xl:px-0">
        {/* Logo */}
        <button
          className="text-3xl md:text-4xl font-bold text-white select-none"
          onClick={() => scrollToSection("home")}
        >
          Logo
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-16 text-white text-lg font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:text-gray-200 transition-all duration-200 cursor-pointer ${
                activeSection === link.id ? "border-b-2 border-white" : ""
              }`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-white text-[#2340B4] text-lg font-semibold rounded-full px-10 py-3 hover:bg-[#b3bde4] transition"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#2340B4] text-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:text-gray-300 transition cursor-pointer ${
                activeSection === link.id ? "border-b-2 border-white" : ""
              }`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </li>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-[#2340B4] font-semibold rounded-full px-8 py-2 hover:bg-[#b3bde4] transition"
          >
            Get Started
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
