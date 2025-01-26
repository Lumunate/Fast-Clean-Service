export const metadataJSON = {
  title: "About Us - Fast Clean Service",
  description:
    "Fast Clean Service provides top-notch mobile auto detailing and steam cleaning services for all types of vehicles. Our team delivers premium cleaning packages right at your doorstep, ensuring a spotless and fresh experience wherever you are. Book your clean ride today!",
  keywords:
    "Auto detailing, mobile steam cleaning, car wash, vehicle cleaning, premium auto care, Fast Clean Service, professional detailing, fleet services, mobile car wash, eco-friendly cleaning",
  canonical: process.env.NEXT_PUBLIC_BASE_URL,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "About Us - Fast Clean Service",
    description:
      "Experience the best in mobile auto detailing with Fast Clean Service. We bring our expertise and equipment to your location, offering premium packages tailored for your vehicle's needs.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Fast Clean Service",
    image: {
      url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
      width: 2560,
      height: 1707,
      alt: "Mobile auto detailing service - Fast Clean Service",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Clean Service | Professional Auto Detailing & Mobile Steam Cleaning",
    description:
      "Top-notch mobile auto detailing and steam cleaning services delivered to your location. Book your clean ride with Fast Clean Service today!",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fast Clean Service",
    url: "https://fastcleanservice.nl/",
    logo: "https://fastcleanservice.nl/wp-content/uploads/2020/10/thumbnail_Fast20Clean20Service20-20Logo20DEF.png",
    sameAs: ["https://www.facebook.com/FastCleanServiceNL/", "https://www.instagram.com/fastcleanservice/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31612345678",
      contactType: "Customer Service",
      areaServed: "NL",
      availableLanguage: "Dutch",
    },
  }
};
