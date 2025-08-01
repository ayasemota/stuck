"use client";

import { useState, useRef, useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";

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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    inputRef.current?.focus();

    try {
      const res = await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage: Message = {
        sender: "bot",
        text: data.text,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Failed to get response from Stuck.",
        },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-main hover:bg-main-hover hover:scale-105 p-3 h-[55px] w-[55px] flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 z-50"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 31"
            fill="none"
          >
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
          className={`fixed z-50 overflow-y-auto flex overflow-hidden transition-all duration-300 bg-white shadow-xl 
                        ${
                          isFullScreen
                            ? "top-0 left-0 w-screen h-[100dvh] rounded-none"
                            : "bottom-26 right-6 w-90 max-h-[60vh] max-w-[80vw] rounded-lg"
                        }`}
        >
          <div className="flex flex-col justify-between h-full w-full">
            <div className="sticky top-0 px-6 py-5 bg-neutral-50 flex justify-between items-center border-b border-border">
              <Logo width={80} color={true} main={false} />
              <div className="h-5 w-5 rounded-full flex justify-end gap-6 items-center">
                <Link
                  href="#"
                  title="Toggle Full Screen"
                  onClick={toggleFullScreen}
                  className="h-5 w-5 rounded-full flex justify-center items-center hover:scale-110"
                >
                  {isFullScreen ? "Exit" : "Full"}
                </Link>
                <Link href="#" title="Clear Chat">
                  <div
                    onClick={() => {
                      setMessages([]);
                      setInput("");
                      inputRef.current?.focus();
                    }}
                    className="flex items-center hover:scale-110"
                  >
                    🗑
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-1 gap-3 overflow-y-auto px-4 py-3 text-small text-neutral-800">
              <p className="text-center text-neutral-400 py-4 px-6">
                Messages generated with Stuck are protected with end to end
                encreption.
              </p>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] px-4 py-2 rounded-md w-fit ${
                    msg.sender === "user"
                      ? "bg-blue-100 self-end text-right ml-auto block"
                      : "bg-neutral-100 self-start block"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="sticky bottom-0 text-small px-3 py-2 flex items-center gap-2 bg-neutral-50 shadow-t-xl border-t border-border">
              <input
                type="text"
                ref={inputRef}
                className="flex-1 px-3 py-2 rounded-md focus:outline-none focus:ring-0 border border-main"
                placeholder="Message Stuck..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-main hover:bg-main-hover text-white h-full px-4 py-2 rounded-md transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
