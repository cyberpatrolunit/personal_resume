import Head from "next/head";
import { Home } from "@/components/home/Home";
import { Analytics } from '@vercel/analytics/react';
import { MyLinks } from "components/nav/components/MyLinks";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bryant Place | Creative Technologist, Director, Artist, Engineer</title>
        <meta name="description" content="I am a creative technologist with 13 years of delivering exceptional installations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/bp_logo.ico" />
        <meta property="og:image" content="https://www.bryantplace.com/project-imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://www.bryantplace.com" />
        <meta name="theme-color" content="#46D46E" />
        <meta name="description" content="Bryant Place - Creative Technologist specializing in interactive installations, live events, and digital storytelling." />
        <meta property="og:title" content="Bryant Place: Creative Technologist Portfolio" />
        <meta property="og:description" content="Explore the innovative world of Bryant Place, featuring a portfolio of interactive installations, live events, and immersive experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bryantplace.com/project-imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://www.bryantplace.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@cyberpatrolunit" /> 
        <meta name="twitter:title" content="Bryant Place: Creative Technologist Portfolio" />
        <meta name="twitter:description" content="Explore the innovative world of Bryant Place, featuring a portfolio of interactive installations, live events, and immersive experiences." />
        <meta name="twitter:image" content="https://www.bryantplace.com/project-imgs/thumbnail.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="192x192" href="/project-imgs/thumbnail.jpg" />
        <link rel="preload" href="/fonts/Slussen-Compressed-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Slussen-Expanded-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Slussen-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Slussen-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Slussen-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Slussen-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/project-imgs/sjt/sjt-00.jpg" as="image" />
        <link rel="preload" href="/project-imgs/p57/p57-00.png" as="image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Bryant Place",
            "jobTitle": "Creative Technologist",
            "url": "https://www.bryantplace.com",
            "sameAs": [
              "https://www.instagram.com/cyberpatrolunit",
              "https://www.tiktok.com/@cyberpatrolunit",
              "https://www.twitter.com/cyberpatrolunit",
              "https://github.com/cyberpatrolunit",
              "https://discordapp.com/users/456890225164156969"
            ]
          })}
        </script>
      </Head>      
      <Home />
      <MyLinks />
      <Analytics />
    </>
  );
}
