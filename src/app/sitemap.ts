import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://bb-ride.com'
  const locales = ['fr', 'en']

  let urls

  return locales.flatMap((locale) => {
    return (urls = [
      {
        url: `${url}/${locale}`,
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `${url}/${locale}/contact`,
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: `${url}/${locale}/professionnels`,
        lastModified: new Date(),
        priority: 0.8,
      },
    ])
  })
}
