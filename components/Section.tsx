import { ReactNode } from 'react';

type Props = {
    id: string;
    eyebrow: string;
    title?: string;
    children: ReactNode;
};

const Section = ({ id, eyebrow, title, children }: Props) => (
    <section id={id} className="border-t border-canvas-line dark:border-night-line py-16 sm:py-20">
        <div className="mb-9 flex items-baseline justify-between">
            <span className="eyebrow">{eyebrow}</span>
            {title && (
                <span className="font-mono text-[12px] text-ink-muted dark:text-night-muted">{title}</span>
            )}
        </div>
        {children}
    </section>
);

export default Section;
