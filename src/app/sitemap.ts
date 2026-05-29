import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://bb-ride.com'

  const urls = [
    {
      url: `${url}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${url}/professionnels`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ]

  return [...urls]
}
