import React, { ReactElement, ReactNode } from "react";
import { data } from "../projects/data";
import Projects from "../projects/projects";
export interface ITabs {
  value: string;
  content: React.ReactElement;
}
import {ITimelLine} from "@/components/timeline";
import { IProject } from "../projects/data"; // Import the IProject type
import { TimelineComponent } from "@/components/timeline";
 const data: ITimelLine[] = [
    {
      date: "june,2019 to nov,2019",
      title: "nanodegree udacity",
      description: " i get nanodegree frontend from udacity",
      image: udactiy,
    },
    {
      date: "oct,2021 to oct,2026",
      title: "faculty of Engineering",
      description: "at this tme a get in faculty of engineering in tanta",
      image: tanta,
    },
    {
      date: "oct,2023 to june,2024",
      title: "computers and control department",
      description:
        "in this year i begin study matrials like data structure, little asmply, computer arch , graphics and oop",
      image: cs,
    },
    {
      date: "may,2023 to oct,2023",
      title: "Frontend",
      description:
        "i begin study frontend at sef academy {html , csss ,js , react , redux toolkit } and practise with projects,   ",
      image: frontend,
    },
    {
      date: "oct,2024 to dec,2023",
      title: "traning",
      description:
        "i get training in sef academy for 2 months with real world projects as frontend , and get begin learning nextjs ",
      image: traning,
    },
    {
      date: "jan,2024 to now",
      title: "fullstack nextjs freelancer",
      description:
        "i get learned more in nextjs and database orms  to make fullstack projects ",
      image: fullstack,
    },
    {
      date: "now",
      title: "nestjs and reactNative",
      description: "i lern nestjs and reactnative ",
      image: reactNative,
    },
  ];
const Tabos: ITabs[] = [
  {
    value: "journey",
    content:<TimelineComponent data={data} key={data.title}/> ,
  },
  {
    value: "Projects",
    content: <Projects projects={data} />,
  },
  {
    value: "3wooooo",
    content: <Projects projects={data} />,
  },
];

export default Tabos;
