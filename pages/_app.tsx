import "@/styles/globals.css";
import "@/styles/_fonts.scss";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    console.log("Application mounted");
  }, []);

  return (
    <div id="root">
      <Component {...pageProps} />
    </div>
  );
}

export function reportWebVitals(metric) {
  console.log(metric); 
}