import Head from "next/head";
import { Home as ImportedHome } from "@/components/home/Home";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bryant Place | Creative Technologist, Director, Artist, Engineer</title>
        <meta name="description" content="I am a creative technologist with 13 years of delivering exceptional installations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bp_logo.ico" />
        <link rel="preload" href="/path/to/important/style/or/script.css" as="style" /> {/* Adjust the path to your critical CSS or JS */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Bryant Place",
            "jobTitle": "Creative Technologist",
            "url": "https://www.bryantplace.com",
            "sameAs": [
              // Social profiles here
              "http://www.facebook.com/your-profile",
              "http://instagram.com/yourProfile",
              "http://www.linkedin.com/in/your-profile",
              "http://twitter.com/yourProfile"
            ]
            // Add any other relevant schema properties here
          })}
        </script>
      </Head>      
      <Home />
      <Analytics />
    </>
  );
}
