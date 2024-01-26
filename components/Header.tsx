import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/MAIN.png"

          width={240}
          height={36}
        />
        
      </Link>
      <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3  hover:bg-black/80"
            href="/generate"
          >
            Tranform Your Photos
          </Link>
    </header>
  );
}
