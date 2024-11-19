import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  ThemeProvider,
} from "@material-tailwind/react";
import { BriefcaseBusiness, GraduationCap, ChartNoAxesCombined } from "lucide-react";
import SectionBadge from "./SectionBadge";
import EducationTimeline from "./EducationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";

export function ExperienceAndEducation() {
  const data = [
    {
      label: "Experience",
      value: "experience",
      icon: <BriefcaseBusiness size={16} fill="transparent" />,
      desc: <ExperienceTimeline />,
    },
    {
      label: "Education",
      value: "education",
      icon: <GraduationCap size={16} fill="transparent" />,
      desc: <EducationTimeline />,
    },
  ];

  const theme = {
    tab: {
      defaultProps: {
        className: "",
        activeClassName: "",
        disabled: false,
      },
      styles: {
        base: {
          tab: {
            initial: {
              display: "flex",
              alignItems: "items-center",
              justifyContent: "justify-center",
              textAlign: "text-center",
              width: "w-full",
              height: "h-full",
              position: "relative",
              bg: "bg-transparent",
              py: "py-1",
              px: "px-2",
              color: "text-deep-purple-900 dark:text-deep-purple-50",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-base",
              fontWeight: "font-normal",
              lineHeight: "leading-relaxed",
              userSelect: "select-none",
              cursor: "cursor-pointer",
            },
            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              pointerEvents: "pointer-events-none",
              userSelect: "select-none",
            },
          },
          indicator: {
            position: "absolute",
            inset: "inset-0",
            zIndex: "z-10",
            height: "h-full",
            bg: "bg-deep-purple-50 dark:bg-deep-purple-50/10",
            borderRadius: "rounded-md",
          },
        },
      },
    },
  };

  return (
    <section className="section-container flex flex-col gap-6 items-center">
      <SectionBadge
        icon={<ChartNoAxesCombined size={16} fill="white" />}
        text={"Stepping stones to my expertise"}
      />
      <h2 className="section-heading">
        Bridging <span className="highlight">Knowledge</span> & practice to
        deliver <span className="highlight">Exceptional Results</span>
      </h2>
      <ThemeProvider value={theme}>
        <Tabs value="experience" className="max-w-screen-lg">
          <TabsHeader className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-1.5 max-w-sm mx-auto">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2 text-sm p-1">
                  {icon}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="p-1">
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </ThemeProvider>
    </section>
  );
}
