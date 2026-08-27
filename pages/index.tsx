import Head from 'next/head';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Metrics from '@/components/Metrics';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Principles from '@/components/Principles';
import Stack from '@/components/Stack';
import Availability from '@/components/Availability';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { seo } from '@/data/portfolio';

export default function Home() {
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="canonical" href={seo.url} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={seo.url} />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
            </Head>

            <div className="min-h-screen bg-canvas dark:bg-night">
                <a
                    href="#top"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-[14px] focus:font-medium focus:text-canvas dark:focus:bg-night-ink dark:focus:text-night"
                >
                    Skip to content
                </a>
                <Header />
                <main className="mx-auto max-w-page px-5 sm:px-6">
                    <Intro />
                    <Metrics />
                    <Work />
                    <Projects />
                    <Principles />
                    <Stack />
                    <Availability />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </>
    );
}
