import { inter } from '@/app/lib/fonts'
import styles from './input.module.css'

type Props = {
  label: string
  required: boolean
  placeholder: string
}

export default function Input({ label, required, placeholder }: Props) {
  return (
    <div className={`${styles.inputContainer} ${inter.className}`}>
      <label>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input type="text" required={required} placeholder={placeholder} />
    </div>
  )
}
