import { inter } from '@/app/lib/fonts'
import styles from './personnalisation.module.css'
import { Professionnal } from '@/payload-types'
import ArgumentCard from '../../home-page/arguments/ArgumentCard'

type Props = {
  persoData: Professionnal['equipements']
}

export default function Personnalisation({ persoData }: Props) {
  return (
    <section className={styles.persoContainer}>
      <div className={styles.perso}>
        <h2 className={inter.className}>Chaque véhicule peut être entièrement personnalisé :</h2>
        <div className={styles.arguments}>
          {persoData?.map((argument) => (
            <ArgumentCard key={argument.id} argument={argument} />
          ))}
        </div>
      </div>
    </section>
  )
}
