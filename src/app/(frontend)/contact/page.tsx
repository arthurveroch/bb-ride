import Form from '../components/contact-page/Form'
import styles from './contact.module.css'

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
