'use client'

import Button from '../button/Button'
import PhoneButton from '../phone/PhoneButton'
import styles from './mobile-contact-button.module.css'
import { usePathname } from 'next/navigation'

export default function MobileContactButtons() {
  const pathname = usePathname()

  if (pathname !== 'contact') {
    return (
      <div className={styles.mobileContactContainer}>
        <Button text="Réserver mon véhicule" link="/contact" />
        <PhoneButton />
      </div>
    )
  } else {
    return
  }
}
