import type { Dictionary } from "@/app/[locale]/dictionaries";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";

export default function Pricing({ dict }: { dict: Dictionary }) {
    return (
        <section id="pricing" className="bg-navy py-20">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.pricing.sectionTitle}
                </h2>

                <div className="mt-12 rounded-2xl border border-white-10 bg-warm-grey p-8 sm:p-12">
                    <p className="text-sm uppercase tracking-wider text-white-60">
                        {dict.pricing.startingFrom}
                    </p>
                    <div className="mt-2 font-heading text-5xl font-bold text-neon sm:text-6xl">
                        {dict.pricing.price}
                    </div>
                    <p className="mt-1 text-white-60">{dict.pricing.perSession}</p>

                    <p className="mx-auto mt-6 max-w-md text-white-80">
                        {dict.pricing.description}
                    </p>

                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block rounded-lg bg-electric px-8 py-4 text-lg font-semibold text-navy transition-colors hover:bg-electric/90"
                    >
                        {dict.pricing.cta}
                    </a>

                    <p className="mt-4 text-xs text-white-60">{dict.pricing.note}</p>
                </div>
            </div>
        </section>
    );
}
