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

import {metadataJSON} from "./metadata";
import {notFound} from "next/navigation";
import {routing} from "../../i18n/routing";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import LanguageSwitcher from "../../components/language-switcher/LanguageSwitcher";

export const metadata = metadataJSON;

export default async function RootLayout({children, params: {locale}}) {

    if (!routing.locales.includes(locale)) {
        notFound();
    }
    console.log('akxmksamxkamskx', locale)
    const messages = await getMessages();
    const session = await getServerSession();


    return (<html lang={locale} suppressHydrationWarning>
        <body>
        <SessionProvider session={session}>
            <ThemeProvider>
                <SnackbarProvider>
                    <ValidationProvider>
                        <ExitIntentProvider>
                            <CssBaseline/>
                            <CookieConsentPrompt/>
                            <NextIntlClientProvider messages={messages}>
                                {children}
                                <LanguageSwitcher currentLocale={locale} />
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
