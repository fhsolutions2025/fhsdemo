import type { AppProps } from "next/app";
import { ProfileProvider } from "@/context/ProfileContext";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  );
}
