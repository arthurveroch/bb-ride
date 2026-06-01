import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import Title from '../../reusable-ui/title/Title'
import styles from './secteurs.module.css'
import type { Professionnal } from '@/payload-types'

type Props = {
  secteursData: NonNullable<Professionnal['secteurs']>
}

export default function Secteurs({ secteursData }: Props) {
  return (
    <section className={styles.secteursContainer}>
      <div className={styles.secteurs}>
        <div className={styles.secteurDescription}>
          <Title title={secteursData.premier_titre} className={styles.title} subtitle={null} />
          <Paragraph
            data={secteursData.premier_paragraphe}
            className={styles.paragraph}
            link={''}
            textButton={''}
            containButton={false}
          />
        </div>
        <div
          className={styles.image}
          style={
            typeof secteursData.image === 'object'
              ? {
                  background: `url(${secteursData.image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        />
        <div className={styles.secteurDescription}>
          <Title title={secteursData.deuxieme_titre} className={styles.title} subtitle={null} />
          <Paragraph
            data={secteursData.deuxieme_paragraphe}
            className={styles.paragraph}
            link={''}
            textButton={''}
            containButton={false}
          />
        </div>
      </div>
    </section>
  )
}
