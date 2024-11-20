import React from "react";
import about from "../assets/about-light.png";
import aboutDark from "../assets/about-dark.png";
import quality from "../assets/quality.png";
import SectionBadge from "../components/SectionBadge";
import { Heart } from "lucide-react";
import omthakkar from "../assets/omthakkar.jpg";
import competiton from "../assets/about-3.jpg";
import signDark from "../assets/sign-dark.png";
import sign from "../assets/sign.jpg";

const About = () => {
  return (
    <section className="section-container flex flex-col gap-6 mt-12 items-center">
      <SectionBadge
        icon={<Heart fill="white" size={16} />}
        text={"Who is Om Thakkar"}
      />

      <h2 className="section-heading">
        I'm <span className="highlight">Passionate</span> for crafting{" "}
        <span className="highlight">Digital Experiences</span>
      </h2>

      <div className="grid grid-cols-12 gap-y-8 lg:gap-12 items-center w-full">
        <div className="h-96 w-full flex items-center justify-center col-span-12 lg:col-span-5 rounded-lg">
          <img
            src={omthakkar}
            alt="Om Thakkar"
            className="h-full w-92 object-cover p-2 rounded bg-deep-purple-50/50 dark:bg-deep-purple-50/10"
            loading="lazy"
          />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <p>
            Hola Amigos! I’m Om Thakkar, a final-year computer engineering
            student with a knack for front-end design and development. I love
            crafting interfaces that make people’s lives easier and more
            accessible. When I’m not buried in code, you can find me hitting the
            tennis court, smashing shuttlecocks in badminton, or cycling around
            to clear my head. <br />
            <br />
            <p>
              As a polyglot fluent in six languages, I can switch from English
              to Japanese in a heartbeat—especially when binging anime or
              discussing gripping English series. Poetry is another passion of
              mine, with my work once showcased on Poetry by Omni. I also enjoy
              teaching front-end development, sharing resources, and simplifying
              concepts for anyone eager to learn.
            </p>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-12 items-center w-full">
        <div className="col-span-12 lg:col-span-7 order-last lg:order-first">
          <p>
            Outside the screen and keyboard, I’m all about balance—whether it’s
            on a cricket pitch or while dancing with friends. I’m a natural team
            player, someone who loves connecting with people and bringing out
            the best in those around me. Participating in hackathons and startup
            competitions fuels my drive to create impactful, out-of-the-box
            solutions.
            <br />
            <br />
            <p>
              Exploring nature, socializing, and listening to music are my go-to
              ways to recharge, though I’m equally at home brainstorming ideas
              for my next project. Whether it’s coding, cycling, or simply
              enjoying a good laugh, I like to think of life as one big,
              exciting adventure.
            </p>
          </p>
        </div>
        <div className="h-96 w-full flex items-center justify-center col-span-12 lg:col-span-5 order-first lg:order-last rounded-lg">
          <img
            src={competiton}
            alt="Om Thakkar"
            className="h-full w-92 object-cover p-2 rounded bg-deep-purple-50/50 dark:bg-deep-purple-50/10"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-12 items-center w-full">
        <div className="h-[332px] sm:h-96 col-span-12 lg:col-span-5">
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
        <div className="col-span-12 lg:col-span-7">
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
      <div className="grid grid-cols-12 gap-y-8 lg:gap-12 items-center w-full">
        <div className="col-span-12 lg:col-span-7 order-last lg:order-first">
          <ol className="flex flex-col gap-6">
            <li className="flex flex-col gap-1.5">
              <span className="sub-heading">Passion</span>
              Passion is the energy that keeps me motivated and resilient, even
              when faced with challenges. It is the force behind my dedication
              and the desire to create work that truly resonates and makes a
              difference.
            </li>
            <li className="flex flex-col gap-1.5">
              <span className="sub-heading">Creativity</span>
              Creativity is the spark that drives me to think outside the box
              and approach problems with fresh perspectives. It fuels innovation
              and allows me to craft designs and solutions that are both unique
              and meaningful.
            </li>
            <li className="flex flex-col gap-1.5">
              <span className="sub-heading">Perfection</span> Perfection is my
              pursuit of excellence in every detail, ensuring that each task
              meets the highest standards. It reflects my commitment to
              precision and delivering outcomes that inspire trust and
              confidence.
            </li>
          </ol>
        </div>
        <div className="h-40 lg:h-52 col-span-12 lg:col-span-5 order-first lg:order-last">
          <img
            src={quality}
            alt="Quality"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-start mt-20">
        <p >Thank you for stopping by</p>
        <img src={signDark} alt="" className="hidden dark:block h-20"/>
        <img src={signDark} alt="" className="dark:hidden h-20 invert"/>
      </div>
    </section>
  );
};

export default About;
