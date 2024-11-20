import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { ExperienceAndEducation } from "../components/ExperienceAndEducation";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Om Thakkar - Portfolio";
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <ExperienceAndEducation />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
