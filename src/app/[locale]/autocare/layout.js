import {getServerSession} from "next-auth";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Home/footer/Footer";

export const metadata = {
    title: "AutoCare Packages - Fast Clean Service",
    description: "Explore premium AutoCare packages with Fast Clean Service. Choose from Standard, Deluxe, and Premium packages for comprehensive mobile auto detailing, including interior and exterior steam cleaning.",
    keywords: "AutoCare packages, car detailing, mobile auto detailing, steam cleaning, vehicle care, Fast Clean Service, Standard package, Deluxe package, Premium package",
    canonical: "https://fast-clean-service.onrender.com/autocare",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "AutoCare Packages - Fast Clean Service",
        description: "Discover Fast Clean Service's AutoCare packages for exceptional mobile auto detailing. Choose from Standard, Deluxe, or Premium packages for your vehicle's needs.",
        url: "https://fast-clean-service.onrender.com/autocare",
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
            width: 2560,
            height: 1707,
            alt: "Fast Clean Service AutoCare packages for premium detailing",
            type: "image/jpeg",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "AutoCare Packages - Fast Clean Service",
        description: "Choose from Standard, Deluxe, and Premium AutoCare packages for complete mobile detailing. Fast Clean Service brings vehicle care right to your location.",
        image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "AutoCare Packages - Fast Clean Service",
        description: "Fast Clean Service offers three levels of AutoCare packages: Standard, Deluxe, and Premium. Each package includes comprehensive detailing services to keep your vehicle in top condition.",
        url: "https://fast-clean-service.onrender.com/autocare",
        brand: {
            "@type": "Brand",
            name: "Fast Clean Service",
            url: "https://fastcleanservice.nl/",
        },
        offers: [
            {
                "@type": "Offer",
                url: "https://fast-clean-service.onrender.com/autocare",
                priceCurrency: "EUR",
                price: "74.00",
                itemOffered: {
                    "@type": "Service",
                    name: "Standard AutoCare Package",
                },
                availability: "https://schema.org/InStock",
            },
            {
                "@type": "Offer",
                url: "https://fast-clean-service.onrender.com/autocare",
                priceCurrency: "EUR",
                price: "94.00",
                itemOffered: {
                    "@type": "Service",
                    name: "Deluxe AutoCare Package",
                },
                availability: "https://schema.org/InStock",
            },
            {
                "@type": "Offer",
                url: "https://fast-clean-service.onrender.com/autocare",
                priceCurrency: "EUR",
                price: "149.00",
                itemOffered: {
                    "@type": "Service",
                    name: "Premium AutoCare Package",
                },
                availability: "https://schema.org/InStock",
            },
        ],
    },
    additionalMetaTags: [
        { name: "application-name", content: "Fast Clean Service" },
        { name: "theme-color", content: "#0c7fcf" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { property: "fb:app_id", content: "1492949054316243" },
    ],
    link: [
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "16x16", type: "image/png" },
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "32x32", type: "image/png" },
        { rel: "canonical", href: "https://fast-clean-service.onrender.com/autocare" },
    ],
};


export default async function RootLayout({ children }) {
    const session = await getServerSession();

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