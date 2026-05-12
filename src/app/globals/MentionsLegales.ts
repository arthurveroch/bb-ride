import type { GlobalConfig } from 'payload'

export const MentionsLegales: GlobalConfig = {
  slug: 'mentions-legales',

  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
