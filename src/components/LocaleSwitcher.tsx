"use client";

import type { Locale } from "@/app/[locale]/dictionaries";

export default function LocaleSwitcher({
    locale,
    label,
}: {
    locale: Locale;
    label: string;
}) {
    const targetHref = locale === "id" ? "/en" : "/";

    return (
        <a
            href={targetHref}
            className="rounded-md border border-white-10 px-3 py-1.5 text-sm text-white-80 transition-colors hover:border-electric hover:text-electric"
        >
            {label}
        </a>
    );
}
