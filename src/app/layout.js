import "./globals.css";
import {getServerSession} from "next-auth";
import SessionProvider from "../lib/SessionProvider";
import {ThemeProvider} from "../contexts/themeContext";
import {CssBaseline} from "@mui/material";
import {SnackbarProvider} from "../contexts/SnackBarContext";
import {ValidationProvider} from "../contexts/ValidationContext";
import { ExitIntentProvider } from "../contexts/ExitIntentContext";
import Script from "next/script";

import { metadataJSON } from "./metadata";
export const metadata = metadataJSON;

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <ThemeProvider>
            <SnackbarProvider>
              <ValidationProvider>
                <ExitIntentProvider>
                  <CssBaseline />
                  {children}
                </ExitIntentProvider>
              </ValidationProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </SessionProvider>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
