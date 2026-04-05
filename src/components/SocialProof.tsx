import type { Dictionary } from "@/app/[locale]/dictionaries";

const statKeys = ["players", "events", "courts"] as const;

export default function SocialProof({ dict }: { dict: Dictionary }) {
    return (
        <section className="bg-warm-grey py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.socialProof.sectionTitle}
                </h2>

                {/* Rating */}
                <div className="mt-8 flex flex-col items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-heading text-5xl font-bold text-neon">
                            {dict.socialProof.rating}
                        </span>
                        <div className="flex text-neon" aria-hidden="true">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-white-60">
                        {dict.socialProof.ratingLabel}
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                    {statKeys.map((key) => {
                        const stat = dict.socialProof.stats[key];
                        return (
                            <div key={key} className="text-center">
                                <div className="font-heading text-3xl font-bold text-electric sm:text-4xl">
                                    {stat.count}
                                </div>
                                <div className="mt-1 text-sm text-white-60">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
