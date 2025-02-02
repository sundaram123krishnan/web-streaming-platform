import Image from "next/image";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserButton } from "./user-button/user-button";
import { VideoSearchBox } from "./video-search-box";

export default function Navbar() {
  return (
    <div className="flex w-full border-b items-center gap-2 p-2">
      <Link href="/" className="px-4">
        <Image
          src="/favicon.png"
          className="dark:invert invert-0 p-1"
          alt="logo"
          width={40}
          height={40}
        />
      </Link>

      <Button variant="link">
        <Link href="/watch_later">
          Watch later
        </Link>
      </Button>
      <Button variant="link" className="mr-auto">
        <Link href="/history">
          History
        </Link>
      </Button>
      <VideoSearchBox />
      <ModeToggle />
      <UserButton />
    </div>
  );
}
