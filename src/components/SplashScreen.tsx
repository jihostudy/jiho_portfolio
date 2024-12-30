import React, { ReactNode } from 'react'

const SplashScreen = (): ReactNode => {
  return (
    <main className='flex items-center justify-center gap-10'>
      <div className='flex items-center justify-evenly'>
        <span>J</span>
        <span>I</span>
        <span>H</span>
        <span>O</span>
      </div>
      <div className='flex items-center justify-evenly'>
        <span>S</span>
        <span>T</span>
        <span>U</span>
        <span>D</span>
        <span>Y</span>
      </div>
    </main>
  )
}

export default SplashScreen
