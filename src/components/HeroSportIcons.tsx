"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Inline SVG sport equipment silhouettes inspired by the indoor-map aesthetic */

function TennisBall({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8c8 12 8 36 0 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M52 8c-8 12-8 36 0 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    );
}

function Shuttlecock({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 80" fill="none" className={className} aria-hidden="true">
            <circle cx="32" cy="68" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M22 62L12 10M42 62L52 10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M26 56L20 12M38 56L44 12" stroke="currentColor" strokeWidth="1.5" />
            <path d="M32 52V4" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="32" cy="6" rx="22" ry="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function PadelRacket({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 56 96" fill="none" className={className} aria-hidden="true">
            <rect x="8" y="4" width="40" height="52" rx="20" stroke="currentColor" strokeWidth="2" />
            {/* Perforated holes - signature padel look */}
            <circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="28" cy="16" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="36" cy="20" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="30" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="28" cy="26" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="36" cy="30" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="40" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="28" cy="36" r="2.5" stroke="currentColor" strokeWidth="1" />
            <circle cx="36" cy="40" r="2.5" stroke="currentColor" strokeWidth="1" />
            {/* Handle */}
            <rect x="24" y="56" width="8" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
            <line x1="24" y1="80" x2="32" y2="80" stroke="currentColor" strokeWidth="1" />
        </svg>
    );
}

const floatVariants = {
    initial: { opacity: 0 },
    animate: (i: number) => ({
        opacity: 1,
        transition: { delay: 0.8 + i * 0.3, duration: 1 },
    }),
};

const driftVariants = {
    animate: (i: number) => ({
        y: [0, -12, 0, 8, 0],
        rotate: [0, i % 2 === 0 ? 5 : -5, 0, i % 2 === 0 ? -3 : 3, 0],
        transition: {
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    }),
};

export default function HeroSportIcons() {
    const prefersReduced = useReducedMotion();

    if (prefersReduced) return null;

    return (
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
            {/* Tennis ball — top left */}
            <motion.div
                className="absolute left-[8%] top-[18%] text-white-10 sm:left-[12%] sm:top-[15%]"
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={0}
            >
                <motion.div variants={driftVariants} animate="animate" custom={0}>
                    <TennisBall className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" />
                </motion.div>
            </motion.div>

            {/* Shuttlecock — top right */}
            <motion.div
                className="absolute right-[10%] top-[12%] text-white-10 sm:right-[14%] sm:top-[10%]"
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={1}
            >
                <motion.div variants={driftVariants} animate="animate" custom={1}>
                    <Shuttlecock className="h-14 w-10 sm:h-18 sm:w-14 md:h-24 md:w-18" />
                </motion.div>
            </motion.div>

            {/* Padel racket — bottom left */}
            <motion.div
                className="absolute bottom-[18%] left-[6%] text-white-10 sm:bottom-[15%] sm:left-[10%]"
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={2}
            >
                <motion.div variants={driftVariants} animate="animate" custom={2}>
                    <PadelRacket className="h-16 w-10 sm:h-20 sm:w-12 md:h-28 md:w-16" />
                </motion.div>
            </motion.div>

            {/* Tennis ball — bottom right (smaller/farther) */}
            <motion.div
                className="absolute bottom-[25%] right-[8%] text-white-10 opacity-60 sm:bottom-[20%] sm:right-[12%]"
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={3}
            >
                <motion.div variants={driftVariants} animate="animate" custom={3}>
                    <TennisBall className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14" />
                </motion.div>
            </motion.div>
        </div>
    );
}
