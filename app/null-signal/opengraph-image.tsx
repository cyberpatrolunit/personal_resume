import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Branded share card: null_signal wordmark + tagline over the dimmed control
// surface. Generated at build time; replaces the raw screenshot crop.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "null_signal — generative VJ instrument";

const CYAN = "#00ffff";

async function loadGeoFont(): Promise<ArrayBuffer | null> {
  try {
    // Old UA makes Google Fonts serve TTF, which satori can consume.
    const css = await fetch("https://fonts.googleapis.com/css2?family=Geo", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:10.0)" },
    }).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null; // fall back to the default font rather than failing the build
  }
}

export default async function OgImage() {
  const geo = await loadGeoFont();
  const shot = await readFile(
    join(process.cwd(), "public/project-imgs/null-signal/og-null-signal.png")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#000",
        }}
      >
        {/* dimmed control surface */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${shot.toString("base64")}`}
          width={1200}
          height={630}
          alt=""
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.3 }}
        />
        {/* darkening gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        {/* text block */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 70,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: CYAN,
              fontSize: 22,
              letterSpacing: 6,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                background: CYAN,
                boxShadow: `0 0 14px ${CYAN}`,
              }}
            />
            GENERATIVE VJ INSTRUMENT
          </div>
          <div
            style={{
              color: "#ecfff7",
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: 8,
              textShadow: "0 0 40px rgba(0,255,255,0.45)",
            }}
          >
            null_signal
          </div>
          <div
            style={{
              marginTop: 22,
              color: "rgba(186,230,236,0.85)",
              fontSize: 26,
              letterSpacing: 4,
            }}
          >
            69 MODES · 4 LAYERS · 13 FX · FREE &amp; OPEN SOURCE
          </div>
        </div>
        {/* top frame line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 4,
            background: CYAN,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: geo
        ? [{ name: "Geo", data: geo, style: "normal" as const, weight: 400 as const }]
        : undefined,
    }
  );
}
