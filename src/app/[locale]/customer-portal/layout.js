import { metadataJSON } from "./metadata";
export const metadata = metadataJSON;

export default async function RootLayout({ children }) {
    return (
        <div style={{ minHeight: "100vh" }}>
            {children}
        </div>
    );
}
