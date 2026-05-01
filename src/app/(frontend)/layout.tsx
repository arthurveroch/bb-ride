import Navbar from './components/navbar/Navbar'
import './styles.css'

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
