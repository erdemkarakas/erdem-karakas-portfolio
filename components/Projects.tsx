import Section from '@/components/Section';
import { projects } from '@/data/portfolio';

const Projects = () => (
    <Section id="projects" eyebrow="projects" heading="Products I've shipped">
        <ul className="grid gap-3 sm:grid-cols-2">
            {projects.map((p) => {
                const Wrapper: 'a' | 'div' = p.link ? 'a' : 'div';
                const wrapperProps = p.link
                    ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
                    : {};
                return (
                    <li key={p.title}>
                        <Wrapper
                            {...wrapperProps}
                            className="group flex h-full flex-col rounded-lg border border-canvas-line bg-canvas-raised p-5 transition-colors hover:border-ink/30 dark:border-night-line dark:bg-night-raised dark:hover:border-night-ink/30"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink dark:text-night-ink">
                                    {p.title}
                                </h3>
                                <div className="flex shrink-0 items-center gap-2">
                                    {p.status && (
                                        <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                                            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            {p.status}
                                        </span>
                                    )}
                                    {p.link && (
                                        <span className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-accent-dark">
                                            ↗
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="mt-2.5 text-[14.5px] leading-[1.65] text-ink-muted dark:text-night-muted">
                                {p.description}
                            </p>

                            {p.impact && (
                                <p className="mt-3 flex items-baseline gap-2 font-mono text-[12px] text-ink dark:text-night-ink">
                                    <span aria-hidden="true" className="prompt shrink-0 select-none">▸</span>
                                    {p.impact}
                                </p>
                            )}

                            <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                                {p.stack.map((t) => (
                                    <li
                                        key={t}
                                        className="font-mono text-[11.5px] text-ink-muted transition-colors group-hover:text-accent dark:text-night-muted dark:group-hover:text-accent-dark"
                                    >
                                        <span aria-hidden="true" className="opacity-50">[</span>
                                        {t}
                                        <span aria-hidden="true" className="opacity-50">]</span>
                                    </li>
                                ))}
                            </ul>
                        </Wrapper>
                    </li>
                );
            })}
        </ul>
    </Section>
);

export default Projects;
