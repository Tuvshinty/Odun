import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Projects', 'Domain & Host', 'Experience', 'Contact'];

  return (
    <nav className="w-full bg-transparent text-white font-sans absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* --- LEFT: Brand Identity --- */}
        <div className="flex items-center cursor-pointer z-50 group">
          <span className="font-bold tracking-[0.3em] uppercase text-sm select-none group-hover:text-red-500 transition-colors duration-300">
            ODUN <span className="font-light text-gray-500">/ HUB</span>
          </span>
        </div>

        {/* --- CENTER: High-Impact Glass Links --- */}
        <div className="hidden lg:flex items-center justify-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-5 py-2 text-sm font-medium rounded-full border border-white/0 bg-white/0 hover:border-white/10 hover:bg-white/5 hover:backdrop-blur-md hover:shadow-[0_8px_32px_0_rgba(239,68,68,0.15)] text-gray-300 hover:text-white transform hover:scale-[1.03] transition-all duration-500 ease-out"
            >
              {link}
            </a>
          ))}
        </div>

        {/* --- RIGHT: Action Links (Red & Black Theme Configurations) --- */}
        <div className="hidden md:flex items-center space-x-3 z-50">
          {/* Log In Link (Stealth/Black version using fine borders) */}
          <a 
            href="#login" 
            className="px-5 py-2 text-sm font-medium rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-gray-200 hover:text-white hover:border-white/30 hover:bg-black/60 transform hover:scale-[1.02] transition-all duration-500 ease-out shadow-sm"
          >
            Log In
          </a>

          {/* Sign Up Link (Dynamic Energy Red version) */}
          <a 
            href="#signup" 
            className="px-5 py-2 text-sm font-medium rounded-full bg-red-600 text-white shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:bg-red-500 hover:shadow-[0_4px_25px_rgba(220,38,38,0.5)] transform hover:scale-[1.05] transition-all duration-500 ease-out text-center"
          >
            Sign Up
          </a>
        </div>

        {/* --- MOBILE COMPONENT ACTION TRIGGER --- */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-1.5 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-md rounded-full shadow-sm active:scale-95 transition-transform duration-200"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY PANEL --- */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-black/60 backdrop-blur-2xl pt-24 px-8 flex flex-col space-y-4 shadow-2xl transition-all duration-500 ease-in-out">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-3 px-4 text-lg font-medium text-gray-200 hover:text-white border border-transparent hover:border-white/10 hover:bg-white/5 rounded-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
            <a 
              href="#login" 
              className="w-full py-3 text-center text-base font-medium text-white border border-white/10 bg-black/40 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </a>
            <a 
              href="#signup" 
              className="w-full py-3 text-center text-base font-medium bg-red-600 text-white rounded-xl shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
