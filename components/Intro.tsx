import StatusPill from '@/components/StatusPill';
import { intro, personal } from '@/data/portfolio';

const Intro = () => {
    return (
        <section id="top" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
            <div className="mb-5">
                <StatusPill label={personal.status.label} tone={personal.status.tone} href="#contact" />
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
        </section>
    );
};

export default Intro;
