import LocalTime from '@/components/LocalTime';
import { availability, personal } from '@/data/portfolio';

const Footer = () => {
    const signals = [
        availability.permit,
        ...availability.languages,
        availability.workMode,
    ];

    return (
        <footer className="border-t border-canvas-line dark:border-night-line py-8">
            <p className="font-mono text-[11.5px] leading-[1.6] text-ink-muted dark:text-night-muted">
                {signals.join(' · ')}
            </p>

            <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="font-mono text-[11.5px] text-ink-muted dark:text-night-muted">
                    © {new Date().getFullYear()} {personal.name}
                </p>
                <div className="flex items-center gap-4">
                    <LocalTime />
                    <span
                        className="hidden sm:inline-flex items-center gap-1 font-mono text-[11.5px] text-ink-muted dark:text-night-muted"
                        aria-hidden="true"
                    >
                        <kbd className="rounded border border-canvas-line bg-canvas-raised px-1.5 py-0.5 text-[10px] dark:border-night-line dark:bg-night-raised">
                            ⌘
                        </kbd>
                        <kbd className="rounded border border-canvas-line bg-canvas-raised px-1.5 py-0.5 text-[10px] dark:border-night-line dark:bg-night-raised">
                            K
                        </kbd>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
