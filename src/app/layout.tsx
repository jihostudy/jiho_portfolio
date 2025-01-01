import type { Metadata } from 'next'

import Footer from '@components/common/Footer'
import { cn } from '@lib/utils'
import { bebasNeue, montserrat, pretendard } from '@public/fonts/font'

import Header from '../components/common/Header'

import './globals.css'

export const metadata: Metadata = {
  title: 'jihostudy',
  description: 'welcome to jihostudy portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          pretendard.variable,
          bebasNeue.variable,
          montserrat.variable,
          'relative flex flex-col items-center justify-start',
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
