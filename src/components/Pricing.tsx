import type { Dictionary } from "@/app/[locale]/dictionaries";

const BOOKING_URL = "https://ayo.co.id/v/vlocity-arena";
const sportKeys = ["badminton", "tennis", "padel"] as const;

export default function Pricing({ dict }: { dict: Dictionary }) {
    return (
        <section id="pricing" className="bg-navy py-20">
            <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.pricing.sectionTitle}
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    {sportKeys.map((key) => {
                        const sport = dict.pricing.sports[key];
                        return (
                            <div
                                key={key}
                                className="rounded-2xl border border-white-10 bg-warm-grey p-6 sm:p-8"
                            >
                                <h3 className="font-heading text-xl font-bold">
                                    {sport.name}
                                </h3>
                                <p className="mt-3 text-sm uppercase tracking-wider text-white-60">
                                    {dict.pricing.startingFrom}
                                </p>
                                <div className="mt-1 font-heading text-3xl font-bold text-neon sm:text-4xl">
                                    {sport.price}
                                </div>
                                <p className="mt-1 text-white-60">
                                    {dict.pricing.perSession}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <p className="mx-auto mt-8 max-w-md text-white-80">
                    {dict.pricing.description}
                </p>

                <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-lg bg-electric px-8 py-4 text-lg font-semibold text-navy transition-colors hover:bg-electric/90"
                >
                    {dict.pricing.cta}
                </a>

                <p className="mt-4 text-xs text-white-60">{dict.pricing.note}</p>
            </div>
        </section>
    );
}
