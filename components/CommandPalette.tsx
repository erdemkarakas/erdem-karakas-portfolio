import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { socials } from '@/data/portfolio';

type ActionGroup = 'Navigate' | 'Theme' | 'Links';

type Action = {
    id: string;
    label: string;
    group: ActionGroup;
    keywords?: string;
    hint?: string;
    run: () => void;
};

const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
};

const CommandPalette = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const { setTheme } = useTheme();

    const close = useCallback(() => {
        setOpen(false);
        setQuery('');
        setActive(0);
    }, []);

    const actions = useMemo<Action[]>(
        () => [
            { id: 'go-work', group: 'Navigate', label: 'Go to Work', keywords: 'experience jobs', run: () => scrollToId('work') },
            { id: 'go-projects', group: 'Navigate', label: 'Go to Projects', keywords: 'portfolio selected', run: () => scrollToId('projects') },
            { id: 'go-stack', group: 'Navigate', label: 'Go to Stack', keywords: 'tech tools skills', run: () => scrollToId('stack') },
            { id: 'go-contact', group: 'Navigate', label: 'Go to Contact', keywords: 'email reach out chat', run: () => scrollToId('contact') },
            { id: 'go-top', group: 'Navigate', label: 'Back to top', keywords: 'home intro', run: () => scrollToId('top') },
            { id: 'theme-light', group: 'Theme', label: 'Light theme', run: () => setTheme('light') },
            { id: 'theme-dark', group: 'Theme', label: 'Dark theme', run: () => setTheme('dark') },
            { id: 'theme-system', group: 'Theme', label: 'Match system theme', keywords: 'auto', run: () => setTheme('system') },
            ...socials.map<Action>((s) => ({
                id: `link-${s.name.toLowerCase()}`,
                group: 'Links',
                label: s.name,
                hint: s.handle,
                keywords: s.handle,
                run: () => {
                    if (s.url.startsWith('http')) {
                        window.open(s.url, '_blank', 'noopener,noreferrer');
                    } else {
                        window.location.href = s.url;
                    }
                },
            })),
        ],
        [setTheme],
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return actions;
        return actions.filter((a) => {
            const hay = `${a.label} ${a.group} ${a.keywords ?? ''} ${a.hint ?? ''}`.toLowerCase();
            return q.split(/\s+/).every((token) => hay.includes(token));
        });
    }, [actions, query]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen((v) => !v);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (open) {
            const t = setTimeout(() => inputRef.current?.focus(), 0);
            return () => clearTimeout(t);
        }
    }, [open]);

    useEffect(() => {
        setActive(0);
    }, [query]);

    useEffect(() => {
        const el = listRef.current?.querySelector<HTMLLIElement>(`[data-index="${active}"]`);
        el?.scrollIntoView({ block: 'nearest' });
    }, [active]);

    const runActive = () => {
        const action = filtered[active];
        if (!action) return;
        action.run();
        close();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
            return;
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((i) => (filtered.length ? (i + 1) % filtered.length : 0));
            return;
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            runActive();
        }
    };

    if (!open) return null;

    let lastGroup: ActionGroup | null = null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[18vh]"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) close();
            }}
        >
            <div className="absolute inset-0 bg-canvas/70 backdrop-blur-sm dark:bg-night/70" aria-hidden="true" />
            <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-canvas-line bg-canvas-raised shadow-2xl dark:border-night-line dark:bg-night-raised">
                <div className="flex items-center gap-2 border-b border-canvas-line px-4 dark:border-night-line">
                    <span aria-hidden="true" className="font-mono text-[12px] text-ink-muted dark:text-night-muted">
                        ›
                    </span>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="Type a command or search…"
                        className="w-full bg-transparent py-3.5 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none dark:text-night-ink dark:placeholder:text-night-muted"
                    />
                    <kbd className="rounded border border-canvas-line bg-canvas px-1.5 py-0.5 font-mono text-[10px] text-ink-muted dark:border-night-line dark:bg-night dark:text-night-muted">
                        Esc
                    </kbd>
                </div>

                {filtered.length === 0 ? (
                    <p className="px-4 py-6 text-center text-[13px] text-ink-muted dark:text-night-muted">
                        No matches.
                    </p>
                ) : (
                    <ul ref={listRef} className="max-h-[50vh] overflow-y-auto py-1.5">
                        {filtered.map((a, i) => {
                            const showHeader = a.group !== lastGroup;
                            lastGroup = a.group;
                            const isActive = i === active;
                            return (
                                <li key={a.id}>
                                    {showHeader && (
                                        <div className="px-4 pt-2 pb-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                                            {a.group}
                                        </div>
                                    )}
                                    <button
                                        type="button"
                                        data-index={i}
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => {
                                            setActive(i);
                                            a.run();
                                            close();
                                        }}
                                        className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-[13.5px] transition-colors ${
                                            isActive
                                                ? 'bg-canvas text-ink dark:bg-night dark:text-night-ink'
                                                : 'text-ink dark:text-night-ink'
                                        }`}
                                    >
                                        <span>{a.label}</span>
                                        {a.hint && (
                                            <span className="font-mono text-[11.5px] text-ink-muted dark:text-night-muted">
                                                {a.hint}
                                            </span>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}

                <div className="flex items-center justify-between border-t border-canvas-line px-4 py-2 font-mono text-[10.5px] text-ink-muted dark:border-night-line dark:text-night-muted">
                    <span>↑↓ navigate</span>
                    <span>↵ select</span>
                    <span>esc close</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
