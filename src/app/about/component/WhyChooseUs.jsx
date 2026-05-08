import Section from "../../../components/ui/Section";
import mockImage from "../../assets/hero-image.webp";

import DesktopWhyChooseUs from "../whyChooseUs/DesktopWhyChooseUs";
import MobileWhyChooseUs from "../whyChooseUs/MobileWhyChooseUs";

const features = [
  {
    id: 1,
    title: "Fresh Ingredients",
    description:
      "Every meal is prepared with fresh, locally sourced ingredients that bring out simple and honest flavors.",
    image: mockImage,
  },
  {
    id: 2,
    title: "Scenic Mountain Views",
    description:
      "Surrounded by Bukidnon’s natural beauty, every visit feels peaceful, refreshing, and worth the trip.",
    image: mockImage,
  },
  {
    id: 3,
    title: "Warm & Relaxed Atmosphere",
    description:
      "Built for slow mornings, family meals, and meaningful conversations—not rushed dining.",
    image: mockImage,
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="min-h-[90vh] flex flex-col items-center text-center gap-6">
      {/* EYEBROW */}
      <span className="text-xs font-medium uppercase tracking-[.16em] text-primary/60">
        Why Choose Us
      </span>

      {/* H2 */}
      <h2 className="font-heading font-extrabold tracking-tight text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] max-w-3xl">
        What makes Café sa Bukid different
      </h2>

      {/* DESCRIPTION */}
      <p className="hidden md:blockmax-w-2xl text-dark/65 leading-relaxed text-[clamp(.9rem,1.5vw,1rem)]">
        Simple food, fresh ingredients, and a place built for slowing down.
      </p>

      {/* RESPONSIVE RENDERING */}
      <div className="w-full mt-8">
        {/* MOBILE */}
        <MobileWhyChooseUs features={features} />

        {/* DESKTOP */}
        <DesktopWhyChooseUs features={features} />
      </div>
    </Section>
  );
}
