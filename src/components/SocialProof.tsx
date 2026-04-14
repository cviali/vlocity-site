import type { Dictionary } from "@/app/[locale]/dictionaries";
import type { ReactNode } from "react";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTrophy, faTableCellsLarge, faStar } from "@fortawesome/free-solid-svg-icons";

const statKeys = ["players", "events", "courts"] as const;

/* Sport-specific icons for each stat */
const statIcons: Record<string, ReactNode> = {
    players: (
        <FontAwesomeIcon icon={faUsers} className="h-8 w-8 sm:h-10 sm:w-10" />
    ),
    events: (
        <FontAwesomeIcon icon={faTrophy} className="h-8 w-8 sm:h-10 sm:w-10" />
    ),
    courts: (
        <FontAwesomeIcon icon={faTableCellsLarge} className="h-8 w-8 sm:h-10 sm:w-10" />
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
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className="h-5 w-5 sm:h-6 sm:w-6"
                                            />
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

                {/* Breakdown sub-ratings */}
                <FadeIn delay={0.2}>
                    <div className="mx-auto mt-6 flex max-w-sm justify-center gap-6 sm:gap-8">
                        {(["cleanliness", "courtCondition", "communication"] as const).map((key) => {
                            const item = dict.socialProof.breakdown[key];
                            return (
                                <div key={key} className="flex flex-col items-center gap-1">
                                    <span className="font-heading text-lg font-black text-navy sm:text-xl">
                                        {item.score}
                                    </span>
                                    <span className="text-[9px] font-semibold uppercase tracking-wider text-navy/50 sm:text-[10px]">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
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
                                <div className="scoreboard-panel flex h-full flex-col items-center justify-center px-3 py-6 text-center sm:px-6 sm:py-8">
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
