import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/careerralogowebsite.svg';
import { Menu, X } from 'lucide-react';

const Usernavbar = () => {
  const user = { name: "Benomar Aymane" };
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    navigate('/login');
  };

  return (
    <div className="fixed w-full z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:py-4 text-slate-800 transition-all">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 md:h-11 w-auto" // smaller on mobile
          />
        </a>

        {/* Desktop User Greeting / Profile & Logout */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <p>Hello, {user.name}</p>
          <button
            onClick={() => navigate('/profile')}
            className="px-7 py-1.5 bg-blue-700 text-white rounded-full text-sm hover:bg-indigo-600 transition-all"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-7 py-1.5 rounded-full text-white transition-all active:scale-95"
          >
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-800 hover:bg-gray-200 transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-md px-4 py-3 flex flex-col gap-2">
          <button
            onClick={() => { navigate('/profile'); setMobileMenuOpen(false); }}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-indigo-600 transition-all"
          >
            Profile
          </button>
          <button
            onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Usernavbar;
