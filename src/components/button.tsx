import React from 'react';

interface ButtonProps {
    text: string;
    fill: string;
}

export default function Button({ text, fill }: ButtonProps) {
    return (
        <button
            className={
                fill === 'blue'
                    ? 'bg-[#0033EA] text-white px-6 py-3 rounded-lg'
                    : fill === 'white'
                        ? 'bg-white text-[#0033EA] border-[#0033EA] px-6 py-3 rounded-lg'
                        : 'border border-[#0033EA] text-[#0033EA] px-6 py-3 rounded-lg'
            }
        >
            <p>{text}</p>
        </button>
    );
}
