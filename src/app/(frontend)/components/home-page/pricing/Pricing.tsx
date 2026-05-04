import { HomePage } from '@/payload-types'
import Button from '../../reusable-ui/button/Button'
import styles from './pricing.module.css'
import Title from '../../reusable-ui/title/Title'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'

type Props = {
  pricingData: NonNullable<HomePage['etapes']>
}

export default function Pricing({ pricingData }: Props) {
  return (
    <section className={styles.princingContainer}>
      <div className={styles.descriptions}>
        <div className={styles.description}>
          <Title subtitle={null} title={pricingData.premier_titre} className={null} />
          <Paragraph
            className={styles.paragraph}
            containButton={false}
            textButton=""
            link=""
            data={pricingData.premier_paragraphe}
          />
        </div>
        <div className={styles.description}>
          <Title subtitle={null} title={pricingData.deuxieme_titre} className={null} />
          <Paragraph
            className={styles.paragraph}
            containButton={false}
            textButton=""
            link=""
            data={pricingData.deuxieme_paragraphe}
          />
        </div>
      </div>
      <Button text={pricingData.cta} link={pricingData.lien} />
    </section>
  )
}
