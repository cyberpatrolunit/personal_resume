import "@/styles/app-globals.scss";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: "Bryant Place",
    images: [{ url: "/project-imgs/thumbnail.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cyberpatrolunit",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/project-imgs/thumbnail.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/project-imgs/thumbnail.jpg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bryant Place",
              jobTitle: "Creative Technologist",
              url: siteMeta.url,
              sameAs: siteMeta.socials.map((social) => social.href),
            }),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
