import AboutHero from "./component/AboutHero";
import AboutStory from "./component/AboutStory";
import Gallery from "./component/Gallery";
import AboutFinalCTA from "./component/AboutFinalCTA";
import WhyChooseUs from "./component/WhyChooseUs";
export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <WhyChooseUs />
      <Gallery />
      <AboutFinalCTA />
    </div>
  );
}
