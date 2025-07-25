import Link from "next/link";
import Button from "./button";
import Clock from "./clock";
import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="z-[9999] container-fluid bg-white flex justify-center items-center sticky px-4 top-0 text-black border-b border-[#b7b7b7] backdrop-blur-md h-[100px]">
            <div className="container flex items-center justify-between px-4 py-2 w-full">
                <Link href="/" className="text-2xl font-bold">
                   <Logo color={true} />
                </Link>
                <div className="hidden md:inline">
                    <Clock />
                </div>
                <Link href="/Getstarted" className="pointer">
                    <Button
                        fill="blue"
                        text="Get Started"
                    />
                </Link>
            </div>
        </nav>
    )
}