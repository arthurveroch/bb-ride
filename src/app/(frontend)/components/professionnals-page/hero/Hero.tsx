import styles from './hero.module.css'
import type { Professionnal } from '@/payload-types'
import { inter } from '@/app/lib/fonts'
import Button from '../../reusable-ui/button/Button'
import { hiragino } from '@/app/lib/fonts'

type Props = {
  heroData: NonNullable<Professionnal['hero']>
}
export default function Hero({ heroData }: Props) {
  return (
    <section
      style={
        typeof heroData.background === 'object'
          ? {
              background: `url(${heroData.background.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }
          : {}
      }
      className={styles.heroContainer}
    >
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1 className={hiragino.className}>{heroData.title}</h1>
        </div>
        <div className={styles.subTitle}>
          <p className={inter.className}>{heroData.sous_titre}</p>
        </div>
      </div>
      <div className={styles.ctaContainer}>
        <Button link="/contact" text={heroData.cta} />
        <div className={`${styles.subCta} ${hiragino.className}`}>{heroData.sous_cta}</div>
      </div>
    </section>
  )
}
