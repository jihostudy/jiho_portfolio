import { StaticImageData } from 'next/image'

import ThumbNailImagePortfolio from '@public/image/projects/p0-portfolio/thumbnail.png'
import ThumbNailImageTraBook from '@public/image/projects/p1-trabook/thumbnail.png'
import ThumbNailImageSokk from '@public/image/projects/p2-sokk/thumbnail.png'
import ThumbNailImageConcour from '@public/image/projects/p3-concours/thumbnail.png'
import ThumbNailImageGallery from '@public/image/projects/p4-gallery/thumbnail.png'
import ThumbNailImageCatch from '@public/image/projects/p5-catch/thumbnail.png'
import ThumbNailImageXV6 from '@public/image/projects/p7-xv6/thumbnail.svg'
import ThumbNailImageNetwork from '@public/image/projects/p8-network/thumbnail.png'
import ThumbNailImageKakao from '@public/image/projects/p9-kakaotalk/thumbnail.png'
import FastAPIIcon from '@public/image/stacks/backend/fastapi.png'
import FirebaseIcon from '@public/image/stacks/backend/firebase.webp'
import FramerMotionIcon from '@public/image/stacks/frontend/framer-motion.svg'
import NextJSIcon from '@public/image/stacks/frontend/nextjs.svg'
import ReactIcon from '@public/image/stacks/frontend/react.png'
import TailwindCSSIcon from '@public/image/stacks/frontend/tailwindcss.png'
import TanstackQueryIcon from '@public/image/stacks/frontend/tanstack-query.svg'
import ZustandIcon from '@public/image/stacks/frontend/zustand.webp'
import CIcon from '@public/image/stacks/language/c.png'
import JavascriptIcon from '@public/image/stacks/language/javascript.png'
import TypescriptIcon from '@public/image/stacks/language/typescript.png'

import { ProjectDetailType } from './details'
import { details as CatchDetails } from './details/catch'
import { details as ConcoursDetails } from './details/concours'
import { details as GalleryDetails } from './details/gallery'
import { details as ipv4Details } from './details/ipv4'
import { details as PortfolioDetails } from './details/portfolio'
import { details as SoKKDetails } from './details/sokk'
import { details as TraBookDetails } from './details/trabook'
import { details as xv6Details } from './details/xv6'

export type ProjectType = {
  thumbnail: StaticImageData
  title: string
  duration: string
  description: string
  stacks: StaticImageData[]
  isWebProject: boolean
  modalDetails: ProjectDetailType
}

const project_portfolio: ProjectType = {
  thumbnail: ThumbNailImagePortfolio,
  title: 'Portfolio',
  duration: '24. 12 ~ 진행 중',
  description: '개인 포토폴리오 웹사이트',
  stacks: [TypescriptIcon, NextJSIcon, TailwindCSSIcon, FirebaseIcon, TanstackQueryIcon],
  isWebProject: true,
  modalDetails: PortfolioDetails,
}

const project_pwa: ProjectType = {
  thumbnail: ThumbNailImageSokk,
  title: 'SoKK',
  duration: '24. 10 ~ 24. 12',
  description: '성균관대학교 SW 라운지 좌석 • 라운지 관리 시스템',
  stacks: [TypescriptIcon, NextJSIcon, TailwindCSSIcon, TanstackQueryIcon, ZustandIcon],
  isWebProject: true,
  modalDetails: SoKKDetails,
}
const project_trabook: ProjectType = {
  thumbnail: ThumbNailImageTraBook,
  title: 'TraBook',
  duration: '24. 07 ~ 24. 10',
  description: '관광데이터 활용 공모전 참가 프로젝트',
  stacks: [TypescriptIcon, NextJSIcon, TailwindCSSIcon, TanstackQueryIcon, ZustandIcon, FramerMotionIcon],
  isWebProject: true,
  modalDetails: TraBookDetails,
}

const project_concour: ProjectType = {
  thumbnail: ThumbNailImageConcour,
  title: 'SKKU Concours',
  duration: '24. 03 ~ 24. 05',
  description: '성균관대학교 무용학과 콩쿨 접수 • 공지 사이트',
  stacks: [TypescriptIcon, NextJSIcon, TailwindCSSIcon, FirebaseIcon, ZustandIcon],
  isWebProject: true,
  modalDetails: ConcoursDetails,
}

const project_gallery: ProjectType = {
  thumbnail: ThumbNailImageGallery,
  title: 'Comit Photo Booth Gallery',
  duration: '23. 08 ~ 23. 09',
  description: '개발 동아리 홍보 및 주점 이벤트 사이트',
  stacks: [JavascriptIcon, ReactIcon, TailwindCSSIcon, FirebaseIcon],
  isWebProject: true,
  modalDetails: GalleryDetails,
}

const project_catch: ProjectType = {
  thumbnail: ThumbNailImageCatch,
  title: 'Catch My Mind',
  duration: '23. 07 ~ 23. 08',
  description: '대학로 행사 및 학회 전시 프로젝트',
  stacks: [JavascriptIcon, ReactIcon, FramerMotionIcon],
  isWebProject: true,
  modalDetails: CatchDetails,
}

// const project_vscode: ProjectType = {
//   thumbnail: ThumbNailImageVSCode,
//   title: 'VSCode Blog Template',
//   duration: '23. 04 ~ 24. 06',
//   description: '개발자를 위한 VSCode 형태의 블로그 템플릿',
//   stacks: [TypescriptIcon, NextJSIcon, TailwindCSSIcon, FirebaseIcon, ZustandIcon],
//   isWebProject: true,
//   modalDetails: TraBookDetails,
// }

// 웹 프로젝트 외
const project_xv6: ProjectType = {
  thumbnail: ThumbNailImageXV6,
  title: 'xv6 OS Modification',
  duration: '23. 08 ~ 24. 11',
  description: 'MIT의 학습용 OS인 xv6 기능을 수정 • 강화',
  stacks: [CIcon],
  isWebProject: false,
  modalDetails: xv6Details,
}

const project_ipv4: ProjectType = {
  thumbnail: ThumbNailImageNetwork,
  title: 'IP Packet Analyze & Socket Programming',
  duration: '23. 08 ~ 24. 11',
  description: 'WireShark를 이용하여 IPv4 • Ipv6 패킷 분석, DNS통신 및 소켓 프로그래밍 구현',
  stacks: [CIcon],
  isWebProject: false,
  modalDetails: ipv4Details,
}

const project_kakaotalk: ProjectType = {
  thumbnail: ThumbNailImageKakao,
  title: 'KakaoTalk Clone Coding',
  duration: '23. 08 ~ 24. 11',
  description: '풀스택 카카오톡 클론 코딩',
  stacks: [JavascriptIcon, FastAPIIcon],
  isWebProject: true,
  modalDetails: TraBookDetails,
}

export const PROJECTS: ProjectType[] = [
  project_portfolio,
  project_pwa,
  project_trabook,
  project_concour,
  project_gallery,
  project_catch,
  project_kakaotalk,
  // project_vscode,
  project_xv6,
  project_ipv4,
]
