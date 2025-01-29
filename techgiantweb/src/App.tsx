import Header from './components/header/header';
import {HeroSection} from './components/LandingPageBGVideo/heroPage';
import {InfiniteMovingCardsDemo} from './components/traningCards/tAndPServices'
import './index.css';
import './App.css';
import OurService from './components/carousel/ourServiceCarousel';
import {FeedbackContaner} from './components/feedbackCard/feedbackContaner'
import ProfilePic from './icons/profileIcon'
import FeedbackApp from './components/feedback2/feedback2'
function App() {
  return (
    <div>
    <Header />
    <HeroSection />
    <OurService/>
    <InfiniteMovingCardsDemo/>
   <FeedbackContaner/>
    <ProfilePic/>
    <FeedbackApp/>
  </div>
  );
}

export default App;
