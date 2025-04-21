import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, Eye } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  repoUrl: string;
};

const Projects: React.FC = () => {
  const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Other'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart, checkout, and user authentication.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'Web',
      demoUrl: 'https://project-demo.example.com',
      repoUrl: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app that helps users manage tasks, set deadlines, and track progress.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      demoUrl: 'https://project-demo.example.com',
      repoUrl: 'https://github.com/yourusername/task-management-app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts based on location.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['JavaScript', 'CSS', 'WeatherAPI'],
      category: 'Web',
      demoUrl: 'https://project-demo.example.com',
      repoUrl: 'https://github.com/yourusername/weather-dashboard'
    },
    {
      id: 4,
      title: 'Fitness Tracker UI',
      description: 'A modern UI design for a fitness tracking application with data visualization.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Figma', 'Adobe XD', 'Illustrator'],
      category: 'UI/UX',
      demoUrl: 'https://project-demo.example.com',
      repoUrl: 'https://github.com/yourusername/fitness-tracker-ui'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with private and group messaging capabilities.',
      image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      category: 'Web',
      demoUrl: 'https://project-demo.example.com',
      repoUrl: 'https://github.com/yourusername/chat-application'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills.',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      category: 'Web',
      demoUrl: 'https://project-demo.example.com',
      repoUrl: 'https://github.com/yourusername/portfolio'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="My recent work" />
        
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <Eye size={16} className="mr-1" /> Demo
                  </a>
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                  >
                    <GitHub size={16} className="mr-1" /> Code
                  </a>
                  <span className="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-600 text-white font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <GitHub size={18} className="mr-2" /> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;