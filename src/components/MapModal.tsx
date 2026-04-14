"use client";

import Image from "next/image";
import { useState, lazy, Suspense } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

const Lightbox = lazy(() => import("yet-another-react-lightbox"));

export default function MapModal({ alt }: { alt: string }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="block w-full cursor-zoom-in"
                aria-label={`Tap to zoom: ${alt}`}
            >
                <Image
                    src="/images/location/indoor-map.png"
                    alt={alt}
                    width={1684}
                    height={1191}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                />
                <span className="mt-2 flex items-center justify-center gap-1 text-xs text-white-60 sm:hidden">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="h-3.5 w-3.5" />
                    Tap to zoom
                </span>
            </button>

            {open && (
                <Suspense fallback={null}>
                    <Lightbox
                        open={true}
                        close={() => setOpen(false)}
                        slides={[{ src: "/images/location/indoor-map.png", alt }]}
                        plugins={[Zoom]}
                        zoom={{ maxZoomPixelRatio: 3 }}
                        carousel={{ finite: true }}
                        render={{
                            buttonPrev: () => null,
                            buttonNext: () => null,
                        }}
                    />
                </Suspense>
            )}
        </>
    );
}
