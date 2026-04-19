import Image from "next/image";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import FadeIn from "./FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const facilityCards = [
    {
        key: "padel",
        image: "/images/facilities/padel.jpg",
        count: "6",
        icon: (
            <svg viewBox="0 0 56 96" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8" aria-hidden="true">
                <rect x="8" y="4" width="40" height="50" rx="20" />
                <circle cx="22" cy="22" r="2" /><circle cx="34" cy="22" r="2" />
                <circle cx="22" cy="34" r="2" /><circle cx="34" cy="34" r="2" />
                <rect x="24" y="54" width="8" height="30" rx="4" />
            </svg>
        ),
    },
    {
        key: "tennis",
        image: "/images/facilities/tennis.jpg",
        count: "2",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8" aria-hidden="true">
                <circle cx="32" cy="32" r="28" />
                <path d="M14 10c7 10 7 34 0 44" />
                <path d="M50 10c-7 10-7 34 0 44" />
            </svg>
        ),
    },
    {
        key: "badminton",
        image: "/images/facilities/badminton.jpg",
        count: "2",
        icon: (
            <svg viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8" aria-hidden="true">
                <circle cx="32" cy="68" r="8" />
                <path d="M24 62L16 14M40 62L48 14" />
                <path d="M32 54V8" />
                <ellipse cx="32" cy="8" rx="18" ry="3" />
            </svg>
        ),
    },
    {
        key: "cafe",
        image: "/images/facilities/cafe.jpg",
        count: "1",
        icon: (
            <FontAwesomeIcon icon={faMugHot} className="h-8 w-8" aria-hidden="true" />
        ),
    },
] as const;

export default function Facilities({ dict }: { dict: Dictionary }) {
    return (
        <section id="facilities" className="section-angle-top relative bg-navy py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="accent-stripe text-center font-heading text-3xl font-bold uppercase tracking-wide text-electric sm:text-4xl">
                        {dict.facilities.sectionTitle}
                    </h2>
                </FadeIn>

                {/* ── Alternating full-width showcase ── */}
                <div className="mt-14 flex flex-col gap-16 sm:gap-20">
                    {facilityCards.map(({ key, image, count, icon }, i) => {
                        const card = dict.facilities.cards[key];
                        const isReversed = i % 2 === 1;

                        return (
                            <FadeIn key={key} delay={i * 0.08} direction={isReversed ? "right" : "left"}>
                                <div className={`flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}>
                                    {/* Image */}
                                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
                                        <Image
                                            src={image}
                                            alt={`Vlocity Arena ${card.title} — ${card.description}`}
                                            title={card.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                                        {/* Court count badge */}
                                        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-electric text-sm font-black text-navy sm:h-12 sm:w-12 sm:text-base">
                                            {count}×
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col md:w-1/2">
                                        <div className="flex items-center gap-3 text-electric">
                                            {icon}
                                            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-electric sm:text-3xl">
                                                {card.title}
                                            </h3>
                                        </div>

                                        <div className="mt-3 h-px w-16 bg-electric/30" />

                                        <p className="mt-4 text-base leading-relaxed text-white-60 sm:text-lg">
                                            {card.description}
                                        </p>

                                        {/* Feature tags */}
                                        {card.features && (
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {card.features.map((feat: string) => (
                                                    <span
                                                        key={feat}
                                                        className="inline-flex items-center gap-1.5 rounded-full border border-white-10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white-80"
                                                    >
                                                        <FontAwesomeIcon icon={faCircleCheck} className="h-3 w-3 text-electric" aria-hidden="true" />
                                                        {feat}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
