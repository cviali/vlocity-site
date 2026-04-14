import type { Dictionary } from "@/app/[locale]/dictionaries";
import MapModal from "./MapModal";
import FadeIn from "./FadeIn";

export default function About({ dict }: { dict: Dictionary }) {
    return (
        <section id="about" className="bg-navy py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="accent-stripe text-center font-heading text-3xl font-bold uppercase tracking-wide text-electric sm:text-4xl">
                        {dict.about.sectionTitle}
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white-60">
                        {dict.about.description}
                    </p>
                </FadeIn>

                {/* Indoor map – tap-to-zoom modal on mobile, plain image on desktop */}
                <FadeIn delay={0.2}>
                    <div className="mt-12 rounded-xl border border-white-10">
                        <MapModal alt={dict.about.mapAlt} />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
