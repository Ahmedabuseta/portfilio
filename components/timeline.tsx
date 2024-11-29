
import Image, { StaticImageData } from "next/image";

import udactiy from "@/public/udacity.jpg";
import cs from "@/public/cs.jpg";
import tanta from "@/public/Untitled.jpg";
import reactNative from "@/public/native.svg";
import frontend from "@/public/front.svg";
import fullstack from "@/public/fullstack.svg";
import traning from "@/public/training.svg";


interface ITimelLine {
  date: string;
  title: string;
  description: string;
  image: StaticImageData | string;
}

export const TimelineComponent = () => {
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
return (
  <div className="flex flex-col items-center justify-center p-3">
    {data.map((timeline, index) => (
      <div
        key={index} // Ensure key is applied to the parent element of the iteration.
        className={`relative p-4 ${
          index % 2 !== 0
            ? "border-l-2 md:border-r-2 md:border-l-0 md:translate-x-[-368px]"
            : "border-l-2"
        } md:mr-[-300px] w-[370px] border-indigo-600`}
      >
        <div
          className={`absolute ${
            index % 2 !== 0
              ? "left-[calc(100%-12px)]"
              : "-left-[13px]"
          } w-6 h-6 rounded-full bg-blue-600`}
        />
        <p className="text-sm font-normal text-indigo-400">
          {timeline.date}
        </p>
        <h1 className="text-lg font-medium text-white">
          {timeline.title}
        </h1>
        <p className="text-sm font-normal text-gray-300">
          {timeline.description}
        </p>
        <Image
          src={timeline.image}
          key={`${index}-image`} // Add a unique key for Image if required by any nested component.
          className="mt-4 rounded-xl"
          alt={timeline.title}
          width={300}
          height={200}
        />
      </div>
    ))}
  </div>
);

};
