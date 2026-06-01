import { MobileMenuContextProvider } from '../../context/MobileMenuContext'
import Footer from './components/footer/Footer'
import MobileMenu from './components/mobile-menu/MobileMenu'
import Navbar from './components/navbar/Navbar'
import MobileContactButtons from './components/reusable-ui/mobile-contact/MobileContactButtons'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import './styles.css'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <MobileMenuContextProvider>
            <Navbar />
            <MobileContactButtons />
            <MobileMenu />
            <MobileContactButtons />
            <main>{children}</main>
            <Footer />
          </MobileMenuContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
