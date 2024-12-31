import React, { ReactNode } from 'react'

const Backdrop = (): ReactNode => {
  return <div className='bg-jhBackdrop01 fixed top-1/2 z-20 h-screen w-screen -translate-y-1/2' />
}

export default Backdrop
