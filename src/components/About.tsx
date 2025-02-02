import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import LucideIcon from '@lib/icons/LucideIcon'
import { cn } from '@lib/utils'
import GithubImage from '@public/image/github.webp'
import ProfileImage from '@public/image/profile_image.webp'
import TistoryImage from '@public/image/tistory.webp'

interface AboutProps {
  className?: string
}

const EXTERNAL_LINKS = {
  github: 'https://github.com/jihostudy',
  blog: 'https://jihoplayground.tistory.com/',
  NPMLibrary: 'https://github.com/jihostudy/useHooks',
}
const INTRODUCE = [
  <>안녕하세요! 개발자 김지호입니다.</>,
  <>
    저는 <span className='font-bold'>입실론만큼 작은 노력의 힘을 믿는 노력형 개발자</span>입니다.
  </>,
  <>
    수학에서 입실론은 아주 작은 값이지만, <span className='font-bold'>이 작은 값들이 모여 큰 결과</span>를 만들어냅니다.
  </>,
  <>매일매일의 작은 노력과 배움을 통해 끊임없이 성장하며 더 뛰어난 개발자가 되기를 꿈꿉니다.</>,
  <br key='line-split' />,
  <>
    관심사 분리가 철저한 코드를 작성하는 <span className='font-bold'>DX에 관심</span>이 많아,
  </>,

  <>
    <Link
      href={EXTERNAL_LINKS.NPMLibrary}
      target='_blank'
      className='cursor-pointer font-bold text-gray-500 underline underline-offset-4 hover:text-jhBlack01'
    >
      Custom Hook NPM Package (usehooks-jihostudy)
    </Link>
    를 제작해보고 있습니다.
  </>,

  <br key='line-split' />,

  <>함께 개발에 대해 이야기할 수 있는 적극적 환경에서의 업무를 꿈꿉니다.</>,
]
const About = ({ className }: AboutProps): ReactNode => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      id={'About'}
      className={cn(className, 'grid grid-cols-1 gap-10 lg:grid-cols-[3fr,7fr] lg:grid-rows-1 lg:gap-6')}
    >
      <div className='flex w-full flex-col items-center justify-start'>
        <Image
          src={ProfileImage}
          alt='profile-image'
          priority={true}
          placeholder='blur'
          width={500}
          className='w-3/5 min-w-44 lg:w-full'
          // sizes='60vw, (min-width: 1024px) 100vw'
        />
        <nav className='mt-4 flex items-center justify-center gap-8 text-xs font-bold lg:text-base'>
          <Link
            href={EXTERNAL_LINKS.github}
            target='_blank'
            className='flex cursor-pointer items-center justify-center gap-3'
          >
            <Image alt='github-image' src={GithubImage} />
            Github
          </Link>
          <Link
            href={EXTERNAL_LINKS.blog}
            target='_blank'
            className='flex cursor-pointer items-center justify-center gap-3'
          >
            <Image alt='tistory-image' src={TistoryImage} />
            Blog
          </Link>
        </nav>
      </div>
      <div className='w-full'>
        <p className='font-montserrat text-lg font-bold lg:text-2xl'>About Me</p>
        <ul className='mt-4 flex flex-col items-start justify-start gap-2'>
          {INTRODUCE.map((introduce, index) => (
            <li key={index} className='text-sm lg:text-lg'>
              {introduce}
            </li>
          ))}
        </ul>
        <ul className='mt-16 grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:grid-rows-2'>
          <li className='flex items-center gap-6'>
            <div className='flex min-w-14 flex-col items-center justify-between gap-2 text-xs font-bold'>
              <LucideIcon name='Pencil' strokeWidth={3} />
              학력
            </div>
            <div className='relative text-sm font-semibold'>
              성균관대학교 수학, 소프트웨어학(복수전공)
              <div className='absolute -bottom-5 right-0 flex items-end text-xs font-bold'>SW GPA 4.27/4.5</div>
            </div>
          </li>
          <li className='flex items-center gap-6'>
            <div className='flex min-w-14 flex-col items-center justify-between gap-2 text-xs font-bold'>
              <LucideIcon name='Mail' strokeWidth={3} />
              이메일
            </div>
            <p className='text-sm font-semibold'>cale.jiho@gmail.com</p>
          </li>
          <li className='flex items-center gap-6'>
            <div className='flex min-w-14 flex-col items-center justify-between gap-2 text-xs font-bold'>
              <LucideIcon name='MapPin' strokeWidth={3} />
              주소지
            </div>
            <p className='text-sm font-semibold'>경기도 성남시 판교역로</p>
          </li>
          <li className='flex items-center gap-6'>
            <div className='flex min-w-14 flex-col items-center justify-between gap-2 text-xs font-bold'>
              <LucideIcon name='Calendar' strokeWidth={3} />
              생년월일
            </div>
            <p className='text-sm font-semibold'>00.09.29</p>
          </li>
        </ul>
      </div>
    </motion.section>
  )
}

export default About
