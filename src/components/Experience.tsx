import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Software Engineer II',
      company: 'Deel',
      location: 'Colombia',
      startDate: 'May 2024',
      endDate: 'Present',
      description: [
        'Actively contributing impactful changes to the HR module in the Deel App.',
        'Introduced a groundbreaking feature for gathering Demographic Information for DE&I reporting.',
        'Created and launched a new feature enabling employee onboarding without contracts.',
        'Reduced platform bugs through bug duty strategy implementation.',
        'Built robust APIs with Node.js, enhancing system performance and scalability.'
      ],
      technologies: ['Node.js', 'Express', 'API Development', 'HR Systems']
    },
    {
      id: 2,
      title: 'Software Engineer II',
      company: 'VMware',
      location: 'Colombia',
      startDate: 'November 2021',
      endDate: 'May 2024',
      description: [
        'Elevated Buildpacks ecosystem as Go/Python/Node.js maintainer.',
        'Contributed to Buildpacks open-source repositories using Golang.',
        'Designed and implemented APIs with microservice architecture.',
        'Improved CI systems using GitHub Actions and Concourse CI.'
      ],
      technologies: ['Golang', 'Python', 'Node.js', 'GitHub Actions', 'Concourse CI']
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Perficient Latin America',
      location: 'Valle del Cauca, Colombia',
      startDate: 'November 2018',
      endDate: 'February 2021',
      description: [
        'Engineered applications for BrightInsight using Java 8 and Spring Boot.',
        'Implemented new microservices using Node.js/Express.',
        'Restructured application architecture into microservices.',
        'Led CloudSQL to Spanner migration, improving performance by 30%.'
      ],
      technologies: ['Java', 'Spring Boot', 'Node.js', 'CloudSQL', 'Spanner', 'Terraform']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My professional journey" />
        
        <div className="relative mt-12 border-l-2 border-blue-200 dark:border-blue-900 pl-8 ml-4 md:ml-12">
          {jobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`relative mb-12 ${index !== jobs.length - 1 ? 'pb-8' : ''}`}
            >
              <div className="absolute -left-14 mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                <BriefcaseIcon size={20} />
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {job.startDate} — {job.endDate}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-lg font-medium text-blue-600 dark:text-blue-400">{job.company}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{job.location}</div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300">
                  {job.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;