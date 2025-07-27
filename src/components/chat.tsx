// Chat.tsx

"use client";

import { useState } from "react";
import Logo from "./logo";

type Message = {
    sender: "user" | "bot";
    text: string;
};

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState<Message[]>([]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: "user", text: input };
        setMessages(prev => [...prev, userMessage]);

        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            const botMessage: Message = {
                sender: "bot",
                text: data.text,
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            setMessages(prev => [...prev, {
                sender: "bot",
                text: "⚠️ Failed to get response from AI.",
            }]);
        }
    };

    return (
        <>
            <div
                onClick={toggleChat}
                className="fixed bottom-10 right-10 bg-[#3F4AE4] p-3 h-[55px] w-[55px] flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 z-50"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 31" fill="none">
                        <path d="M8.90356 12.1862H21.1025M8.90356 18.8138H17.6032M15.003 30C18.0443 29.9993 21.0026 28.973 23.4306 27.0762C25.8585 25.1794 27.6242 22.5153 28.4604 19.4869C29.2966 16.4585 29.1579 13.2304 28.0654 10.2908C26.9728 7.35125 24.9857 4.86011 22.4047 3.19414C19.8236 1.52817 16.789 0.777982 13.7598 1.05703C10.7305 1.33607 7.87132 2.62917 5.61467 4.74077C3.35803 6.85237 1.82664 9.66761 1.25211 12.7607C0.677572 15.8539 1.09114 19.0566 2.43027 21.8847C2.59373 22.2296 2.64822 22.6183 2.56497 22.9914L1.32995 28.5343C1.29513 28.6899 1.29912 28.852 1.34155 29.0055C1.38398 29.1591 1.46345 29.2989 1.57247 29.4118C1.68148 29.5247 1.81646 29.607 1.96468 29.6509C2.1129 29.6949 2.26948 29.699 2.41968 29.6629L7.76994 28.3822C8.13118 28.3003 8.50865 28.3502 8.83848 28.5233C10.7567 29.499 12.866 30.0042 15.003 30Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>

            {isOpen && (
                <div className="fixed bottom-30 right-10 w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden max-w-[90vw]">
                    <div className="px-6 py-5 bg-neutral-50 flex items-center">
                        <div className="w-[10%]">
                            <Logo width={80} color={true} main={false} />
                        </div>
                        <span className="ml-auto text-sm text-neutral-500">Traffic Assistant</span>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-80 text-sm text-neutral-800">
                        {messages.length === 0 && (
                            <p className="text-center text-neutral-400 text-xs py-4">Start messaging Stuck</p>
                        )}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[80%] px-4 py-2 rounded-md w-fit ${msg.sender === "user"
                                    ? "bg-blue-100 self-end text-right ml-auto block"
                                    : "bg-neutral-100 self-start block"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="px-3 py-2 flex items-center gap-2 bg-neutral-50 shadow-t-xl">
                        <input
                            type="text"
                            className="flex-1 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-0 border-1 border-[#3F4AE4]"
                            placeholder="Message Stuck..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-[#3F4AE4] text-white text-sm px-4 py-2 rounded-md transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}