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
  className: string | null
  containButton: boolean
}

export default function Paragraph({ data, link, textButton, className, containButton }: Props) {
  return (
    <div className={`${inter.className} ${styles.paragraphContainer} ${className && className}`}>
      <RichText className={styles.paragraph} data={data} />
      {containButton && <Button text={textButton} link={link} />}
    </div>
  )
}
