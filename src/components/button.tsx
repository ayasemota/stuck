import React from "react";

interface ButtonProps {
  text: string;
  fill: string;
}

export default function Button({ text, fill }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
        fill === "blue"
          ? "bg-main text-white hover:bg-main-hover hover:shadow-lg hover:scale-105"
          : fill === "white"
          ? "bg-white text-main border border-main hover:bg-[#e6f0ff] hover:text-main hover:shadow-md hover:scale-105"
          : "border border-main text-main hover:bg-main hover:text-white hover:shadow-md hover:scale-105"
      }`}
    >
      <p>{text}</p>
    </button>
  );
}