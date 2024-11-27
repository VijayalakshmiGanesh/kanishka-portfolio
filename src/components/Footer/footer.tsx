import Image from "next/image";
import Link from "next/link";

export const footerLinks = [
  {
    name: "instagram",
    path: "/assets/icons/facebook.svg",
    link: "https://www.instagram.com/kanishkapinkfairy/profilecard/?igsh=ZjN6cnBmMmQ2d3pl",
  },
  {
    name: "linkedin",
    path: "/assets/icons/facebook.svg",
    link: "https://www.linkedin.com/in/kanishka-srinivasan-427604255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "youtube",
    path: "/assets/icons/youtube.svg",
    link: "https://youtube.com/@kanishkapinkfairy?si=kweJ5DkNe9UUdATl",
  },
];

export default function Footer() {
  return (
    <footer className="container mx-auto py-4 flex items-center justify-center gap-2 border-t border-white/35">
      Copyrights Reserved |
      <div className="flex items-center justify-center gap-6 ">
        {footerLinks.map(({ name, link }) => (
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
