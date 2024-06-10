import skill_95 from '@/public/meter1.png';
import skill_80 from '@/public/meter2.png';
import skill_90 from '@/public/meter3.png';
import js from '@/public/js.png'
import ts from '@/public/ts.png'
import bootsrap from '@/public/bootstrap.png'
import css from '@/public/cascading-style-sheets.png'
import react from '@/public/physics.png'
import git from '@/public/commit-git.png'
import { StaticImageData } from 'next/image';

interface ISkill {
  src: StaticImageData;
  title: string;

}
export const Data  : ISkill[]= [
  {
    src: skill_90,
    title: 'JS & TS'
  },
  {
    src: skill_90,
    title: 'toolkit'
  },
  {
    src: skill_95,
    title: 'Bootstrap & TailwindCss'
  },
  {
    src: skill_90,
    title: 'git'
  },
  {
    src: skill_90,
    title: 'Next JS'
  },
  {
    src: skill_80,
    title: 'Node js'
  },
  {
    src: skill_80,
    title: 'Nest js'
  },{
    src: skill_80,
    title: 'Prisma & typeOrm'
  },
  {
    src: skill_80,
    title: 'python'
  },
  {
    src: skill_95,
    title: 'React'
  },
]
export const tools = [
  js, ts, bootsrap, git, react, css
]