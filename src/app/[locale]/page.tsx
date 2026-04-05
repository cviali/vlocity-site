import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import type { Locale } from "./dictionaries";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Events from "@/components/Events";
import Location from "@/components/Location";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(locale)) notFound();

    const dict = await getDictionary(locale as Locale);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        name: "Vlocity Arena",
        description: dict.meta.description,
        url: "https://vlocityarena.com",
        telephone: "+628991000365",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Daan Mogot No.111",
            addressLocality: "Jakarta Barat",
            addressRegion: "DKI Jakarta",
            postalCode: "11510",
            addressCountry: "ID",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -6.1675,
            longitude: 106.7833,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "06:00",
            closes: "00:00",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "838",
        },
        sport: ["Padel", "Tennis", "Badminton"],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <Hero dict={dict} />
            <About dict={dict} />
            <Facilities dict={dict} />
            <Gallery dict={dict} />
            <SocialProof dict={dict} />
            <Pricing dict={dict} />
            <Events dict={dict} />
            <Location dict={dict} />
        </>
    );
}
