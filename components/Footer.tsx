import LocalTime from '@/components/LocalTime';
import { personal } from '@/data/portfolio';

const Footer = () => (
    <footer className="border-t border-canvas-line py-6 dark:border-night-line">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="font-mono text-[11.5px] text-ink-muted dark:text-night-muted">
                © {new Date().getFullYear()} {personal.name} · {personal.role} · {personal.location}
            </p>
            <div className="flex items-center gap-4">
                <LocalTime />
                <button
                    type="button"
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.dispatchEvent(
                                new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
                            );
                        }
                    }}
                    aria-label="⌘K, open command palette"
                    className="hidden items-center gap-1 font-mono text-[11.5px] text-ink-muted transition-colors hover:text-ink dark:text-night-muted dark:hover:text-night-ink sm:inline-flex"
                >
                    <kbd
                        className="rounded border border-canvas-line bg-canvas-raised px-1.5 py-0.5 text-[10px] dark:border-night-line dark:bg-night-raised"
                    >
                        ⌘
                    </kbd>
                    <kbd
                        className="rounded border border-canvas-line bg-canvas-raised px-1.5 py-0.5 text-[10px] dark:border-night-line dark:bg-night-raised"
                    >
                        K
                    </kbd>
                </button>
            </div>
        </div>
    </footer>
);

export default Footer;
