import { useEffect, useState } from 'react';
import { personal } from '@/data/portfolio';

const formatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: personal.timezone,
});

const LocalTime = () => {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const update = () => setTime(formatter.format(new Date()));
        update();
        const id = window.setInterval(update, 30_000);
        return () => window.clearInterval(id);
    }, []);

    return (
        <span className="font-mono text-[11px] text-ink-muted dark:text-night-muted tabular-nums">
            {time ? `${time} Berlin` : 'Berlin'}
        </span>
    );
};

export default LocalTime;
