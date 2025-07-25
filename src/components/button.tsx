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
                    ? 'bg-[#0033EA] text-white px-6 py-3 rounded-lg cursor-pointer'
                    : fill === 'white'
                        ? 'bg-white text-[#0033EA] border-[#0033EA] border-1 px-6 py-3 rounded-lg cursor-pointer'
                        : 'border border-[#0033EA] text-[#0033EA] px-6 py-3 rounded-lg cursor-pointer'
            }
        >
            <p>{text}</p>
        </button>
    );
}
