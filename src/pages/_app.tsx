import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      meta={{
        title: "Home | TruckDriver",
        description: "TruckDrivers website",
      }}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
