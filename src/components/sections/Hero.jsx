import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../app/assets/hero-image.webp";
import HeroSection from "../ui/HeroSection.jsx";

export default function Hero() {
  return (
    <HeroSection
      className="
      grid min-h-[calc(100vh-5rem)] items-center
      gap-10 py-10
      grid-cols-1
      sm:px-6
      md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:gap-12 md:py-16 md:px-10
      lg:gap-16 lg:py-20 lg:px-16
    "
    >
      {/* Text content */}
      <div className="flex max-w-2xl flex-col justify-center px-1 sm:px-0">
        <span
          className="
          mb-3 text-xs font-medium uppercase tracking-[.16em]
          text-primary/60 md:mb-4
        "
        >
          Since 2002
        </span>

        <h1
          className="
          font-heading font-extrabold tracking-tight text-left
          text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.08]
        "
        >
          Cafe sa Bukid
        </h1>

        <p
          className="
          mt-4 max-w-md text-left leading-relaxed
          text-[clamp(.95rem,2vw,1.2rem)] text-dark/65
          md:mt-5
        "
        >
          Great food. BUKID experience! — where every meal tastes like it was
          grown right outside your window.
        </p>

        <div
          className="
          mt-8 flex flex-col gap-3 text-center
          sm:flex-row sm:gap-4
          md:mt-12 md:justify-start
        "
        >
          <Link
            href="/menu"
            className="
              rounded-full bg-accent px-7 py-3
              text-[clamp(.9rem,1.5vw,1.1rem)] font-medium text-background
              transition-all duration-150 hover:bg-accent/80 hover:-translate-y-px
              md:px-10
            "
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            className="
              rounded-full border-2 border-primary px-7 py-3
              text-[clamp(.9rem,1.5vw,1.1rem)] font-medium
              transition-all duration-150 hover:bg-primary/5 hover:-translate-y-px
              md:px-10
            "
          >
            Visit Us
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div
        className="
        relative w-full overflow-hidden rounded-2xl
        aspect-[4/3]
        sm:aspect-[16/9]
        md:aspect-auto md:self-stretch md:rounded-3xl
        ring-4 ring-primary/30
      "
      >
        <Image
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 40vw"
          className="object-cover"
          alt="Cafe sa Bukid Hero Section"
          src={HeroImage}
        />

        {/* Optional floating badge */}
        <div
          className=" 
          absolute bottom-4 left-4
          flex items-center gap-2 
          rounded-xl bg-background/80 px-3 py-2 backdrop-blur-sm
          text-xs font-medium text-primary
        "
        >
          <span className="size-2 rounded-full animate-pulse bg-accent" />
          <span className="text-center "> Now open: come</span>
        </div>
      </div>
    </HeroSection>
  );
}
