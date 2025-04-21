import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        {title}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform translate-y-1"></span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;