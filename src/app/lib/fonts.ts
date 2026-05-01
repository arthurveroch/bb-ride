import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['700', '400', '300'],
  preload: false,
})

export const hiragino = localFont({
  src: '../../../public/fonts/HiraMinProN.woff2',
  preload: false,
})

export const handwind = localFont({
  src: '../../../public/fonts/Handwind.woff2',
  preload: false,
})
