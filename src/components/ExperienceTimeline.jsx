import React from "react";
import TimelineItem from "./TimelineItem";
import experienceData from "../data/experience";

const ExperienceTimeline = () => {
  return (
    <div className="mt-10">
      {experienceData.map((experience, index) => (
        <TimelineItem
          key={index}
          img={experience.img}
          tenure={experience.tenure}
          title={experience.title}
          description={experience.description}
          achievements={experience.achievements}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
