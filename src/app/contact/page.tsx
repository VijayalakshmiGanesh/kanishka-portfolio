import { footerLinks } from "@/components/Footer/footer";
import PageBanner from "../work/(components)/HeroBanner";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <PageBanner />
      <div className="w-80 shadow-[0_4px_8px_-0px_#FFFFFF1A] mx-auto flex flex-col gap-6 p-8 my-8">
        <div className="text-4xl font-semibold">Let&apos;s talk</div>
        <Link
          href={`mailto:kanishka23official@gmail.com `}
          className="font-extrabold underline hover:no-underline text-pink"
        >
          kanishka23official@gmail.com
        </Link>
        <div className="flex justify-between flex-wrap">
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
      </div>
    </>
  );
}