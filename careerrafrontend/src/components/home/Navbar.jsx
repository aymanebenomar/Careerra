// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/careerralogowebsite.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`transition-all duration-500 ease-in-out mx-auto z-50 ${
          scrolled
            ? "fixed top-4 left-1/2 -translate-x-1/2 w-[70%] bg-white/90 backdrop-blur-md py-2 border border-gray-300/30 rounded-2xl shadow-md"
            : "fixed left-1/2 -translate-x-1/2 w-[78%] bg-transparent border border-transparent rounded-2xl md:top-16 top-28"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-8 md:px-8 ${
            scrolled ? "gap-4" : "gap-8"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className={`transition-all duration-500 ${
                scrolled ? "h-6" : "h-8 md:h-12"
              }`}
            />
          </a>

          {/* Desktop Links */}
          <div
            className={`hidden md:flex items-center transition-all duration-500 ${
              scrolled ? "gap-6" : "gap-10"
            } text-slate-800`}
          >
            <a href="#" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-indigo-600 transition">
              Testimonials
            </a>
            <a href="#cta" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div
            className={`hidden md:flex gap-2 transition-all duration-500 ${
              scrolled ? "gap-2" : "gap-4"
            }`}
          >
            <Link
              to="/app?state=register"
              className="
                inline-flex items-center gap-2
                text-white bg-black hover:bg-black/80
                border border-white/10 shadow-xs
                font-light tracking-wide
                leading-5 rounded-full text-sm
                px-5 py-2 transition-all duration-300
              "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get Started
              <svg
                className="w-4 h-4 transform rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>

            <Link
              to='/app?state=login'
              className="px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu – navbar grows downward */}
        <div
          className={`md:hidden flex flex-col items-center bg-white/90 backdrop-blur-md rounded-b-2xl overflow-hidden shadow-md transition-all duration-500 ${
            menuOpen ? "max-h-64 mt-4 gap-4 px-4 py-4" : "max-h-0 mt-0 gap-0 px-4 py-0"
          }`}
        >
          <a href="#" className="text-black w-full text-center py-2">
            Home
          </a>
          <a href="/#features" className="text-black w-full text-center py-2">
            Features
          </a>
          <a href="/#testimonials" className="text-black w-full text-center py-2">
            Testimonials
          </a>
          <a href="/#contact" className="text-black w-full text-center py-2">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
