'use client'

import { useState } from 'react'
import styles from './form.module.css'
import Title from '../reusable-ui/title/Title'
import { inter } from '@/app/lib/fonts'
import Input from './Input'
import ButtonForm from './ButtonForm'
import { sendMessage } from '@/app/actions/actions'
import PopUp from './PopUp'
import { useTranslations } from 'next-intl'

export default function Form() {
  const [type, setType] = useState('Un particulier')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [isOpenPopUp, setIsOpenPopUp] = useState(false)

  const t = useTranslations('contact')

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
        <Title title={t('title')} subtitle={null} className={null} />
        <p className={inter.className}>{t('description')}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.selector} ${inter.className}`}>
            <label>
              {t('youAre')} <span className={styles.required}>*</span>
            </label>
            <select value={type} onChange={(e) => setType(e.target.value)} required>
              <option>{t('optionProfessional')}</option>
              <option>{t('optionIndividual')}</option>
            </select>
          </div>

          <Input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            label={t('lastName')}
            placeholder={t('lastNamePlaceholder')}
            required={true}
          />
          <Input
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            label={t('firstName')}
            placeholder={t('firstNamePlaceholder')}
            required={true}
          />
          <Input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            label={t('email')}
            placeholder={t('emailPlaceholder')}
            required={true}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label={t('phone')}
            placeholder={t('phonePlaceholder')}
            required={false}
          />
          <div className={`${styles.textarea} ${inter.className}`}>
            <label>
              {t('message')}
              <span className={styles.required}>*</span>
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={t('messagePlaceholder')}
            />
          </div>
          <span className={inter.className}>
            <span className={styles.required}>*</span> {t('required')}
          </span>
          <ButtonForm text={t('submit')} />
        </form>
      </div>
      {isOpenPopUp && <PopUp setIsOpenPopUp={setIsOpenPopUp} />}
    </>
  )
}
