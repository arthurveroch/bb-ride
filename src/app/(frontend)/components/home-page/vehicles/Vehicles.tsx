import Image from 'next/image'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import Title from '../../reusable-ui/title/Title'
import styles from './vehicles.module.css'
import type { HomePage } from '@/payload-types'

type Props = {
  vehiclesData: NonNullable<HomePage['vehicules']>
}

export default function Vehicles({ vehiclesData }: Props) {
  return (
    <section className={styles.vehiclesContainer}>
      <div className={styles.vehicles}>
        <Title className={null} title={vehiclesData.titre} subtitle={null} />
        <div className={styles.description}>
          <div
            className={styles.image}
            style={
              typeof vehiclesData.premiere_image === 'object'
                ? {
                    background: `url(${vehiclesData.premiere_image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                : {}
            }
          />
          <div className={styles.electric}>
            <Image
              src={'/vehicles/electric-icon.svg'}
              width={57}
              height={71}
              alt="Icône représentant une charge électrique"
            />
          </div>
          <Paragraph
            className={styles.paragraph}
            containButton={false}
            data={vehiclesData.paragraphe}
            link={'/'}
            textButton="/"
          />

          <div
            className={styles.image}
            style={
              typeof vehiclesData.deuxieme_image === 'object'
                ? {
                    background: `url(${vehiclesData.deuxieme_image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                : {}
            }
          />
        </div>
      </div>
    </section>
  )
}
