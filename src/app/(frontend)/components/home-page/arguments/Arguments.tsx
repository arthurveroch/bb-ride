import { HomePage } from '@/payload-types'
import styles from './arguments.module.css'
import ArgumentCard from './ArgumentCard'

type Props = {
  argumentsData: HomePage['arguments']
}

export default function Arguments({ argumentsData }: Props) {
  return (
    <section className={styles.argumentsContainer}>
      <div className={styles.arguments}>
        {argumentsData?.map((argument) => (
          <ArgumentCard key={argument.id} argument={argument} />
        ))}
      </div>
    </section>
  )
}
