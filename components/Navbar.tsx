import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { X } from 'lucide-react';

const navItems = [
  { label: 'Características', href: '#features' },
  { label: 'Modelo', href: '#pricing' },
  { label: 'App', href: '#app' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-3 border-b border-gray-200/50 shadow-sm' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className={`transition-all duration-300 group-hover:scale-110 drop-shadow-lg ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`} />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a key={item.label} href={item.href} className="text-sm font-bold text-gray-600 hover:text-black uppercase tracking-wide transition-all relative group" style={{ transitionDelay: `${index * 50}ms` }}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="primary" size="sm" className="font-bold border-none bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all hover:scale-105">
              Empezar
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 focus:outline-none transition-transform transform hover:scale-105 active:scale-95">
              {isMobileMenuOpen ? <X size={32} className="text-purple-600" strokeWidth={2.5} /> : (
                <div className="flex flex-col justify-center items-end gap-[6px] w-8 h-8">
                  <span className="w-full h-[3px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></span>
                  <span className="w-3/4 h-[3px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></span>
                  <span className="w-full h-[3px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 py-4 px-4 flex flex-col space-y-4 shadow-2xl animate-fade-in-down">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-black font-bold text-xl py-3 border-b border-gray-100 hover:text-purple-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button variant="primary" className="w-full mt-4 py-4 text-lg bg-gradient-to-r from-purple-600 to-red-600 border-none">Empezar Gratis</Button>
        </div>
      )}
    </nav>
  );
};
