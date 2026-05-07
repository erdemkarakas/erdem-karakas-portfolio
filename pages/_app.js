import "@/styles/globals.css";
import React from "react";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <GoogleTagManager gtmId="GTM-5HWGVGC7" />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
