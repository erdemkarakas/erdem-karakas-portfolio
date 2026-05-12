import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const ThemeToggle = () => {
    const { resolvedTheme, systemTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = resolvedTheme === 'dark';

    const toggle = () => {
        const next = isDark ? 'light' : 'dark';
        const target = next === systemTheme ? 'system' : next;
        const supportsViewTransition =
            typeof document !== 'undefined' &&
            'startViewTransition' in document;
        if (supportsViewTransition) {
            (document as Document & { startViewTransition: (cb: () => void) => void })
                .startViewTransition(() => setTheme(target));
        } else {
            setTheme(target);
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-muted hover:text-ink dark:text-night-muted dark:hover:text-night-ink transition-colors"
        >
            {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : <SunIcon />}
        </button>
    );
};

export default ThemeToggle;
