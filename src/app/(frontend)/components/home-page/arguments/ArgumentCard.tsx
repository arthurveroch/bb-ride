import Image from 'next/image'
import styles from './argument-card.module.css'
import { Media } from '@/payload-types'
import { inter } from '@/app/lib/fonts'

type Props = {
  argument: {
    icon: number | Media
    descripption: string
    width: number
    height: number
    id?: string | null
  }
}

export default function ArgumentCard({ argument }: Props) {
  return (
    <div className={styles.argumentCardContainer}>
      <Image
        src={typeof argument.icon === 'object' && argument.icon.url ? argument.icon.url : ''}
        width={argument.width}
        height={argument.height}
        alt={typeof argument.icon === 'object' ? argument.icon.alt : ''}
      />
      <p className={inter.className}>{argument.descripption}</p>
    </div>
  )
}
