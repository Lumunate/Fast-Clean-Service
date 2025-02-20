import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Home/footer/Footer";

import { metadataJSON } from "./metadata";
export const metadata = metadataJSON;

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