import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales, defaultLocale } from "./dictionaries";
import type { Locale } from "./dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const BASE_URL = "https://vlocityarena.com";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    if (!hasLocale(locale)) return {};
    const dict = await getDictionary(locale as Locale);

    return {
        title: dict.meta.title,
        description: dict.meta.description,
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: locale === defaultLocale ? "/" : `/${locale}`,
            languages: {
                id: "/",
                en: "/en",
            },
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: locale === defaultLocale ? BASE_URL : `${BASE_URL}/${locale}`,
            siteName: "Vlocity Arena",
            locale: locale === "id" ? "id_ID" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: dict.meta.title,
            description: dict.meta.description,
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(locale)) notFound();

    const dict = await getDictionary(locale as Locale);

    return (
        <html
            lang={locale}
            className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-navy text-white">
                <Header dict={dict} locale={locale as Locale} />
                <main className="flex-1 overflow-x-hidden">{children}</main>
                <Footer dict={dict} locale={locale as Locale} />
                <WhatsAppButton label={dict.whatsapp.ariaLabel} />
            </body>
        </html>
    );
}
