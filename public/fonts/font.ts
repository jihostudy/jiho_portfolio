import { Bebas_Neue, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})

// export const pretendard = localFont({
//   src: './PretendardVariable.woff2',
//   weight: '45 920',
//   variable: '--font-pretendard',
// })

export const pretendard = localFont({
  src: [
    {
      path: 'subset-PretendardVariable-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
})
