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
        <link rel="icon" href="/bp_logo.ico" />
        <meta property="og:image" content="https://www.bryantplace.com/project-imgs/thumbnail.jpg" />
        <meta property="og:url" content="https://www.bryantplace.com" />
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
