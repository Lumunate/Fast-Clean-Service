import "./globals.css";
import {getServerSession} from "next-auth";
import SessionProvider from "../../lib/SessionProvider";
import {ThemeProvider} from "../../contexts/themeContext";
import {CssBaseline} from "@mui/material";
import {SnackbarProvider} from "../../contexts/SnackBarContext";
import {ValidationProvider} from "../../contexts/ValidationContext";
import {ExitIntentProvider} from "../../contexts/ExitIntentContext";
import CookieConsentPrompt from "../../components/CookieConsentPrompt";
import Script from "next/script";
import LogoLoadingWrapper from '../../components/LogoLoadingWrapper'
import {metadataJSON} from "./metadata";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

export const metadata = metadataJSON;

export default async function RootLayout({children}) {
    const messages = await getMessages();
    const session = await getServerSession();


    return (<html  suppressHydrationWarning>
         <head>
        {/* Preload the logo for faster loading */}
        <link rel="preload" href="/logo.png" as="image" />
      </head>
        <body>
        <SessionProvider session={session}>
            <ThemeProvider>
                <SnackbarProvider>
                    <ValidationProvider>
                        <ExitIntentProvider>
                            <CssBaseline/>
                            {/*<CookieConsentPrompt/>*/}
                            <NextIntlClientProvider messages={messages}>
                            <LogoLoadingWrapper>

                                {children}
                            </LogoLoadingWrapper>
                              
                            </NextIntlClientProvider>
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
        </html>);
}
