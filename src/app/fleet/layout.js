import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
    title: "Fleet Care - Fast Clean Service",
    description: "Fleet Care Pro by Fast Clean Service provides professional fleet maintenance and cleaning services. We ensure your company's vehicles remain in top condition with customized packages and regular upkeep.",
    keywords: "fleet maintenance, fleet cleaning, corporate vehicle care, professional fleet service, commercial vehicle detailing, company car cleaning, fleet service packages, Fast Clean Service",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/fleet-care-pro`,
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Fleet Care Pro | Comprehensive Fleet Maintenance & Cleaning",
        description: "Fleet Care Pro offers expert cleaning and maintenance services for corporate and business fleets, ensuring top performance and a professional appearance.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/fleet-care-pro`,
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/fleet-cleaning.jpg",
            width: 2560,
            height: 1707,
            alt: "Fleet maintenance and cleaning service - Fast Clean Service",
            type: "image/jpeg",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Fleet Care Pro | Expert Fleet Maintenance & Cleaning",
        description: "Professional fleet maintenance services to keep your business vehicles clean and well-maintained. Customizable plans for every fleet size!",
        image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/fleet-cleaning.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Fleet Care Pro",
        provider: {
            "@type": "Organization",
            name: "Fast Clean Service",
            url: "https://fastcleanservice.nl/",
            logo: "https://fastcleanservice.nl/wp-content/uploads/2020/10/thumbnail_Fast20Clean20Service20-20Logo20DEF.png",
        },
        serviceType: "Fleet Maintenance & Cleaning",
        areaServed: "NL",
    },
};


export default async function RootLayout({ children }) {
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
