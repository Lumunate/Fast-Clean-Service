
export const metadata = {
  title: "Admin Dashboard - Fast Clean Service Management",
  description:
    "Manage bookings, subscriptions, customer feedback, and fleet services efficiently with the Fast Clean Service Admin Dashboard.",
  keywords:
    "admin dashboard, Fast Clean Service admin, fleet management, customer management, auto detailing administration, service tracking, bookings management",
  canonical: `${NEXT_PUBLIC_BASE_URL}/admin-dashboard`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  robots: "noindex, nofollow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Admin Dashboard | Fast Clean Service Management",
    description:
      "Access the Fast Clean Service Admin Dashboard to oversee bookings, subscriptions, customer feedback, and fleet service operations.",
    url: `${NEXT_PUBLIC_BASE_URL}/admin-dashboard`,
    siteName: "Fast Clean Service",
    image: {
      url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/admin-dashboard.jpg",
      width: 2560,
      height: 1707,
      alt: "Admin Dashboard - Fast Clean Service",
      type: "image/jpeg",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Clean Service | Admin Dashboard",
    description: "Manage bookings, customer accounts, and service requests in the Fast Clean Service Admin Dashboard.",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/admin-dashboard.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Admin Dashboard",
    url: `${NEXT_PUBLIC_BASE_URL}/admin-dashboard`,
    isPartOf: {
      "@type": "WebSite",
      name: "Fast Clean Service",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
    about: {
      "@type": "Service",
      name: "Admin Control for Fast Clean Service",
      provider: {
        "@type": "Organization",
        name: "Fast Clean Service",
        url: process.env.NEXT_PUBLIC_BASE_URL,
      },
    },
  },
  additionalMetaTags: [
    { name: "application-name", content: "Fast Clean Service Admin" },
    { name: "theme-color", content: "#0c7fcf" },
    { name: "mobile-web-app-capable", content: "yes" },
  ],
};

const Layout = ({ children }) => {
  return children;
};

export default Layout;
