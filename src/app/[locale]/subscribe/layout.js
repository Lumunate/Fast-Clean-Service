import {getServerSession} from "next-auth";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Home/footer/Footer";

export const metadata = {
    title: "Subscription Packages - Fast Clean Service",
    description: "Explore subscription packages from Fast Clean Service for convenient, recurring vehicle care. Choose from tailored packages with flexible duration, frequency, and additional options for comprehensive auto detailing.",
    keywords: "subscription packages, auto detailing subscription, vehicle care plans, Fast Clean Service, car cleaning subscription, flexible vehicle maintenance",
    canonical: "https://fast-clean-service.onrender.com/subscribe",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Subscription Packages - Fast Clean Service",
        description: "Choose from Fast Clean Service's subscription packages for regular auto detailing. Get flexible options in frequency, duration, and additional services tailored to your needs.",
        url: "https://fast-clean-service.onrender.com/subscribe",
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
            width: 2560,
            height: 1707,
            alt: "Subscription packages for regular auto detailing by Fast Clean Service",
            type: "image/jpeg",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Subscription Packages - Fast Clean Service",
        description: "Find convenient, customizable subscription packages for auto detailing with Fast Clean Service. Perfect for regular vehicle care and maintenance.",
        image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516111139_IMG_4648-scaled-boost.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Subscription Packages - Fast Clean Service",
        description: "Fast Clean Service offers subscription packages for recurring vehicle care, including customizable options for duration, frequency, and additional services.",
        url: "https://fast-clean-service.onrender.com/subscribe",
        brand: {
            "@type": "Brand",
            name: "Fast Clean Service",
            url: "https://fastcleanservice.nl/",
        },
        offers: [
            {
                "@type": "Offer",
                url: "https://fast-clean-service.onrender.com/subscribe",
                priceCurrency: "EUR",
                price: "29.00",
                itemOffered: {
                    "@type": "Service",
                    name: "Basic Subscription Package",
                },
                availability: "https://schema.org/InStock",
            },
            {
                "@type": "Offer",
                url: "https://fast-clean-service.onrender.com/subscribe",
                priceCurrency: "EUR",
                price: "49.00",
                itemOffered: {
                    "@type": "Service",
                    name: "Standard Subscription Package",
                },
                availability: "https://schema.org/InStock",
            },
            {
                "@type": "Offer",
                url: "https://fast-clean-service.onrender.com/subscribe",
                priceCurrency: "EUR",
                price: "79.00",
                itemOffered: {
                    "@type": "Service",
                    name: "Premium Subscription Package",
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
        { rel: "canonical", href: "https://fast-clean-service.onrender.com/subscribe" },
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