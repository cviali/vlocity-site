import type { Dictionary, Locale } from "@/app/[locale]/dictionaries";
import LocaleSwitcher from "./LocaleSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";
const INSTAGRAM_URL = "https://www.instagram.com/vlocity.arena/";

const navItems = [
    { key: "about", href: "#about" },
    { key: "facilities", href: "#facilities" },
    { key: "gallery", href: "#gallery" },
    { key: "pricing", href: "#pricing" },
    { key: "events", href: "#events" },
    { key: "location", href: "#location" },
] as const;

export default function Footer({
    dict,
    locale,
}: {
    dict: Dictionary;
    locale: Locale;
}) {
    return (
        <footer className="border-t border-white-10 bg-warm-grey">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="font-heading text-xl font-bold">Vlocity Arena</h3>
                        <p className="mt-2 text-sm text-white-60">{dict.footer.tagline}</p>
                    </div>

                    {/* Nav */}
                    <nav className="flex flex-col gap-2">
                        {navItems.map(({ key, href }) => (
                            <a
                                key={key}
                                href={href}
                                className="text-sm text-white-60 transition-colors hover:text-electric"
                            >
                                {dict.nav[key]}
                            </a>
                        ))}
                    </nav>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold">{dict.footer.followUs}</h4>
                        <div className="mt-3 flex gap-4">
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-60 transition-colors hover:text-electric"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-60 transition-colors hover:text-electric"
                                aria-label="AYO Booking"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </div>
                        <div className="mt-4">
                            <LocaleSwitcher locale={locale} label={dict.localeSwitcher.switchTo} />
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white-10 pt-8 text-center text-sm text-white-60">
                    {dict.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
