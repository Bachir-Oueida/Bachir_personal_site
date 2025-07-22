import Image from "next/image";
import Banner from "../components/Banner";
import AgentProfile from "../components/AgentProfile";
import Communities from "../components/Communities";
import CommunitiesModern from "../components/CommunitiesModern";
import TextSlider from "../components/TextSlider";
import TextSliderModern from "../components/TextSliderModern";
import FeaturedArticle from "../components/FeaturedArticle";
import TextVideo from "../components/textVideo";
import FeaturedBlogs from "../components/FeaturedBlogs";
import HighRiseSlider from "../components/HighRiseSlider";
import Work from "../components/Work";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      {/* <Intro /> */}
      <AgentProfile />
      {/* <Communities /> */}
      <CommunitiesModern />
      {/* <TextSlider /> */}
      <TextSliderModern />
      <TextVideo />
      <FeaturedArticle />
      <HighRiseSlider />
      <Work />
      {/* <Newsletter /> */}
      <FeaturedBlogs />
    </div>
  );
}
