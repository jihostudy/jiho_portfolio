import React, { ReactNode } from 'react'

const Header = (): ReactNode => {
  return (
    <header className='border-grey bg-white01 sticky top-0 z-10 flex h-16 w-full items-center justify-center border-b border-solid px-6'>
      <p className='text-t2 flex h-full w-full max-w-xs items-center justify-start font-bold md:max-w-5xl'>JIHOSTUDY</p>
    </header>
  )
}

export default Header
