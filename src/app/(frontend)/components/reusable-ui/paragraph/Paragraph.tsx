import styles from './paragraph.module.css'
import { inter } from '@/app/lib/fonts'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type {
  SerializedEditorState,
  SerializedLexicalNode,
} from '@payloadcms/richtext-lexical/lexical'
import Button from '../button/Button'

type Props = {
  data: SerializedEditorState<SerializedLexicalNode>
  link: string
  textButton: string
}

export default function Paragraph({ data, link, textButton }: Props) {
  return (
    <div className={`${inter.className} ${styles.paragraphContainer}`}>
      <RichText className={styles.paragraph} data={data} />
      <Button text={textButton} link={link} />
    </div>
  )
}
