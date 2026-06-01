import Button from '../../reusable-ui/button/Button'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import Title from '../../reusable-ui/title/Title'
import styles from './experience.module.css'
import type { HomePage } from '@/payload-types'

type Props = {
  experiencesData: NonNullable<HomePage['experiences']>
}

export default function Experiences({ experiencesData }: Props) {
  return (
    <section className={styles.experiencesContainer}>
      <div className={styles.experiences}>
        <div
          className={styles.image}
          style={
            typeof experiencesData.image === 'object'
              ? {
                  background: `url(${experiencesData.image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        />
        <div className={styles.descriptions}>
          <div className={styles.description}>
            <Title className={null} subtitle={null} title={experiencesData.premier_titre} />
            <div
              className={styles.imageMobile}
              style={
                typeof experiencesData.image === 'object'
                  ? {
                      background: `url(${experiencesData.image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            />
            <Paragraph
              className={styles.paragraph}
              data={experiencesData.premier_paragraphe}
              link={''}
              containButton={false}
              textButton={''}
            />
          </div>
          <div className={styles.description}>
            <Title
              className={styles.littleTitle}
              subtitle={null}
              title={experiencesData.deuxieme_titre}
            />
            <Paragraph
              className={styles.paragraph}
              data={experiencesData.deuxieme_paragraphe}
              link={''}
              containButton={false}
              textButton={''}
            />
            <Button text={experiencesData.cta} link={experiencesData.lien} />
          </div>
        </div>
      </div>
    </section>
  )
}
