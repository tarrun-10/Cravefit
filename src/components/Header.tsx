import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/src/images/white full logo.png" 
              alt="CraveFit Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'menu', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize font-medium text-white hover:text-yellow-500 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button
              key="partner"
              onClick={() => scrollToSection('partner')}
              className="capitalize font-semibold text-yellow-500 hover:text-white border border-yellow-500 rounded px-4 py-1 transition-colors duration-300 ml-8"
            >
              Partner with Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-yellow-500 py-4">
            <nav className="flex flex-col space-y-4">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize font-medium text-white hover:text-yellow-500 text-left transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button
                key="partner"
                onClick={() => scrollToSection('partner')}
                className="capitalize font-semibold text-yellow-500 border border-yellow-500 px-4 py-2 mt-4 rounded text-left hover:bg-yellow-500 hover:text-black transition-colors duration-200"
              >
                Partner with Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;