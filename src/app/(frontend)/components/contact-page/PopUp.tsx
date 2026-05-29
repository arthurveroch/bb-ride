import { inter } from '@/app/lib/fonts'
import Title from '../reusable-ui/title/Title'
import styles from './popup.module.css'
import Image from 'next/image'
import { SetStateAction } from 'react'

type Props = {
  setIsOpenPopUp: React.Dispatch<SetStateAction<boolean>>
}

export default function PopUp({ setIsOpenPopUp }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.popUp}>
        <Image
          onClick={() => setIsOpenPopUp(false)}
          src={'/contact/popup-cross.svg'}
          width={39}
          height={37}
          alt="Icône représentant une crois pour fermer le popup"
        />
        <Title subtitle={null} title="Merci !" className={null} />
        <p className={inter.className}>
          Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    </div>
  )
}
