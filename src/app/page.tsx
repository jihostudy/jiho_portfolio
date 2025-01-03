'use client'
import { useState } from 'react'

import About from '@components/About'
import Footer from '@components/common/Footer'
import Header from '@components/common/Header'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import SplashScreen from '@components/SplashScreen'
import { cn } from '@lib/utils'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleAnimationComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <SplashScreen onAnimationComplete={handleAnimationComplete} />
  }
  return (
    <>
      <Header />
      <main className='flex w-full grow flex-col items-center justify-start font-pretendard'>
        <About className={cn('px-6 pb-6 pt-[10dvh]', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
        <Skills className={cn('px-6 pt-[10dvh]', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
        <Projects className={cn('px-6 pt-[10dvh]', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
      </main>
      <Footer />
    </>
  )
}
