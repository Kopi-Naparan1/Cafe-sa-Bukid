import Section from "../ui/Section";
import HighlightFoods from "../ui/BestSellers/FoodHighlights";

export default function BestSellers() {
  return (
    <Section
      title="Best Sellers"
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center rounded-2xl overflow-hidden"
    >
      <span className="mb-3 text-xs font-medium uppercase tracking-[.16em] text-primary/60 md:mb-4">
        Best Sellers
      </span>
      <h2 className="font-heading font-extrabold tracking-tight text-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
        The Flavors Everyone Comes Back For
      </h2>

      <HighlightFoods></HighlightFoods>
    </Section>
  );
}
