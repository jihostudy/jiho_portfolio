import React, { ReactNode } from 'react'

import { size } from '@lib/size'
import { cn } from '@lib/utils'

const Links = ['About me', 'Skills', 'Projects', 'Contact']
const Header = (): ReactNode => {
  return (
    <header
      className={cn(
        'bg-jhWhite01 sticky top-0 z-10 mx-auto flex h-16 items-center justify-between px-6 backdrop-blur-sm',
        size,
      )}
    >
      <p className='font-bebas flex h-full w-max max-w-xs items-center justify-start text-3xl'>JIHOSTUDY</p>
      <nav className='font-montserrat hidden font-semibold lg:block'>
        <ul className='flex items-center justify-evenly gap-6 text-lg'>
          {Links.map(link => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
