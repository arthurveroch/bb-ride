'use client'

import { useState } from 'react'
import styles from './form.module.css'
import Title from '../reusable-ui/title/Title'
import { inter } from '@/app/lib/fonts'
import Input from './Input'

export default function Form() {
  const [type, setType] = useState('Particulier')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')

  return (
    <div className={styles.formContainer}>
      <Title title="Nous contacter" subtitle={null} className={null} />
      <p className={inter.className}>
        Une idée de collaboration, une question précise ou juste envie de dire bonjour ? Ne soyez
        pas timide, envoyez-moi un message via ce formulaire. Je lis chaque message personnellement
        et je fais mon maximum pour vous répondre au plus vite.
      </p>
      <form className={styles.form}>
        <Input label="Votre nom" placeholder="Dubois" required={true} />
        <Input label="Votre Prénom" placeholder="Jean" required={true} />
        <Input label="Votre e-mail" placeholder="jean.dubois@gmail.com" required={true} />
        <Input label="Votre téléphone" placeholder="06 00 00 00 00" required={false} />
      </form>
    </div>
  )
}
