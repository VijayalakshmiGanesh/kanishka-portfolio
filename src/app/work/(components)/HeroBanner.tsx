import Image from "next/image";

export default function PageBanner({ imgLink }: { imgLink: string }) {
  return (
    <div className="h-[250px] w-full pb-20">
      <Image
        src={imgLink}
        alt="show banner"
        width={500}
        height={250}
        className="h-64 w-full max-w-full rounded-lg object-cover object-top"
      />
    </div>
  );
}
