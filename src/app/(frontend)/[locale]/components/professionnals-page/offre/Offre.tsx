import { Professionnal } from '@/payload-types'
import styles from './offre.module.css'
import Title from '../../reusable-ui/title/Title'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'

type Props = {
  offreData: NonNullable<Professionnal['offre']>
}

export default function Offre({ offreData }: Props) {
  return (
    <section className={styles.offreContainer}>
      <Title title={offreData.titre} subtitle={null} className={null} />
      <div
        className={styles.offre}
        style={
          typeof offreData.background === 'object'
            ? {
                background: `url(${offreData.background.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      >
        <Paragraph
          data={offreData.paragraphe}
          containButton={true}
          textButton={offreData.cta}
          link={offreData.lien}
          className={styles.paragraph}
        />
      </div>
    </section>
  )
}
