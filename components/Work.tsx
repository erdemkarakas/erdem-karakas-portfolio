import Section from '@/components/Section';
import { work } from '@/data/portfolio';

const Work = () => (
    <Section id="work" eyebrow="01 / Work">
        <ul className="space-y-3">
            {work.map((w) => {
                const inner = (
                    <>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink dark:text-night-ink">
                                    {w.company}
                                </h3>
                                <span className="text-ink-muted dark:text-night-muted">·</span>
                                <span className="text-[15px] text-ink dark:text-night-ink">
                                    {w.role}
                                </span>
                                {w.link && (
                                    <span className="text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        ↗
                                    </span>
                                )}
                            </div>
                            <span className="font-mono text-[12px] font-medium text-ink-muted dark:text-night-muted tabular-nums">
                                {w.start} → {w.end}
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
                                        className="flex gap-2.5 text-[14.5px] leading-[1.6] text-ink dark:text-night-ink"
                                    >
                                        <span aria-hidden="true" className="mt-[8px] inline-block h-[3px] w-[3px] shrink-0 rounded-full bg-ink dark:bg-night-ink" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {w.tech.length > 0 && (
                            <p className="mt-4 font-mono text-[12px] text-ink-muted dark:text-night-muted">
                                {w.tech.join(' · ')}
                            </p>
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
