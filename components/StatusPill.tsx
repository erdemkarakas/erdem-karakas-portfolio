type Tone = 'positive' | 'neutral';

const StatusPill = ({ label, tone = 'positive' }: { label: string; tone?: Tone }) => {
    const dotColor = tone === 'positive' ? 'bg-emerald-500' : 'bg-ink-muted';
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-canvas-line dark:border-night-line bg-canvas-raised dark:bg-night-raised px-2.5 py-1 font-mono text-[11px] tracking-tight text-ink-muted dark:text-night-muted">
            <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-60 animate-ping`} />
                <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColor}`} />
            </span>
            {label}
        </span>
    );
};

export default StatusPill;
