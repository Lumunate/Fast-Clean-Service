"use client";
import {usePathname} from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Home/footer/Footer";

const LayoutWrapper = ({ children }) => {
    const pathname = usePathname();
    const isExcludedRoute = pathname.startsWith("/admin") || pathname.startsWith("/de/customer-portal");

    return (
        <>
            {!isExcludedRoute && <Navbar />}
            {children}
            {!isExcludedRoute && <Footer />}
        </>
    );
};

export default LayoutWrapper;
