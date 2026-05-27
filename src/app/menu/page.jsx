import Section from "@/components/ui/Section";
import MenuHero from "./components/MenuHero";
import MenuItems from "./components/MenuItems";
import MenuFinalCTA from "./components/MenuFinalCTA";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("/menu");

export default function Menu() {
  return (
    <Section>
      <MenuHero />
      <MenuItems />
      <MenuFinalCTA />
    </Section>
  );
}
