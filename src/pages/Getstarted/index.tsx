import Button from "@/components/button"
import Chat from "@/components/chat"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

export default function getStarted() {
    return (
        <>
            <Navbar />

            <section className="flex flex-col justify-center items-center text-center bg-blue py-10 gap-10 min-h-[70vh]">
                <div className="max-w-[90vw]">
                    <div className="grid gap-9">
                        <h1 className="font-bold text-6xl">Get Started</h1>
                        <p className="w-[590px] max-w-[90vw] text-2xl">Welcome, Get unlimited usage on our free plan, and more features if you download our application</p>
                    </div>
                </div>

                <div className="text-start">
                    <div className="flex flex-wrap justify-center gap-10 max-w-[90vw]">
                        <div className="bg-[#3F4AE4] p-10 min-h-[470px] w-[360px] flex flex-col gap-6 rounded-2xl hover:scale-105 transition-all translate-2">
                            <h1 className="text-white text-3xl font-bold">Start Messaging for Free</h1>
                            <p className="text-[#C0C4FF]">Get traffic updates via WhatsApp with no stress for free</p>
                            <Link href="#" className="pointer">
                                <Button
                                    fill="white"
                                    text="Message Chatbot"
                                />
                            </Link>
                        </div>
                        <div className="bg-white border border-[#3F4AE4] text-[#3F4AE4] p-10 min-h-[470px] w-[360px] flex flex-col gap-6 rounded-2xl hover:scale-105 transition-all translate-2">
                            <h1 className="text-3xl font-bold">Download our app for a better experience</h1>
                            <p className="text-[#3f63e7]">Get notifications on your mobile device on real time traffic data with no click. This feature allows you to have a preset steady location saved to our database</p>
                            <div className="flex gap-2">
                                <Link href="#" className="text-lg">
                                    <Image
                                        src="/appstore.png"
                                        alt="App Store"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                                <Link href="#" className="text-lg">
                                    <Image
                                        src="/playstore.png"
                                        alt="Play Store"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <div className="z-[9999]">
                <Chat />
            </div>
        </ >
    )
}