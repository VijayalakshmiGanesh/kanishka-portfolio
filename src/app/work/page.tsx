import OtherSection from "../(home)/OtherSections";
import PageBanner from "./(components)/HeroBanner";

const pages = [
  {
    name: "Animations",
    link: "/work/animation",
  },
  {
    name: "Digital Arts",
    link: "/work/digital-art",
  },
  {
    name: "Paintings",
    link: "/work/paintings",
  },
  {
    name: "Drawings & Illustrations",
    link: "/work/drawings",
  },
];

export default function Page() {
  return (
    <>
      <PageBanner />
      <OtherSection categories={pages} />
    </>
  );
}
