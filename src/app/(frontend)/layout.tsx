import { MobileMenuContextProvider } from '../context/MobileMenuContext'
import MobileMenu from './components/mobile-menu/MobileMenu'
import Navbar from './components/navbar/Navbar'
import './styles.css'

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <MobileMenuContextProvider>
          <Navbar />
          <MobileMenu />
          <main>{children}</main>
        </MobileMenuContextProvider>
      </body>
    </html>
  )
}
