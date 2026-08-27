import { Html, Head, Main, NextScript } from "next/document";
import { personal, seo } from "@/data/portfolio";

const SITE = {
  title: seo.title,
  description: seo.description,
  url: seo.url,
  type: "website",
  locale: "en_US",
};

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Primary meta */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="description" content={SITE.description} />
        <meta name="author" content={personal.name} />
        <meta name="keywords" content={seo.keywords.join(", ")} />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="format-detection" content="telephone=no" />

        {/* Canonical */}
        <link rel="canonical" href={SITE.url} />

        {/* Open Graph */}
        <meta property="og:type" content={SITE.type} />
        <meta property="og:locale" content={SITE.locale} />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:site_name" content={personal.name} />
        <meta property="og:title" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:image" content={`${SITE.url}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SITE.title} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE.title} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={`${SITE.url}/og.png`} />
        <meta name="twitter:creator" content="@erdemkarakas" />

        {/* Verification placeholders — fill when registered */}
        {/* <meta name="google-site-verification" content="" /> */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Structured Data — ProfilePage wrapping the Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url: SITE.url,
              inLanguage: "en",
              mainEntity: {
              "@type": "Person",
              name: personal.name,
              alternateName: "Erdem Karakaş",
              url: SITE.url,
              image: `${SITE.url}${personal.photo}`,
              jobTitle: personal.role,
              description: SITE.description,
              email: `mailto:${personal.email}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Berlin",
                addressCountry: "DE",
              },
              worksFor: {
                "@type": "Organization",
                name: "Machinarium",
                url: "https://www.machinarium.co/",
              },
              knowsLanguage: [
                { "@type": "Language", name: "Turkish" },
                { "@type": "Language", name: "English" },
                { "@type": "Language", name: "German" },
              ],
              sameAs: [
                "https://github.com/erdemkarakas",
                "https://linkedin.com/in/erdemkarakas",
              ],
              knowsAbout: [
                "Full-stack Development",
                "Product Engineering",
                "Frontend Engineering",
                "Backend Engineering",
                "TypeScript",
                "JavaScript",
                "React",
                "Next.js",
                "React Native",
                "Node.js",
                "Express",
                "FastAPI",
                "Python",
                "C#",
                "ASP.NET",
                "PostgreSQL",
                "MSSQL",
                "Redis",
                "REST APIs",
                "GraphQL",
                "WebSockets",
                "Tailwind CSS",
                "Web Performance",
                "AI Development",
                "Anthropic Claude",
                "OpenAI",
                "LangChain",
                "RAG",
                "Vercel AI SDK",
                "Claude Code",
                "MCP",
              ],
              },
            }),
          }}
        />

        {/* Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: personal.name,
              url: SITE.url,
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: personal.name,
                url: SITE.url,
              },
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
