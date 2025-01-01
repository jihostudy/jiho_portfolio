'use client'
import Link from 'next/link'
import React, { ReactNode, useEffect } from 'react'
import { useToggle } from 'usehooks-ts'

import LucideIcon from '@lib/icons/LucideIcon'
import { cn } from '@lib/utils'

export const LINKS = ['About', 'Skills', 'Projects', 'Contact']

const Header = (): ReactNode => {
  const [value, toggle, setValue] = useToggle(false)

  useEffect(() => {
    console.log(value)
  }, [value])

  const test = () => {
    console.log('this is by navbar ')
    toggle()
  }
  return (
    <header
      className={cn(
        'fixed top-0 z-10 mx-auto flex h-[10dvh] items-center justify-between px-6 backdrop-blur-sm',
        'w-full max-w-xl md:max-w-4xl lg:max-w-7xl',
      )}
    >
      <Link href={'./'} className='flex h-full w-max max-w-xs items-center justify-start font-bebas text-3xl'>
        JIHOSTUDY
      </Link>
      <LucideIcon name='Menu' size={35} className='lg:hidden' onMouseUp={toggle} />

      <MobileNavBar
        isOpen={value}
        onClick={test}
        className='absolute right-1/2 top-full block translate-x-1/2 lg:hidden'
      />
      <DesktopNavBar className='hidden lg:block' />
    </header>
  )
}

export default Header

interface MobileNavBarProps {
  isOpen: boolean
  onClick: () => void

  className?: string
}

const MobileNavBar = ({ isOpen, onClick, className }: MobileNavBarProps): ReactNode => {
  // const ref = useRef<HTMLElement>(null)
  // useOnClickOutside(ref as RefObject<HTMLElement>, onClick)
  return isOpen ? (
    <nav
      // ref={ref}
      onClick={onClick}
      className={cn('w-full rounded-lg bg-jhWhite01 px-6 font-montserrat font-semibold opacity-80', className)}
    >
      <ul className='flex w-full flex-col items-center justify-start text-lg'>
        {LINKS.map((link, index) => (
          <li
            key={link}
            className={cn(
              'cursor-pointer py-2 text-center',
              index !== LINKS.length - 1 && 'border-b-[1px] border-solid border-jhGray01',
            )}
          >
            <Link className='block w-full' href={`#${LINKS[index]}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <></>
  )
}
interface DesktopNavBarProps {
  className?: string
}

const DesktopNavBar = ({ className }: DesktopNavBarProps): ReactNode => {
  return (
    <nav className={cn('font-montserrat font-semibold', className)}>
      <ul className='flex items-center justify-evenly gap-6 text-lg'>
        {LINKS.map((link, index) => (
          <li key={link} className='cursor-pointer'>
            <Link href={`#${LINKS[index]}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
