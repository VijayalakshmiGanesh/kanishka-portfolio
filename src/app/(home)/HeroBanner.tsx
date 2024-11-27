import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="h-[500px] w-full ">
      <Image
        src="https://drive.google.com/uc?export=view&id=1jDL4LpI1xFw02r0JEtJaPIStqxDFyHZD"
        alt="show banner"
        width={1000}
        height={500}
        className="h-full w-full max-w-full rounded-lg object-cover object-center"
      />
    </div>
  );
}
