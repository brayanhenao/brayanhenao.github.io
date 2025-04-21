import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setTimeout(() => {
        textRef.current?.classList.remove('opacity-0');
      }, 100);
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative pt-20 pb-16"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div ref={textRef} className="opacity-0 transition-all duration-1000 ease-in-out md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-blue-600 dark:text-blue-400">Hello, I'm </span>
              <span className="relative">
                Brayan Henao
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Senior Software Engineer
            </h2>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 mb-8 text-justify">
              Experienced Senior Software Engineer with over 7 years of expertise in backend development,
              cloud technologies, and distributed systems. Proven track record in building scalable
              solutions using Node.js, Golang, and Java. Currently focused on developing innovative HR
              solutions at Deel.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a 
                href="/resources/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
            
            <div className="flex items-center space-x-6 mt-12 justify-center md:justify-start">
              <a 
                href="https://github.com/brayanhenao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/bhenao6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:bryanhenao96@gmail.com" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email Me"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            <img
              src="/photo.jpeg"
              alt="Brayan Henao" 
              className="rounded-full w-64 h-64 object-cover border-4 border-blue-600 dark:border-blue-400 shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll Down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
