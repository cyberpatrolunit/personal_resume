import "@/styles/globals.css";
import "@/styles/_fonts.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Component {...pageProps} />
    </div>
  );
}
