import { Geo, Geostar_Fill, Quantico, Silkscreen } from "next/font/google";

// The instrument's .app-title stack is 'Geostar Fill', 'Geo'. Geostar Fill is
// caps-only, so the app's lowercase title renders in Geo — we load both:
// Geo for the lowercase wordmark, Geostar Fill for all-caps section heads.
export const geo = Geo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-geo",
  display: "swap",
});

export const geostar = Geostar_Fill({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-geostar",
  display: "swap",
});

export const quantico = Quantico({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quantico",
  display: "swap",
});

export const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
});
