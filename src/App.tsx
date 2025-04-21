import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;