import About from '@components/About'
import { size } from '@lib/size'
import { cn } from '@lib/utils'

export default function Home() {
  return (
    <div className='font-pretendard flex w-full flex-col items-center justify-start'>
      <About className={cn('my-6 px-6', size)} />
    </div>
  )
}
