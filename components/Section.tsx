import { ReactNode } from 'react';

type Props = {
    id: string;
    eyebrow: string;
    title?: string;
    children: ReactNode;
};

const Section = ({ id, eyebrow, title, children }: Props) => (
    <section id={id} className="border-t border-canvas-line dark:border-night-line py-10 sm:py-12">
        <div className="mb-6 flex items-baseline justify-between">
            <span className="eyebrow">{eyebrow}</span>
            {title && (
                <span className="font-mono text-[12px] text-ink-muted dark:text-night-muted">{title}</span>
            )}
        </div>
        {children}
    </section>
);

export default Section;
