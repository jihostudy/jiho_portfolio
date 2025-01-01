import type { Metadata } from 'next'

import Footer from '@components/common/Footer'
import { cn } from '@lib/utils'
import { bebasNeue, montserrat, pretendard } from '@public/fonts/font'

import Header from '../components/common/Header'

import './globals.css'

export const metadata: Metadata = {
  title: '프론트엔드 개발자 김지호 포토폴리오',
  description: '입실론만큼의 작은 노력의 힘을 믿는 프론트엔드 개발자 김지호입니다.',
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
