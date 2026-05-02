import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import Title from '../../reusable-ui/title/Title'
import styles from './moments.module.css'
import type { HomePage } from '@/payload-types'

type Props = {
  momentsData: NonNullable<HomePage['about']>
}

export default function Moments({ momentsData }: Props) {
  return (
    <section className={styles.momentsContainer}>
      <div className={styles.moments}>
        <Title title={momentsData.titre} subtitle={momentsData.sous_titre} />
        <div
          style={
            typeof momentsData.background === 'object'
              ? {
                  background: `url(${momentsData.background.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
          className={styles.paragraphContainer}
        >
          <Paragraph
            className={styles.paragraph}
            data={momentsData.paragraphe}
            textButton={momentsData.cta}
            link={momentsData.lien}
          />
        </div>
        <div className={styles.paragraphMobileContainer}>
          <Paragraph
            className={styles.paragraph}
            data={momentsData.paragraphe}
            textButton={momentsData.cta}
            link={momentsData.lien}
          />
          <div className={styles.imageMobile}>
            <img src={momentsData.background.url} />
          </div>
        </div>
      </div>
    </section>
  )
}
