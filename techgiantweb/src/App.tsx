import Header from "./components/header/header";
import { HeroSection } from "./components/LandingPageBGVideo/heroPage";
import { InfiniteMovingCardsDemo } from "./components/traningCards/tAndPServices";
import "./index.css";
import "./App.css";
import OurService from "./components/carousel/ourServiceCarousel";
import { FeedbackContaner } from "./components/feedbackCard/feedbackContaner";
import ProfilePic from "./icons/profileIcon";
import FeedbackApp from "./components/feedback2/feedback2";
import ImageSlider from "./components/carousel/Carousel";
import Gallery from "./components/carousel/c1";
import TechGiantText from "./icons/illumination";
function App() {
  return (
    <div className="bg-bgColor">
      <Header />
      <HeroSection />

      {/* <OurService /> */}

      {/* <ImageSlider /> */}

      <Gallery />
      <div className="flex h-[170px] w-screen  ">
        <TechGiantText />
      </div>

      <InfiniteMovingCardsDemo />
      <FeedbackContaner />
      <ProfilePic />
      <FeedbackApp />
    </div>
  );
}

export default App;
