"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function AnimatedCounter({
    value,
    suffix = "",
    className,
}: {
    value: string;
    suffix?: string;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const prefersReduced = useReducedMotion();

    // Extract numeric part and any prefix/suffix from value like "1000+" or "4.9"
    const numericMatch = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
    const prefix = numericMatch?.[1] ?? "";
    const num = parseFloat(numericMatch?.[2] ?? "0");
    const trailingSuffix = (numericMatch?.[3] ?? "") + suffix;
    const isDecimal = value.includes(".");
    const decimalPlaces = isDecimal ? (value.split(".")[1]?.replace(/\D/g, "").length ?? 1) : 0;

    const [display, setDisplay] = useState(prefersReduced ? value : `${prefix}0${trailingSuffix}`);

    useEffect(() => {
        if (!isInView || prefersReduced) {
            if (prefersReduced) setDisplay(value + suffix);
            return;
        }

        const duration = 1500;
        const steps = 40;
        const stepDuration = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;

            if (step >= steps) {
                setDisplay(value + suffix);
                clearInterval(timer);
            } else {
                const formatted = isDecimal
                    ? current.toFixed(decimalPlaces)
                    : Math.round(current).toLocaleString();
                setDisplay(`${prefix}${formatted}${trailingSuffix}`);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, prefersReduced, num, value, suffix, prefix, trailingSuffix, isDecimal, decimalPlaces]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
}
