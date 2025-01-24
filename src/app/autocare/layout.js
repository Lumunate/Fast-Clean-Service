import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
    title: "Anywhere AutoCare Packages - Mobile Detailing Service",
    description: "Professional mobile auto detailing packages starting from €74. Choose from Standard, Deluxe, or Premium services with comprehensive cleaning, delivered to your location throughout Netherlands.",
    keywords: "mobile auto detailing, on-location car cleaning, premium detailing service, steam cleaning, doorstep car care, professional car detailing, Netherlands auto service",
    canonical: "https://fast-clean-service.onrender.com/autocare",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Mobile Auto Detailing - Anywhere AutoCare Service",
        description: "Premium mobile detailing at your location. Three service tiers: Standard (€74), Deluxe (€94), and Premium (€149). Professional equipment and eco-friendly products.",
        url: "https://fast-clean-service.onrender.com/autocare",
        siteName: "Fast Clean Service",
        images: [{
            url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
            width: 2560,
            height: 1707,
            alt: "Professional mobile auto detailing service",
            type: "image/jpeg"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile Auto Detailing | Anywhere AutoCare Service",
        description: "Professional car detailing at your location. Choose from three premium service tiers with eco-friendly cleaning solutions.",
        images: ["https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg"],
        site: "@FastCleanService"
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Anywhere AutoCare",
        description: "Mobile auto detailing service with three premium packages",
        provider: {
            "@type": "AutoRepair",
            name: "Fast Clean Service",
            url: "https://fastcleanservice.nl/"
        },
        areaServed: {
            "@type": "Country",
            name: "Netherlands"
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
                        description: "Basic exterior and interior cleaning with steam treatment"
                    },
                    price: "74.00",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://fast-clean-service.onrender.com/autocare#standard"
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Deluxe Package",
                        description: "Comprehensive detailing with premium cleaning solutions"
                    },
                    price: "94.00",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://fast-clean-service.onrender.com/autocare#deluxe"
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Premium Package",
                        description: "Complete detailing with paint protection and premium treatments"
                    },
                    price: "149.00",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://fast-clean-service.onrender.com/autocare#premium"
                }
            ]
        },
        potentialAction: {
            "@type": "ReserveAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://fast-clean-service.onrender.com/autocare",
                actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                ]
            }
        }
    },
    additionalMetaTags: [
        { name: "application-name", content: "Fast Clean Service" },
        { name: "theme-color", content: "#0c7fcf" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-title", content: "Fast Clean Service" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { property: "fb:app_id", content: "1492949054316243" },
        { name: "msapplication-TileColor", content: "#0c7fcf" }
    ],
    link: [
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "16x16", type: "image/png" },
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "32x32", type: "image/png" },
        { rel: "apple-touch-icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png" },
        { rel: "canonical", href: "https://fast-clean-service.onrender.com/autocare" }
    ]
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