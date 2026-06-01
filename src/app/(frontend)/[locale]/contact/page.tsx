import Form from '../components/contact-page/Form'
import styles from './contact.module.css'

export const generateMetadata = () => {
  return {
    title: 'Contacter BB-Ride – Réservation & devis Mini Moke électrique | Var',
    description:
      'Une question, une réservation ou un devis pro ? Contactez Laura de BB-Ride par formulaire, WhatsApp ou e-mail. Réponse personnalisée et rapide.',
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
