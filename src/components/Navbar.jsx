import { useEffect } from "react";
import {
  AiFillHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaUserAlt, FaCertificate } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            Rajesh Sharma | Portfolio
          </a>

          {/* Hamburger menu (for mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
            {/* Home */}
            <a
              href="#home"
              className="flex items-center gap-2 relative hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <AiFillHome className="text-lg" /> Home
            </a>

            {/* About */}
            <a
              href="#about"
              className="flex items-center gap-2 relative hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <FaUserAlt className="text-lg" /> About
            </a>

            {/* Experience */}
            <a
              href="#experience"
              className="flex items-center gap-2 relative hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <FaUserAlt className="text-lg" /> Experience
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="flex items-center gap-2 relative hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <AiOutlineFundProjectionScreen className="text-lg" /> Projects
            </a>

            {/* Certifications */}
            <a
              href="#certifications"
              className="flex items-center gap-2 relative hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <FaCertificate className="text-lg" /> Certifications
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="flex items-center gap-2 relative hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <AiOutlineMail className="text-lg" /> Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
