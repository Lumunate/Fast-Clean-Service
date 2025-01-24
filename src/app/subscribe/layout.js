import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
  title: "Subscription Plans - Fast Clean Service",
  description:
    "Choose from three professional auto detailing subscriptions: Exterior (€59.95), Interior (€69.95), or Total (€94.95) packages. Enjoy comprehensive cleaning services with flexible durations.",
  keywords:
    "auto detailing subscription, exterior cleaning plan, interior detailing package, total car care, auto detailing subscription, vehicle maintenance package, car wash plan",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Professional Subscription Plans | Fast Clean Service",
    description:
      "Select from three comprehensive cleaning packages: Exterior (45 min), Interior (60 min), or Total (90-120 min) care. Professional detailing with guaranteed quality.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe`,
    siteName: "Fast Clean Service",
    images: [
      {
        url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
        width: 2560,
        height: 1707,
        alt: "Professional auto detailing subscription services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscription Plans | Fast Clean Service",
    description:
      "Professional auto detailing subscriptions starting from €59.95. Choose from Exterior, Interior, or Total care packages.",
    images: ["https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg"],
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Subscription Plans",
    description: "Professional auto detailing subscription services with three tiers",
    brand: {
      "@type": "Brand",
      name: "Fast Clean Service",
      logo: "https://fastcleanservice.nl/wp-content/uploads/2020/10/thumbnail_Fast20Clean20Service20-20Logo20DEF.png",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "59.95",
      highPrice: "94.95",
      offerCount: 3,
      offers: [
        {
          "@type": "Offer",
          name: "Exterior Package",
          price: "59.95",
          priceCurrency: "EUR",
          description: "45-minute exterior cleaning service including wax treatment",
          availability: "https://schema.org/InStock",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe#exterior`,
          itemOffered: {
            "@type": "Service",
            name: "Exterior Cleaning Package",
            description: "Includes exterior cleaning, wax treatment, window cleaning, rim cleaning, and tire blackening",
          },
        },
        {
          "@type": "Offer",
          name: "Interior Package",
          price: "69.95",
          priceCurrency: "EUR",
          description: "60-minute interior detailing service",
          availability: "https://schema.org/InStock",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe#interior`,
          itemOffered: {
            "@type": "Service",
            name: "Interior Cleaning Package",
            description:
              "Includes window cleaning, sill cleaning, steam cleaning, vacuuming, dashboard cleaning, plastic treatment, and mat steaming",
          },
        },
        {
          "@type": "Offer",
          name: "Total Package",
          price: "94.95",
          priceCurrency: "EUR",
          description: "90-120 minute complete detailing service",
          availability: "https://schema.org/InStock",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe#total`,
          itemOffered: {
            "@type": "Service",
            name: "Total Care Package",
            description: "Comprehensive service including all exterior and interior cleaning features",
          },
        },
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    potentialAction: {
      "@type": "BuyAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
    },
  },
  additionalMetaTags: [
    { name: "application-name", content: "Fast Clean Service" },
    { name: "theme-color", content: "#0c7fcf" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-title", content: "Fast Clean Service" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { property: "fb:app_id", content: "1492949054316243" },
    { name: "msapplication-TileColor", content: "#0c7fcf" },
  ],
  link: [
    {
      rel: "icon",
      href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png",
      sizes: "32x32",
      type: "image/png",
    },
    { rel: "apple-touch-icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png" },
    { rel: "canonical", href: `${process.env.NEXT_PUBLIC_BASE_URL}/subscribe` },
  ],
};

export default async function RootLayout({ children }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ flex: "1" }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}