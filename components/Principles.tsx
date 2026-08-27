import Section from '@/components/Section';
import { principles } from '@/data/portfolio';

const Principles = () => (
    <Section id="principles" eyebrow="principles" heading="How I work">
        <ul className="grid gap-3 sm:grid-cols-2">
            {principles.map((p) => (
                <li
                    key={p.title}
                    className="rounded-lg border border-canvas-line bg-canvas-raised p-5 dark:border-night-line dark:bg-night-raised"
                >
                    <h3 className="text-[15.5px] font-semibold tracking-[-0.01em] text-ink dark:text-night-ink">
                        {p.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.65] text-ink-muted dark:text-night-muted">
                        {p.body}
                    </p>
                </li>
            ))}
        </ul>
    </Section>
);

export default Principles;
