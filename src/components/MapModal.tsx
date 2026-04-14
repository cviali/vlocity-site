"use client";

import Image from "next/image";
import { useState, lazy, Suspense } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
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
