import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../lib/firebase";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { signInWithPopup } from "firebase/auth";

interface Props {
  light: boolean;
}

const Navbar = ({ light }: Props) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await signInWithPopup(auth, provider);
      router.push("/channels");
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <div className="bg-blurple_dark">
      <header className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link href="/">
          <Image
            src={`/discord_logo_${light ? "light" : "dark"}.svg`}
            alt="Discord Logo"
            width={124}
            height={34}
          />
        </Link>

        <div className="hidden space-x-6 text-white lg:flex">
          <a href="https://discord.com/download" className="link">
            Download
          </a>
          <a href="https://discord.com/nitro" className="link">
            Nitro
          </a>
          <a href="https://discord.com/servers" className="link">
            Discover
          </a>
          <a href="https://discord.com/safetycenter" className="link">
            Safety
          </a>
          <a href="https://support.discord.com/hc/en-us" className="link">
            Support
          </a>
          <a href="https://discord.com/blog" className="link">
            Blog
          </a>
          <a href="https://discord.com/jobs" className="link">
            Careers
          </a>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={!user ? handleLogin : () => router.push("/channels")}
            className="px-4 py-2 text-xs font-medium transition duration-200 ease-in-out bg-white rounded-full focus:outline-none md:text-sm hover:shadow-2xl hover:shadow-blurple hover:text-blurple whitespace-nowrap"
          >
            {!user ? "Login" : "Open Discord"}
          </button>
          <MenuIcon />
        </div>
      </header>
    </div>
  );
};
export default Navbar;
