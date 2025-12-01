import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import logo from '../../assets/darkmodelogo.svg'; // Update path if needed

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white min-h-[78vh] overflow-hidden flex flex-col">

      {/* Top overlay/fog */}
      <div className="absolute top-0 left-0 w-full h-56 sm:h-60 md:h-64 bg-gradient-to-b from-black/100 via-black/70 to-transparent pointer-events-none z-20"></div>

      {/* Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-80 z-10">
        <img src={logo} alt="Careera Logo" className="h-64 w-auto object-contain" />
      </div>

      {/* Middle CTA Section */}
      <div className="flex-1 flex items-start justify-center z-20 relative pt-56 sm:pt-60 md:pt-[18rem]">
        <div className='border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16'>
          <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
            <p className="text-xl md:text-2xl font-medium max-w-md text-white">
              Accelerate your career growth with Careera — the smart AI SaaS for professionals.
            </p>
            <a 
              href="/signup" 
              className="flex items-center gap-2 rounded py-3 px-8 bg-[#3902FF] hover:bg-blue-800 transition text-white"
            >
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-start justify-between gap-16 text-gray-400 z-20 relative">

        {/* Left side: Quick links + Social */}
        <div className="flex-1 flex justify-start gap-16">

          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <a href="/" className="hover:text-white transition-all duration-200">Home</a>
            <a href="/features" className="hover:text-white transition-all duration-200">Features</a>
            <a href="/process" className="hover:text-white transition-all duration-200">Process</a>
            <a href="/testimonials" className="hover:text-white transition-all duration-200">Testimonials</a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-white font-semibold mb-2">Social</h4>

            <a href="https://x.com" target="_blank" className="flex items-center gap-2 hover:text-white transition-all duration-200">
              <FaTwitter /> <span>Twitter</span>
            </a>

            <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-white transition-all duration-200">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>

            <a href="https://instagram.com" target="_blank" className="flex items-center gap-2 hover:text-white transition-all duration-200">
              <FaInstagram /> <span>Instagram</span>
            </a>

            <a href="https://tiktok.com" target="_blank" className="flex items-center gap-2 hover:text-white transition-all duration-200">
              <FaTiktok /> <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Right side: Copyright */}
        <div className="flex-1 flex items-end justify-end">
          <p className="text-gray-500 text-sm md:text-base whitespace-nowrap mt-20">
            © 2025 Careera. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
