import Section from '@/components/Section';
import { socials } from '@/data/portfolio';

const Contact = () => (
    <Section id="contact" eyebrow="contact" heading="Hiring for a full-stack role in Germany?">
        <p className="mb-6 max-w-prose text-[15.5px] leading-[1.7] text-ink-muted dark:text-night-muted">
            I&apos;m open to full-time positions, remote, hybrid or onsite. Email is the fastest way to
            reach me, and I&apos;m happy to talk through the stack or the team before anything gets
            formal.
        </p>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {socials.map((s) => (
                <li key={s.name}>
                    <a
                        href={s.url}
                        target={s.url.startsWith('http') ? '_blank' : undefined}
                        rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-baseline justify-between gap-3 border-b border-canvas-line py-3 transition-colors hover:border-accent/50 dark:border-night-line dark:hover:border-accent-dark/50"
                    >
                        <span className="flex items-baseline gap-1.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                            <span aria-hidden="true" className="prompt">&gt;</span>
                            {s.name}
                        </span>
                        <span className="flex items-baseline gap-2 text-[15px] font-medium text-ink transition-colors group-hover:text-accent dark:text-night-ink dark:group-hover:text-accent-dark">
                            {s.handle}
                            <span className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-accent-dark">
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
