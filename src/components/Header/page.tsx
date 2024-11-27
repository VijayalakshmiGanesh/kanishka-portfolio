import Link from "next/link";

export default function Header() {
  return (
    <header className="container text-pink font-semibold h-20 w-full mx-auto flex items-center justify-center text-5xl shadow-[0_4px_8px_-0px_#FFFFFF1A] ">
      <Link href="/">PINK FAIRY</Link>
    </header>
  );
}
