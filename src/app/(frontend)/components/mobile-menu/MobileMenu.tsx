'use client'

import styles from './mobile-menu.module.css'
import { useMenu } from '@/app/context/MobileMenuContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { inter } from '@/app/lib/fonts'

export default function MobileMenu() {
  const { open, setOpen } = useMenu()
  const pathname = usePathname()

  if (open) {
    return (
      <div className={styles.mobileMenuContainer}>
        <ul className={styles.menuItems}>
          {pathname !== '/professionnels' && (
            <li className={inter.className}>
              <Link href={'/professionnels'}>Pour les professionnels</Link>
            </li>
          )}
          {pathname !== '/' && (
            <li className={inter.className}>
              <Link href={'/'}>Pour les particuliers</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }

  return
}
