import React, { ReactNode } from 'react'

import { cn } from '@lib/utils'

const Links = ['About me', 'Skills', 'Projects', 'Contact']
const Header = (): ReactNode => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 mx-auto flex h-16 items-center justify-between bg-jhWhite01 px-6 backdrop-blur-sm',
        'w-full max-w-xl md:max-w-4xl lg:max-w-7xl',
      )}
    >
      <p className='flex h-full w-max max-w-xs items-center justify-start font-bebas text-3xl'>JIHOSTUDY</p>
      <nav className='hidden font-montserrat font-semibold lg:block'>
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
