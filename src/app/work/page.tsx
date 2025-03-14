import OtherSection from "../(home)/OtherSections";
import PageBanner from "./(components)/HeroBanner";

const pages = [
  {
    name: "Animations",
    link: "/work/animation",
  },
  {
    name: "Painting & drawing",
    link: "/work/paintings",
  },
  {
    name: "Courture Design",
    link: "/work/digital-art",
  },

  {
    name: "Potrait & Character",
    link: "/work/drawings",
  },
  {
    name: "Crafts",
    link: "/work/crafts",
  },
];

export default function Page() {
  return (
    <>
      <PageBanner imgLink="https://drive.google.com/uc?export=view&id=1iru8lzuSRF_QZPmZ61FkeNgVayvpBC0a" />
      <OtherSection categories={pages} />
    </>
  );
}
