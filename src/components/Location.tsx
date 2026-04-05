import Image from "next/image";
import type { Dictionary } from "@/app/[locale]/dictionaries";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/v9jj8eVyDJU4nDN3A";

export default function Location({ dict }: { dict: Dictionary }) {
    return (
        <section id="location" className="bg-navy py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.location.sectionTitle}
                </h2>

                <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
                    {/* Map image */}
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
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-navy/30 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="rounded-lg bg-electric px-4 py-2 text-sm font-semibold text-navy">
                                {dict.location.cta}
                            </span>
                        </div>
                    </a>

                    {/* Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-start gap-3 text-electric">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mt-1 h-7 w-7 shrink-0"
                                >
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                                </svg>
                                <span className="text-base font-medium sm:text-lg">
                                    {dict.location.address}
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-start gap-3 text-neon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mt-1 h-7 w-7 shrink-0"
                                >
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                </svg>
                                <span className="text-base font-medium sm:text-lg">
                                    {dict.location.hours}
                                </span>
                            </div>
                        </div>

                        <a
                            href={GOOGLE_MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 font-semibold text-navy transition-colors hover:bg-electric/90"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                            </svg>
                            {dict.location.cta}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
