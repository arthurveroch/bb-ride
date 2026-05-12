import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import Title from '../../reusable-ui/title/Title'
import styles from './solutions.module.css'
import type { Professionnal } from '@/payload-types'

type Props = {
  solutionsData: NonNullable<Professionnal['solution']>
}

export default function Moments({ solutionsData }: Props) {
  return (
    <section className={styles.momentsContainer}>
      <div className={styles.moments}>
        <Title className={null} title={solutionsData.title} subtitle={null} />
        <div
          style={
            typeof solutionsData.background === 'object'
              ? {
                  background: `url(${solutionsData.background.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
          className={styles.paragraphContainer}
        >
          <Paragraph
            className={styles.paragraph}
            data={solutionsData.paragraph}
            textButton={solutionsData.cta}
            link={solutionsData.lien}
            containButton={true}
          />
        </div>
        <div className={styles.paragraphMobileContainer}>
          <Paragraph
            className={styles.paragraph}
            data={solutionsData.paragraph}
            textButton={solutionsData.cta}
            link={solutionsData.lien}
            containButton={true}
          />
          <div className={styles.imageMobile}>
            <img
              src={
                typeof solutionsData.background === 'object'
                  ? (solutionsData.background.url ?? undefined)
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
