import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageContextProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <Component class {...pageProps} />
    </LanguageContextProvider>
  );
}
