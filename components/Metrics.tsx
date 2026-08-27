import { metrics } from '@/data/portfolio';

const Metrics = () => (
    <section
        aria-label="Track record"
        className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-canvas-line py-9 dark:border-night-line sm:grid-cols-4"
    >
        {metrics.map((m) => (
            <div key={m.value}>
                <p className="font-mono text-[26px] font-semibold leading-none tracking-[-0.03em] text-ink tabular-nums dark:text-night-ink">
                    {m.value}
                </p>
                <p className="mt-2.5 text-[13px] leading-[1.45] text-ink-muted dark:text-night-muted">
                    {m.label}
                </p>
            </div>
        ))}
    </section>
);

export default Metrics;
