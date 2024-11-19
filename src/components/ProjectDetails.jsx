import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import { Tooltip, Breadcrumbs } from "@material-tailwind/react";
import NotFound from "../pages/NotFound";

const ProjectDetails = () => {
  
  const { title } = useParams();
  const project = projects.find((p) => p.title === title);

  if (!project) {
    return <NotFound/>;
  }

  // Function to add <br><br> after every 3 full stops
  const formatOverview = (overview) => {
    return overview
      .split(".") // Split into sentences based on periods
      .reduce((acc, sentence, index) => {
        const trimmed = sentence.trim(); // Trim extra spaces from each sentence
        if (trimmed) {
          acc.push(trimmed); // Add trimmed sentence to the accumulator
          if ((index + 1) % 2 === 0) acc.push("<br><br>"); // Add <br><br> after every 2 sentences
        }
        return acc;
      }, [])
      .map((part, idx, arr) => {
        // Add a full stop only if:
        // - It's not the <br><br> element
        // - It doesn't start a paragraph (<br><br> comes before it)
        if (part !== "<br><br>" && (idx === 0 || arr[idx - 1] !== "<br><br>")) {
          return `${part}.`;
        }
        return part;
      })
      .join(" ") // Join all parts with spaces
      .replace(/<br><br>\s*\./g, "<br><br>"); // Remove any full stop immediately after <br><br>
  };

  return (
    <section className="section-container flex flex-col gap-6 mt-10 lg:mt-12">
      <Breadcrumbs color="deep-purple" fullWidth className="bg-transparent text-deep-purple-900 dark:text-deep-purple-50">
      <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-deep-purple-400 dark:hover:text-deep-purple-300 underline underline-offset-4 text-sm font-medium">
        Home
      </Link>
      <Link to="/work" className="text-gray-800 dark:text-gray-200 hover:text-deep-purple-400 dark:hover:text-deep-purple-300 underline underline-offset-4 text-sm font-medium">
        Work
      </Link>
      <Link className="text-deep-purple-400 dark:text-deep-purple-300 hover:text-deep-purple-400 dark:hover:text-deep-purple-300 underline underline-offset-4 text-sm font-medium">{project.title}</Link>
    </Breadcrumbs>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-12 items-start">
        <div className="h-52 md:h-96 lg:h-80 rounded-lg overflow-hidden col-span-12 lg:col-span-5 lg:sticky top-28">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover dark:hidden"
          />
          <img
            src={project.heroDarkImage}
            alt={project.title}
            className="h-full w-full object-cover hidden dark:block"
          />
        </div>
        <div className="flex flex-col gap-6 col-span-12 lg:col-span-7">
          <div className="flex flex-col gap-3">
            <h4 className="sub-heading">{project.title}</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: formatOverview(project.overview),
              }}
            ></p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="sub-heading">Duration</h4>
            <p>{project.duration}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="sub-heading">Colors Used</h4>
            <div className="flex items-center pb-7">
              {project.colorsUsed.map((color, index) => (
                <Tooltip
                  key={index}
                  content={color}
                  placement="bottom"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                  className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
                >
                  <div
                    style={{ backgroundColor: color }}
                    className="h-8 w-8 rounded-full -mr-3 border border-gray-100 dark:border-gray-800"
                  ></div>
                </Tooltip>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: formatOverview(project.colorSelection),
              }}
            ></p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="sub-heading">Fonts Used</h4>
            <div className="flex items-center">
              {project.fontsUsed.map((font, index) => (
                <p key={index} className="pr-2 text-xl">
                  {font}
                </p>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: formatOverview(project.fontSelection),
              }}
            ></p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="sub-heading">Tech Stack</h4>
            <div className="flex items-center gap-2 pb-7">
              {project.techStack.map((tech, index) => (
                <Tooltip
                  key={index}
                  content={tech.name}
                  placement="bottom"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                  className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
                >
                  <span className="p-3 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 text-deep-purple-900 dark:text-deep-purple-50 rounded-full">
                    <tech.icon className="tech-icon" size={20} />
                  </span>
                </Tooltip>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: formatOverview(project.techStackSelection),
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
