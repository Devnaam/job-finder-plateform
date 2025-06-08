import React from "react";
import { NavLink } from "react-router-dom";
import { Briefcase, Github, Mail, Linkedin } from "lucide-react";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Job Finder Logo" className="h-14 w-14 object-contain" />
              <div className="flex items-center gap-2">
                <Briefcase className="w-7 h-7 text-indigo-500" />
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  JobFinder
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Discover your next career move with personalized job recommendations tailored to your skills.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore
            </h3>
            <nav className="flex flex-col gap-3 text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-200 transform hover:translate-x-1 ${
                    isActive ? "text-indigo-400 font-semibold" : ""
                  }`
                }
              >
                All Jobs
              </NavLink>
              <NavLink
                to="/personlized-jobs"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-200 transform hover:translate-x-1 ${
                    isActive ? "text-indigo-400 font-semibold" : ""
                  }`
                }
              >
                Personalized Jobs
              </NavLink>
              <NavLink
                to="/favjobs"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-200 transform hover:translate-x-1 ${
                    isActive ? "text-indigo-400 font-semibold" : ""
                  }`
                }
              >
                Favorite Jobs
              </NavLink>
            </nav>
          </div>

          {/* Contact & Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/raj-priyadershi-56a256282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Devnaam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:workwithdevnaam@gmail.com"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Email: workwithdevnaam@gmail.com
            </p>
            <p className="text-sm text-gray-300">
              Phone: +91 6205791382
            </p>
            <p className="text-sm text-gray-300">
              <a
                href="https://devnaam4s.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Portfolio
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} JobFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;