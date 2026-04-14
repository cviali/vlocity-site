import type { Dictionary } from "@/app/[locale]/dictionaries";
import GalleryLightbox from "./GalleryLightbox";
import FadeIn from "./FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const INSTAGRAM_URL = "https://www.instagram.com/vlocity.arena/";

const images = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/gallery/gallery-${i + 1}.jpg`,
    alt: `Vlocity Arena gallery photo ${i + 1} — padel, tennis & badminton facilities`,
    title: `Vlocity Arena Gallery ${i + 1}`,
}));

export default function Gallery({ dict }: { dict: Dictionary }) {
    return (
        <section id="gallery" className="section-angle-top bg-navy py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="accent-stripe text-center font-heading text-3xl font-bold uppercase tracking-wide text-electric sm:text-4xl">
                        {dict.gallery.sectionTitle}
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <GalleryLightbox images={images} />
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="mt-8 text-center">
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white-10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white-80 transition-all hover:border-electric hover:text-electric hover:scale-105 active:scale-95"
                        >
                        <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" aria-hidden="true" />
                        {dict.gallery.viewOnInstagram}
                    </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
