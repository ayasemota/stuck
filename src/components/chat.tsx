"use client";

import { useState, useRef, useEffect } from "react";
import Logo from "./logo";

type Message = {
    sender: "user" | "bot";
    text: string;
};

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsFullScreen(false);
            inputRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: "user", text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        inputRef.current?.focus();

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
        } catch {
            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: "⚠️ Failed to get response from AI.",
                },
            ]);
        }
    };

    return (
        <>
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 bg-[#3F4AE4] hover:bg-[#1a4bff] hover:scale-105 p-3 h-[55px] w-[55px] flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 z-50"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 31" fill="none">
                        <path
                            d="M8.90356 12.1862H21.1025M8.90356 18.8138H17.6032M15.003 30C18.0443 29.9993 21.0026 28.973 23.4306 27.0762C25.8585 25.1794 27.6242 22.5153 28.4604 19.4869C29.2966 16.4585 29.1579 13.2304 28.0654 10.2908C26.9728 7.35125 24.9857 4.86011 22.4047 3.19414C19.8236 1.52817 16.789 0.777982 13.7598 1.05703C10.7305 1.33607 7.87132 2.62917 5.61467 4.74077C3.35803 6.85237 1.82664 9.66761 1.25211 12.7607C0.677572 15.8539 1.09114 19.0566 2.43027 21.8847C2.59373 22.2296 2.64822 22.6183 2.56497 22.9914L1.32995 28.5343C1.29513 28.6899 1.29912 28.852 1.34155 29.0055C1.38398 29.1591 1.46345 29.2989 1.57247 29.4118C1.68148 29.5247 1.81646 29.607 1.96468 29.6509C2.1129 29.6949 2.26948 29.699 2.41968 29.6629L7.76994 28.3822C8.13118 28.3003 8.50865 28.3502 8.83848 28.5233C10.7567 29.499 12.866 30.0042 15.003 30Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>

            {isOpen && (
                <div
                    className={`fixed z-50 flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-xl ${isFullScreen
                        ? "top-0 left-0 w-screen h-[100dvh] rounded-none"
                        : "bottom-26 right-6 w-96 max-w-[90vw] rounded-lg"
                        }`}
                >
                    <div className="px-6 py-5 bg-neutral-50 flex justify-between items-center border-b border-[#b7b7b7]">
                        <div className="w-[10%]">
                            <Logo width={80} color={true} main={false} />
                        </div>
                        <div
                            onClick={toggleFullScreen}
                            className="h-5 w-5 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <div
                                onClick={toggleFullScreen}
                                className="h-5 w-5 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                {isFullScreen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14.996 5.00409H12.416L15.706 1.71409C15.8943 1.52579 16.0001 1.27039 16.0001 1.00409C16.0001 0.73779 15.8943 0.482395 15.706 0.294092C15.5177 0.105788 15.2623 0 14.996 0C14.7297 0 14.4743 0.105788 14.286 0.294092L10.996 3.57409V1.00409C10.996 0.738875 10.8907 0.484522 10.7031 0.296985C10.5156 0.109449 10.2612 0.00409174 9.99603 0.00409174C9.73082 0.00409174 9.47646 0.109449 9.28893 0.296985C9.10139 0.484522 8.99603 0.738875 8.99603 1.00409V6.00409C8.99603 6.26931 9.10139 6.52366 9.28893 6.7112C9.47646 6.89873 9.73082 7.00409 9.99603 7.00409H14.996C15.2612 7.00409 15.5156 6.89873 15.7031 6.7112C15.8907 6.52366 15.996 6.26931 15.996 6.00409C15.996 5.73888 15.8907 5.48452 15.7031 5.29699C15.5156 5.10945 15.2612 5.00409 14.996 5.00409ZM5.99603 9.00409H0.996033C0.730816 9.00409 0.476462 9.10945 0.288926 9.29699C0.10139 9.48452 -0.00396729 9.73887 -0.00396729 10.0041C-0.00396729 10.2693 0.10139 10.5237 0.288926 10.7112C0.476462 10.8987 0.730816 11.0041 0.996033 11.0041H3.56603L0.286033 14.2941C0.192304 14.3871 0.11791 14.4977 0.0671415 14.6195C0.0163729 14.7414 -0.00976562 14.8721 -0.00976562 15.0041C-0.00976562 15.1361 0.0163729 15.2668 0.0671415 15.3887C0.11791 15.5105 0.192304 15.6211 0.286033 15.7141C0.378996 15.8078 0.489597 15.8822 0.611456 15.933C0.733315 15.9838 0.864021 16.0099 0.996033 16.0099C1.12804 16.0099 1.25875 15.9838 1.38061 15.933C1.50247 15.8822 1.61307 15.8078 1.70603 15.7141L4.99603 12.4241V15.0041C4.99603 15.2693 5.10139 15.5237 5.28893 15.7112C5.47646 15.8987 5.73082 16.0041 5.99603 16.0041C6.26125 16.0041 6.5156 15.8987 6.70314 15.7112C6.89068 15.5237 6.99603 15.2693 6.99603 15.0041V10.0041C6.99603 9.73887 6.89068 9.48452 6.70314 9.29699C6.5156 9.10945 6.26125 9.00409 5.99603 9.00409Z" fill="black" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M10.0099 2H12.5899L9.29989 5.29C9.11159 5.4783 9.0058 5.7337 9.0058 6C9.0058 6.2663 9.11159 6.5217 9.29989 6.71C9.48819 6.8983 9.74359 7.00409 10.0099 7.00409C10.2762 7.00409 10.5316 6.8983 10.7199 6.71L14.0099 3.43V6C14.0099 6.26522 14.1152 6.51957 14.3028 6.70711C14.4903 6.89464 14.7447 7 15.0099 7C15.2751 7 15.5295 6.89464 15.717 6.70711C15.9045 6.51957 16.0099 6.26522 16.0099 6V1C16.0099 0.734784 15.9045 0.48043 15.717 0.292893C15.5295 0.105357 15.2751 0 15.0099 0H10.0099C9.74467 0 9.49032 0.105357 9.30278 0.292893C9.11525 0.48043 9.00989 0.734784 9.00989 1C9.00989 1.26522 9.11525 1.51957 9.30278 1.70711C9.49032 1.89464 9.74467 2 10.0099 2ZM1 16.0099H6C6.26522 16.0099 6.51957 15.9045 6.70711 15.717C6.89464 15.5295 7 15.2751 7 15.0099C7 14.7447 6.89464 14.4903 6.70711 14.3028C6.51957 14.1152 6.26522 14.0099 6 14.0099H3.43L6.71 10.7199C6.80373 10.6269 6.87812 10.5163 6.92889 10.3945C6.97966 10.2726 7.0058 10.1419 7.0058 10.0099C7.0058 9.87788 6.97966 9.74717 6.92889 9.62531C6.87812 9.50345 6.80373 9.39285 6.71 9.29989C6.61704 9.20616 6.50644 9.13177 6.38458 9.081C6.26272 9.03023 6.13201 9.00409 6 9.00409C5.86799 9.00409 5.73728 9.03023 5.61542 9.081C5.49356 9.13177 5.38296 9.20616 5.29 9.29989L2 12.5899V10.0099C2 9.74467 1.89464 9.49032 1.70711 9.30278C1.51957 9.11525 1.26522 9.00989 1 9.00989C0.734784 9.00989 0.48043 9.11525 0.292893 9.30278C0.105357 9.49032 0 9.74467 0 10.0099V15.0099C0 15.2751 0.105357 15.5295 0.292893 15.717C0.48043 15.9045 0.734784 16.0099 1 16.0099Z"
                                            fill="black"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`flex-1 flex flex-col justify-end overflow-y-auto px-4 py-3 space-y-3 text-sm text-neutral-800 ${isFullScreen ? "max-h-[100dvh]" : "max-h-80" 
                            }`}
                    >
                        {messages.length === 0 ? (
                            <p className="text-center text-neutral-400 text-xs py-4">Start messaging Stuck</p>
                        ) : (
                            <>
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
                                <div ref={messagesEndRef} />
                            </>
                        )}
                    </div>

                    <div className="px-3 py-2 flex items-center gap-2 bg-neutral-50 shadow-t-xl border-t border-[#b7b7b7]">
                        <input
                            type="text"
                            ref={inputRef}
                            className="flex-1 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-0 border border-[#3F4AE4]"
                            placeholder="Message Stuck..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-[#3F4AE4] hover:bg-[#1a4bff] text-white text-sm px-4 py-2 rounded-md transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}