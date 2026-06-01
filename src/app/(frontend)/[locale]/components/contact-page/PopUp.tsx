'use client'

import { useTranslations } from 'next-intl'
import { inter } from '@/app/lib/fonts'
import Title from '../reusable-ui/title/Title'
import styles from './popup.module.css'
import Image from 'next/image'
import { SetStateAction } from 'react'

type Props = {
  setIsOpenPopUp: React.Dispatch<SetStateAction<boolean>>
}

export default function PopUp({ setIsOpenPopUp }: Props) {
  const t = useTranslations('contact.popup')

  return (
    <div className={styles.container}>
      <div className={styles.popUp}>
        <Image
          onClick={() => setIsOpenPopUp(false)}
          src={'/contact/popup-cross.svg'}
          width={39}
          height={37}
          alt={t('closeAlt')}
        />
        <Title subtitle={null} title={t('title')} className={null} />
        <p className={inter.className}>{t('message')}</p>
      </div>
    </div>
  )
}
