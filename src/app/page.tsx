import About from '@components/About'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import { cn } from '@lib/utils'

export default function Home() {
  return (
    <main className='flex w-full grow flex-col items-center justify-start font-pretendard'>
      <About className={cn('px-6 pb-6 pt-[10dvh]', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
      <Skills className={cn('px-6 pt-[10dvh]', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
      <Projects className={cn('px-6 pt-[10dvh]', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
    </main>
  )
}
