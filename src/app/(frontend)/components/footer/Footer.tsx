import Image from 'next/image'
import styles from './footer.module.css'
import { hiragino, inter } from '@/app/lib/fonts'
import Link from 'next/link'
import Button from '../reusable-ui/button/Button'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.section}>
          <h2 className={hiragino.className}>Réseaux sociaux</h2>
          <div className={styles.item}>
            <Image src={'/footer/insta.svg'} width={33} height={33} alt="Logo Instagram" />
            <Link
              href="https://www.instagram.com/bb__ride/"
              target="_blank"
              className={`${styles.link} ${inter.className}`}
            >
              @BB__RIDE
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={hiragino.className}>Nous contacter</h2>
          <div className={styles.item}>
            <Image src={'/footer/wa.svg'} width={25} height={25} alt="Logo WhatsApp" />
            <Link
              href="https://wa.me/33671141771"
              target="_blank"
              className={`${styles.link} ${inter.className}`}
            >
              +33 6 71 14 17 71
            </Link>
          </div>
          <div className={styles.item}>
            <Image src={'/footer/mail.svg'} width={25} height={17} alt="Icône d'enveloppe" />
            <Link
              href="mailto:contact@bb-ride.com"
              target="_blank"
              className={`${styles.link} ${inter.className}`}
            >
              contact@bb-ride.com
            </Link>
          </div>
        </div>
        <Button text="Mentions légales" link="/mentions-legales" />
      </div>
    </footer>
  )
}
