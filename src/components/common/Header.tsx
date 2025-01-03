'use client'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useToggle } from 'usehooks-ts'

import LucideIcon from '@lib/icons/LucideIcon'
import { cn } from '@lib/utils'

export const LINKS = ['About', 'Skills', 'Projects']

const Header = (): ReactNode => {
  const [value, toggle, setValue] = useToggle(false)

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
        onClick={toggle}
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

// animations
const list = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.8,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
  },
}

const item = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
}
const MobileNavBar = ({ isOpen, onClick, className }: MobileNavBarProps): ReactNode => {
  // const ref = useRef<HTMLElement>(null)
  // useOnClickOutside(ref as RefObject<HTMLElement>, onClick)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={list}
          // ref={ref}
          onClick={onClick}
          className={cn('w-full rounded-lg bg-jhWhite01 px-6 font-montserrat font-semibold', className)}
        >
          <ul className='flex w-full flex-col items-center justify-start text-lg'>
            {LINKS.map((link, index) => (
              <motion.li
                key={link}
                variants={item}
                className={cn(
                  'w-full cursor-pointer py-2 text-center',
                  index !== LINKS.length - 1 && 'border-b-[1px] border-solid border-jhGray01',
                )}
              >
                <Link className='block w-full' href={`#${LINKS[index]}`}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* <Motion
        tag='ul'
        animation={{
          variants: list,
        }}
        className='flex w-full flex-col items-center justify-start text-lg'
      >
        {LINKS.map((link, index) => (
          <Motion
            key={link}
            tag='li'
            animation={{
              variants: item,
            }}
            className={cn(
              'w-full cursor-pointer py-2 text-center',
              index !== LINKS.length - 1 && 'border-b-[1px] border-solid border-jhGray01',
            )}
          >
            <Link className='block w-full' href={`#${LINKS[index]}`}>
              {link}
            </Link>
          </Motion>
        ))}
      </Motion> */}
        </motion.nav>
      )}
    </AnimatePresence>
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
