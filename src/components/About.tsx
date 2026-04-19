import type { Dictionary } from "@/app/[locale]/dictionaries";
import FadeIn from "./FadeIn";

export default function About({ dict }: { dict: Dictionary }) {
    return (
        <section id="about" className="bg-warm-grey py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-0">
                <FadeIn>
                    <h2 className="accent-stripe text-center font-heading text-3xl font-bold uppercase tracking-wide text-electric sm:text-4xl">
                        {dict.about.sectionTitle}
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white-60">
                        {dict.about.description}
                    </p>
                </FadeIn>

                {/* Stacked map + legend – legend fades in on top when scrolled into view */}
                <div className="relative mt-12">
                    <FadeIn>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/map/map.svg"
                            alt={dict.about.mapAlt}
                            className="w-full h-auto"
                        />
                    </FadeIn>
                    <FadeIn delay={0.8} className="absolute inset-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/map/map-legend.svg"
                            alt=""
                            className="w-full h-auto"
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
