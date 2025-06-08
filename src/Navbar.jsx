import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-50 px-6 py-4 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Job Finder Logo" className="h-10 w-10 object-contain" />
          <span className="text-gray-800 text-lg font-extrabold tracking-tight">JobFinder</span>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative hover:text-gray-900 transition-colors duration-200 ${
                isActive ? "text-gray-900 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gray-900" : ""
              }`
            }
          >
            All Jobs
          </NavLink>
          <NavLink
            to="/personlized-jobs"
            className={({ isActive }) =>
              `relative hover:text-gray-900 transition-colors duration-200 ${
                isActive ? "text-gray-900 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gray-900" : ""
              }`
            }
          >
            Personalized Jobs
          </NavLink>
          <NavLink
            to="/favjobs"
            className={({ isActive }) =>
              `relative hover:text-gray-900 transition-colors duration-200 ${
                isActive ? "text-gray-900 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gray-900" : ""
              }`
            }
          >
            Favorite Jobs
          </NavLink>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 flex flex-col items-start mt-2 p-4 space-y-4 text-gray-700 font-medium text-base animate-slide-down">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `w-full py-1 hover:text-gray-900 transition-colors duration-200 ${isActive ? "text-gray-900 font-semibold" : ""}`
            }
          >
            All Jobs
          </NavLink>
          <NavLink
            to="/personlized-jobs"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `w-full py-1 hover:text-gray-900 transition-colors duration-200 ${isActive ? "text-gray-900 font-semibold" : ""}`
            }
          >
            Personalized Jobs
          </NavLink>
          <NavLink
            to="/favjobs"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `w-full py-1 hover:text-gray-900 transition-colors duration-200 ${isActive ? "text-gray-900 font-semibold" : ""}`
            }
          >
            Favorite Jobs
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;