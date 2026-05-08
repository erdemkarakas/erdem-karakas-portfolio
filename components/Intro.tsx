import StatusPill from '@/components/StatusPill';
import { intro, personal, socials } from '@/data/portfolio';

const primaryLinks = ['Email', 'GitHub', 'LinkedIn'];

const Intro = () => {
    const links = socials.filter((s) => primaryLinks.includes(s.name));

    return (
        <section id="top" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
            <div className="mb-5">
                <StatusPill label={personal.status.label} tone={personal.status.tone} />
            </div>

            <h1 className="text-[46px] leading-[1.02] sm:text-[60px] font-semibold tracking-[-0.035em] text-ink dark:text-night-ink">
                {personal.name}
            </h1>

            <p className="mt-3 text-[19px] sm:text-[22px] tracking-[-0.015em] text-ink-muted dark:text-night-muted">
                {personal.role}.
            </p>

            <div className="mt-7 max-w-prose space-y-4 text-[16px] sm:text-[17px] leading-[1.7] text-ink dark:text-night-ink">
                {intro.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>

            <p className="mt-4 max-w-prose font-mono text-[12.5px] text-ink-muted dark:text-night-muted">
                {intro.context}
            </p>

            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] font-medium">
                {links.map((s) => (
                    <li key={s.name}>
                        <a
                            href={s.url}
                            target={s.url.startsWith('http') ? '_blank' : undefined}
                            rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group inline-flex items-center gap-1 text-ink dark:text-night-ink"
                        >
                            <span className="link">{s.name}</span>
                            <span className="text-ink-muted dark:text-night-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Intro;
