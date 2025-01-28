export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  
  const routes = [
    '',
    '/aboutus',
    '/autocare',
    '/booking',
    '/contact',
    '/customer-portal',
    '/feedback',
    '/fleet',
    '/other-vehicles',
    '/services',
    '/subscribe'
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}