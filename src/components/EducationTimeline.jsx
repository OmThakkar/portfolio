import React from "react";
import TimelineItem from "./TimelineItem";
import educationData from "../data/education";

const EducationTimeline = () => {
  return (
    <div className="mt-10">
      {educationData.map((education, index) => (
        <TimelineItem
          key={index}
          img={education.img}
          tenure={education.tenure}
          title={education.title}
          description={education.description}
          achievements={education.achievements}
        />
      ))}
    </div>
  );
};

export default EducationTimeline;
