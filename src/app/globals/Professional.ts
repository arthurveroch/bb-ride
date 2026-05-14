import { type GlobalConfig } from 'payload'

export const Professional: GlobalConfig = {
  slug: 'professionnal',

  fields: [
    {
      name: 'hero',
      type: 'group',
      required: true,

      fields: [
        {
          name: 'background',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_titre',
          type: 'text',
          required: true,
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_cta',
          type: 'text',
          required: true,
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'solution',
      type: 'group',
      required: true,

      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'background',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'paragraph',
          type: 'richText',
          required: true,
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'secteurs',
      type: 'group',
      required: true,

      fields: [
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'premier_titre',
          type: 'text',
          required: true,
        },
        {
          name: 'premier_paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'deuxieme_titre',
          type: 'text',
          required: true,
        },
        {
          name: 'deuxieme_paragraphe',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      required: true,

      fields: [
        {
          name: 'premiere_image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'deuxieme_image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'troisieme_image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'quatrieme_image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'premier_titre',
          type: 'text',
          required: true,
        },
        {
          name: 'premier_paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'deuxieme_titre',
          type: 'text',
          required: true,
        },
        {
          name: 'deuxieme_paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'equipements',
      type: 'array',

      fields: [
        {
          name: 'icon',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'width',
          type: 'number',
          required: true,
        },
        {
          name: 'height',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'selection',
      type: 'group',

      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'offre',
      type: 'group',

      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'background',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'histoire',
      type: 'group',

      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          name: 'lien',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'arguments',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
