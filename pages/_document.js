import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Erdem Karakaş - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 5 years of experience specializing in React, Next.js, and TypeScript. Building high-performance, user-centric web applications.",
    image: "/images/profile.png",
    type: "website",
    url: "https://erdemkarakas.dev",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content="frontend developer, react developer, nextjs developer, typescript, web development, software engineer, photography"
        />

        {/* Open Graph */}
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Erdem Karakaş",
              url: meta.url,
              image: meta.image,
              sameAs: [
                "https://github.com/erdemkarakas",
                "https://linkedin.com/in/erdemkarakas",
              ],
              jobTitle: "Senior Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Boyner",
              },
              description: meta.description,
              knowsAbout: ["Frontend Development", "Photography", "Web Design"],
            }),
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HWGVGC7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
