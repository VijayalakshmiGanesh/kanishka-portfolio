import HeroBanner from "./(home)/HeroBanner";
import OtherSection from "./(home)/OtherSections";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroBanner />
        <OtherSection />
      </main>
    </>
  );
}
