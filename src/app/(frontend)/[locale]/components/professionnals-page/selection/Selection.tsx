import { Professionnal } from '@/payload-types'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import Title from '../../reusable-ui/title/Title'
import styles from './selection.module.css'

type Props = {
  selectionData: NonNullable<Professionnal['selection']>
}

export default function Selection({ selectionData }: Props) {
  return (
    <section className={styles.selectionContainer}>
      <div className={styles.selection}>
        <div className={styles.contentContainer}>
          <Title title={selectionData.titre} subtitle={null} className={null} />
          <Paragraph
            data={selectionData.paragraphe}
            containButton={true}
            link={selectionData.lien}
            textButton={selectionData.cta}
            className={styles.paragraph}
          />
        </div>
        <div
          className={styles.image}
          style={
            typeof selectionData.image === 'object'
              ? {
                  background: `url(${selectionData.image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        />
      </div>
    </section>
  )
}
