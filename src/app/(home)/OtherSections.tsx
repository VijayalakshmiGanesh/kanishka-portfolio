import Image from "next/image";
import Link from "next/link";

export default function OtherSection({
  categories,
}: {
  categories: { name: string; link: string }[];
}) {
  return (
    <div className="spacing container w-10/12 mx-auto flex flex-wrap gap-28 justify-center items-center">
      {categories.map(({ name, link }) => (
        <Link href={link} key={name} className="relative">
          <Image
            src="/assets/images/frame.png"
            height={320}
            width={320}
            alt="frame"
          />
          <span className="absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl">
            {name}
          </span>
        </Link>
      ))}
    </div>
  );
}
