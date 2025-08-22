import type { AppProps } from "next/app";
import "../styles/globals.css";   // ✅ fixed relative import, no leading slash

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
