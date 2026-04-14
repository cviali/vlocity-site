"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
};

export default function FadeIn({
    children,
    direction = "up",
    delay = 0,
    className,
}: {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    className?: string;
}) {
    const prefersReduced = useReducedMotion();
    const offset = offsets[direction];

    return (
        <motion.div
            initial={
                prefersReduced
                    ? { opacity: 0 }
                    : { opacity: 0, x: offset.x, y: offset.y }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
