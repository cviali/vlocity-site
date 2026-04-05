import type { Dictionary } from "@/app/[locale]/dictionaries";

const statKeys = ["padel", "tennis", "badminton"] as const;

export default function About({ dict }: { dict: Dictionary }) {
    return (
        <section id="about" className="bg-navy py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.about.sectionTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-white-60">
                    {dict.about.description}
                </p>

                {/* Stats grid */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                    {statKeys.map((key) => {
                        const stat = dict.about.stats[key];
                        return (
                            <div
                                key={key}
                                className="rounded-xl border border-white-10 bg-warm-grey p-6 text-center"
                            >
                                <div className="font-heading text-4xl font-bold text-electric">
                                    {stat.count}
                                </div>
                                <div className="mt-2 text-sm text-white-60">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
