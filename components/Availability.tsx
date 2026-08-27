import Section from '@/components/Section';
import { availability } from '@/data/portfolio';

const Availability = () => (
    <Section id="availability" eyebrow="availability" heading="Working in Germany">
        <dl className="rounded-lg border border-canvas-line bg-canvas-raised divide-y divide-canvas-line dark:divide-night-line dark:border-night-line dark:bg-night-raised">
            {availability.map(({ k, v }) => (
                <div
                    key={k}
                    className="grid gap-1 px-5 py-4 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-6"
                >
                    <dt className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
                        {k}
                    </dt>
                    <dd className="text-[14.5px] leading-[1.6] text-ink dark:text-night-ink">{v}</dd>
                </div>
            ))}
        </dl>
    </Section>
);

export default Availability;
