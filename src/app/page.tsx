import Button from "@/components/button";
import Chat from "@/components/chat";
import Chattext from "@/components/chattext";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
            <Logo width={103} color={false} />
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

      <Chat />
    </>
  );
}