import Section from '@/components/Section';
import { socials } from '@/data/portfolio';

const Contact = () => (
    <Section id="contact" eyebrow="04 / Contact">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {socials.map((s) => (
                <li key={s.name}>
                    <a
                        href={s.url}
                        target={s.url.startsWith('http') ? '_blank' : undefined}
                        rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-baseline justify-between gap-3 border-b border-canvas-line dark:border-night-line py-3 transition-colors hover:border-ink/40 dark:hover:border-night-ink/40"
                    >
                        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                            {s.name}
                        </span>
                        <span className="flex items-baseline gap-2 text-[15px] font-medium text-ink dark:text-night-ink">
                            {s.handle}
                            <span className="text-ink-muted dark:text-night-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    </Section>
);

export default Contact;
