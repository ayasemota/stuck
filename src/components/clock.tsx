'use client';

import { useEffect, useState } from 'react';

const Clock = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [showColon, setShowColon] = useState(true);
    const [timeZoneLabel, setTimeZoneLabel] = useState('');

    useEffect(() => {
        const getSystemTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

        const updateTime = () => {
            const systemTZ = getSystemTimeZone();
            const now = new Date();

            const formattedTime = now.toLocaleTimeString('en-US', {
                timeZone: systemTZ,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            const [hh, mm] = formattedTime.split(':');
            setHours(hh);
            setMinutes(mm);
            setTimeZoneLabel(systemTZ);
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 1000);
        const blinkInterval = setInterval(() => setShowColon(prev => !prev), 500);

        return () => {
            clearInterval(timeInterval);
            clearInterval(blinkInterval);
        };
    }, []);

    return (
        <div className="hidden md:inline">
            <p>
                <span>{hours}</span>
                <span style={{ visibility: showColon ? 'visible' : 'hidden' }}>:</span>
                <span>{minutes}</span>
                {' '}⚡ <span className='text-[#0033EA]'>{timeZoneLabel}</span>
            </p>
        </div>
    );
};

export default Clock;