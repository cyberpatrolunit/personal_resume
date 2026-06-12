import { Geostar_Fill, Quantico, Silkscreen } from "next/font/google";

// Geostar Fill is the instrument's own title font (see null-signal .app-title).
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
