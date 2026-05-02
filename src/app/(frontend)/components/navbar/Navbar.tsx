'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import { handwind, inter } from '@/app/lib/fonts'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Button from '../reusable-ui/button/Button'
import PhoneButton from '../reusable-ui/phone/PhoneButton'
import Link from 'next/link'
import { useMenu } from '@/app/context/MobileMenuContext'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const { open, setOpen } = useMenu()

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          onClick={() => router.push('/')}
          src={'/logo.svg'}
          width={64}
          height={60}
          alt="Logo de BB-Ride"
        />
        <span className={styles.separator} />
        <p className={handwind.className}>Enjoy the lifestyle</p>
      </div>
      <div className={styles.menuContainer}>
        <ul className={`${styles.menu} ${inter.className}`}>
          {pathname !== '/professionnels' && (
            <li>
              <Link href={'/professionnels'}>Pour les professionnels</Link>
            </li>
          )}

          {pathname !== '/' && (
            <li>
              <Link href={'/'}>Pour les particuliers</Link>
            </li>
          )}
        </ul>
        <div className={styles.ctaContainer}>
          <Button link="/contact" text="Réserver mon véhicule" />
          <PhoneButton />
        </div>
      </div>
      <div className={styles.burger}>
        {!open ? (
          <Image
            onClick={() => setOpen(true)}
            src={'/navbar/burger.svg'}
            width={41}
            height={41}
            alt="Icône représentant un menu burger"
          />
        ) : (
          <Image
            onClick={() => setOpen(false)}
            src={'/navbar/close.svg'}
            width={41}
            height={41}
            alt="Icône représentant une croix pour fermer le menu mobile"
          />
        )}
      </div>
    </nav>
  )
}
