import Section from '@/components/Section';
import { work } from '@/data/portfolio';

const Work = () => (
    <Section id="work" eyebrow="work" heading="Where I've worked">
        <ul className="space-y-3">
            {work.map((w, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                const inner = (
                    <>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                <span aria-hidden="true" className="prompt text-[12px] font-medium tabular-nums">
                                    {num}
                                </span>
                                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink dark:text-night-ink">
                                    {w.company}
                                </h3>
                                <span className="text-ink-muted dark:text-night-muted">·</span>
                                <span className="text-[15px] text-ink dark:text-night-ink">
                                    {w.role}
                                </span>
                                {w.link && (
                                    <span className="text-accent dark:text-accent-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        ↗
                                    </span>
                                )}
                            </div>
                            <span className="font-mono text-[12px] font-medium text-ink-muted dark:text-night-muted tabular-nums">
                                {w.start} <span className="text-accent dark:text-accent-dark">→</span> {w.end}
                            </span>
                        </div>
                        <p className="mt-3 max-w-prose text-[15px] leading-[1.7] text-ink dark:text-night-ink">
                            {w.summary}
                        </p>
                        {w.highlights && w.highlights.length > 0 && (
                            <ul className="mt-3 max-w-prose space-y-1.5">
                                {w.highlights.map((h, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 text-[14.5px] leading-[1.6] text-ink dark:text-night-ink"
                                    >
                                        <span aria-hidden="true" className="prompt shrink-0 select-none">▸</span>
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {w.tech.length > 0 && (
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                {w.tech.map((t) => (
                                    <li
                                        key={t}
                                        className="font-mono text-[11.5px] text-ink-muted dark:text-night-muted transition-colors group-hover:text-accent dark:group-hover:text-accent-dark"
                                    >
                                        <span aria-hidden="true" className="opacity-50">[</span>
                                        {t}
                                        <span aria-hidden="true" className="opacity-50">]</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                );

                return (
                    <li key={`${w.company}-${w.start}`}>
                        {w.link ? (
                            <a
                                href={w.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-lg border border-canvas-line bg-canvas-raised p-5 transition-colors hover:border-ink/30 dark:border-night-line dark:bg-night-raised dark:hover:border-night-ink/30"
                            >
                                {inner}
                            </a>
                        ) : (
                            <div className="group block rounded-lg border border-canvas-line bg-canvas-raised p-5 dark:border-night-line dark:bg-night-raised">
                                {inner}
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    </Section>
);

export default Work;
