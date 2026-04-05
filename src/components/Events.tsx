import type { Dictionary } from "@/app/[locale]/dictionaries";

const EVENTS_WHATSAPP_URL = "https://wa.me/6281263212777";

export default function Events({ dict }: { dict: Dictionary }) {
    return (
        <section id="events" className="bg-warm-grey py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.events.sectionTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-white-60">
                    {dict.events.description}
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {/* Corporate */}
                    <div className="rounded-xl border border-white-10 bg-navy p-8">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-electric/10 text-electric">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-6 w-6"
                            >
                                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl font-semibold">
                            {dict.events.corporate.title}
                        </h3>
                        <p className="mt-2 text-white-60">
                            {dict.events.corporate.description}
                        </p>
                    </div>

                    {/* Tournament */}
                    <div className="rounded-xl border border-white-10 bg-navy p-8">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon/10 text-neon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-6 w-6"
                            >
                                <path d="M12 15l-2 5h4l-2-5zM6 3h12l1 7c0 2.761-2.239 5-5 5h-4c-2.761 0-5-2.239-5-5l1-7zM5 3c-1 0-2 1-2 2v1c0 1.657 1.343 3 3 3M19 3c1 0 2 1 2 2v1c0 1.657-1.343 3-3 3" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl font-semibold">
                            {dict.events.tournament.title}
                        </h3>
                        <p className="mt-2 text-white-60">
                            {dict.events.tournament.description}
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <a
                        href={EVENTS_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-[#fff] transition-colors hover:bg-[#1da851]"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {dict.events.ctaWhatsApp}
                    </a>
                </div>
            </div>
        </section>
    );
}
