'use client'

import { useState } from 'react'
import styles from './form.module.css'
import Title from '../reusable-ui/title/Title'
import { inter } from '@/app/lib/fonts'
import Input from './Input'
import ButtonForm from './ButtonForm'
import { sendMessage } from '@/app/actions/actions'
import PopUp from './PopUp'

export default function Form() {
  const [type, setType] = useState('Un particulier')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [isOpenPopUp, setIsOpenPopUp] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await sendMessage({ type, prenom, nom, mail, phone, details })
      setIsOpenPopUp(true)
    } catch (error) {
      console.error(error)
    } finally {
      setType('')
      setPrenom('')
      setNom('')
      setMail('')
      setPhone('')
      setDetails('')
    }
  }

  return (
    <>
      <div className={styles.formContainer}>
        <Title title="Nous contacter" subtitle={null} className={null} />
        <p className={inter.className}>
          Une idée de collaboration, une question précise ou juste envie de dire bonjour ? Ne soyez
          pas timide, envoyez-moi un message via ce formulaire. Je lis chaque message
          personnellement et je fais mon maximum pour vous répondre au plus vite.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.selector} ${inter.className}`}>
            <label>
              Vous êtes <span className={styles.required}>*</span>
            </label>
            <select value={type} onChange={(e) => setType(e.target.value)} required>
              <option>Un professionnel</option>
              <option>Un particulier</option>
            </select>
          </div>

          <Input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            label="Votre nom"
            placeholder="Dubois"
            required={true}
          />
          <Input
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            label="Votre Prénom"
            placeholder="Jean"
            required={true}
          />
          <Input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            label="Votre e-mail"
            placeholder="jean.dubois@gmail.com"
            required={true}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Votre téléphone"
            placeholder="06 00 00 00 00"
            required={false}
          />
          <div className={`${styles.textarea} ${inter.className}`}>
            <label>
              Détaillez votre demande
              <span className={styles.required}>*</span>
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Votre demande, le point de retrait souhaité ou toute autre information importante "
            />
          </div>
          <span className={inter.className}>
            <span className={styles.required}>*</span> Champs obligatoires
          </span>
          <ButtonForm text="Envoyer" />
        </form>
      </div>
      {isOpenPopUp && <PopUp setIsOpenPopUp={setIsOpenPopUp} />}
    </>
  )
}
