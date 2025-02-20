export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  
  const routes = [
    '',
    '/de/aboutus',
    '/de/autocare',
    '/de/booking',
    '/de/contact',
    '/de/customer-portal',
    '/de/feedback',
    '/de/fleet',
    '/de/other-vehicles',
    '/de/services',
    '/de/subscribe'
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}