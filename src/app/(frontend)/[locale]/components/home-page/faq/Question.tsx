'use client'

import { inter } from '@/app/lib/fonts'
import styles from './question.module.css'
import { useState } from 'react'
import Image from 'next/image'

type Props = {
  question: { question: string; reponse: string; id?: string | null | undefined }
}

export default function Question({ question }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.questionReponseContainer}>
      <div style={open ? { background: '#E8D8C3' } : {}} className={styles.questionContainer}>
        <div className={`${styles.question} ${inter.className}`}>{question.question}</div>
        {!open ? (
          <Image
            onClick={() => setOpen(true)}
            src={'/faq/plus.svg'}
            width={16}
            height={16}
            alt="Icone représentant un plus"
          />
        ) : (
          <Image
            onClick={() => setOpen(false)}
            src={'/faq/moins.svg'}
            width={16}
            height={4}
            alt="Icone représentant un moins"
          />
        )}
      </div>
      {open && (
        <div className={styles.reponse}>
          <p className={inter.className}>{question.reponse}</p>
        </div>
      )}
    </div>
  )
}
