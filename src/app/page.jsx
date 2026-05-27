import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BestSellers from "@/components/sections/BestSellers";
import AboutPreview from "@/components/sections/AboutPreview";
import MenuPreview from "@/components/sections/MenuPreview";

import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("/");

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SocialProof />
      <BestSellers />
      <AboutPreview />
      <MenuPreview />
      <Location />
      <FinalCTA />
    </div>
  );
}
