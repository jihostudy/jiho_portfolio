import { motion } from 'motion/react'
import React, { ReactNode } from 'react'

import { fadeIn, fadeOut } from '@lib/animation/animation'
import { Motion } from '@lib/animation/MotionWrapper'

interface SplashScreenProps {
  onAnimationComplete: () => void
}

const SplashScreen = ({ onAnimationComplete }: SplashScreenProps): ReactNode => {
  const characters = 'JIHOSTUDY'.split('')

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 각 글자 간 애니메이션 간격
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  //Functions
  const onEndOfAnimation = async () => {
    const promiseDelay = (delay: number): Promise<undefined> => {
      return new Promise(resolve => setTimeout(resolve, delay))
    }

    await promiseDelay(500)
    // console.log(1)

    onAnimationComplete()
  }

  return (
    <Motion
      tag='main'
      animation={fadeOut(0, -100, 0.6, 5)}
      onAnimationComplete={onEndOfAnimation}
      className='grid h-screen w-3/4 grid-cols-1 grid-rows-[2fr,1fr,1fr] items-center justify-items-center font-pretendard'
    >
      <motion.div
        className='flex items-center justify-center gap-8 self-end text-6xl font-bold'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {characters.map((char, index) => {
          if (char === 'O') {
            return (
              <motion.span key={index} variants={letter} className='mr-10'>
                {char}
              </motion.span>
            )
          } else if (char === 'S') {
            return (
              <motion.span key={index} variants={letter} className='ml-10'>
                {char}
              </motion.span>
            )
          } else {
            return (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            )
          }
        })}
      </motion.div>

      {/* Fade-in 문구 */}
      <Motion tag='p' animation={fadeIn(-40, 0, 0.8, 2, true)} className='mb-6 self-end text-lg font-bold'>
        프론트엔드 개발자 김지호 포트폴리오
      </Motion>
      <Motion
        tag='p'
        animation={fadeIn(-40, 0, 1.2, 3, true)}
        className='self-start text-2xl font-bold underline decoration-yellow-300 decoration-solid decoration-4 underline-offset-4'
      >
        입실론을 모아, 꿈을 향해 꾸준히
      </Motion>
    </Motion>
  )
}

export default SplashScreen
