import React, { useState } from 'react';
import SectionHeading from './shared/SectionHeading';

const Skills: React.FC = () => {
  const categories = ['All', 'Backend', 'Cloud', 'Tools', 'Languages'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const skillsData = [
    // Backend
    { name: 'Node.js', category: 'Backend', icon: '⚡' },
    { name: 'Golang', category: 'Backend', icon: '🔵' },
    { name: 'Java', category: 'Backend', icon: '☕' },
    { name: 'Spring Boot', category: 'Backend', icon: '🍃' },
    { name: 'Express', category: 'Backend', icon: '🚀' },
    { name: 'MongoDB', category: 'Backend', icon: '🍃' },
    { name: 'SQL', category: 'Backend', icon: '📊' },
    
    // Cloud
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Google Cloud', category: 'Cloud', icon: '☁️' },
    { name: 'CloudSQL', category: 'Cloud', icon: '💾' },
    { name: 'Spanner', category: 'Cloud', icon: '🌐' },
    { name: 'Lambda', category: 'Cloud', icon: 'λ' },
    { name: 'EC2', category: 'Cloud', icon: '🖥️' },
    { name: 'S3', category: 'Cloud', icon: '📦' },
    
    // Tools
    { name: 'Git', category: 'Tools', icon: '📝' },
    { name: 'Docker', category: 'Tools', icon: '🐳' },
    { name: 'Terraform', category: 'Tools', icon: '🏗️' },
    { name: 'GitHub Actions', category: 'Tools', icon: '⚙️' },
    { name: 'Concourse CI', category: 'Tools', icon: '🔄' },
    { name: 'Maven', category: 'Tools', icon: '📦' },
    
    // Languages
    { name: 'English', category: 'Languages', icon: '🇺🇸' },
    { name: 'Spanish', category: 'Languages', icon: '🇪🇸' },
    { name: 'French', category: 'Languages', icon: '🇫🇷' },
  ];
  
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="Technical Expertise & Proficiencies" />
        
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl" role="img" aria-label={skill.name}>
                  {skill.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;