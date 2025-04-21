import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#hero" 
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Brayan Henao
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'experience', 'education', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className="font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 animate-fadeIn">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {['about', 'skills', 'experience', 'education', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="py-2 font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;