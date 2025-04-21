import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Brayan Henao</h2>
            <p className="text-gray-400 mt-2">Senior Software Engineer</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['about', 'skills', 'experience', 'education', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Brayan Henao. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;