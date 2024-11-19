import React from "react";
import SectionBadge from "./SectionBadge";
import { GalleryVerticalEnd } from "lucide-react";
import services from "../data/services";

const Services = () => {
  return (
    <section className="section-container flex flex-col gap-6 items-center">
      <SectionBadge
        icon={<GalleryVerticalEnd size={16} fill="white" />}
        text={"What are my areas of Expertise"}
      />
      <h2 className="section-heading">From <span className="highlight">Designing</span> to <span className="highlight">Development</span>, I got you covered</h2>
      <div className="grid grid-cols-12 gap-y-12 md:gap-12 items-start w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-6 2xl:col-span-3 flex flex-col items-center gap-1.5"
          >
            <img src={service.img} alt={service.title} className="h-56 dark:hidden" />
            <img src={service.imgDark} alt={service.title} className="h-56 hidden dark:block" />
            <div className="flex flex-col gap-0.5 text-center items-center">
              <h4 className="sub-heading">{service.title}</h4>
              <p className="max-w-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
