import { inter } from '@/app/lib/fonts'
import styles from './input.module.css'

type Props = {
  label: string
  required: boolean
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ label, required, placeholder, value, onChange }: Props) {
  return (
    <div className={`${styles.inputContainer} ${inter.className}`}>
      <label>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        required={required}
        placeholder={placeholder}
      />
    </div>
  )
}
