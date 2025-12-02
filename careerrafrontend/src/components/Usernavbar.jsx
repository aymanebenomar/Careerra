import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/careerralogowebsite.svg';

const Usernavbar = () => {
  const user = { name: "Benomar Aymane" };
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

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
    <div className={`fixed top-0 w-full z-50 transition-shadow ${scrolled ? "shadow-md bg-white" : "bg-white/90"}`}>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3 md:py-4 text-slate-800 transition-all'>
        
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className={`transition-all duration-500 ${scrolled ? "h-8 md:h-10" : "h-10 md:h-12"}`}
          />
        </a>

        {/* User Greeting / Profile & Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <p className="text-sm md:text-base text-slate-700">Hello, {user.name}</p>
          <button
            onClick={() => navigate('/profile')}
            className="px-3 py-1 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-600 transition-colors"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

      </nav>
    </div>
  )
}

export default Usernavbar;
