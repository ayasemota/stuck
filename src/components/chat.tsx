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
          text: "⚠️ Failed to get response from AI.",
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
                            : "bottom-26 right-6 w-96 max-h-[60vh] rounded-lg"
                        }`}
        >
          <div className="flex flex-col justify-between w-full">
            <div className="px-6 py-5 bg-neutral-50 flex justify-between items-center border-b border-border">
              <div className="w-[10%]">
                <Logo width={80} color={true} main={false} />
              </div>
              <div className="h-5 w-5 rounded-full flex justify-end gap-6 items-center">
                <Link
                  href="#"
                  title="Toogle Full Screen"
                  onClick={toggleFullScreen}
                  className="h-5 w-5 rounded-full flex justify-center items-center hover:scale-110"
                >
                  {isFullScreen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.996 5.00409H12.416L15.706 1.71409C15.8943 1.52579 16.0001 1.27039 16.0001 1.00409C16.0001 0.73779 15.8943 0.482395 15.706 0.294092C15.5177 0.105788 15.2623 0 14.996 0C14.7297 0 14.4743 0.105788 14.286 0.294092L10.996 3.57409V1.00409C10.996 0.738875 10.8907 0.484522 10.7031 0.296985C10.5156 0.109449 10.2612 0.00409174 9.99603 0.00409174C9.73082 0.00409174 9.47646 0.109449 9.28893 0.296985C9.10139 0.484522 8.99603 0.738875 8.99603 1.00409V6.00409C8.99603 6.26931 9.10139 6.52366 9.28893 6.7112C9.47646 6.89873 9.73082 7.00409 9.99603 7.00409H14.996C15.2612 7.00409 15.5156 6.89873 15.7031 6.7112C15.8907 6.52366 15.996 6.26931 15.996 6.00409C15.996 5.73888 15.8907 5.48452 15.7031 5.29699C15.5156 5.10945 15.2612 5.00409 14.996 5.00409ZM5.99603 9.00409H0.996033C0.730816 9.00409 0.476462 9.10945 0.288926 9.29699C0.10139 9.48452 -0.00396729 9.73887 -0.00396729 10.0041C-0.00396729 10.2693 0.10139 10.5237 0.288926 10.7112C0.476462 10.8987 0.730816 11.0041 0.996033 11.0041H3.56603L0.286033 14.2941C0.192304 14.3871 0.11791 14.4977 0.0671415 14.6195C0.0163729 14.7414 -0.00976562 14.8721 -0.00976562 15.0041C-0.00976562 15.1361 0.0163729 15.2668 0.0671415 15.3887C0.11791 15.5105 0.192304 15.6211 0.286033 15.7141C0.378996 15.8078 0.489597 15.8822 0.611456 15.933C0.733315 15.9838 0.864021 16.0099 0.996033 16.0099C1.12804 16.0099 1.25875 15.9838 1.38061 15.933C1.50247 15.8822 1.61307 15.8078 1.70603 15.7141L4.99603 12.4241V15.0041C4.99603 15.2693 5.10139 15.5237 5.28893 15.7112C5.47646 15.8987 5.73082 16.0041 5.99603 16.0041C6.26125 16.0041 6.5156 15.8987 6.70314 15.7112C6.89068 15.5237 6.99603 15.2693 6.99603 15.0041V10.0041C6.99603 9.73887 6.89068 9.48452 6.70314 9.29699C6.5156 9.10945 6.26125 9.00409 5.99603 9.00409Z"
                        fill="black"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0099 2H12.5899L9.29989 5.29C9.11159 5.4783 9.0058 5.7337 9.0058 6C9.0058 6.2663 9.11159 6.5217 9.29989 6.71C9.48819 6.8983 9.74359 7.00409 10.0099 7.00409C10.2762 7.00409 10.5316 6.8983 10.7199 6.71L14.0099 3.43V6C14.0099 6.26522 14.1152 6.51957 14.3028 6.70711C14.4903 6.89464 14.7447 7 15.0099 7C15.2751 7 15.5295 6.89464 15.717 6.70711C15.9045 6.51957 16.0099 6.26522 16.0099 6V1C16.0099 0.734784 15.9045 0.48043 15.717 0.292893C15.5295 0.105357 15.2751 0 15.0099 0H10.0099C9.74467 0 9.49032 0.105357 9.30278 0.292893C9.11525 0.48043 9.00989 0.734784 9.00989 1C9.00989 1.26522 9.11525 1.51957 9.30278 1.70711C9.49032 1.89464 9.74467 2 10.0099 2ZM1 16.0099H6C6.26522 16.0099 6.51957 15.9045 6.70711 15.717C6.89464 15.5295 7 15.2751 7 15.0099C7 14.7447 6.89464 14.4903 6.70711 14.3028C6.51957 14.1152 6.26522 14.0099 6 14.0099H3.43L6.71 10.7199C6.80373 10.6269 6.87812 10.5163 6.92889 10.3945C6.97966 10.2726 7.0058 10.1419 7.0058 10.0099C7.0058 9.87788 6.97966 9.74717 6.92889 9.62531C6.87812 9.50345 6.80373 9.39285 6.71 9.29989C6.61704 9.20616 6.50644 9.13177 6.38458 9.081C6.26272 9.03023 6.13201 9.00409 6 9.00409C5.86799 9.00409 5.73728 9.03023 5.61542 9.081C5.49356 9.13177 5.38296 9.20616 5.29 9.29989L2 12.5899V10.0099C2 9.74467 1.89464 9.49032 1.70711 9.30278C1.51957 9.11525 1.26522 9.00989 1 9.00989C0.734784 9.00989 0.48043 9.11525 0.292893 9.30278C0.105357 9.49032 0 9.74467 0 10.0099V15.0099C0 15.2751 0.105357 15.5295 0.292893 15.717C0.48043 15.9045 0.734784 16.0099 1 16.0099Z"
                        fill="black"
                      />
                    </svg>
                  )}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                    >
                      <path
                        d="M18.1158 10.1313C17.8812 8.97935 17.4207 7.88529 16.7608 6.91231C16.1144 5.95375 15.2894 5.12871 14.3308 4.48231C13.3566 3.82479 12.263 3.36445 11.1118 3.12731C10.507 3.00445 9.89105 2.94413 9.27383 2.94731V0.945312L5.29883 3.94531L9.27383 6.94531V4.94731C9.75783 4.94531 10.2418 4.99131 10.7088 5.08731C11.6035 5.27169 12.4535 5.62942 13.2108 6.14031C13.9573 6.64346 14.5997 7.28586 15.1028 8.03231C15.884 9.18762 16.3006 10.5507 16.2988 11.9453C16.2995 12.8813 16.1125 13.8079 15.7488 14.6703C15.573 15.0862 15.3573 15.484 15.1048 15.8583C14.8529 16.2314 14.5656 16.5794 14.2468 16.8973C13.2788 17.8634 12.0499 18.5261 10.7108 18.8043C9.77964 18.9931 8.82002 18.9931 7.88883 18.8043C6.99369 18.6198 6.14335 18.2617 5.38583 17.7503C4.64028 17.2476 3.99858 16.6059 3.49583 15.8603C2.71561 14.7038 2.29878 13.3404 2.29883 11.9453H0.298828C0.298676 13.7392 0.834604 15.4922 1.83783 16.9793C2.48575 17.9354 3.30975 18.7594 4.26583 19.4073C5.75145 20.4128 7.50494 20.9486 9.29883 20.9453C9.90813 20.9459 10.5159 20.8846 11.1128 20.7623C12.2637 20.525 13.3569 20.0647 14.3308 19.4073C14.8087 19.0845 15.2544 18.7164 15.6618 18.3083C16.0704 17.9006 16.4387 17.4546 16.7618 16.9763C17.7666 15.4911 18.302 13.7384 18.2988 11.9453C18.2994 11.336 18.2381 10.7282 18.1158 10.1313Z"
                        fill="black"
                      />
                      <path
                        d="M9.29883 14.2788C10.5521 14.2788 11.5488 13.1696 11.5488 11.7788C11.5488 10.388 10.5521 9.27881 9.29883 9.27881C8.04558 9.27881 7.04883 10.388 7.04883 11.7788C7.04883 13.1696 8.04558 14.2788 9.29883 14.2788Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-small text-neutral-800">
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

            <div className="text-small px-3 py-2 flex items-center gap-2 bg-neutral-50 shadow-t-xl border-t border-border">
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
          {isFullScreen && (
            <div className="hidden lg:flex flex-col items-center justify-between border-r text-black w-[400px] min-w-[20vw] py-20 border-l border-border">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-4 px-6 w-full">
                  <div className="flex flex-col items-center gap-3">
                    <Logo width={130} color={true} />
                    <p>Version 1.0</p>
                  </div>
                  <div className="flex gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.7988 22.4453C18.3218 22.4453 22.7988 17.9683 22.7988 12.4453C22.7988 6.92231 18.3218 2.44531 12.7988 2.44531C7.27583 2.44531 2.79883 6.92231 2.79883 12.4453C2.79883 17.9683 7.27583 22.4453 12.7988 22.4453ZM12.7988 20.4453C10.6771 20.4453 8.64226 19.6025 7.14197 18.1022C5.64168 16.6019 4.79883 14.567 4.79883 12.4453C4.79883 10.3236 5.64168 8.28875 7.14197 6.78846C8.64226 5.28817 10.6771 4.44531 12.7988 4.44531C14.9206 4.44531 16.9554 5.28817 18.4557 6.78846C19.956 8.28875 20.7988 10.3236 20.7988 12.4453C20.7988 14.567 19.956 16.6019 18.4557 18.1022C16.9554 19.6025 14.9206 20.4453 12.7988 20.4453ZM12.7988 9.44531C13.064 9.44531 13.3184 9.33996 13.5059 9.15242C13.6935 8.96488 13.7988 8.71053 13.7988 8.44531C13.7988 8.1801 13.6935 7.92574 13.5059 7.7382C13.3184 7.55067 13.064 7.44531 12.7988 7.44531C12.5336 7.44531 12.2793 7.55067 12.0917 7.7382C11.9042 7.92574 11.7988 8.1801 11.7988 8.44531C11.7988 8.71053 11.9042 8.96488 12.0917 9.15242C12.2793 9.33996 12.5336 9.44531 12.7988 9.44531ZM12.7988 18.4453C13.064 18.4453 13.3184 18.34 13.5059 18.1524C13.6935 17.9649 13.7988 17.7105 13.7988 17.4453V11.4453C13.7988 11.1801 13.6935 10.9257 13.5059 10.7382C13.3184 10.5507 13.064 10.4453 12.7988 10.4453C12.5336 10.4453 12.2793 10.5507 12.0917 10.7382C11.9042 10.9257 11.7988 11.1801 11.7988 11.4453V17.4453C11.7988 17.7105 11.9042 17.9649 12.0917 18.1524C12.2793 18.34 12.5336 18.4453 12.7988 18.4453Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      Messages are generated by AI. Some may be inaccurate or
                      inappropriate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-6 w-full">
                <div className="h-[1px] w-full bg-black"></div>
                <Link href="#">
                  <div
                    onClick={() => {
                      setMessages([]);
                      setInput("");
                      inputRef.current?.focus();
                    }}
                    className="flex gap-2.5 items-center p-3 rounded-lg transition-all duration-300 bg-transparent hover:bg-main-invert hover:invert-100 hover:shadow-md hover:scale-[1.02]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                    >
                      <path
                        d="M18.1158 10.1313C17.8812 8.97935 17.4207 7.88529 16.7608 6.91231C16.1144 5.95375 15.2894 5.12871 14.3308 4.48231C13.3566 3.82479 12.263 3.36445 11.1118 3.12731C10.507 3.00445 9.89105 2.94413 9.27383 2.94731V0.945312L5.29883 3.94531L9.27383 6.94531V4.94731C9.75783 4.94531 10.2418 4.99131 10.7088 5.08731C11.6035 5.27169 12.4535 5.62942 13.2108 6.14031C13.9573 6.64346 14.5997 7.28586 15.1028 8.03231C15.884 9.18762 16.3006 10.5507 16.2988 11.9453C16.2995 12.8813 16.1125 13.8079 15.7488 14.6703C15.573 15.0862 15.3573 15.484 15.1048 15.8583C14.8529 16.2314 14.5656 16.5794 14.2468 16.8973C13.2788 17.8634 12.0499 18.5261 10.7108 18.8043C9.77964 18.9931 8.82002 18.9931 7.88883 18.8043C6.99369 18.6198 6.14335 18.2617 5.38583 17.7503C4.64028 17.2476 3.99858 16.6059 3.49583 15.8603C2.71561 14.7038 2.29878 13.3404 2.29883 11.9453H0.298828C0.298676 13.7392 0.834604 15.4922 1.83783 16.9793C2.48575 17.9354 3.30975 18.7594 4.26583 19.4073C5.75145 20.4128 7.50494 20.9486 9.29883 20.9453C9.90813 20.9459 10.5159 20.8846 11.1128 20.7623C12.2637 20.525 13.3569 20.0647 14.3308 19.4073C14.8087 19.0845 15.2544 18.7164 15.6618 18.3083C16.0704 17.9006 16.4387 17.4546 16.7618 16.9763C17.7666 15.4911 18.302 13.7384 18.2988 11.9453C18.2994 11.336 18.2381 10.7282 18.1158 10.1313Z"
                        fill="black"
                      />
                      <path
                        d="M9.29883 14.2788C10.5521 14.2788 11.5488 13.1696 11.5488 11.7788C11.5488 10.388 10.5521 9.27881 9.29883 9.27881C8.04558 9.27881 7.04883 10.388 7.04883 11.7788C7.04883 13.1696 8.04558 14.2788 9.29883 14.2788Z"
                        fill="black"
                      />
                    </svg>
                    <p>Clear Chat</p>
                  </div>
                </Link>
                <Link href="#">
                  <div className="flex gap-2.5 items-center p-3 rounded-lg transition-all duration-300 bg-transparent hover:bg-[#C0B400] hover:invert-100 hover:shadow-md hover:scale-[1.02]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="21"
                      viewBox="0 0 17 21"
                      fill="none"
                    >
                      <path
                        d="M4.29883 11.9453H12.2988V9.94531H4.29883V11.9453ZM4.29883 14.9453H12.2988V12.9453H4.29883V14.9453ZM4.29883 17.9453H9.29883V15.9453H4.29883V17.9453ZM2.29883 20.9453C1.74883 20.9453 1.27816 20.7496 0.886828 20.3583C0.495495 19.967 0.299495 19.496 0.298828 18.9453V2.94531C0.298828 2.39531 0.494828 1.92465 0.886828 1.53331C1.27883 1.14198 1.74949 0.945979 2.29883 0.945312H10.2988L16.2988 6.94531V18.9453C16.2988 19.4953 16.1032 19.9663 15.7118 20.3583C15.3205 20.7503 14.8495 20.946 14.2988 20.9453H2.29883ZM9.29883 7.94531H14.2988L9.29883 2.94531V7.94531Z"
                        fill="black"
                      />
                    </svg>
                    <p>Whitepaper</p>
                  </div>
                </Link>
                <div className="h-[1px] w-full bg-black"></div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
