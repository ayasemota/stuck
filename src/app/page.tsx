import Button from "@/components/button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="py-15 w-full flex flex-col items-center text-center gap-12">
        <div className="px-4 container flex flex-col items-center gap-7">
          <h1 className="font-bold text-6xl">Stay Ahead of Traffic Congestion</h1>
          <p className="text-2xl w-[1000px] max-w-full">Get real-time traffic updates in an instant! With just a few taps, our WhatsApp chatbot keeps you ahead of the road—saving you time and stress on every commute.</p>
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

      <section className="w-full flex justify-center px-10 relative -bottom-12 z-50">
        <div className="flex flex-wrap justify-center lg:justify-between text-center lg:text-start items-center container bg-[#3F4AE4] gap-10 px-8 lg:px-28 py-16 text-white rounded-[40px]">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <h1 className="text-5xl font-medium">Changing the narrative on the road</h1>
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
    </>
  );
}
