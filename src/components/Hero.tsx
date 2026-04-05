import Image from "next/image";
import type { Dictionary } from "@/app/[locale]/dictionaries";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";

export default function Hero({ dict }: { dict: Dictionary }) {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/hero/hero.jpg"
                alt="Vlocity Arena — Premium Padel, Tennis & Badminton Courts in Jakarta Barat"
                title="Vlocity Arena — Premium Padel, Tennis & Badminton Courts"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-electric sm:text-5xl md:text-6xl lg:text-7xl">
                    {dict.hero.title}
                </h1>
                <p className="mt-4 text-lg text-white-80 sm:text-xl md:text-2xl">
                    {dict.hero.subtitle}
                </p>
                <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block rounded-lg bg-electric px-8 py-4 text-lg font-semibold text-navy transition-colors hover:bg-electric/90"
                >
                    {dict.hero.cta}
                </a>
            </div>
        </section>
    );
}
