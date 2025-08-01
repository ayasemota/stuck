import Image from "next/image";

interface CardProps {
  text: string;
  backgroundColor: string;
  thumb?: boolean;
}

export default function Chattext({ text, backgroundColor, thumb }: CardProps) {
  return (
    <div
      style={{ backgroundColor }}
      className="py-6 px-10 text-start shadow-[0_4.28px_4.28px_0_rgba(0,0,0,0.10)] rounded-tr-4xl rounded-br-4xl rounded-bl-4xl rounded-tl-none flex flex-col gap-3 relative"
    >
      <p className="text-black max-w-[400px]">{text}</p>
      <div className="flex items-center justify-end gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M5.84946 0.788248C5.97759 0.393905 6.53548 0.393905 6.66361 0.788248L7.84214 4.4154C7.89944 4.59175 8.06378 4.71115 8.24922 4.71115H12.063C12.4777 4.71115 12.6501 5.24174 12.3146 5.48546L9.22917 7.72716C9.07916 7.83615 9.01639 8.02935 9.07369 8.2057L10.2522 11.8328C10.3803 12.2272 9.929 12.5551 9.59356 12.3114L6.50812 10.0697C6.3581 9.9607 6.15496 9.9607 6.00495 10.0697L2.91951 12.3114C2.58406 12.5551 2.13272 12.2272 2.26085 11.8328L3.43938 8.2057C3.49668 8.02935 3.43391 7.83615 3.28389 7.72716L0.198457 5.48546C-0.136991 5.24174 0.0354064 4.71115 0.450043 4.71115H4.26385C4.44928 4.71115 4.61363 4.59175 4.67093 4.4154L5.84946 0.788248Z"
            fill="#5A5A5A"
          />
        </svg>
        <p className="text-small">12:00PM</p>
      </div>
      {thumb ? (
        <div className="bg-white h-11 w-11 rounded-full flex items-center justify-center absolute -bottom-6 left-6 shadow-[0_-4.28px_4.28px_0_rgba(0,0,0,0.10)]">
          <Image src="/thumbup.png" alt="Thumbs Up" width={30} height={30} />
        </div>
      ) : null}
    </div>
  );
}
