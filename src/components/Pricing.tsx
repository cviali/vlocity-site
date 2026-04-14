import type { Dictionary } from "@/app/[locale]/dictionaries";
import FadeIn from "./FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";

const sports = [
    {
        key: "badminton" as const,
        courtClass: "court-badminton",
        icon: (
            <svg viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10" aria-hidden="true">
                <circle cx="32" cy="68" r="8" />
                <path d="M24 62L16 14M40 62L48 14" />
                <path d="M28 58L22 16M36 58L42 16" />
                <path d="M32 54V8" />
                <ellipse cx="32" cy="8" rx="18" ry="3" />
            </svg>
        ),
    },
    {
        key: "tennis" as const,
        courtClass: "court-tennis",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10" aria-hidden="true">
                <circle cx="32" cy="32" r="28" />
                <path d="M14 10c7 10 7 34 0 44" />
                <path d="M50 10c-7 10-7 34 0 44" />
            </svg>
        ),
    },
    {
        key: "padel" as const,
        courtClass: "court-padel",
        icon: (
            <svg viewBox="0 0 56 96" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10" aria-hidden="true">
                <rect x="8" y="4" width="40" height="50" rx="20" />
                <circle cx="20" cy="20" r="2" /><circle cx="28" cy="16" r="2" /><circle cx="36" cy="20" r="2" />
                <circle cx="20" cy="30" r="2" /><circle cx="28" cy="26" r="2" /><circle cx="36" cy="30" r="2" />
                <circle cx="20" cy="40" r="2" /><circle cx="28" cy="36" r="2" /><circle cx="36" cy="40" r="2" />
                <rect x="24" y="54" width="8" height="30" rx="4" />
            </svg>
        ),
    },
] as const;

export default function Pricing({ dict }: { dict: Dictionary }) {
    return (
        <section id="pricing" className="bg-navy py-24">
            <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="accent-stripe font-heading text-3xl font-bold uppercase tracking-wide text-electric sm:text-4xl">
                        {dict.pricing.sectionTitle}
                    </h2>
                </FadeIn>

                <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:items-end">
                    {sports.map((sportItem, i) => {
                        const { key, courtClass, icon } = sportItem;
                        const sport = dict.pricing.sports[key];
                        return (
                            <FadeIn key={key} delay={i * 0.12}>
                                <div className="ticket-notch-both relative overflow-hidden rounded-2xl bg-warm-grey">
                                    {/* Court line pattern background */}
                                    <div className={`pointer-events-none absolute inset-0 ${courtClass}`} />

                                    <div className="relative z-[1] px-6 py-8 sm:px-8">
                                        {/* Sport icon */}
                                        <div className="mx-auto mb-4 text-electric/30">
                                            {icon}
                                        </div>

                                        <h3 className="font-heading text-xl font-bold uppercase tracking-wide">
                                            {sport.name}
                                        </h3>

                                        {/* Dashed ticket divider */}
                                        <div className="mx-auto my-4 h-px w-3/4 border-t border-dashed border-white-10" />

                                        <p className="text-xs uppercase tracking-wider text-white-60">
                                            {dict.pricing.startingFrom}
                                        </p>
                                        <div className="mt-1 font-heading text-4xl font-black text-electric sm:text-5xl">
                                            {sport.price}
                                        </div>
                                        <p className="mt-1 text-sm text-white-60">
                                            {dict.pricing.perSession}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={0.35}>
                    <p className="mx-auto mt-10 max-w-md text-white-80">
                        {dict.pricing.description}
                    </p>

                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-3 rounded-full bg-electric px-10 py-4 text-base font-bold uppercase tracking-wider text-navy transition-all hover:bg-electric/90 hover:scale-105 active:scale-95 sm:text-lg"
                    >
                        <FontAwesomeIcon icon={faCalendarDays} className="h-5 w-5" aria-hidden="true" />
                        {dict.pricing.cta}
                    </a>

                    <p className="mt-4 text-xs text-white-60">{dict.pricing.note}</p>
                </FadeIn>
            </div>
        </section>
    );
}
