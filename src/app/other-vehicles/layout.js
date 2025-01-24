import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
  title: "Diverse Vehicles - Fast Clean Service",
  description:
    "Fast Clean Service offers specialized auto care for a wide range of vehicles, including bikes, boats, planes, and more. Discover our tailored maintenance and detailing solutions for your unique vehicle.",
  keywords:
    "specialized auto care, bike detailing, boat maintenance, aircraft cleaning, vehicle detailing, mobile detailing for diverse vehicles, Fast Clean Service",
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/other-vehicles`,

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Diverse Vehicles - Fast Clean Service",
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
    title: "Diverse Vehicles - Fast Clean Service",
    description:
      "Discover Fast Clean Service's specialized auto care packages for diverse vehicles, including bikes, boats, and aircraft. Professional detailing at your location.",
    image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
    site: "@FastCleanService",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diverse Vehicle Care - Fast Clean Service",
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
  additionalMetaTags: [
    { name: "application-name", content: "Fast Clean Service" },
    { name: "theme-color", content: "#0c7fcf" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { property: "fb:app_id", content: "1492949054316243" },
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
    { rel: "canonical", href: `${process.env.NEXT_PUBLIC_BASE_URL}/diverse-vehicles` },
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