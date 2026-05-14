import { Professionnal } from '@/payload-types'
import styles from './histoire.module.css'
import Title from '../../reusable-ui/title/Title'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'

type Props = {
  histoireData: NonNullable<Professionnal['histoire']>
}

export default function Histoire({ histoireData }: Props) {
  return (
    <section className={styles.histoireContainer}>
      <div className={styles.histoire}>
        <div className={styles.contentContainer}>
          <div
            className={styles.image}
            style={
              typeof histoireData.image === 'object'
                ? {
                    background: `url(${histoireData.image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                : {}
            }
          />
          <div className={styles.content}>
            <Title title={histoireData.titre} subtitle={null} className={null} />
            <Paragraph
              data={histoireData.paragraphe}
              containButton={true}
              textButton={histoireData.cta}
              link={histoireData.lien}
              className={styles.paragraph}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
