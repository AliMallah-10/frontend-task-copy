import AvailableNow from "@/components/AvailableNow";
import HomeSection from "@/components/HomeSection";
import MostWatched from "@/components/ClassicDrama";
import OriginalShows from "@/components/OriginalShows";
// import SliderNowSlick from "@/components/SliderNowSlick";

export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <div className="bg-gradient-to-b from-black via-black/60 via-30% to-transparent">
        <AvailableNow />
        <MostWatched />
        <OriginalShows />
        {/* <SliderNowSlick /> */}
      </div>
    </main>
  );
}
