import React from "react";
import { Button } from "@material-tailwind/react";
import { Rocket } from "lucide-react";
import cta from "../assets/cta.png";

const CallToAction = () => {
  return (
    <section className="section-container">
      <div className="bg-gradient-to-tl from-deep-purple-400 to-deep-purple-600 py-20 px-12 rounded-lg flex flex-col items-center text-center">
        <h2 className="section-heading text-white max-w-full">
          Let's Build Something Great Together
        </h2>
        <p className="text-white/90 max-w-md">
          Have a project in mind or need guidance? Let’s connect and turn your
          vision into reality.
        </p>
        <a href="https://calendly.com/craftedbyom/30min" target="_blank">
          <Button
            variant="gradient"
            className="inline-flex items-center gap-2 capitalize mt-10"
            color="white"
          >
            <Rocket size={18} />
            <span>Schedule A Call Now</span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
