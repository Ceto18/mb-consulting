import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://mbconsulting.es', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
