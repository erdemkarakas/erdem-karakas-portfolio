import Head from 'next/head';
import { personal } from '@/data/portfolio';

// Hidden render-only route used to generate /public/og.png via screenshot.
// Rendered at exactly 1200x630.
const OG = () => (
    <>
        <Head>
            <title>OG card</title>
            <meta name="robots" content="noindex, nofollow" />
            <style>{`
              html, body { margin: 0 !important; padding: 0 !important; background: #fafafa; }
              body > div, #__next { margin: 0; padding: 0; }
            `}</style>
        </Head>
        <div
            style={{
                width: 1200,
                height: 630,
                margin: 0,
                padding: 0,
                background: '#fafafa',
                display: 'flex',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '72px 80px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    border: '1px solid #d4d4d8',
                }}
            >
                {/* Top row: name + status pill */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <span
                        className="font-mono"
                        style={{
                            fontSize: 22,
                            color: '#0a0a0a',
                            fontWeight: 500,
                            letterSpacing: '-0.005em',
                        }}
                    >
                        erdem karakaş
                    </span>
                    <span
                        className="font-mono"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '8px 16px',
                            borderRadius: 9999,
                            border: '1px solid #d4d4d8',
                            background: '#ffffff',
                            color: '#404040',
                            fontSize: 16,
                        }}
                    >
                        <span
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: 9999,
                                background: '#10b981',
                                display: 'inline-block',
                            }}
                        />
                        {personal.status.label}
                    </span>
                </div>

                {/* Middle: title + tagline */}
                <div>
                    <h1
                        style={{
                            margin: 0,
                            fontSize: 96,
                            fontWeight: 600,
                            color: '#0a0a0a',
                            letterSpacing: '-0.04em',
                            lineHeight: 1,
                        }}
                    >
                        {personal.role}.
                    </h1>
                    <p
                        style={{
                            margin: 0,
                            marginTop: 32,
                            fontSize: 30,
                            color: '#404040',
                            lineHeight: 1.4,
                            letterSpacing: '-0.01em',
                            maxWidth: 980,
                        }}
                    >
                        Product-minded engineer building full-stack web and mobile products with React, Next.js, TypeScript, and AI.
                    </p>
                </div>

                {/* Bottom row: city + url */}
                <div
                    className="font-mono"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        fontSize: 18,
                        color: '#404040',
                    }}
                >
                    <span>Berlin</span>
                    <span style={{ color: '#0a0a0a', fontWeight: 500 }}>erdemkarakas.dev</span>
                </div>
            </div>
        </div>
    </>
);

export default OG;
