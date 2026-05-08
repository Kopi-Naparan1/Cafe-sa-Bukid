import Section from "../../../components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import mockImage from "../../assets/hero-image.webp";

const travelHelpBlocks = [
  {
    id: 1,
    title: "Nearby Landmarks",
    description:
      "Use familiar places to help visitors find Café sa Bukid faster and with less confusion.",
    items: ["Near Dahilayan Road", "10 minutes from Valencia City proper"],
  },

  {
    id: 2,
    title: "Best Way to Get Here",
    description:
      "Help visitors understand the easiest and most comfortable route before they travel.",
    items: [
      "Private vehicles are the most convenient option",
      "Roads are smooth, accessible, and well-traveled",
    ],
  },

  {
    id: 3,
    title: "Parking Available",
    description:
      "Remove parking anxiety by clearly showing that guests can visit without hassle.",
    items: [
      "Spacious on-site parking for cars",
      "Motorcycle parking available",
    ],
  },
];

export default function LandMark() {
  return (
    <Section
      className="
        min-h-[90vh]
        w-full
        rounded-2xl
        overflow-hidden
      
        bg-secondary-light/30
    
        px-4
        py-8

    
        md:items-center
      
        md:px-8
        grid  md:grid-cols-5
        md:py-10
      "
    >
      {" "}
      {/* BLOCKS — LEFT */}
      <div className="md:col-span-3 flex flex-col gap-6">
        {travelHelpBlocks.map((block) => (
          <div
            key={block.id}
            className="flex flex-col gap-2 bg-secondary-dark/50 rounded-2xl "
          >
            <h3 className="font-heading font-bold text-lg bg-secondary-dark/70 p-4 rounded-t-2xl text-background/70">
              {block.title}
            </h3>
            <p className="text-background/60 px-4">{block.description}</p>
            <ul className="list-disc list-inside text-left px-4 pb-4 text-background/40">
              {block.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
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
        <span className="text-xs font-medium uppercase text-center tracking-[.16em] text-primary/60 mb-4">
          Getting Here
        </span>
        <h2 className="font-heading font-extrabold tracking-tight text-center md:text-right text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
          Easy to Find, Worth the Trip
        </h2>

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
          Open in Google Maps
        </Link>
      </div>
    </Section>
  );
}
