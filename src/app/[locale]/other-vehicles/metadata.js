export const metadataJSON = {
  title: "Other Vehicles - Fast Clean Service",
  description:
    "Fast Clean Service offers specialized auto care for a wide range of vehicles, including bikes, boats, planes, and more. Discover our tailored maintenance and detailing solutions for your unique vehicle.",
  keywords:
    "specialized auto care, bike detailing, boat maintenance, aircraft cleaning, vehicle detailing, mobile detailing for Other vehicles, Fast Clean Service",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/other-vehicles`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Other Vehicles - Fast Clean Service",
    description:
      "Get specialized auto care services for bikes, boats, planes, and more. Fast Clean Service provides tailored maintenance and detailing for various vehicles at your location.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/other-vehicles`,
    siteName: "Fast Clean Service",
    image: {
      url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
      width: 2560,
      height: 1707,
      alt: "Specialized vehicle care by Fast Clean Service",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Vehicles - Fast Clean Service",
    description:
      "Discover Fast Clean Service's specialized auto care packages for Other vehicles, including bikes, boats, and aircraft. Professional detailing at your location.",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Other Vehicle Care - Fast Clean Service",
    description:
      "Fast Clean Service offers specialized auto care and detailing services for a wide range of vehicles, including bikes, boats, planes, and other specialty vehicles.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/other-vehicles`,
    serviceType: "Specialized Vehicle Detailing",
    provider: {
      "@type": "Organization",
      name: "Fast Clean Service",
      url: "https://fastcleanservice.nl/",
      logo: "https://fastcleanservice.nl/wp-content/uploads/2020/10/thumbnail_Fast20Clean20Service20-20Logo20DEF.png",
      sameAs: ["https://www.facebook.com/FastCleanServiceNL/", "https://www.instagram.com/fastcleanservice/"],
    },
    areaServed: {
      "@type": "Place",
      name: "Netherlands",
    },
    potentialAction: {
      "@type": "OrderAction",
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/other-vehicles`,
    },
  },
};

