import React from "react";
import about from "../assets/about-light.png";
import aboutDark from "../assets/about-dark.png";
import quality from "../assets/quality.png";


const About = () => {
  return (
    <section className="section-container flex flex-col gap-6 mt-12">
      <div className="grid grid-cols-12 lg:gap-12 items-center">
        <div className="h-[332px] sm:h-96 col-span-12 lg:col-span-6">
          <img
            src={about}
            alt="Logo"
            className="h-full w-full object-cover sm:object-contain dark:hidden"
          />
          <img
            src={aboutDark}
            alt="Logo Dark"
            className="h-full w-full object-contain hidden dark:block"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <p>
            My logo symbolizes the essence of who I am and the principles I
            uphold. The three outer corners of the triangle represent
            creativity, perfection, and passion—values that define my work and
            vision. These three qualities merge at the central inscribed
            triangle, which represents me, embodying a harmony of these
            abilities. <br />
            <br />
            The design reflects my belief in balance, precision, and growth, as
            each attribute contributes to shaping my identity and work ethos.
            Together, they create a foundation for innovation, dedication, and
            excellence.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-12 items-center">
        <div className="col-span-12 lg:col-span-6 order-last lg:order-first">
          <ol className="flex flex-col gap-6">
            <li>
              <span className="sub-heading">Passion</span> <br />
              Passion is the energy that keeps me motivated and resilient, even
              when faced with challenges. It is the force behind my dedication
              and the desire to create work that truly resonates and makes a
              difference.
            </li>
            <li>
              <span className="sub-heading">Creativity</span> <br />
              Creativity is the spark that drives me to think outside the box
              and approach problems with fresh perspectives. It fuels innovation
              and allows me to craft designs and solutions that are both unique
              and meaningful.
            </li>
            <li>
              <span className="sub-heading">Perfection</span> <br /> Perfection
              is my pursuit of excellence in every detail, ensuring that each
              task meets the highest standards. It reflects my commitment to
              precision and delivering outcomes that inspire trust and
              confidence.
            </li>
          </ol>
        </div>
        <div className="h-40 lg:h-52 col-span-12 lg:col-span-6 order-first lg:order-last">
          <img
            src={quality}
            alt="Quality"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
