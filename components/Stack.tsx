import Section from '@/components/Section';
import { stack } from '@/data/portfolio';

const Stack = () => (
    <Section id="stack" eyebrow="03 / Stack">
        <dl className="space-y-4">
            {Object.entries(stack).map(([group, items]) => (
                <div
                    key={group}
                    className="grid grid-cols-[120px_1fr] items-baseline gap-x-6 sm:grid-cols-[150px_1fr]"
                >
                    <dt className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                        {group}
                    </dt>
                    <dd className="text-[15px] leading-[1.7] text-ink dark:text-night-ink">
                        {items.join(', ')}
                    </dd>
                </div>
            ))}
        </dl>
    </Section>
);

export default Stack;
