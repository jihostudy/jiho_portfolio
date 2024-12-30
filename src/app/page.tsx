import About from '@components/About'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import { cn } from '@lib/utils'

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center justify-start font-pretendard'>
      <About className={cn('my-6 mt-[10dvh] px-6', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
      <Skills className={cn('my-8 px-6', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
      <Projects className={cn('my-8 px-6', 'w-full max-w-xl md:max-w-4xl lg:max-w-7xl')} />
    </div>
  )
}
