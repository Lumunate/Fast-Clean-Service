
export const metadataJSON = {
  title: "Book a Service - Fast Clean Service",
  description:
    "Easily book a service with Fast Clean Service. Follow our multi-step form to choose your location, vehicle type, package, and additional options, and schedule your appointment conveniently.",
  keywords:
    "booking form, book a service, auto detailing booking, Fast Clean Service booking, vehicle cleaning, mobile detailing appointment, car cleaning booking",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/booking`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Book a Service - Fast Clean Service",
    description:
      "Use our booking form to select your location, vehicle type, package, and additional options. Schedule an appointment for professional mobile detailing with Fast Clean Service.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking`,
    siteName: "Fast Clean Service",
    image: {
      url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
      width: 2560,
      height: 1707,
      alt: "Fast Clean Service booking form for mobile detailing",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Service - Fast Clean Service",
    description:
      "Schedule your mobile detailing appointment with Fast Clean Service. Select from various packages and additional options using our easy booking form.",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Book a Service - Fast Clean Service",
    description:
      "Fast Clean Service offers a streamlined booking form to schedule vehicle cleaning appointments. Choose your package, location, and additional options, and book online.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking`,
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
      "@type": "ReserveAction",
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/booking`,
    },
  }
};