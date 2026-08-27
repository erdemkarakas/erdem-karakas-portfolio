import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
    { name: 'work', href: '#work' },
    { name: 'projects', href: '#projects' },
    { name: 'principles', href: '#principles' },
    { name: 'stack', href: '#stack' },
    { name: 'contact', href: '#contact' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
    };

    return (
        <header
            className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
                scrolled
                    ? 'bg-canvas/80 dark:bg-night/80 border-b border-canvas-line/60 dark:border-night-line/60'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-4 sm:px-6">
                <a
                    href="#top"
                    onClick={(e) => handleClick(e, '#top')}
                    className="font-mono text-[13.5px] font-medium tracking-tight text-ink dark:text-night-ink"
                >
                    <span aria-hidden="true" className="prompt">~/</span>erdem karakas
                </a>

                <div className="flex items-center gap-1 sm:gap-2">
                    <ul className="hidden items-center gap-0.5 sm:flex">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="rounded-md px-2.5 py-1 font-mono text-[12.5px] text-ink-muted transition-colors hover:text-accent dark:text-night-muted dark:hover:text-accent-dark"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Header;
