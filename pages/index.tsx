import Head from 'next/head';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
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
                <Header />
                <main className="mx-auto max-w-page px-5 sm:px-6">
                    <Intro />
                    <Work />
                    <Projects />
                    <Stack />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </>
    );
}
