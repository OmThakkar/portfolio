import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import SectionBadge from "../components/SectionBadge";
import { Laptop } from "lucide-react";
import projects from "../data/projects";
import { MoveRight } from "lucide-react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="section-container flex flex-col gap-6 items-center mt-16">
      <SectionBadge
        icon={<Laptop size={16} />}
        text={"Turning Visions Into Reality"}
      />

      <h2 className="section-heading">
        I deliver <span className="highlight">Solutions</span> that drive{" "}
        <span className="highlight">Results</span> for you
      </h2>

      <div className="grid grid-cols-12 gap-y-16 md:gap-12 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            heroImg={project.heroImage}
            heroImgDark={project.heroDarkImage}
            title={project.title}
            description={project.overview}
            techStack={project.techStack}
            liveLink={project.liveLink || "#"}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
