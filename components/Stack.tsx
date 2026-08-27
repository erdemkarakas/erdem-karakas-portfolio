import Section from '@/components/Section';
import { stack } from '@/data/portfolio';

const Stack = () => (
    <Section id="stack" eyebrow="stack" heading="Tools I reach for">
        <dl className="space-y-5">
            {Object.entries(stack).map(([group, items]) => (
                <div
                    key={group}
                    className="grid gap-y-1.5 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-x-6 sm:gap-y-0"
                >
                    <dt className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-accent dark:text-accent-dark">
                        {group}
                    </dt>
                    <dd>
                        <ul className="flex flex-wrap gap-x-1.5 gap-y-1">
                            {items.map((item) => (
                                <li
                                    key={item}
                                    className="font-mono text-[12.5px] text-ink dark:text-night-ink"
                                >
                                    <span aria-hidden="true" className="text-ink-muted dark:text-night-muted opacity-50">[</span>
                                    {item}
                                    <span aria-hidden="true" className="text-ink-muted dark:text-night-muted opacity-50">]</span>
                                </li>
                            ))}
                        </ul>
                    </dd>
                </div>
            ))}
        </dl>
    </Section>
);

export default Stack;
