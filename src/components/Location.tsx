import Image from "next/image";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import FadeIn from "./FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/v9jj8eVyDJU4nDN3A";

export default function Location({ dict }: { dict: Dictionary }) {
    return (
        <section id="location" className="bg-navy py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="accent-stripe text-center font-heading text-3xl font-bold uppercase tracking-wide text-electric sm:text-4xl">
                        {dict.location.sectionTitle}
                    </h2>
                </FadeIn>

                <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
                    {/* Map image */}
                    <FadeIn direction="left" delay={0.1}>
                        <a
                            href={GOOGLE_MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-white-10"
                        >
                            <Image
                                src="/images/location/map.png"
                                alt="Vlocity Arena location map — Jl. Daan Mogot No.111, Jakarta Barat"
                                title="Vlocity Arena Location Map"
                                fill
                                loading="lazy"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-navy/30 opacity-0 transition-opacity group-hover:opacity-100">
                                <span className="rounded-lg bg-electric px-4 py-2 text-sm font-bold uppercase tracking-wider text-navy">
                                    {dict.location.cta}
                                </span>
                            </div>
                        </a>
                    </FadeIn>

                    {/* Info */}
                    <FadeIn direction="right" delay={0.2}>
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-start gap-3 text-electric">
                                    <FontAwesomeIcon icon={faLocationDot} className="mt-1 h-7 w-7 shrink-0" />
                                    <span className="text-base font-medium sm:text-lg">
                                        {dict.location.address}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start gap-3 text-neon">
                                    <FontAwesomeIcon icon={faClock} className="mt-1 h-7 w-7 shrink-0" />
                                    <span className="text-base font-medium sm:text-lg">
                                        {dict.location.hours}
                                    </span>
                                </div>
                            </div>

                            <a
                                href={GOOGLE_MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 font-bold uppercase tracking-wider text-navy transition-all hover:bg-electric/90 hover:scale-105 active:scale-95"
                            >
                                <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5" />
                                {dict.location.cta}
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
