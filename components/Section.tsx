import { ReactNode } from 'react';

type Props = {
    id: string;
    eyebrow: string;
    heading: string;
    children: ReactNode;
};

const Section = ({ id, eyebrow, heading, children }: Props) => (
    <section id={id} className="border-t border-canvas-line py-11 dark:border-night-line sm:py-14">
        <div className="mb-7">
            <span className="eyebrow normal-case tracking-[0.04em]">
                <span className="prompt">~/</span>
                {eyebrow}
            </span>
            <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.025em] text-ink dark:text-night-ink sm:text-[26px]">
                {heading}
            </h2>
        </div>
        {children}
    </section>
);

export default Section;
