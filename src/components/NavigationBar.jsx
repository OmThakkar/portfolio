import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import { FileText, X, Menu, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleLinkClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 bg-deep-purple-50/20 dark:bg-deep-purple-50/5 lg:bg-transparent dark:lg:bg-transparent rounded-lg p-3 lg:py-0">
      <Link to="/work" onClick={handleLinkClick}>
        <li
          className={`nav-link ${
            location.pathname === "/work"
              ? "bg-deep-purple-50/50 dark:bg-deep-purple-50/10 dark:text-deep-purple-50 rounded-lg text-deep-purple-900"
              : ""
          }`}
        >
          Work
        </li>
      </Link>
      <Link to="/about" onClick={handleLinkClick}>
        <li
          className={`nav-link ${
            location.pathname === "/about"
              ? "bg-deep-purple-50/50 dark:bg-deep-purple-50/10 dark:text-deep-purple-50 rounded-lg text-deep-purple-900"
              : ""
          }`}
        >
          About Me
        </li>
      </Link>
      <Link to="/extras" onClick={handleLinkClick}>
        <li
          className={`nav-link ${
            location.pathname === "/extras"
              ? "bg-deep-purple-50/50 dark:bg-deep-purple-50/10 dark:text-deep-purple-50 rounded-lg text-deep-purple-900"
              : ""
          }`}
        >
          Extras
        </li>
      </Link>
    </ul>
  );

  return (
    <Navbar
      className="fixed transition-colors ease-in-out duration-200 top-0 z-50 h-max max-w-full rounded-none border-none px-5 lg:px-auto text-gray-800 dark:text-gray-50 dark:bg-gray-900/90"
      shadow={false}
    >
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto lg:px-8">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-2"
        >
          <div>
            <img src={logo} alt="" className="h-7 lg:h-9" />
          </div>
          <div className="text-2xl lg:text-3xl font-medium font-caveat">
            <Typewriter
              options={{
                strings: ["Om Thakkar", "Passion", "Creativity", "Knowledge"],
                autoStart: true,
                loop: true,
                cursor: '_'
              }}
            />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <div className="mr-6 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-6">
            <span className="inline-flex items-center gap-4 text-gray-800 dark:text-gray-50">
              <Sun size={20} />
              <Switch
                color="deep-purple"
                onChange={handleDarkModeToggle}
                checked={darkMode}
              />
              <Moon size={18} />
            </span>
            <Button
              variant="gradient"
              className="hidden lg:inline-flex items-center gap-2 capitalize"
              color="deep-purple"
            >
              <FileText size={18} />
              <span>Resume</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <X /> : <Menu size={24} />}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            variant="gradient"
            fullWidth
            className="inline-flex items-center justify-center gap-2"
            color="deep-purple"
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
