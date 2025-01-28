export const metadataJSON = {
  title: "Customer Portal - Fast Clean Service",
  description:
    "Log in to your Fast Clean Service account to manage your subscriptions, schedule services, view invoices, and track your vehicle's cleaning history.",
  keywords:
    "customer portal, Fast Clean Service login, manage services, vehicle cleaning account, fleet service management, auto detailing portal, subscription dashboard",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-portal`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Customer Portal | Manage Your Services | Fast Clean Service",
    description:
      "Access your Fast Clean Service account to manage your subscriptions, book appointments, view invoices, and track past services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-portal`,
    siteName: "Fast Clean Service",
    image: {
      url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/customer-dashboard.jpg",
      width: 2560,
      height: 1707,
      alt: "Customer Portal - Fast Clean Service",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Clean Service | Customer Portal",
    description:
      "Easily manage your Fast Clean Service subscriptions, book appointments, and view your service history in our customer portal.",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/customer-dashboard.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Customer Portal",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-portal`,
    isPartOf: {
      "@type": "WebSite",
      name: "Fast Clean Service",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
    about: {
      "@type": "Service",
      name: "Vehicle Cleaning & Fleet Maintenance",
      provider: {
        "@type": "Organization",
        name: "Fast Clean Service",
        url: process.env.NEXT_PUBLIC_BASE_URL,
      },
    },
  },
};
