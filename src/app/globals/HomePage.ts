import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',

  fields: [
    {
      name: 'Hero',
      type: 'group',
      fields: [
        {
          name: 'background',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'avant_titre',
          type: 'text',
          required: true,
        },

        {
          name: 'titre',
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
          name: 'lien',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_cta',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'spots',
      type: 'group',
      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },

        {
          name: 'sous_titre',
          type: 'text',
          required: true,
        },

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
          name: 'paragraphe',
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
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_titre',
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
          name: 'paragraphe',
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
      name: 'vehicules',
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
      ],
    },
    {
      name: 'experiences',
      type: 'group',
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
        { name: 'icon', type: 'relationship', relationTo: 'media', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'width', type: 'number', required: true },
        { name: 'height', type: 'number', required: true },
      ],
    },
    {
      name: 'etapes',
      type: 'group',
      fields: [
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
      name: 'faq',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'reponse',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
