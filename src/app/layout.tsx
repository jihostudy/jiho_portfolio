import type { Metadata } from 'next'

import { cn } from '@lib/utils'
import { bebasNeue, montserrat, pretendard } from '@public/fonts/font'
import { Analytics } from '@vercel/analytics/react'

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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
