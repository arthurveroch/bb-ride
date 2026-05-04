import { HomePage } from '@/payload-types'
import styles from './faq.module.css'
import Title from '../../reusable-ui/title/Title'
import Question from './Question'

type Props = {
  faqData: HomePage['faq']
}

export default function Faq({ faqData }: Props) {
  return (
    <section className={styles.faqContainer}>
      <Title subtitle={null} title={'FAQ - Questions fréquentes'} className={null} />
      <div className={styles.faq}>
        {faqData?.map((question) => {
          return <Question key={question.id} question={question} />
        })}
      </div>
    </section>
  )
}
