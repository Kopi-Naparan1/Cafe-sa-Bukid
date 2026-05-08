import Link from "next/link";
import Image from "next/image";

import Section from "../../../components/ui/Section";
import HeroImage from "../../assets/hero-image.webp";

export default function AboutStory() {
  return (
    <Section className="grid min-h-[85vh]  max-w-6xl mx-auto gap-14 rounded-2xl bg-secondary-light/30 overflow-hidden px-4 md:px-0 md:grid-cols-5 md:items-center">
      {/* TEXT — 60% */}
      <div className="md:col-span-3 items-center md:items-start flex flex-col justify-center gap-3 md:gap-4">
        <span className="text-xs font-medium uppercase tracking-[.16em] text-primary/60">
          About Us
        </span>

        <h2 className="font-heading font-extrabold tracking-tight md:text-left text-[clamp(1.6rem,4vw,3rem)] text-center  leading-[1.1]">
          Why Café sa Bukid exists
        </h2>

        {/* MOBILE IMAGE */}
        <div className="relative w-full overflow-hidden rounded-2xl aspect-4/3 ring-2 my-4 ring-primary/20 shadow-sm md:hidden">
          <Image
            src={HeroImage}
            alt="Cafe sa Bukid Hero Section"
            fill
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 45vw"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark/45 via-dark/10 to-transparent" />
        </div>

        {/* MOBILE DESCRIPTION */}
        <p className="md:hidden max-w-full md:text-left leading-relaxed text-[clamp(.85rem,3.5vw,.95rem)] text-center  text-dark/65">
          Café sa Bukid was created to be more than just a café—it’s a place to
          slow down, enjoy good food, and take in the beauty of Bukidnon. Built
          for quiet mornings, family meals, and moments worth remembering, every
          visit is made to feel warm, simple, and worth the trip.
        </p>

        {/* DESKTOP DESCRIPTION */}
        <p className="hidden md:block max-w-md text-left leading-relaxed text-[clamp(.9rem,1.5vw,1rem)] text-dark/65">
          Café sa Bukid was created to build a place where people could slow
          down, enjoy good food, and reconnect with nature. In the heart of
          Bukidnon, surrounded by fresh air and mountain views, it became more
          than a café—it became a quiet escape for people looking to pause from
          their daily routine.
        </p>

        <p className="hidden md:block max-w-md text-left leading-relaxed text-[clamp(.9rem,1.5vw,1rem)] text-dark/65 mt-4">
          Every meal is made with care using fresh ingredients and simple
          flavors that feel familiar and comforting. It’s designed as an
          experience—warm, peaceful, and worth the trip—where conversations last
          longer and time feels slower.
        </p>

        <Link
          href="/menu"
          className="
    rounded-full

    w-[clamp(160px,50vw,240px)]
    md:w-auto md:max-w-[25vw]

    py-2.5 md:mt-6
    flex items-center justify-center

    text-center
    text-[clamp(.9rem,1.5vw,1.1rem)]
    font-medium text-background
    bg-accent

    transition-all duration-150

    hover:bg-accent/80 hover:-translate-y-px
    md:hover:bg-accent/80 md:hover:translate-x-px

    md:rounded-r-4xl md:rounded-l-sm
    md:px-10
  "
        >
          View Our Menu
        </Link>
      </div>

      {/* DESKTOP IMAGE — 40% */}
      <div className="hidden md:col-span-2 md:block relative w-full overflow-hidden rounded-2xl aspect-4/3 ring-2 ring-primary/20 shadow-sm">
        <Image
          src={HeroImage}
          alt="Cafe sa Bukid Hero Section"
          fill
          priority
          sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 45vw"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark/45 via-dark/10 to-transparent" />
      </div>
    </Section>
  );
}
