import React, { ReactElement, ReactNode } from "react";
import { data } from "../projects/data";
import Projects from "../projects/projects";
export interface ITabs {
  value: string;
  content: React.ReactElement;
}

import { IProject } from "../projects/data"; // Import the IProject type

const Tabos: ITabs[] = [
  {
    value: "expience",
    content: <Projects projects={data} />,
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
