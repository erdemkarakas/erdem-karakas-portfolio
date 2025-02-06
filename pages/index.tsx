import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Photography from '../components/Photography';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <ThemeProvider defaultTheme="dark" enableSystem={true}>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Head>
                    <title>Erdem Karakaş - Senior Frontend Developer</title>
                    <meta name="description" content="Senior Frontend Developer specializing in React, Next.js, and TypeScript with 5 years of experience." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://erdemkarakas.dev/" />
                    <meta property="og:title" content="Erdem Karakaş - Senior Frontend Developer" />
                    <meta property="og:description" content="Senior Frontend Developer specializing in React, Next.js, and TypeScript with 5 years of experience." />
                    <meta property="og:image" content="https://avatars.githubusercontent.com/u/23214607?v=4" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://erdemkarakas.dev/" />
                    <meta property="twitter:title" content="Erdem Karakaş - Senior Frontend Developer" />
                    <meta property="twitter:description" content="Senior Frontend Developer specializing in React, Next.js, and TypeScript with 5 years of experience." />
                    <meta property="twitter:image" content="https://avatars.githubusercontent.com/u/23214607?v=4" />
                </Head>

                <Header />

                <main>
                    <Hero />
                    <Experience />
                    <Education />
                    <Skills />
                    <Photography />
                    <Contact />
                </main>

                <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            © {new Date().getFullYear()} Erdem Karakaş. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
} 