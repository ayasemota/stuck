import Link from "next/link";
import Button from "./button";
import Clock from "./clock";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="z-50 container-fluid bg-white flex justify-center items-center sticky px-4 top-0 text-black border-b border-border h-[100px]">
      <div className="container flex items-center justify-between px-4 py-2 w-full">
        <Link href="/">
          <Logo width={100} color={true} />
        </Link>
        <div className="hidden md:inline">
          <Clock />
        </div>
        <Link href="/GetStarted">
          <Button fill="blue" text="Get Started" />
        </Link>
      </div>
    </nav>
  );
}
