import { revalidateTag } from 'next/cache'
import { type GlobalConfig } from 'payload'

export const Professional: GlobalConfig = {
  slug: 'professionnal',

  hooks: {
    afterChange: [() => revalidateTag('pro', 'max')],
  },

  fields: [
    {
      name: 'hero',
      type: 'group',
      required: true,
      fields: [
        { name: 'background', type: 'relationship', relationTo: 'media', required: true },
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'sous_titre', type: 'text', required: true, localized: true },
        { name: 'cta', type: 'text', required: true, localized: true },
        { name: 'sous_cta', type: 'text', required: true, localized: true },
        { name: 'lien', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'solution',
      type: 'group',
      required: true,
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'background', type: 'relationship', relationTo: 'media', required: true },
        { name: 'paragraph', type: 'richText', required: true, localized: true },
        { name: 'cta', type: 'text', required: true, localized: true },
        { name: 'lien', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'secteurs',
      type: 'group',
      required: true,
      fields: [
        { name: 'image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'premier_titre', type: 'text', required: true, localized: true },
        { name: 'premier_paragraphe', type: 'richText', required: true, localized: true },
        { name: 'deuxieme_titre', type: 'text', required: true, localized: true },
        { name: 'deuxieme_paragraphe', type: 'richText', required: true, localized: true },
      ],
    },
    {
      name: 'services',
      type: 'group',
      required: true,
      fields: [
        { name: 'premiere_image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'deuxieme_image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'troisieme_image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'quatrieme_image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'premier_titre', type: 'text', required: true, localized: true },
        { name: 'premier_paragraphe', type: 'richText', required: true, localized: true },
        { name: 'deuxieme_titre', type: 'text', required: true, localized: true },
        { name: 'deuxieme_paragraphe', type: 'richText', required: true, localized: true },
        { name: 'cta', type: 'text', required: true, localized: true },
        { name: 'lien', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'equipements',
      type: 'array',
      fields: [
        { name: 'icon', type: 'relationship', relationTo: 'media', required: true },
        { name: 'description', type: 'text', required: true, localized: true },
        { name: 'width', type: 'number', required: true },
        { name: 'height', type: 'number', required: true },
      ],
    },
    {
      name: 'selection',
      type: 'group',
      fields: [
        { name: 'titre', type: 'text', required: true, localized: true },
        { name: 'paragraphe', type: 'richText', required: true, localized: true },
        { name: 'image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'cta', type: 'text', required: true, localized: true },
        { name: 'lien', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'offre',
      type: 'group',
      fields: [
        { name: 'titre', type: 'text', required: true, localized: true },
        { name: 'paragraphe', type: 'richText', required: true, localized: true },
        { name: 'background', type: 'relationship', relationTo: 'media', required: true },
        { name: 'cta', type: 'text', required: true, localized: true },
        { name: 'lien', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'histoire',
      type: 'group',
      fields: [
        { name: 'titre', type: 'text', required: true, localized: true },
        { name: 'paragraphe', type: 'richText', required: true, localized: true },
        { name: 'image', type: 'relationship', relationTo: 'media', required: true },
        { name: 'cta', type: 'text', required: true, localized: true },
        { name: 'lien', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'arguments',
      type: 'array',
      fields: [
        { name: 'icon', type: 'relationship', relationTo: 'media', required: true },
        { name: 'description', type: 'text', required: true, localized: true },
        { name: 'width', type: 'number', required: true },
        { name: 'height', type: 'number', required: true },
      ],
    },
  ],
}
