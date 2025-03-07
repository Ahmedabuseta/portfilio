
import back from "@/public/backend.jpg";
import { StaticImageData } from "next/image";

import azan from '@/public/js_azan.png'
import jsCommerce from '@/public/commerceJs.png'
import jsCart from '@/public/Js_cart.png'

import SefAcadamy from '@/public/sef.png'
import taxup from '@/public/taxup.png'
import tdoting from '@/public/todo.jpg'
import recommerce from '@/public/react_commrece.png'

import tedu from "@/public/tedu.png"
import student from "@/public/student_att.png"

export interface IProject {
  id:number;
  title: string;
  description: string;
  imgUrl: StaticImageData;
  repoLink: string;
  liveLink: string;
  previewVidSrc?: StaticImageData | string;
  tools?: string[];
  mainTool: string;
}
export const data: IProject[] = [
  //fullstack nextjs
  {
    id:12,
    title: "Tedu",
    description: "fullStack",
    imgUrl: tedu,
    repoLink: "https://github.com/Ahmedabuseta/Tedu",
    liveLink: "tedu.vercel.app",
    previewVidSrc: tedu,
    tools: ['NextJs','TS','React','Chadecn UI','Tailwind CSS','mux','Prisma','uploadthings','Neon','Paymob','clerk'],
    mainTool:'NextJS'
  },{
    id:14,
    title: "Techer regs form",
    description: "fullStack",
    imgUrl: student,
    repoLink: "https://github.com/Ahmedabuseta/student-attend",
    liveLink: "ahmedali-two.vercel.app",
    previewVidSrc: student,
    tools: ['NextJs','TS','React','Chadecn UI','Tailwind CSS','aceternity Ui','MongoDb','Prisma'],
    mainTool:'NextJS'
  },
    //back
    {
      id:15652,
      title: "course Mange",
      description: "back-end",
      imgUrl: back,
      repoLink: "https://github.com/Ahmedabuseta/courses-mange",
      liveLink: "**",
      previewVidSrc: back,
      mainTool: "NodeJs",
      tools:['JS','NodeJs','Express','moongose','MongoDb','JWT','Multer'],
    },
    {
      id:15462,
      title: "student Mange",
      description: "back-end",
      imgUrl: back,
      repoLink: "https://github.com/Ahmedabuseta/student-mange",
      liveLink: "**",
      previewVidSrc: back,
      mainTool: "NestJs",
      tools:['TS','NestJs','Passport','TypeOrm'],
    },
  //react
  {
    id:124,
    title: "tdotng",
    description: "front",
    imgUrl: tdoting,
    repoLink: "https://github.com/Ahmedabuseta/Tedu",
    liveLink: "tedu.vercel.app",
    previewVidSrc: tdoting,
    tools: ['TS','React','useForm','Tailwind CSS','Redux Toolkit','Zod'],
    mainTool:'React'
  },{
    id:1542,
    title: "SEF academy ",
    description: "front-end",
    imgUrl: SefAcadamy,
    repoLink: "https://github.com/Ahmedabuseta/traning",
    liveLink: "https://admirable-maamoul-c8b5c9.netlify.app",
    previewVidSrc: SefAcadamy,
    tools:['JS','React','React Router Dom','Material UI','Bootstrap','Redux Toolkit'],
    mainTool: "React",
  },  {
    id:162,
    title: "taxUp ",
    description: "front-end",
    imgUrl: taxup,
    repoLink: "https://github.com/Ahmedabuseta/taxHub",
    liveLink: "https://main--taxup.netlify.app/",
    previewVidSrc: taxup,
    tools:['JS','React','React Router Dom','Material UI','Bootstrap','useSpring','Redux Toolkit'],
    mainTool: "React",
  },{
    id:1542,
    title: "react simple commerce",
    description: "front-end",
    imgUrl: recommerce,
    repoLink: "https://github.com/Ahmedabuseta/React-commrece",
    liveLink: "https://react-commerce-seta.netlify.app",
    previewVidSrc: recommerce,
    tools:['Js','React','Bootstrap','Material UI','Redux Toolkit'],
    mainTool: "React",
  },
  //js
  {
    id:1672,
    title: "e-commerce pure js",
    description: "front-end",
    imgUrl: jsCommerce,
    repoLink: "https://github.com/Ahmedabuseta/e-commerce",
    liveLink: "https://abuseta-commrce.netlify.app",
    previewVidSrc: jsCommerce,
    mainTool: "JS",
    tools:['JS','Bootstrap'],
  },{
    id:156542,
    title: "cart pure js",
    description: "front-end",
    imgUrl: jsCart,
    repoLink: "https://github.com/Ahmedabuseta/cart",
    liveLink: "ahmedabuseta.github.io/cart/",
    previewVidSrc:'https://sharedby.blomp.com/oFuUzE',
    mainTool: "JS",
    tools:['JS','Bootstrap'],
  },{
    id:1243,
    title: "azan timing",
    description: "front-end",
    imgUrl: azan,
    repoLink: "https://github.com/Ahmedabuseta/AzanTiming",
    liveLink: "https://ahmedabuseta.github.io/AzanTiming/",
    previewVidSrc: 'https://sharedby.blomp.com/HoUYGH',
    mainTool: "JS",
    tools:['JS','Bootstrap'],
  },

];

