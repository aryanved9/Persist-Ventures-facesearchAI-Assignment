import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons for mobile menu

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="mb-16 flex items-center justify-between py-3 px-4 lg:px-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 text-2xl">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="hover:text-blue-500 text-black cursor-pointer transition-colors duration-300"
        >
          <FaGooglePlay />
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="hover:text-blue-500 text-black cursor-pointer transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="hover:text-blue-500 text-black cursor-pointer transition-colors duration-300"
        >
          <FaSquareXTwitter />
        </a>
        <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Sign Up
        </button>
        <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-gray-800 focus:outline-none"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-xl hover:text-blue-500 text-black transition-colors duration-300"
          >
            <FaGooglePlay />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-xl hover:text-blue-500 text-black transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-xl hover:text-blue-500 text-black transition-colors duration-300"
          >
            <FaSquareXTwitter />
          </a>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Sign Up
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;