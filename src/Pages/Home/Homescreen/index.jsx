import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import PoliticalSection from "../Political";
import MissionSection from "../mission";
import CoreValuesSection from "../core";
import YouTubeSection from "../youtube";

export default function Home() {
  return (
    <>
      <HeroSection /> 
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <PoliticalSection/>
      <MissionSection/>
      <CoreValuesSection/>
      <YouTubeSection/>
      <Testimonial />
      <Footer />
    </>
  );
}
