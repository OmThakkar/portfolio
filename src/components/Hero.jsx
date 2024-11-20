import { Button } from "@material-tailwind/react";
import { MoveRight } from "lucide-react";
import React from "react";
import bg from "../assets/bg.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] h-svh">
      <video
        src={bg}
        autoPlay={true}
        muted={true}
        loop={-1}
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      ></video>
      <div className="h-14 lg:h-[72px] absolute top-0 left-0 w-full bg-white dark:bg-gray-900"></div>
      <div className="flex flex-col gap-6 w-full max-w-screen-2xl mx-auto pb-14 px-5 lg:px-8 lg:pb-28 justify-center pt-20 lg:pt-48 text-center h-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl mx-auto">
          Om Thakkar is an Engineer based in India, specializing in
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl max-w-2xl mx-auto -mt-5 md:-mt-3 bg-white px-4 lg:px-6 py-2 border-2 border-deep-purple-500 relative">
          <span className="font-caveat text-deep-purple-500 font-bold">
            {" "}
            Frontend Design & Development
          </span>
          <div className="h-2 w-2 lg:h-3 lg:w-3 bg-deep-purple-200 absolute -top-1 -left-1 lg:-top-1.5 lg:-left-1.5"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 bg-deep-purple-200 absolute -top-1 -right-1 lg:-top-1.5 lg:-right-1.5"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 bg-deep-purple-200 absolute -bottom-1 -left-1 lg:-bottom-1.5 lg:-left-1.5"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 bg-deep-purple-200 absolute -bottom-1 -right-1 lg:-bottom-1.5 lg:-right-1.5"></div>
        </h1>
        <p className="max-w-2xl mx-auto text-sm lg:text-base text-deep-purple-50">
          He designs and develops functional, user-centric interfaces. In his
          free time, he is a part-time poet and an amateur tennis player. Learn
          more about{" "}
          <Link to="/about" className="underline underline-offset-4 text-deep-purple-100 cursor-pointer font-semibold">
            Om Thakkar
          </Link>
          .
        </p>
        <div className="inline-flex w-full justify-center items-center gap-3 mt-3">
          <Link to="/work">
            <Button
              variant="gradient"
              size="lg"
              className="inline-flex items-center gap-2 capitalize group text-deep-purple-900"
              color="white"
            >
              <span>View Work</span>
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outlined"
              size="lg"
              className="inline-flex items-lg:center gap-1.5 capitalize border-deep-purple-50 text-deep-purple-50 group"
              color="white"
            >
              <span>Get In Touch</span>
              <MoveRight
                size={18}
                className="transition-transform duration-150 group-hover:-rotate-[40deg]"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
