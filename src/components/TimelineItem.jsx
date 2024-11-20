import React from "react";

const TimelineItem = ({ img, tenure, title, description, achievements }) => {

  return (
    <div className="group relative flex gap-x-4 md:gap-x-5 w-full font-dm-sans">
      <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-5 lg:after:start-6 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
        <div className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-lg bg-deep-purple-50/50 dark:bg-deep-purple-50/10">
          <img src={img} alt={title} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="grow pb-8 group-last:pb-0">
        <h6 className="text-sm font-medium text-gray-700 dark:text-gray-200">{tenure}</h6>

        <h4 className="sub-heading mt-1">{title}</h4>

        <p className="mt-3 max-w-screen-lg text-gray-900 dark:text-white">{description}</p>

        <ul className="list-disc ms-4 md:ms-6 mt-2 space-y-1.5">
          {achievements.map((item, index) => (
            <li key={index} className="ps-1 dark:text-gray-100 text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
