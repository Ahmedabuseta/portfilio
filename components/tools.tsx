'use client'
import bootstrap from '@/public/icons/bootstrap-seeklogo.svg'
import tailwindCss from '@/public/icons/tailwind-css-seeklogo.svg'

import react from '@/public/icons/react.png'
import reactRouterDom from '@/public/icons/react-router-seeklogo.svg'

import mui from '@/public/icons/material-ui-seeklogo.svg'
import chadecn from '@/public/icons/shadcn-ui-seeklogo.svg'

import reduxToolkit from '@/public/icons/redux-seeklogo.svg'
import paymob from '@/public/icons/paymob.png'

import JS from '@/public/icons/javascript-js-seeklogo.svg'
import TS from '@/public/icons/typescript-seeklogo.svg'

import typeOrm from '@/public/icons/typeorm-seeklogo.svg'
import prisma from '@/public/icons/prisma-seeklogo.svg'

import express from '@/public/icons/express-js-seeklogo.svg'
import nestJs from '@/public/icons/nestjs-seeklogo.svg'

import mongoDb from '@/public/icons/mongodb-ar21.svg'
import neon from '@/public/icons/neon-seeklogo.svg'

import next from '@/public/icons/next-js-seeklogo.svg'
import zod from '@/public/icons/zod-seeklogo.svg'
import Image from 'next/image'




export const ToolsComp = ({ tools: string[] | undefined; }) => {
   const Tools = [
    {
      id: 1,
      name: 'React',
      icon: react
    },
    {
      id: 2,
      name: 'React Router Dom',
      icon: reactRouterDom
    },
    {
      id: 3,
      name: 'Material UI',
      icon: mui
    },
    {
      id: 4,
      name: 'Chadecn UI',
      icon: chadecn
    },
    {
      id: 5,
      name: 'Redux Toolkit',
      icon: reduxToolkit
    },
    {
      id: 6,
      name: 'Bootstrap',
      icon: bootstrap
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      icon: tailwindCss
    },
    {
      id: 8,
      name: 'JS',
      icon: JS
    },
    {
      id: 9,
      name: 'TS',
      icon: TS
    },
    {
      id: 10,
      name: 'TypeOrm',
      icon: typeOrm
    },
    {
      id: 11,
      name: 'Prisma',
      icon: prisma
    },
    {
      id: 12,
      name: 'Express',
      icon: express
    },
    {
      id: 13,
      name: 'NestJs',
      icon: nestJs
    },
    {
      id: 14,
      name: 'MongoDb',
      icon: mongoDb
    },
    {
      id: 15,
      name: 'Neon',
      icon: neon
    },
    {
      id: 16,
      name: 'NextJs',
      icon: next
    },
    {
      id: 17,
      name: 'Zod',
      icon: zod
    },{
      id:18,
      name:'Paymob',
      icon:paymob
    }
  ]
  const usedTools = Tools.filter((tool) => tools?.includes(tool.name));
console.log(usedTools);

  return (
    <div className="flex justify-start items-center gap-2  my-3 flex-wrap">
      {usedTools.map((tool, index) => (
        <div
          key={index}
          className="flex  justify-center items-center gap-2 px-2 py-1 cursor-pointer rounded-xl border-1 border-purple-800 hover:bg-purple-600/70 overflow-hidden"
        >
          <Image src={tool.icon} alt={tool.name} className="w-5 h-5" />
          <p className="text-sm font-bold m-0 text-white ">{tool.name}</p>
        </div>
      ))}
    </div>
  );
};
