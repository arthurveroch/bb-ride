import styles from './title.module.css'
import { handwind, hiragino } from '@/app/lib/fonts'

type Props = {
  title: string
  subtitle: string
}

export default function Title({ subtitle, title }: Props) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={hiragino.className}>{title}</h2>
      <h3 className={handwind.className}>{subtitle}</h3>
    </div>
  )
}
