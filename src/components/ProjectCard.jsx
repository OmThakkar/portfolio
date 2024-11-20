import { Link2 } from "lucide-react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ProjectCard({
  index,
  heroImg,
  heroImgDark,
  title,
  description,
  liveLink,
  techStack,
}) {
  // Function to truncate the description and add a "Read More" link
  const truncateText = (text, maxLength, link) => {
    return text.length > maxLength ? (
      <>
        {text.slice(0, maxLength)}...{" "}
        <Link
          to={link}
          className="text-deep-purple-500 dark:text-deep-purple-200 underline underline-offset-2 text-sm"
        >
          Read more
        </Link>
      </>
    ) : (
      text
    );
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-4">
      <Link to={`/work/${title}`} className="flex flex-col gap-4">
        <div className="h-[220px] sm:h-80 lg:h-[240px] rounded-xl overflow-hidden w-full">
          <img
            src={heroImg}
            alt={title}
            className="h-full w-full object-cover dark:hidden"
          />
          <img
            src={heroImgDark}
            alt={title}
            className="h-full w-full object-cover hidden dark:block"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex w-full justify-between items-center">
            <h4 className="sub-heading">{title}</h4>
          </div>
          <p>{truncateText(description, 110, `/work/${title}`)}</p>
        </div>
      </Link>
      <div className="flex flex-col items-star gap-3 w-full justify-between">
        <div className="flex items-center gap-1.5">
          {techStack.map((tech, index) => (
            <Tooltip
              key={index}
              content={tech.name}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
            >
              <span className="p-2.5 bg-deep-purple-50 dark:bg-deep-purple-50/10 text-deep-purple-900 dark:text-deep-purple-50 rounded-full">
                <tech.icon className="tech-icon" size={18} />
              </span>
            </Tooltip>
          ))}
        </div>
        <span
          className="inline-flex items-center text-sm gap-1.5 capitalize border-none text-deep-purple-500 dark:text-deep-purple-200 group underline underline-offset-4 px-0 w-fit cursor-pointer font-medium py-3"
          onClick={() => window.open(liveLink, "_blank")}
        >
          <Link2 size={18} />
          <span>Live Preview</span>
        </span>
      </div>
    </div>
  );
}
