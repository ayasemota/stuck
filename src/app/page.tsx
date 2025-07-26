"use client";

import { useEffect, useState } from "react";
import Button from "@/components/button";
import Chattext from "@/components/chattext";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <section className="py-15 w-full flex flex-col justify-center min-h-[80vh] items-center text-center gap-12">
        <div className="px-4 container flex flex-col items-center gap-7">
          <h1 className="font-bold text-6xl leading-18 text-black">Stay Ahead of Traffic Congestion</h1>
          <p className="text-2xl w-[1000px] max-w-[80vw] leading-10">Get real-time traffic updates in an instant! With just a few taps, our WhatsApp chatbot keeps you ahead of the road—saving you time and stress on every commute.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/">
              <Button
                fill="blue"
                text="Get Traffic Info"
              />
            </Link>
            <Link href="/">
              <Button
                fill="white"
                text="Download App"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center relative pt-16 max-w-[90%] mx-auto">
          <div className="w-[30%] min-w-[100px] -rotate-12 z-10">
            <Image
              src="/stuckdemo3.png"
              alt="Stuck Demo 3"
              width={350}
              height={350}
            />
          </div>
          <div className="w-[30%] min-w-[100px] rotate-6 relative bottom-12 -ml-10 z-20">
            <Image
              src="/stuckdemo1.png"
              alt="Stuck Demo 1"
              width={350}
              height={350}
            />
          </div>
          <div className="w-[30%] min-w-[100px] rotate-12 -ml-10 z-10">
            <Image
              src="/stuckdemo2.png"
              alt="Stuck Demo 2"
              width={350}
              height={350}
            />
          </div>
          <div className="absolute -bottom-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="287" height="19" viewBox="0 0 287 19" fill="none" className="w-[30vw]">
              <path d="M287 9.5C287 14.7467 222.753 19 143.5 19C64.2471 19 0 14.7467 0 9.5C0 4.25329 64.2471 0 143.5 0C222.753 0 287 4.25329 287 9.5Z" fill="#EBEBEB" />
            </svg>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col text-center items-center justify-center">
        <div className="container flex flex-col justify-center gap-9 max-w-[80vw]">
          <p className="tracking-[16px] text-black">Sponsored by</p>
          <div className="flex flex-wrap justify-center md:justify-between gap-16">
            <Logo color={false} />
            <Logo color={false} />
            <Logo color={false} />
            <Logo color={false} />
            <Logo color={false} />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col text-center items-center justify-center pt-[130px] px-8 gap-10">
        <div className="container max-w-[1000px]">
          <h1 className="font-bold text-4xl leading-12 text-center">&quot;We keep you from getting <span className="bg-[#DFE6FF] px-4 py-1 rounded-full">stuck in traffic,</span> so you can stay on the move and reach your destination faster.&quot;</h1>
        </div>
        <div className="text-4xl flex flex-col container gap-10 max-w-[1000px]">
          <div className="w-full flex">
            <Chattext
              text="There is no traffic jam on your usual destination today"
              backgroundColor="#ffffff"
            />
          </div>
          <div className="w-full flex justify-end lg:relative lg:bottom-6">
            <Chattext
              text="There is a heavy traffic jam on your usual route today. I would suggest taking an alternate route through mainland, Lagos."
              backgroundColor="#DFE6FF"
              thumb={true}
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col text-center items-center justify-center py-[130px] px-8 gap-10">
        <div className="container">
          <h1 className="font-bold text-4xl text-[#3F4AE4] mb-28">How It Works</h1>

          <div className="flex flex-wrap justify-center xl:justify-between gap-28 xl:gap-10">
            <div className="bg-[#F9F9FF] hover:bg-[#3F4AE4] text-black hover:text-white transition-all duration-300 ease-in-out w-[400px] h-[450px] rounded-2xl p-8 flex flex-col justify-center items-center gap-6 relative">
              <h1 className="text-4xl">Sign Up & Set Your Routes</h1>
              <p className="text-[16px] max-w-[300px]">Create an account and easily add your regular routes to the system.</p>
              <Image
                src="/works2.png"
                alt="More Info"
                height={140}
                width={140}
                className="absolute -top-20"
              />
            </div>
            <div className="bg-[#F9F9FF] hover:bg-[#3F4AE4] text-black hover:text-white transition-all duration-300 ease-in-out w-[400px] h-[450px] rounded-2xl p-8 flex flex-col justify-center items-center gap-6 relative">
              <h1 className="text-4xl">Connect with Our WhatsApp Chatbot</h1>
              <p className="text-[16px] max-w-[300px]">Start a conversation with our WhatsApp chatbot—just a few clicks and you’re all set!</p>
              <Image
                src="/works2.png"
                alt="More Info"
                height={140}
                width={140}
                className="absolute -top-20"
              />
            </div>
            <div className="bg-[#F9F9FF] hover:bg-[#3F4AE4] text-black hover:text-white transition-all duration-300 ease-in-out w-[400px] h-[450px] rounded-2xl p-8 flex flex-col justify-center items-center gap-6 relative">
              <h1 className="text-4xl">Plan Smarter, Commute Better</h1>
              <p className="text-[16px] max-w-[300px]">Enjoy a more efficient commute, with real-time insights to keep you ahead of the traffic.</p>
              <Image
                src="/works2.png"
                alt="More Info"
                height={140}
                width={140}
                className="absolute -top-20"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="w-full flex justify-center px-10 relative -bottom-12 z-50">
        <div className="flex flex-wrap justify-center lg:justify-between text-center lg:text-start items-center container bg-[#3F4AE4] gap-10 px-8 lg:px-28 py-16 text-white rounded-[40px]">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <h1 className="text-5xl font-medium w-[80%] leading-14">Changing the narrative on the road</h1>
            <p className="text-2xl">Helping road users reduce stress and fear of traffic congestion</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/">
                <Button
                  fill="white"
                  text="Get Traffic Info"
                />
              </Link>
              <Link href="/">
                <Button
                  fill="white"
                  text="Download App"
                />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/robot.png"
              alt="WeThink Traffic AI Bot"
              width={290}
              height={430}
            />
          </div>
        </div>
      </section>

      <Footer />

      {showButton && (
        <div className="fixed bottom-10 right-10 bg-[#3F4AE4] p-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
            <path d="M8.90356 12.1862H21.1025M8.90356 18.8138H17.6032M15.003 30C18.0443 29.9993 21.0026 28.973 23.4306 27.0762C25.8585 25.1794 27.6242 22.5153 28.4604 19.4869C29.2966 16.4585 29.1579 13.2304 28.0654 10.2908C26.9728 7.35125 24.9857 4.86011 22.4047 3.19414C19.8236 1.52817 16.789 0.777982 13.7598 1.05703C10.7305 1.33607 7.87132 2.62917 5.61467 4.74077C3.35803 6.85237 1.82664 9.66761 1.25211 12.7607C0.677572 15.8539 1.09114 19.0566 2.43027 21.8847C2.59373 22.2296 2.64822 22.6183 2.56497 22.9914L1.32995 28.5343C1.29513 28.6899 1.29912 28.852 1.34155 29.0055C1.38398 29.1591 1.46345 29.2989 1.57247 29.4118C1.68148 29.5247 1.81646 29.607 1.96468 29.6509C2.1129 29.6949 2.26948 29.699 2.41968 29.6629L7.76994 28.3822C8.13118 28.3003 8.50865 28.3502 8.83848 28.5233C10.7567 29.499 12.866 30.0042 15.003 30Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </>
  );
}