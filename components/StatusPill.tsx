type Tone = 'positive' | 'neutral';

type Props = {
    label: string;
    tone?: Tone;
    href?: string;
};

const StatusPill = ({ label, tone = 'positive', href }: Props) => {
    const dotColor = tone === 'positive' ? 'bg-emerald-500' : 'bg-ink-muted';

    const content = (
        <>
            <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-60 animate-ping`} />
                <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColor}`} />
            </span>
            {label}
        </>
    );

    const baseClass =
        'inline-flex items-center gap-2 rounded-full border border-canvas-line dark:border-night-line bg-canvas-raised dark:bg-night-raised px-2.5 py-1 font-mono text-[11px] tracking-tight text-ink-muted dark:text-night-muted';

    if (!href) {
        return <span className={baseClass}>{content}</span>;
    }

    const isHash = href.startsWith('#');
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isHash) return;
        e.preventDefault();
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`${baseClass} transition-colors hover:text-ink hover:border-ink/30 dark:hover:text-night-ink dark:hover:border-night-ink/30`}
        >
            {content}
        </a>
    );
};

export default StatusPill;
