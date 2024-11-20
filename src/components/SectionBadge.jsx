import React from 'react';

const SectionBadge = ({ icon, text }) => {
  return (
    <div className="dark:bg-deep-purple-50/10 bg-deep-purple-50/50 rounded-full inline-flex items-center p-1.5">
      <span className="bg-deep-purple-400 text-white fill-white p-2 rounded-full">
        {icon}
      </span>
      <span className="dark:text-deep-purple-50 text-deep-purple-900 text-xs lg:text-sm font-medium px-2.5 capitalize">
        {text}
      </span>
    </div>
  );
};

export default SectionBadge;
