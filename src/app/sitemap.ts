import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://uristnn.ru',
      lastModified: new Date(),
    },
    {
      url: 'https://uristnn.ru/services',
      lastModified: new Date(),
    },
    {
      url: 'https://uristnn.ru/contacts',
      lastModified: new Date(),
    },
    {
      url: 'https://uristnn.ru/posts',
      lastModified: new Date(),
    },
  ]
}