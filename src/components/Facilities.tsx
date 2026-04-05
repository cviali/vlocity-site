import Image from "next/image";
import type { Dictionary } from "@/app/[locale]/dictionaries";

const facilityCards = [
    { key: "padel", image: "/images/facilities/padel.jpg" },
    { key: "tennis", image: "/images/facilities/tennis.jpg" },
    { key: "badminton", image: "/images/facilities/badminton.jpg" },
    { key: "cafe", image: "/images/facilities/cafe.jpg" },
] as const;

export default function Facilities({ dict }: { dict: Dictionary }) {
    return (
        <section id="facilities" className="bg-warm-grey py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-heading text-3xl font-bold text-electric sm:text-4xl">
                    {dict.facilities.sectionTitle}
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {facilityCards.map(({ key, image }) => {
                        const card = dict.facilities.cards[key];
                        return (
                            <div
                                key={key}
                                className="group overflow-hidden rounded-xl border border-white-10 bg-navy"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={card.title}
                                        title={card.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-heading text-lg font-semibold">
                                        {card.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-white-60">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
