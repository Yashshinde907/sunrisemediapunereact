import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/Sunrise Media_logooo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="https://sunrisemediapune.com" rel="noopener noreferrer" >
              <div>
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="
                    h-12          /* Default Mobile Height (48px) */
                    sm:h-16       /* Tablet Height (64px) */
                    lg:h-18       /* Desktop Height (80px) */
                    w-auto 
                    object-contain 
                    transition-all 
                    duration-300 
                    group-hover:scale-105
                  " 
                />
              </div>
            </a>     
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('trust')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
            >
              Clients
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white shadow-lg shadow-cyan-500/50 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('trust')}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Clients
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white mt-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;