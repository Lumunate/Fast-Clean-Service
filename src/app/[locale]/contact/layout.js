import {getServerSession} from "next-auth";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
    title: "Contact Us - Fast Clean Service",
    description: "Get in touch with Fast Clean Service for all your mobile auto detailing and steam cleaning needs. Our customer service team is here to help with your queries and bookings.",
    keywords: "Contact Fast Clean Service, customer support, auto detailing inquiry, mobile car wash contact, vehicle cleaning contact, professional detailing service contact",
    canonical: "https://fast-clean-service.onrender.com/contact",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Contact Us - Fast Clean Service",
        description: "Reach out to Fast Clean Service for all your mobile auto detailing inquiries. We are dedicated to providing excellent service and support for all your vehicle care needs.",
        url: "https://fast-clean-service.onrender.com/contact",
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
            width: 2560,
            height: 1707,
            alt: "Contact Fast Clean Service for premium mobile auto detailing",
            type: "image/jpeg",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - Fast Clean Service",
        description: "Have questions? Contact Fast Clean Service for top-quality mobile auto detailing and steam cleaning support.",
        image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/20210516110850_IMG_4636-scaled.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us - Fast Clean Service",
        url: "https://fast-clean-service.onrender.com/contact",
        mainEntity: {
            "@type": "Organization",
            name: "Fast Clean Service",
            url: "https://fastcleanservice.nl/",
            logo: "https://fastcleanservice.nl/wp-content/uploads/2020/10/thumbnail_Fast20Clean20Service20-20Logo20DEF.png",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31612345678",
                contactType: "Customer Service",
                areaServed: "NL",
                availableLanguage: "Dutch",
            },
            sameAs: [
                "https://www.facebook.com/FastCleanServiceNL/",
                "https://www.instagram.com/fastcleanservice/",
            ],
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
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "16x16", type: "image/png" },
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "32x32", type: "image/png" },
        { rel: "canonical", href: "https://fast-clean-service.onrender.com/contact" },
    ],
};


export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar />
            {children}
            <div style={{ zIndex: 10, position: "relative" }}>
                <Footer />
            </div>
        </div>
    );
}
