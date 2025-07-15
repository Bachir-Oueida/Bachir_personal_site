import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Communities from "../components/Communities";
import TextSlider from "../components/TextSlider";
import FeaturedArticle from "../components/FeaturedArticle";
import TextVideo from "../components/textVideo";
import HighRiseSlider from "../components/HighRiseSlider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <Intro />
      <Communities />
      <TextSlider />
      <TextVideo />
      <FeaturedArticle />
      <HighRiseSlider />
    </div>
  );
}
