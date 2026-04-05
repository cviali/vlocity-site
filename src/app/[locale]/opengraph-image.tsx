import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Vlocity Arena — Premium Padel, Tennis & Badminton";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #efe9e4 0%, #e2dbd4 100%)",
                    color: "#82644f",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        marginBottom: 16,
                    }}
                >
                    Vlocity Arena
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: "#33584E",
                        marginBottom: 24,
                    }}
                >
                    Premium Padel · Tennis · Badminton
                </div>
                <div
                    style={{
                        fontSize: 24,
                        color: "rgba(130, 100, 79, 0.6)",
                    }}
                >
                    Jl. Daan Mogot No.111, Jakarta Barat
                </div>
            </div>
        ),
        { ...size }
    );
}
