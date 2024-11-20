import React, { useState, useEffect } from "react";
import SectionBadge from "./SectionBadge";
import { LucideTextQuote, Quote, Star } from "lucide-react";
import testimonials from "../data/testimonials";
import { MdFormatQuote } from "react-icons/md";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically change testimonial every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="section-container flex flex-col gap-6 items-center">
      <SectionBadge
        icon={<Star size={14} fill="white" />}
        text={"What they say about me"}
      />
      <h2 className="section-heading">
        Glowing <span className="highlight">Testimonials</span> that speak{" "}
        <span className="highlight"> Volumes</span>
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <ul>
          {testimonials.map((item, idx) =>
            currentTestimonial === idx ? (
              <li key={idx}>
                <figure className="relative">
                  <MdFormatQuote size={100} className="text-deep-purple-50/50 dark:text-deep-purple-50/10 absolute -z-10 -left-6 lg:-left-2 -top-12 transform rotate-180"/>
                  <blockquote className="lg:px-6">
                    <p className="text-gray-900 dark:text-gray-200 md:text-lg lg:text-xl">
                      “{item.quote}“
                    </p>
                  </blockquote>
                  <div>
                    <div className="my-6">
                      <span className="sub-heading">
                        {item.name}
                      </span>
                      <span className="block text-gray-800 dark:text-gray-100 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div>
        <ul className="flex gap-x-3 justify-center">
          {testimonials.map((item, idx) => (
            <li key={idx}>
              <button
                className={`relative w-12 h-12 rounded-full border-[3px] duration-150 ${
                  currentTestimonial === idx
                    ? "border-deep-purple-500 dark:border-deep-purple-400 "
                    : "border-deep-purple-50/50 dark:border-deep-purple-50/10"
                }`}
                onClick={() => setCurrentTestimonial(idx)}
              >
                <img
                  src={item.avatar}
                  alt={`Avatar of ${item.name}`}
                  className={`w-full h-full object-cover rounded-full ${
                    currentTestimonial !== idx
                      ? "opacity-50"
                      : "opacity-100"
                  }`}
                />
                {currentTestimonial !== idx && (
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full opacity-50"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
