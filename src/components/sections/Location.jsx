import Section from "../ui/Section";
import Link from "next/link";
import Image from "next/image";
import mockImage from "../../app/assets/best-sellers/italian-spaghetti.avif";

const menuItems = [
  { id: 1, label: "Meals", image: mockImage },
  { id: 2, label: "Coffee", image: mockImage },
  { id: 3, label: "Dessert", image: mockImage },
  { id: 4, label: "Pastry", image: mockImage },
];

export default function MenuPreview() {
  return (
    <Section className="grid min-h-[90vh] gap-10 w-full rounded-2xl bg-secondary-light/30 overflow-hidden md:grid-cols-5 md:items-center">
      {/* MAP */}
      <div className="md:col-span-3 relative overflow-hidden rounded-2xl h-[clamp(20rem,40vh,25rem)] md:h-full ring-4 ring-secondary/60">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4803453162763!2d124.89961533641515!3d8.052385303550649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff0cec00000001%3A0x488d76053893bd58!2sCaf%C3%A9%20sa%20Bukid!5e0!3m2!1sen!2sph!4v1776178474815!5m2!1sen!2sph"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* TEXT — 60% */}
      <div className="md:col-span-2 flex flex-col md:items-end items-center justify-center md:justify-end gap-2 md:gap-4">
        <span className="  text-xs font-medium uppercase tracking-[.16em] text-primary/60  ">
          Location
        </span>

        <h2 className="font-heading font-extrabold tracking-tight text-center   md:text-right text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
          Find us in the heart of Bukidnon
        </h2>

        {/* Desktop version (full) */}
        <p
          className="
  hidden md:block
  max-w-md text-left leading-relaxed
  text-[clamp(.9rem,1.5vw,1rem)]
  text-dark/65
"
        >
          Open daily from 8am to 6pm
        </p>

        <a
          href="https://www.google.com/maps/place/Cafe+sa+Bukid"
          target="_blank"
          rel="noopener noreferrer"
          className="
          rounded-full md:rounded-none md:rounded-l-4xl md:rounded-r-sm
          w-[clamp(160px,50vw,240px)] md:w-auto md:max-w-[25vw]
          md:mt-6
          py-2.5
          flex items-center justify-center
          text-center
          text-[clamp(.9rem,1.5vw,1.1rem)]
          font-medium text-background
          bg-accent
          transition-all duration-150
          hover:bg-accent/80 hover:-translate-x-px
          md:px-10
          "
        >
          Open in Google Maps
        </a>
      </div>
    </Section>
  );
}
