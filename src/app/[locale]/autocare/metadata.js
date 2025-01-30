export const metadataJSON = {
  title: "Anywhere AutoCare Packages - Mobile Detailing Service",
  description:
    "Professional mobile auto detailing packages starting from €74. Choose from Standard, Deluxe, or Premium services with comprehensive cleaning, delivered to your location throughout Netherlands.",
  keywords:
    "mobile auto detailing, on-location car cleaning, premium detailing service, steam cleaning, doorstep car care, professional car detailing, Netherlands auto service",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/autocare`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mobile Auto Detailing - Anywhere AutoCare Service",
    description:
      "Premium mobile detailing at your location. Three service tiers: Standard (€74), Deluxe (€94), and Premium (€149). Professional equipment and eco-friendly products.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/autocare`,
    siteName: "Fast Clean Service",
    images: [
      {
        url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
        width: 2560,
        height: 1707,
        alt: "Professional mobile auto detailing service",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Auto Detailing | Anywhere AutoCare Service",
    description:
      "Professional car detailing at your location. Choose from three premium service tiers with eco-friendly cleaning solutions.",
    images: ["https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg"],
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Anywhere AutoCare",
    description: "Mobile auto detailing service with three premium packages",
    provider: {
      "@type": "AutoRepair",
      name: "Fast Clean Service",
      url: "https://fastcleanservice.nl/",
    },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Detailing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Package",
            description: "Basic exterior and interior cleaning with steam treatment",
          },
          price: "74.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/autocare#standard`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deluxe Package",
            description: "Comprehensive detailing with premium cleaning solutions",
          },
          price: "94.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/autocare#deluxe`,
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Package",
            description: "Complete detailing with paint protection and premium treatments",
          },
          price: "149.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/autocare#premium`,
        },
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL}/autocare`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
    },
  },
};
