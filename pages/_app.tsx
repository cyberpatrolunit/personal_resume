import "@/styles/globals.css";
import "@/styles/_fonts.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Component {...pageProps} />
    </div>
  );
}
