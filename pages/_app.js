import "@/styles/globals.css";
import React from "react";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-5HWGVGC7" />
      <Analytics />
    </>
  );
}

export default MyApp;
