import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/app/[locale]/dictionaries";
import LocaleSwitcher from "./LocaleSwitcher";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";

const navItems = [
    { key: "about", href: "#about" },
    { key: "facilities", href: "#facilities" },
    { key: "gallery", href: "#gallery" },
    { key: "pricing", href: "#pricing" },
    { key: "events", href: "#events" },
    { key: "location", href: "#location" },
] as const;

export default function Header({
    dict,
    locale,
}: {
    dict: Dictionary;
    locale: Locale;
}) {
    return (
        <header className="sticky top-0 z-50 border-b border-white-10 bg-navy/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href={locale === "id" ? "/" : `/${locale}`}
                    className="flex items-center gap-2"
                >
                    <Image
                        src="/images/brand/logo.jpg"
                        alt="Vlocity Arena logo"
                        title="Vlocity Arena"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="hidden font-heading text-lg font-bold sm:inline">
                        Vlocity Arena
                    </span>
                </Link>

                {/* Nav */}
                <nav className="hidden items-center gap-6 lg:flex">
                    {navItems.map(({ key, href }) => (
                        <a
                            key={key}
                            href={href}
                            className="text-sm text-white-80 transition-colors hover:text-electric"
                        >
                            {dict.nav[key]}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <LocaleSwitcher locale={locale} label={dict.localeSwitcher.switchTo} />
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-electric px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-electric/90"
                    >
                        {dict.nav.bookNow}
                    </a>
                </div>
            </div>
        </header>
    );
}
