import Head from "next/head";
import dynamic from 'next/dynamic';
import { Home } from "@/components/home/Home";

// Dynamically import the SplineBG component with SSR disabled
import SplineBG from '@/components/bg/SplineBG';

export default function home() {
  return (
    <>
      <Head>
        <title>CPU | Creative Technologist, Director, Artist, Engineer</title>
        <meta name="description" content="I am a full stack web developer experienced in mern stack " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shivalogo.ico" />
      </Head>
      <SplineBG />
      <Home />
    </>
  );
}
