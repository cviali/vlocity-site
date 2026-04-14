import Image from "next/image";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import HeroSportIcons from "./HeroSportIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";

const sports = [
    {
        label: "Padel",
        courts: "6",
        icon: (
            <svg viewBox="0 0 56 96" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
                <rect x="8" y="4" width="40" height="50" rx="20" />
                <circle cx="22" cy="22" r="2" /><circle cx="34" cy="22" r="2" />
                <circle cx="22" cy="34" r="2" /><circle cx="34" cy="34" r="2" />
                <rect x="24" y="54" width="8" height="30" rx="4" />
            </svg>
        ),
    },
    {
        label: "Tennis",
        courts: "2",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
                <circle cx="32" cy="32" r="28" />
                <path d="M14 10c7 10 7 34 0 44" />
                <path d="M50 10c-7 10-7 34 0 44" />
            </svg>
        ),
    },
    {
        label: "Badminton",
        courts: "2",
        icon: (
            <svg viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
                <circle cx="32" cy="68" r="8" />
                <path d="M24 62L16 14M40 62L48 14" />
                <path d="M32 54V8" />
                <ellipse cx="32" cy="8" rx="18" ry="3" />
            </svg>
        ),
    },
];

export default function Hero({ dict }: { dict: Dictionary }) {
    return (
        <section className="relative min-h-svh overflow-hidden bg-navy">
            {/* ── Background layer ── */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/hero.jpg"
                    alt="Vlocity Arena — Premium Padel, Tennis & Badminton Courts in Jakarta Barat"
                    title="Vlocity Arena — Premium Padel, Tennis & Badminton Courts"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Cinematic gradient: dark left for text, lighter toward right for image reveal */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40 md:via-navy/70 md:to-navy/20" />
                {/* Bottom fade for smooth transition */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
            </div>

            {/* ── Diagonal accent line — architectural slash ── */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute -right-20 top-0 h-full w-px origin-top-right rotate-[15deg] bg-gradient-to-b from-transparent via-electric/20 to-transparent md:rotate-[12deg]" />
                <div className="absolute -right-12 top-0 h-full w-px origin-top-right rotate-[15deg] bg-gradient-to-b from-transparent via-electric/10 to-transparent md:rotate-[12deg]" />
            </div>

            {/* Floating sport equipment silhouettes */}
            <HeroSportIcons />

            {/* ── Main content — editorial split ── */}
            <div className="relative z-10 flex min-h-svh flex-col justify-end px-5 pb-10 sm:px-8 md:justify-center md:pb-0">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Overline */}
                    <div className="mb-4 flex items-center gap-3 md:mb-6">
                        <div className="h-px w-8 bg-electric sm:w-12" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-electric sm:text-xs">
                            West Jakarta
                        </span>
                    </div>

                    {/* Title — massive staggered lines */}
                    <h1 className="font-heading font-extrabold uppercase leading-[0.85] tracking-tight">
                        <span className="block text-[clamp(3rem,12vw,10rem)] text-electric">
                            Vlocity
                        </span>
                        <span className="block text-[clamp(3rem,12vw,10rem)] text-electric/40">
                            Arena
                        </span>
                    </h1>

                    {/* Subtitle line */}
                    <p className="mt-4 max-w-md text-sm font-medium uppercase tracking-[0.25em] text-white-60 sm:text-base md:mt-6 md:text-lg">
                        {dict.hero.subtitle}
                    </p>

                    {/* ── Sport chips + CTA row ── */}
                    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8 md:mt-12">
                        {/* Sport chips */}
                        <div className="flex gap-3">
                            {sports.map((s) => (
                                <div
                                    key={s.label}
                                    className="flex items-center gap-2 rounded-lg ring-1 ring-white-10 bg-navy/60 px-3 py-3.5 backdrop-blur-sm sm:px-4"
                                >
                                    <span className="text-electric">{s.icon}</span>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white-80 sm:text-xs">
                                            {s.label}
                                        </span>
                                        <span className="text-[10px] text-white-60">
                                            {s.courts} courts
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-electric px-8 py-4 text-base font-bold uppercase tracking-wider text-navy transition-all hover:bg-electric/90 hover:scale-105 active:scale-95 sm:px-10"
                        >
                            <FontAwesomeIcon icon={faCalendarDays} className="h-5 w-5" aria-hidden="true" />
                            {dict.hero.cta}
                        </a>
                    </div>

                    {/* ── Bottom stats strip ── */}
                    <div className="mt-10 flex items-center gap-6 border-t border-white-10 pt-6 sm:gap-10 md:mt-16 md:max-w-lg">
                        <div>
                            <div className="font-heading text-2xl font-black text-electric sm:text-3xl">10</div>
                            <div className="text-[10px] uppercase tracking-wider text-white-60 sm:text-xs">Courts</div>
                        </div>
                        <div className="h-8 w-px bg-white-10" />
                        <div>
                            <div className="font-heading text-2xl font-black text-electric sm:text-3xl">3</div>
                            <div className="text-[10px] uppercase tracking-wider text-white-60 sm:text-xs">Sports</div>
                        </div>
                        <div className="h-8 w-px bg-white-10" />
                        <div>
                            <div className="font-heading text-2xl font-black text-electric sm:text-3xl">06–00</div>
                            <div className="text-[10px] uppercase tracking-wider text-white-60 sm:text-xs">Open Daily</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 animate-bounce-slow md:bottom-6">
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="h-5 w-5 text-white-60"
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}
