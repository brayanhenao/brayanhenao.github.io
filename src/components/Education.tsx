import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Certification = {
  id: number;
  name: string;
  issuer: string;
  date: string;
};

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Master of Science in Software Engineering',
      institution: 'Universidad de Los Andes',
      location: 'Colombia',
      startDate: 'June 2022',
      endDate: 'October 2024',
      description: 'Advanced studies in software engineering, focusing on system architecture and design patterns.'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Universidad ICESI',
      location: 'Colombia',
      startDate: 'January 2014',
      endDate: 'August 2019',
      description: 'Comprehensive education in software engineering fundamentals, development methodologies, and best practices.'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: '2018',
    },
    {
      id: 2,
      name: 'One of the Colombian best ECAES (national education test)',
      issuer: 'Colombian Ministry of Education',
      date: '2019',
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Academic background & certifications" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <GraduationCap size={24} className="mr-2" /> Academic Education
            </h3>
            
            <div className="space-y-8">
              {educationItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                      {item.startDate} — {item.endDate}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-lg font-medium text-blue-600 dark:text-blue-400">{item.institution}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.location}</div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <Award size={24} className="mr-2" /> Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500 dark:border-blue-400"
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
              <h4 className="text-lg font-semibold mb-3">Continuous Learning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to ongoing professional development through active participation in
                the software development community, contributing to open-source projects,
                and staying current with emerging technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;