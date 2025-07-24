'use client';

import { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState('');
    const [timeZoneLabel, setTimeZoneLabel] = useState('');

    useEffect(() => {
        const getSystemTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

        const updateTime = () => {
            const systemTZ = getSystemTimeZone();

            const currentTime = new Date().toLocaleTimeString('en-US', {
                timeZone: systemTZ,
                hour: '2-digit',
                minute: '2-digit',
            });

            setTime(currentTime);
            setTimeZoneLabel(systemTZ);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden md:inline">
            <p>
                <span>{time}</span> ⚡ <span>{timeZoneLabel}</span>
            </p>
        </div>
    );
};

export default Clock;