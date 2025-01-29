import {getServerSession} from "next-auth";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Home/footer/Footer";

export const metadata = {
    title: "About Us - Fast Clean Service",
    description: "Fast Clean Service is a mobile cleaning company specializing in eco-friendly steam cleaning for cars, motorcycles, and boats. Learn more about our commitment to premium mobile auto detailing at your location.",
    keywords: "About Fast Clean Service, mobile auto detailing, steam cleaning, eco-friendly cleaning, car cleaning, motorcycle detailing, boat cleaning, professional auto care",
    canonical: "https://fast-clean-service.onrender.com/aboutus",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "About Us - Fast Clean Service",
        description: "Discover Fast Clean Service's mobile steam cleaning solutions. Our team offers top-quality, eco-friendly detailing for cars, motorcycles, and boats right at your location.",
        url: "https://fast-clean-service.onrender.com/aboutus",
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2018/07/20210516111139_IMG_4648-scaled-boost.jpg",
            width: 2560,
            height: 1707,
            alt: "Fast Clean Service team providing mobile steam cleaning",
            type: "image/jpeg",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Fast Clean Service",
        description: "Learn about Fast Clean Service, a mobile cleaning company providing eco-friendly steam cleaning services for cars, motorcycles, and boats at your location.",
        image: "https://fastcleanservice.nl/wp-content/uploads/2018/07/20210516111139_IMG_4648-scaled-boost.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Us - Fast Clean Service",
        url: "https://fast-clean-service.onrender.com/aboutus",
        mainEntity: {
            "@type": "Organization",
            name: "Fast Clean Service",
            url: "https://fast-clean-service.onrender.com/aboutus\"",
            logo: "https://fastcleanservice.nl/wp-content/uploads/2020/10/thumbnail_Fast20Clean20Service20-20Logo20DEF.png",
            description: "Fast Clean Service provides eco-friendly mobile steam cleaning for cars, motorcycles, and boats, delivering premium care directly to you.",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31612345678",
                contactType: "Customer Service",
                areaServed: "NL",
                availableLanguage: ["Dutch", "English"],
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
        { rel: "canonical", href: "https://fast-clean-service.onrender.com/aboutus" },
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
