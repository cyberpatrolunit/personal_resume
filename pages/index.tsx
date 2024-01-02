import Head from "next/head";
// import dynamic from 'next/dynamic';
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Bryant Place | Creative Technologist, Director, Artist, Engineer</title>
        <meta name="description" content="I am a creative technologist with 13 years of delivering exceptional installations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bp_logo.ico" />
      </Head>      
      <Home />
    </>
  );
}
