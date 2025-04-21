import React from 'react';
import { Code, Layout, Zap, Lightbulb } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

const About: React.FC = () => {
  const qualities = [
    {
      icon: <Code size={24} />,
      title: 'Problem Solver',
      description: 'Analytical thinker with a proven track record of finding innovative solutions to complex technical challenges.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Team Player',
      description: 'Strong collaborator with experience in large teams, using agile methodologies and fostering knowledge sharing.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Quick Learner',
      description: 'Adaptable professional who quickly masters new technologies and methodologies to drive innovation.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Proactive Leader',
      description: 'Takes initiative in identifying and solving problems, while mentoring and guiding team members.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Who am I?</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a proactive and adaptable Software Engineer with a passion for continuous learning 
              and innovation. My approach combines technical expertise with strong problem-solving 
              abilities, always seeking efficient solutions to complex challenges.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With excellent teamwork skills and experience in large teams, I thrive in collaborative 
              environments using agile methodologies. I take pride in mentoring others and contributing 
              to team growth while maintaining a strong focus on delivering high-quality results.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Fluent in English and Spanish, with elementary French proficiency, I effectively 
              communicate across cultural boundaries. My commitment to continuous improvement drives 
              me to stay current with emerging technologies and best practices.
            </p>
            
            <div className="pt-4">
              <a 
                href="/resources/Brayan%20Henao%20CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;