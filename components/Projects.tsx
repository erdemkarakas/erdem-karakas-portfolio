import Section from '@/components/Section';
import { projects } from '@/data/portfolio';

const Projects = () => (
    <Section id="projects" eyebrow="02 / Selected projects">
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
                                <div className="flex items-center gap-2 shrink-0">
                                    {p.status && (
                                        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                                            {p.status}
                                        </span>
                                    )}
                                    {p.link && (
                                        <span className="text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            ↗
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="mt-2.5 text-[14.5px] leading-[1.65] text-ink dark:text-night-ink">
                                {p.description}
                            </p>
                            <p className="mt-4 font-mono text-[12px] text-ink-muted dark:text-night-muted">
                                {p.stack.join(' · ')}
                            </p>
                        </Wrapper>
                    </li>
                );
            })}
        </ul>
    </Section>
);

export default Projects;
