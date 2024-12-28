import type { Metadata } from 'next'

import { bebasNeue, montserrat, pretendard } from '@public/fonts/font'

import './globals.css'
import { cn } from '@lib/utils'
import Header from '../components/common/Header'

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
      <body className={cn(pretendard.variable, bebasNeue.variable, montserrat.variable)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
