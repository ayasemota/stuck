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
                    ? 'bg-[#3F4AE4] text-white px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1a4bff] hover:shadow-lg hover:scale-105'
                    : fill === 'white'
                        ? 'bg-white text-[#3F4AE4] border border-[#3F4AE4] px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e6f0ff] hover:text-[#001f7f] hover:shadow-md hover:scale-105'
                        : 'border border-[#3F4AE4] text-[#3F4AE4] px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#3F4AE4] hover:text-white hover:shadow-md hover:scale-105'
            }
        >
            <p>{text}</p>
        </button>
    );
}