import Form from '../components/contact-page/Form'
import styles from './contact.module.css'
import { getTranslations } from 'next-intl/server'

export const generateMetadata = async () => {
  const t = await getTranslations('contact')

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
    },
  }
}

export default function page() {
  return (
    <main className={styles.contactContainer}>
      <section className={styles.contact}>
        <div className={styles.image} />
        <Form />
      </section>
    </main>
  )
}
