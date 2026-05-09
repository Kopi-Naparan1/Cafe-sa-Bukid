import Link from "next/link";

import Section from "../ui/Section";
import Image from "next/image";
import HeroImage from "../../app/assets/hero-image.webp";
import AboutStrip from "../ui/AboutPreview/AboutStrip";
export default function AboutPreview() {
  return (
    <Section className="grid min-h-[75vh] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)] gap-10 px-4 md:px-0 max-w-6xl mx-auto rounded-2xl bg-secondary-light/30 overflow-hidden md:grid-cols-5 md:items-center md:justify-center">
      {/* TEXT — 60% */}
      <div className="md:col-span-3 flex flex-col justify-center gap-2 md:gap-4">
        <span className=" hidden md:block text-xs font-medium uppercase tracking-[.16em] text-primary/60  ">
          About Us
        </span>

        <h2 className="font-heading font-extrabold tracking-tight text-left text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
          Where great food meets the mountains
        </h2>

        <>
          {/* Mobile version (short) */}
          <p
            className="
  md:hidden
  max-w-full
  text-left leading-relaxed
  text-[clamp(.85rem,3.5vw,.95rem)]
  text-dark/65
"
          >
            A peaceful café in Bukidnon serving fresh local food with a view
            worth the trip.
          </p>

          {/* Desktop version (full) */}
          <p
            className="
  hidden md:block
  max-w-md text-left leading-relaxed
  text-[clamp(.9rem,1.5vw,1rem)]
  text-dark/65
"
          >
            Nestled in the heart of Bukidnon, Café sa Bukid offers more than
            just a meal—it’s a place to slow down and take it all in. From
            fresh, locally sourced ingredients to breathtaking views, every
            visit is made to feel simple, warm, and worth the trip.
          </p>
        </>

        <Link
          href="/about"
          className="
          rounded-r-4xl rounded-l-sm
          w-[clamp(160px,50vw,240px)] md:w-auto md:max-w-[25vw]
          md:mt-6
          py-2.5
          shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
           items-center justify-center
          text-center
          text-[clamp(.9rem,1.5vw,1.1rem)]
          font-medium text-background
          bg-accent
          hidden
          md:block
          transition-all duration-150
          hover:bg-accent/80 hover:translate-x-px
          md:px-10
        "
        >
          Discover Our Story
        </Link>
      </div>

      {/* IMAGE — 40% */}
      <div className="w-full md:col-span-2 relative overflow-hidden rounded-2xl aspect-4/3 ring-2 ring-primary/20 shadow-sm">
        <Image
          fill
          priority
          sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 45vw"
          className="object-cover  "
          alt="Cafe sa Bukid Hero Section"
          src={HeroImage}
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark/45 via-dark/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-2 md:p-2">
          <AboutStrip />
        </div>
      </div>
      <Link
        href="/about"
        className="
          rounded-r-4xl rounded-l-sm
          w-[clamp(160px,50vw,240px)] md:w-auto md:max-w-[25vw]
          md:mt-6
              shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
          py-2.5
           items-center justify-center
          text-center
          text-[clamp(.9rem,1.5vw,1.1rem)]
          font-medium text-background
          bg-accent
          flex
          md:hidden
          transition-all duration-150
          hover:bg-accent/80 hover:translate-x-px
          md:px-10
        "
      >
        Discover Our Story →
      </Link>
    </Section>
  );
}
