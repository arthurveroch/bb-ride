import Form from '../components/contact-page/Form'
import styles from './contact.module.css'

export const revalidate = 31536000

export default function page() {
  return (
    <main className={styles.contactContainer}>
      <section className={styles.contact}>
        <Form />
      </section>
    </main>
  )
}
