export const metadataJSON = {
  title: "Customer Feedback - Fast Clean Service",
  description:
    "Read what our customers have to say about Fast Clean Service. Share your experience and help us improve our premium auto detailing and fleet maintenance services.",
  keywords:
    "customer feedback, Fast Clean Service reviews, auto detailing testimonials, fleet service reviews, vehicle cleaning feedback, client testimonials, service ratings",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/feedback`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Customer Feedback | Reviews & Testimonials | Fast Clean Service",
    description:
      "See what our satisfied customers have to say about our vehicle cleaning and maintenance services. Leave your own review and help us grow!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/feedback`,
    siteName: "Fast Clean Service",
    image: {
      url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/customer-reviews.jpg",
      width: 2560,
      height: 1707,
      alt: "Customer reviews and feedback - Fast Clean Service",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Feedback | See What Our Clients Say!",
    description:
      "Our customers love our auto detailing and fleet services! Read real reviews or share your experience with Fast Clean Service.",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/customer-reviews.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: "Fast Clean Service",
      url: "https://fastcleanservice.nl/",
    },
    author: {
      "@type": "Person",
      name: "Customer",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    publisher: {
      "@type": "Organization",
      name: "Fast Clean Service",
    },
  },
};
