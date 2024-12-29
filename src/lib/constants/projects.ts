import { StaticImageData } from 'next/image'

import ThumbNailIamge1 from '@public/image/projects/p1-trabook/trabook_thumbnail.png'
import FastAPIIcon from '@public/image/stacks/backend/fastapi.png'
import FirebaseIcon from '@public/image/stacks/backend/firebase.webp'
import MySQLIcon from '@public/image/stacks/backend/mysql.png'
import AxiosIcon from '@public/image/stacks/frontend/axios.png'
import FramerMotionIcon from '@public/image/stacks/frontend/framer-motion.svg'
import NextJSIcon from '@public/image/stacks/frontend/nextjs.svg'
import ReactIcon from '@public/image/stacks/frontend/react.png'
import RecoilIcon from '@public/image/stacks/frontend/recoil.png'
import TailwindCSSIcon from '@public/image/stacks/frontend/tailwindcss.png'
import TanstackQueryIcon from '@public/image/stacks/frontend/tanstack-query.svg'
import ZustandIcon from '@public/image/stacks/frontend/zustand.webp'
import JavascriptIcon from '@public/image/stacks/language/javascript.png'
import TypescriptIcon from '@public/image/stacks/language/typescript.png'
export type ProjectType = {
  thumbnail: StaticImageData
  title: string
  duration: string
  description: string
  stacks: StaticImageData[]
}

const project1: ProjectType = {
  thumbnail: ThumbNailIamge1,
  title: 'TraBook',
  duration: '24. 07 ~ 24. 10',
  description: '관광데이터 활용 공모전 참가 프로젝트',
  stacks: [TypescriptIcon, NextJSIcon, TailwindCSSIcon, ZustandIcon, TanstackQueryIcon, FramerMotionIcon],
}

const project2: ProjectType = {
  thumbnail: ThumbNailIamge1,
  title: 'site2',
  duration: '24. 07 ~ 24. 10',
  description: '임시 데이터터',
  stacks: [FastAPIIcon, FirebaseIcon, MySQLIcon, AxiosIcon, ReactIcon, RecoilIcon, JavascriptIcon],
}

export const PROJECTS: ProjectType[] = [
  project1,
  project2,
  project1,
  project2,
  project1,
  project2,
  project1,
  project2,
  project1,
  project2,
  project1,
  project2,
]
