import styles from './title.module.css'
import { handwind, hiragino } from '@/app/lib/fonts'

type Props = {
  title: string
  subtitle: string | null
  className: string | null
}

export default function Title({ subtitle, title, className }: Props) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={`${hiragino.className} ${className}`}>{title}</h2>
      {subtitle && <h3 className={handwind.className}>{subtitle}</h3>}
    </div>
  )
}
