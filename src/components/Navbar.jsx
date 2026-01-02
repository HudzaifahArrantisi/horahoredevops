import React, { useState, useEffect } from 'react';
import { FaCloud, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
      >
        <div className={`container mx-auto px-4 max-w-6xl`}>
          <div className={`glass rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-primary/10 ${scrolled ? 'bg-slate-900/80' : 'bg-slate-900/50'}`}>
            <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <FaCloud />
              </div>
              <span className="text-white">Hore<span className="text-primary">Cloud</span></span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Beranda</a>
              <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Fitur</a>
              <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Harga</a>
              <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Kontak</a>
              <a href="#pricing" className="btn btn-primary btn-sm rounded-full px-6 hover:shadow-lg hover:shadow-primary/40 transition-all">Mulai Sekarang</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white text-xl" onClick={() => setIsOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center"
          >
            <button className="absolute top-8 right-8 text-white text-3xl" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
            <div className="flex flex-col items-center gap-8 text-2xl font-bold">
              <a href="#home" onClick={() => setIsOpen(false)}>Beranda</a>
              <a href="#features" onClick={() => setIsOpen(false)}>Fitur</a>
              <a href="#pricing" onClick={() => setIsOpen(false)}>Harga</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a>
              <a href="#pricing" className="btn btn-primary btn-lg rounded-full px-8 mt-4" onClick={() => setIsOpen(false)}>Mulai Sekarang</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
