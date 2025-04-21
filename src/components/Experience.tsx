import React from 'react';
import { BriefcaseIcon, Building2Icon } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

// Types
type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
};

type CompanyGroup = {
  company: string;
  positions: Job[];
};

// Utility Functions
const formatDate = (dateString: string): string => {
  if (dateString === 'Present') return dateString;
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  return formatDuration(totalMonths);
};

const formatDuration = (totalMonths: number): string => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  let result = '';
  if (years) result += `${years} ${years === 1 ? 'year' : 'years'}`;
  if (months) {
    if (result) result += ', ';
    result += `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  
  return result || 'Less than a month';
};

const calculateTotalCompanyDuration = (positions: Job[]): string => {
  if (positions.length === 1) {
    return calculateDuration(positions[0].startDate, positions[0].endDate);
  }
  
  const earliestStart = positions.reduce((earliest, job) => {
    const jobStart = new Date(job.startDate);
    return jobStart < earliest ? jobStart : earliest;
  }, new Date(positions[0].startDate));

  const latestEnd = positions.reduce((latest, job) => {
    const jobEnd = job.endDate === 'Present' ? new Date() : new Date(job.endDate);
    return jobEnd > latest ? jobEnd : latest;
  }, positions[0].endDate === 'Present' ? new Date() : new Date(positions[0].endDate));
  
  const totalMonths = (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 + 
                      (latestEnd.getMonth() - earliestStart.getMonth());
  
  return formatDuration(totalMonths);
};

const JobPosition: React.FC<{ job: Job }> = ({ job }) => (
  <div className="mb-4">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="mr-2 text-gray-400">
          <BriefcaseIcon size={16} />
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{job.title}</h4>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
        {formatDate(job.startDate)} — {formatDate(job.endDate)} 
        <span className="ml-1 text-gray-600 dark:text-gray-300">
          {" "}({calculateDuration(job.startDate, job.endDate)})
        </span>
      </div>
    </div>

    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300">
      {job.description.map((item, i) => <li key={i}>{item}</li>)}
    </ul>

    {job.technologies && (
      <div className="flex flex-wrap gap-2 mt-4">
        {job.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

// Component for displaying all positions at a company
const CompanyCard: React.FC<{ companyGroup: CompanyGroup }> = ({ companyGroup }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <div className="mb-4 border-b border-gray-200 dark:border-gray-600 pb-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{companyGroup.company}</h3>
        {companyGroup.positions.length > 1 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
            Total: {calculateTotalCompanyDuration(companyGroup.positions)}
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{companyGroup.positions[0].location}</div>
    </div>
    
    {companyGroup.positions.map((job, idx) => (
      <div key={job.id} className={`${idx > 0 ? 'mt-8 pt-8 border-t border-gray-100 dark:border-gray-600' : ''}`}>
        <JobPosition job={job} />
      </div>
    ))}
  </div>
);

// Main component
const Experience: React.FC = () => {
  // Jobs data
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Software Engineer II',
      company: 'Deel',
      location: 'Colombia – Remote',
      startDate: '2024-05-02',
      endDate: 'Present',
      description: [
        'Led enhancements to the HR module, delivering high-impact features for DE&I reporting.',
        'Designed and launched contract-free onboarding, improving user experience and adoption.',
        'Implemented a bug-duty rotation, reducing incident rates and stabilizing releases.',
        'Architected scalable Node.js APIs, boosting performance and maintainability.'
      ],
      technologies: ['Node.js', 'Express', 'Microservices', 'HR Systems']
    },
    {
      id: 2,
      title: 'Software Engineer II',
      company: 'VMware',
      location: 'Colombia – Remote',
      startDate: '2021-11-02',
      endDate: '2024-05-02',
      description: [
        'Maintained and evolved Go/Python/Node.js codebases in Buildpacks ecosystem.',
        'Architected microservices APIs to improve scalability and developer experience.',
        'Optimized CI pipelines with GitHub Actions and Concourse CI, accelerating delivery.'
      ],
      technologies: ['Golang', 'Python', 'Node.js', 'CI/CD']
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'VMware',
      location: 'Colombia – Remote',
      startDate: '2021-02-02',
      endDate: '2021-11-02',
      description: [
        'Contributed 700+ commits to Buildpacks open-source projects on Cloud Foundry.',
        'Streamlined stack compilation, reducing build time by 15% and errors by 10%.'
      ],
      technologies: ['Golang', 'Open Source', 'Buildpacks']
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'Perficient Latin America',
      location: 'Cali, Colombia',
      startDate: '2018-11-02',
      endDate: '2021-02-02',
      description: [
        'Developed Java Spring Boot services and Node.js microservices for healthcare platform.',
        'Migrated database from CloudSQL to Spanner, improving performance by 30%.',
        'Refactored monolith to microservices, enhancing scalability and maintainability.'
      ],
      technologies: ['Java', 'Spring Boot', 'Node.js', 'CloudSQL', 'Spanner', 'Terraform']
    },
    {
      id: 5,
      title: 'Backend Java Developer',
      company: 'We Are Angular',
      location: 'Colombia',
      startDate: '2018-08-02',
      endDate: '2018-11-02',
      description: [
        'Built backend services with JavaEE and Spring, reducing API latency by 25%.',
        'Managed AWS infrastructure (Lambda, EC2, S3), cutting costs by 15%.'
      ],
      technologies: ['JavaEE', 'Spring', 'AWS']
    },
    {
      id: 6,
      title: 'Software Developer',
      company: 'Drillapp SAS',
      location: 'Valle del Cauca, Colombia',
      startDate: '2018-05-02',
      endDate: '2018-11-02',
      description: [
        'Enhanced Pitia platform with JavaEE and MongoDB, boosting data processing by 30%.',
        'Migrated from Play Framework to Spring, improving throughput by 40%.'
      ],
      technologies: ['JavaEE', 'MongoDB', 'Spring']
    },
    {
      id: 7,
      title: 'Backend Support Specialist',
      company: 'Flavium Arena',
      location: 'Valle del Cauca, Colombia',
      startDate: '2018-04-02',
      endDate: '2018-06-02',
      description: [
        'Supported backend for esports platform, optimizing MySQL queries for tournaments.',
        'Improved system responsiveness during high-concurrency events.'
      ],
      technologies: ['Java', 'Spring', 'MySQL']
    },
    {
      id: 8,
      title: 'Teaching Assistant, Algorithms & Programming',
      company: 'Universidad ICESI',
      location: 'Valle del Cauca, Colombia',
      startDate: '2016-06-02',
      endDate: '2018-06-02',
      description: [
        'Mentored students in lab sessions for Algorithms I & II courses.',
        'Assisted with grading and course material preparation.'
      ]
    }
  ];

  // Group jobs by company and sort
  const groupJobsByCompany = (jobs: Job[]): CompanyGroup[] => {
    const grouped = jobs.reduce((acc, job) => {
      if (!acc[job.company]) {
        acc[job.company] = [];
      }
      acc[job.company].push(job);
      return acc;
    }, {} as Record<string, Job[]>);

    return Object.entries(grouped)
      .map(([company, positions]) => ({
        company,
        positions: positions.sort((a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        )
      }))
      .sort((a, b) => 
        new Date(b.positions[0].startDate).getTime() - new Date(a.positions[0].startDate).getTime()
      );
  };

  const companies = groupJobsByCompany(jobs);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My Professional Journey" />

        <div className="relative mt-12 border-l-2 border-blue-200 dark:border-blue-900 pl-8 ml-4 md:ml-12">
          {companies.map((companyGroup, groupIdx) => (
            <div key={companyGroup.company} className={`relative mb-12 ${groupIdx < companies.length - 1 ? 'pb-8' : ''}`}>
              <div className="absolute -left-14 mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                <Building2Icon size={20} />
              </div>
              <CompanyCard companyGroup={companyGroup} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

