import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
// import AboutPreview from "@/components/sections/AboutPreview";
// import BestSellers from "@/components/sections/BestSellers";
// import MenuPreview from "@/components/sections/MenuPreview";

// import Location from "@/components/sections/Location";
// import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="pb-6 sm:pb-8">
      <Hero />
      <SocialProof />
      {/* <AboutPreview />
      <BestSellers />
      <MenuPreview />
      <Location />
      <FinalCTA /> */}
    </div>
  );
}
