import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "facebook",
    path: "/assets/icons/facebook.svg",
    link: "/",
  },
  {
    name: "instagram",
    path: "/assets/icons/facebook.svg",
    link: "/",
  },
  {
    name: "linkedin",
    path: "/assets/icons/facebook.svg",
    link: "/",
  },
];

export default function Footer() {
  return (
    <footer className="container mx-auto py-4 flex items-center justify-center gap-2 border-t border-white/35">
      Copyrights Reserved |
      <div className="flex items-center justify-center gap-6 ">
        {links.map(({ name, link }) => (
          <Link href={link} key={name}>
            <Image
              src={`/assets/icons/${name}.svg`}
              width={32}
              height={32}
              alt={name}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
}
