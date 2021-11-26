import type { AppProps } from "next/app";
import "../core-ui/animations/animations.css";
import "../styles/globals.css";

function PstComputingApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default PstComputingApp;
