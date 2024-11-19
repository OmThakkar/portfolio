import React from "react";
import { ProjectCard } from "./ProjectCard";
import SectionBadge from "./SectionBadge";
import { Laptop } from "lucide-react";
import projects from "../data/projects";
import { MoveRight } from "lucide-react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="section-container flex flex-col gap-6 items-center">
      <SectionBadge
        icon={<Laptop size={16} />}
        text={"Turning Visions Into Reality"}
      />

      <h2 className="section-heading">
        I deliver <span className="highlight">Solutions</span> that drive{" "}
        <span className="highlight">Results</span> for you
      </h2>

      <div className="grid grid-cols-12 gap-y-16 md:gap-12 w-full">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            heroImg={project.heroImage}
            heroImgDark={project.heroDarkImage}
            title={project.title}
            description={project.overview}
            techStack={project.techStack}
            liveLink={project.liveLink || "#"}
          />
        ))}
      </div>
      <Link to="/work">
        <Button
          variant="outlined"
          size="lg"
          className="inline-flex items-lg:center gap-1.5 capitalize border-none text-deep-purple-500 dark:text-deep-purple-200 group mt-10 underline underline-offset-4"
          color="white"
        >
          <span>View All Work</span>
          <MoveRight
            size={18}
            className="transition-transform duration-150 group-hover:-rotate-[40deg]"
          />
        </Button>
      </Link>
    </section>
  );
};

export default Projects;
