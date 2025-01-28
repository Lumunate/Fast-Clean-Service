import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

import { metadataJSON } from "./metadata";
export const metadata = metadataJSON;

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
