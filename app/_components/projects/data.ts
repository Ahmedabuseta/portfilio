

import azan from "@/public/azan.jpg";
import commerce from "@/public/commerce.jpg";
import travel from "@/public/travel.jpg";
import dashboard from "@/public/dashboard.jpg";
import services from "@/public/servicies.jpg";
import SefAcadamy from "@/public/Sef-Acadamy.png";
import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  title: string;
  description: string;
  imgUrl: StaticImageData;
  repoLink: string;
  liveLink: string;
  previewImgSrc: StaticImageData;
  features: {
    feature1: {
      title: string;
      explanation: string[];
    };
    feature2?: {
      title: string;
      explanation: string[];
    };
    feature3?: {
      title: string;
      explanation: string[];
    };
    feature4?: {
      title: string;
      explanation: string[];
    };
    feature5?: {
      title: string;
      explanation: string[];
    };
  };

}
export const data : IProject[]= [
  {
    id: 1,
    title: "azan timing",
    description: "Design & Development",
    imgUrl: azan,
    repoLink: "https://github.com/Ahmedabuseta/AzanTiming",
    liveLink: "https://ahmedabuseta.github.io/AzanTiming/",
    previewImgSrc: azan,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 2,
    title: "e-commerce app js",
    description: "Design & Development",
    imgUrl: commerce,
    repoLink: "https://github.com/Ahmedabuseta/e-commerce",
    liveLink: "https://abuseta-commrce.netlify.app",
    previewImgSrc: commerce,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 3,
    title: "react crud ts (in progress) ",
    description: "Design & Development",
    imgUrl: travel,
    repoLink: "https://github.com/Ahmedabuseta/E_Commerce_React_tailwindCss",
    liveLink: "",
    previewImgSrc: dashboard,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 9,
    title: "tax site ",
    description: "Design & Development",
    imgUrl: dashboard,
    repoLink: "https://github.com/Ahmedabuseta/taxHub",
    liveLink: "",
    previewImgSrc: services,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 5,
    title: "SEF academy e-learning site ",
    description: "Design & Development",
    imgUrl: services,
    repoLink: "https://github.com/Ahmedabuseta/traning",
    liveLink: "https://admirable-maamoul-c8b5c9.netlify.app",
    previewImgSrc: SefAcadamy,
    features: {
      feature1: {
        title: "Admin Features :",
        explanation: [
          "Manage (add ,remove ,edit) courses.",
          "Manage (add ,remove ,edit) job offers.",
          "Manage (add ,remove ,edit) articles.",
          "Manage user accounts (students).",
        ],
      },
      feature2: {
        title: "User (Student) Features :",
        explanation: [
          "Access articles (for all visitors).",
          "Edit profile information.",
          "Login with data from the admin.",
          "Filter courses and job offers by various criteria (e.g., remote/onsite, part/full-time, salary).",
          "Apply for courses and job offers directly on the site.",
          "Create a CV in the dedicated section.",
          "Download the created CV.",
        ],
      },
    },
  },
  {
    id: 4,
    title: "react crud at commerce",
    description: "Design & Development",
    imgUrl: SefAcadamy,
    repoLink: "https://github.com/Ahmedabuseta/React-commrece",
    liveLink: "https://react-commerce-seta.netlify.app",
    previewImgSrc: SefAcadamy,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
];
