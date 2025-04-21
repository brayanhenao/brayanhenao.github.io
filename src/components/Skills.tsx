import React, { useState } from 'react';
import SectionHeading from './shared/SectionHeading';
import {
  SiNodedotjs,
  SiGo,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiTerraform,
  SiGithubactions,
  SiKubernetes,
  SiGit,
} from '@icons-pack/react-simple-icons';

const Skills: React.FC = () => {
  const categories = ['All', 'Backend', 'Cloud', 'Tools', 'Languages'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const skillsData = [
    // Backend
    { name: 'Node.js', category: 'Backend', icon: <SiNodedotjs /> },
    { name: 'Golang', category: 'Backend', icon: <SiGo /> },
    { name: 'Java', category: 'Backend', icon: '☕' },
    { name: 'Express', category: 'Backend', icon: <SiExpress /> },
    { name: 'MongoDB', category: 'Backend', icon: <SiMongodb /> },
    { name: 'SQL', category: 'Backend', icon: <SiPostgresql /> },
    
    // Cloud
    { name: 'AWS', category: 'Cloud', icon: <SiAmazonwebservices /> },
    { name: 'Google Cloud', category: 'Cloud', icon: <SiGooglecloud /> },
    
    // Tools
    { name: 'Git', category: 'Tools', icon: <SiGit /> },
    { name: 'Docker', category: 'Tools', icon: <SiDocker /> },
    { name: 'Terraform', category: 'Tools', icon: <SiTerraform /> },
    { name: 'GitHub Actions', category: 'Tools', icon: <SiGithubactions /> },
    { name: 'Kubernetes', category: 'Tools', icon: <SiKubernetes /> },
    
    // Languages
    { name: 'English', category: 'Languages', icon: '🇺🇸', proficiency: 'Fluent' },
    { name: 'Spanish', category: 'Languages', icon: '🇪🇸', proficiency: 'Native' },
    { name: 'French', category: 'Languages', icon: '🇫🇷', proficiency: 'Beginner' },
  ];
  
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Function to get the proficiency level color (only used for languages now)
  const getProficiencyColor = (proficiency: string) => {
    switch(proficiency) {
      case 'Beginner': return 'bg-green-200 text-green-800';
      case 'Intermediate': return 'bg-blue-200 text-blue-800';
      case 'Advanced': return 'bg-purple-200 text-purple-800';
      case 'Expert': return 'bg-red-200 text-red-800';
      case 'Fluent': return 'bg-blue-200 text-blue-800';
      case 'Native': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="Technical Expertise & Proficiencies" />
        
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 mt-10 mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {categories.slice(1).map(category => {
            const categorySkills = activeCategory === 'All' 
              ? skillsData.filter(skill => skill.category === category)
              : activeCategory === category ? filteredSkills : [];
            
            if (activeCategory !== 'All' && activeCategory !== category) return null;
            
            return (
              <div key={category} className="mb-10 last:mb-0">
                {activeCategory === 'All' && (
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-600">
                    {category}
                  </h3>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl text-blue-600 dark:text-blue-400">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                          {skill.category === 'Languages' && skill.proficiency && (
                            <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${getProficiencyColor(skill.proficiency)}`}>
                              {skill.proficiency}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
