import Section from "@/components/ui/Section";
import MenuHero from "./components/MenuHero";
import MenuItems from "./components/MenuItems";
import MenuFinalCTA from "./components/MenuFinalCTA";
export default function Menu() {
  return (
    <Section>
      <MenuHero />
      <MenuItems />
      <MenuFinalCTA />
    </Section>
  );
}
