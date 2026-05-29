import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/professionnels`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ]

  return [...urls]
}
