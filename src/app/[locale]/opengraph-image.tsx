import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Vlocity Arena — Premium Padel, Tennis & Badminton in West Jakarta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HERO_IMAGE = "https://vlocityarena.com/images/hero/hero.jpg";

export default async function OgImage() {
    let heroSrc = HERO_IMAGE;
    try {
        const res = await fetch(HERO_IMAGE);
        const buf = await res.arrayBuffer();
        heroSrc = `data:image/jpeg;base64,${Buffer.from(buf).toString("base64")}`;
    } catch {
        // Fall back to URL if fetch fails
    }

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    fontFamily: "sans-serif",
                    overflow: "hidden",
                }}
            >
                {/* Hero background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={heroSrc}
                    alt=""
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />

                {/* Cinematic gradient overlay — dark left, lighter right */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(to right, #efe9e4 0%, rgba(239,233,228,0.92) 35%, rgba(239,233,228,0.5) 65%, rgba(239,233,228,0.15) 100%)",
                    }}
                />

                {/* Diagonal accent line */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: -40,
                        right: 280,
                        width: 2,
                        height: 750,
                        background:
                            "linear-gradient(to bottom, transparent 0%, rgba(51,88,78,0.25) 40%, rgba(51,88,78,0.25) 60%, transparent 100%)",
                        transform: "rotate(12deg)",
                    }}
                />

                {/* Main content — editorial split */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "relative",
                        padding: "60px 72px",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {/* Overline */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                        <div style={{ display: "flex", width: 48, height: 2, background: "#33584E" }} />
                        <span
                            style={{
                                fontSize: 14,
                                fontWeight: 700,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                color: "#33584E",
                            }}
                        >
                            West Jakarta
                        </span>
                    </div>

                    {/* Title — staggered lines */}
                    <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.85 }}>
                        <span
                            style={{
                                fontSize: 120,
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "-0.02em",
                                color: "#33584E",
                            }}
                        >
                            Vlocity
                        </span>
                        <span
                            style={{
                                fontSize: 120,
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "-0.02em",
                                color: "rgba(51,88,78,0.35)",
                            }}
                        >
                            Arena
                        </span>
                    </div>

                    {/* Subtitle */}
                    <span
                        style={{
                            fontSize: 20,
                            fontWeight: 500,
                            textTransform: "uppercase",
                            letterSpacing: "0.25em",
                            color: "rgba(130,100,79,0.6)",
                            marginTop: 24,
                        }}
                    >
                        Premium Padel · Tennis · Badminton
                    </span>

                    {/* Stats strip */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 32,
                            marginTop: 36,
                            paddingTop: 24,
                            borderTop: "1px solid rgba(130,100,79,0.12)",
                        }}
                    >
                        {[
                            { value: "10", label: "Courts" },
                            { value: "3", label: "Sports" },
                            { value: "4.9", label: "Rating" },
                            { value: "06-00", label: "Open Daily" },
                        ].map((stat) => (
                            <div key={stat.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                                <span style={{ fontSize: 32, fontWeight: 900, color: "#33584E" }}>
                                    {stat.value}
                                </span>
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.15em",
                                        color: "rgba(130,100,79,0.5)",
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
