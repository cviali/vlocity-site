import type { Dictionary } from "@/app/[locale]/dictionaries";
import type { ReactNode } from "react";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

const statKeys = ["players", "events", "courts"] as const;

/* Sport-specific icons for each stat */
const statIcons: Record<string, ReactNode> = {
    players: (
        /* Player silhouette */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 sm:h-10 sm:w-10">
            <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
    events: (
        /* Trophy */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 sm:h-10 sm:w-10">
            <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0013.125 11h-2.25A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75m0 0a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 008.5 6.75m5 0h3.375c.621 0 1.125.504 1.125 1.125v1.5c0 1.035-.84 1.875-1.875 1.875H15.5m-3-4.5h-3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 1.035.84 1.875 1.875 1.875H10.5" />
        </svg>
    ),
    courts: (
        /* Court/grid */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 sm:h-10 sm:w-10">
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
};

export default function SocialProof({ dict }: { dict: Dictionary }) {
    return (
        <section className="court-surface relative overflow-hidden py-24 sm:py-28">
            {/* Court line markings as background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Outer boundary */}
                <div className="absolute inset-[5%] border border-navy/10 sm:inset-[8%]" />
                {/* Center line */}
                <div className="absolute left-1/2 top-[5%] bottom-[5%] w-px bg-navy/10 sm:top-[8%] sm:bottom-[8%]" />
                {/* Service line */}
                <div className="absolute left-[5%] right-[5%] top-1/2 h-px bg-navy/10 sm:left-[8%] sm:right-[8%]" />
                {/* Center circle */}
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/10 sm:h-40 sm:w-40 md:h-56 md:w-56" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl">
                        {dict.socialProof.sectionTitle}
                    </h2>
                </FadeIn>

                {/* Scoreboard rating panel */}
                <FadeIn delay={0.15}>
                    <div className="mx-auto mt-10 max-w-sm">
                        <div className="scoreboard-panel px-8 py-6 text-center">
                            <div className="flex items-center justify-center gap-3">
                                <span className="font-heading text-7xl font-black tracking-tight text-navy sm:text-8xl">
                                    <AnimatedCounter value={dict.socialProof.rating} />
                                </span>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex text-navy/70" aria-hidden="true">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg
                                                key={i}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 sm:h-6 sm:w-6"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-left text-xs font-medium text-navy/50">
                                        {dict.socialProof.ratingLabel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Net divider */}
                <div className="net-divider" />

                {/* Stats as scoreboard panels */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    {statKeys.map((key, i) => {
                        const stat = dict.socialProof.stats[key];
                        return (
                            <FadeIn key={key} delay={0.25 + i * 0.1}>
                                <div className="scoreboard-panel flex flex-col items-center px-3 py-6 sm:px-6 sm:py-8">
                                    <div className="text-navy/40">
                                        {statIcons[key]}
                                    </div>
                                    <div className="mt-3 font-heading text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
                                        <AnimatedCounter value={stat.count} />
                                    </div>
                                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/50 sm:text-xs">
                                        {stat.label}
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
