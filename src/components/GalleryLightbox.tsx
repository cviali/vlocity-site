"use client";

import Image from "next/image";
import { useState, lazy, Suspense } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

const Lightbox = lazy(() => import("yet-another-react-lightbox"));

interface GalleryImage {
    src: string;
    alt: string;
    title: string;
}

/* Masonry-style varying heights per item position */
const spanClasses = [
    "row-span-2",  // 1st: tall
    "",             // 2nd: normal
    "",             // 3rd: normal
    "row-span-2",  // 4th: tall
    "",             // 5th: normal
    "row-span-2",  // 6th: tall
    "",             // 7th: normal
    "",             // 8th: normal
];

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
    const [index, setIndex] = useState(-1);

    const slides = images.map(({ src, alt }) => ({ src, alt }));

    return (
        <>
            <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-2 sm:auto-rows-[180px] sm:grid-cols-3 sm:gap-3 md:auto-rows-[200px] md:grid-cols-4">
                {images.map(({ src, alt, title }, i) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={`group relative cursor-zoom-in overflow-hidden rounded-lg ${spanClasses[i] ?? ""}`}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            title={title}
                            fill
                            loading="lazy"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        />
                        {/* Hover overlay with zoom icon */}
                        <div className="absolute inset-0 flex items-center justify-center bg-electric/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="h-8 w-8 text-navy" aria-hidden="true" />
                        </div>
                    </button>
                ))}
            </div>

            {index >= 0 && (
                <Suspense fallback={null}>
                    <Lightbox
                        open={true}
                        close={() => setIndex(-1)}
                        index={index}
                        slides={slides}
                        plugins={[Zoom]}
                        zoom={{ maxZoomPixelRatio: 3 }}
                    />
                </Suspense>
            )}
        </>
    );
}
