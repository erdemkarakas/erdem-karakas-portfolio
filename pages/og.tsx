import Head from 'next/head';
import { metrics, personal } from '@/data/portfolio';

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
                    padding: '64px 72px',
                    display: 'flex',
                    gap: 56,
                    boxSizing: 'border-box',
                    border: '1px solid #d4d4d8',
                }}
            >
                {/* Left: copy */}
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                        }}
                    >
                        <span
                            className="font-mono"
                            style={{
                                fontSize: 20,
                                color: '#0a0a0a',
                                fontWeight: 500,
                                letterSpacing: '-0.005em',
                            }}
                        >
                            erdem karakas
                        </span>
                        <span
                            className="font-mono"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 9,
                                padding: '7px 14px',
                                borderRadius: 9999,
                                border: '1px solid #d4d4d8',
                                background: '#ffffff',
                                color: '#404040',
                                fontSize: 14,
                            }}
                        >
                            <span
                                style={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: 9999,
                                    background: '#10b981',
                                    display: 'inline-block',
                                }}
                            />
                            {personal.status.label}
                        </span>
                    </div>

                    <div>
                        <h1
                            style={{
                                margin: 0,
                                fontSize: 76,
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
                                marginTop: 24,
                                fontSize: 25,
                                color: '#404040',
                                lineHeight: 1.38,
                                letterSpacing: '-0.012em',
                            }}
                        >
                            Web and mobile products, end to end. React and Next.js in front, Node
                            and FastAPI behind them, PostgreSQL underneath.
                        </p>
                    </div>

                    {/* Metrics */}
                    <div style={{ display: 'flex', gap: 40 }}>
                        {metrics.slice(0, 3).map((m) => (
                            <div key={m.value} style={{ maxWidth: 190 }}>
                                <div
                                    className="font-mono"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: 600,
                                        color: '#0a0a0a',
                                        letterSpacing: '-0.03em',
                                        lineHeight: 1,
                                    }}
                                >
                                    {m.value}
                                </div>
                                <div
                                    style={{
                                        marginTop: 9,
                                        fontSize: 15,
                                        color: '#404040',
                                        lineHeight: 1.35,
                                    }}
                                >
                                    {m.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="font-mono"
                        style={{
                            display: 'flex',
                            gap: 20,
                            alignItems: 'baseline',
                            fontSize: 17,
                            color: '#404040',
                        }}
                    >
                        <span>Berlin, Germany</span>
                        <span style={{ color: '#d4d4d8' }}>·</span>
                        <span style={{ color: '#0a0a0a', fontWeight: 500 }}>erdemkarakas.dev</span>
                    </div>
                </div>

                {/* Right: portrait */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={personal.photo}
                        alt=""
                        width={300}
                        height={320}
                        style={{
                            width: 300,
                            height: 320,
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            borderRadius: 16,
                            filter: 'grayscale(1)',
                            border: '1px solid #d4d4d8',
                        }}
                    />
                </div>
            </div>
        </div>
    </>
);

export default OG;
