"use client";

import Image from "next/image";
import type { Locale } from "@/app/[locale]/dictionaries";

const flags: Record<Locale, { src: string; alt: string }> = {
    id: { src: "/images/flags/id.svg", alt: "Bahasa Indonesia" },
    en: { src: "/images/flags/us.svg", alt: "English" },
};

export default function LocaleSwitcher({
    locale,
    label,
}: {
    locale: Locale;
    label: string;
}) {
    // Target locale is the opposite of the current one
    const target: Locale = locale === "id" ? "en" : "id";
    const targetHref = locale === "id" ? "/en" : "/";
    const flag = flags[target];

    return (
        <a
            href={targetHref}
            title={label}
            className="flex items-center gap-2 rounded-md border border-white-10 px-3 py-1.5 text-sm text-white-80 transition-colors hover:border-electric hover:text-electric sm:rounded-md sm:border sm:px-3 sm:py-1.5 max-sm:border-0 max-sm:p-0 max-sm:rounded-full"
        >
            <Image
                src={flag.src}
                alt={flag.alt}
                width={20}
                height={20}
                className="rounded-full sm:h-5 sm:w-5 max-sm:h-7 max-sm:w-7"
                unoptimized
            />
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}
