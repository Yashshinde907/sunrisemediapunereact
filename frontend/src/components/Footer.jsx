import React from 'react';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import logo from '../assets/images/Sunrise Media_logooo.png';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-cyan-500/20 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            {/* <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
              NEXUS AI
            </h3> */}
            <div>
                <a href="https://sunrisemediapune.in" rel="noopener noreferrer" >
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
                </a>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming social media strategies through cutting-edge artificial intelligence and data science.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI Content Strategy</li>
              <li>Community Management</li>
              <li>Predictive Analytics</li>
              <li>Campaign Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/sunrise-media-pune/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/18SYNsn8xy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sunrisemedia.pune?igsh=MWdqd3J1eHQ0aWp3bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:sunrisemediapune@gmail.com"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-violet-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 <a className='font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4' href="https://sunrisemediapune.in" style={{cursor: "pointer"}}>SUNRiSE MEDIA</a>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;