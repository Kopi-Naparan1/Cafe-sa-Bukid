import Section from "../../../components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import mockImage from "../../assets/hero-image.webp";

export default function Gallery() {
  return (
    <Section
      className="
        min-h-[80vh]
        w-full
        rounded-2xl
        overflow-hidden
        grid
        bg-secondary-light/30
        gap-8
        px-4
        py-8

        md:grid-cols-5
        md:items-center
        md:gap-10
        md:px-8
        md:py-10
      "
    >
      {/* IMAGE — LEFT */}
      <div className="md:col-span-3 flex flex-col gap-4">
        {/* TOP BIG IMAGE */}
        <div className="relative w-full aspect-[2/1.1] overflow-hidden rounded-t-3xl ring-1 ring-secondary/90">
          <Image
            src={mockImage}
            alt="Top Image"
            fill
            className="object-cover"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-2 gap-4">
          {/* BOTTOM LEFT */}
          <div className="relative aspect-square overflow-hidden rounded-bl-3xl ring-1 ring-secondary/90">
            <Image
              src={mockImage}
              alt="Bottom Left"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM RIGHT */}
          <div className="relative aspect-square overflow-hidden rounded-br-3xl ring-1 ring-secondary/90">
            <Image
              src={mockImage}
              alt="Bottom Right"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* TEXT — RIGHT */}
      <div
        className="
          md:col-span-2
          flex flex-col
          justify-center
          gap-3 md:gap-5

          items-center
          md:items-end
          md:text-right
        "
      >
        <h2 className="font-heading font-extrabold tracking-tight text-center md:text-right text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
          A place worth visiting
        </h2>

        <p className="max-w-md text-center md:text-right leading-relaxed text-[clamp(.85rem,3.5vw,.95rem)] text-dark/65">
          From sunrise coffee to sunset dinners.
        </p>

        <Link
          href="/menu"
          className="
    rounded-full

    w-full
    max-w-[320px]
    sm:max-w-90
    md:w-auto
    md:max-w-none

    px-6 md:px-10
    py-3
    md:mt-6

    flex items-center justify-center
    text-center

    text-sm sm:text-base md:text-lg
    font-medium
    text-background
    bg-accent

    transition-all duration-200

    hover:bg-accent/80
    hover:-translate-y-px

    md:hover:translate-y-0
    md:hover:-translate-x-px

    md:rounded-l-4xl
    md:rounded-r-sm
  "
        >
          Message us on Facebook
        </Link>
      </div>
    </Section>
  );
}
