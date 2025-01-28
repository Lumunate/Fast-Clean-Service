
export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fast-clean-service.onrender.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/customer-portal/',
        '/_not-found'
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}