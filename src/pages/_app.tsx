// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Footer from "../components/footer"; // ✅ lowercase matches your file
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
  return <Component {...pageProps} />;
}

export default MyApp;
export default MyApp;