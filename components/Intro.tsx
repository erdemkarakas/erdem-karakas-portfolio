import Image from 'next/image';
import portrait from '@/public/erdem-karakas.jpg';
import StatusPill from '@/components/StatusPill';
import { intro, personal, socials } from '@/data/portfolio';

const email = socials.find((s) => s.name === 'Email');
const linkedin = socials.find((s) => s.name === 'LinkedIn');
const github = socials.find((s) => s.name === 'GitHub');

const Intro = () => (
    <section id="top" className="pt-10 pb-12 sm:pt-14 sm:pb-14">
        <div className="grid items-center gap-8 sm:grid-cols-[1fr_264px] sm:gap-12">
            <div className="order-1 sm:order-2">
                <Image
                    src={portrait}
                    alt={`${personal.name}, ${personal.role}`}
                    sizes="(max-width: 640px) 176px, 264px"
                    placeholder="blur"
                    priority
                    className="h-auto w-44 rounded-xl object-cover grayscale ring-1 ring-canvas-line dark:ring-night-line sm:w-full"
                />
            </div>

            <div className="order-2 sm:order-1">
                <StatusPill label={personal.status.label} tone={personal.status.tone} href="#contact" />

                <h1 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-ink dark:text-night-ink sm:text-[52px]">
                    {personal.name}
                    <span aria-hidden="true" className="cursor-blink ml-1 font-normal">▍</span>
                </h1>

                <p className="mt-2.5 font-mono text-[13px] text-ink-muted dark:text-night-muted">
                    {personal.role} <span className="text-accent dark:text-accent-dark">·</span>{' '}
                    {personal.location}
                </p>

                <p className="mt-6 text-[21px] leading-[1.32] tracking-[-0.02em] text-ink dark:text-night-ink sm:text-[24px]">
                    {intro.headline}
                </p>
            </div>
        </div>

        <div className="mt-9 max-w-prose">
            <div className="space-y-4 text-[15.5px] leading-[1.7] text-ink-muted dark:text-night-muted sm:text-[16px]">
                {intro.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
                {email && (
                    <a
                        href={email.url}
                        className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-[14px] font-medium text-canvas transition-opacity hover:opacity-85 dark:bg-night-ink dark:text-night"
                    >
                        Email me
                        <span aria-hidden="true">→</span>
                    </a>
                )}
                {linkedin && (
                    <a
                        href={linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-canvas-line bg-canvas-raised px-4 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-ink/30 dark:border-night-line dark:bg-night-raised dark:text-night-ink dark:hover:border-night-ink/30"
                    >
                        LinkedIn
                        <span aria-hidden="true" className="text-accent dark:text-accent-dark">↗</span>
                    </a>
                )}
                {github && (
                    <a
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1.5 py-2.5 font-mono text-[13px] text-ink-muted transition-colors hover:text-accent dark:text-night-muted dark:hover:text-accent-dark"
                    >
                        GitHub ↗
                    </a>
                )}
            </div>

            <p className="mt-5 font-mono text-[12.5px] text-ink-muted dark:text-night-muted">
                {intro.context}
            </p>
        </div>
    </section>
);

export default Intro;
