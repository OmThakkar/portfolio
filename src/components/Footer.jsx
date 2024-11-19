import {
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiDiscord,
  SiWhatsapp,
} from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import React from "react";
import { Tooltip } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="section-container border-t border-t-deep-purple-50 dark:border-t-deep-purple-50/10 flex flex-col lg:flex-row text-center lg:text-left items-center lg:justify-between gap-6 lg:gap-0">
      <div className="flex flex-col gap-2">
        <p className="text font-medium">
          © 2024 Om Thakkar. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 capitalize">
          Made with love and Indian Masala Tea.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500 capitalize">
          Connect With Me
        </p>
        <div className="flex items-center gap-2">
          <Tooltip
            content="Instagram"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
          >
            <a
              href="https://www.instagram.com/omthakkar343/#"
              target="_blank"
              className="text-deep-purple-900 dark:text-deep-purple-100 p-2 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 rounded-lg hover:bg-deep-purple-400 dark:hover:bg-deep-purple-400 hover:text-white transition-all duration-100 ease-in-out"
            >
              <SiInstagram size={18} />
            </a>
          </Tooltip>
          <Tooltip
            content="LinkedIn"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
          >
            <a
              href="https://www.linkedin.com/in/omthakkar343/"
              target="_blank"
              className="text-deep-purple-900 dark:text-deep-purple-100 p-2 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 rounded-lg hover:bg-deep-purple-400 dark:hover:bg-deep-purple-400 hover:text-white transition-all duration-100 ease-in-out"
            >
              <SiLinkedin size={18} />
            </a>
          </Tooltip>
          <Tooltip
            content="GitHub"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
          >
            <a
              href="https://github.com/OmThakkar"
              target="_blank"
              className="text-deep-purple-900 dark:text-deep-purple-100 p-2 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 rounded-lg hover:bg-deep-purple-400 dark:hover:bg-deep-purple-400 hover:text-white transition-all duration-100 ease-in-out"
            >
              <SiGithub size={18} />
            </a>
          </Tooltip>
          <Tooltip
            content="Discord"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
          >
            <a
              href="https://discordapp.com/users/omthakkar"
              target="_blank"
              className="text-deep-purple-900 dark:text-deep-purple-100 p-2 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 rounded-lg hover:bg-deep-purple-400 dark:hover:bg-deep-purple-400 hover:text-white transition-all duration-100 ease-in-out"
            >
              <SiDiscord size={18} />
            </a>
          </Tooltip>
          <Tooltip
            content="WhatsApp"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
          >
            <a
              href="https://wa.me/917448158105"
              target="_blank"
              className="text-deep-purple-900 dark:text-deep-purple-100 p-2 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 rounded-lg hover:bg-deep-purple-400 dark:hover:bg-deep-purple-400 hover:text-white transition-all duration-100 ease-in-out"
            >
              <SiWhatsapp size={18} />
            </a>
          </Tooltip>
          <Tooltip
            content="Email"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            className="bg-white text-deep-purple-900 text-sm dark:bg-gray-900 dark:text-deep-purple-50"
          >
            <a
              href="mailto:craftedbyom@gmail.com"
              target="_blank"
              className="text-deep-purple-900 dark:text-deep-purple-100 p-2 bg-deep-purple-50/50 dark:bg-deep-purple-50/10 rounded-lg hover:bg-deep-purple-400 dark:hover:bg-deep-purple-400 hover:text-white transition-all duration-100 ease-in-out"
            >
              <MdOutlineMailOutline size={18} />
            </a>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
