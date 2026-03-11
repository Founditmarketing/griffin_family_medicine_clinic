import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Video, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'COVID-19', href: '/covid-19' },
    { name: 'About', href: '/about' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Paperwork', href: '/paperwork' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-medical-red rounded-lg flex items-center justify-center shadow-lg shadow-medical-red/20">
            <Heart className="text-white w-6 h-6" fill="white" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-medical-slate' : 'text-medical-slate'}`}>
            GRIFFIN <span className="text-medical-red">FAMILY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href}
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors ${isActive ? 'text-medical-red' : 'text-medical-slate hover:text-medical-red'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest font-bold text-medical-red">Call Us Today</span>
            <a href="tel:3184458380" className="text-sm font-bold text-medical-slate hover:text-medical-red transition-colors">
              (318) 445-8380
            </a>
          </div>
          <button className="bg-medical-red hover:bg-medical-red-dark text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl shadow-medical-red/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <Video className="w-4 h-4" />
            Start Telehealth Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-medical-slate"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href}
                  className={({ isActive }) => 
                    `text-lg font-bold ${isActive ? 'text-medical-red' : 'text-medical-slate'}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="border-gray-100" />
              <button className="w-full bg-medical-red text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <Video className="w-5 h-5" />
                Start Telehealth Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
