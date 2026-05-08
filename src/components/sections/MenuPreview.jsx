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
    <Section className="grid min-h-[90vh] gap-6 w-full rounded-2xl overflow-hidden md:grid-cols-5 md:items-center">
      {/* TEXT — 60% */}
      <div className="md:col-span-3 flex flex-col justify-center gap-2 md:gap-4">
        {/* <span className="  text-xs font-medium uppercase tracking-[.16em] text-primary/60  ">
          Menu
        </span> */}

        <h2 className="font-heading font-extrabold tracking-tight text-left text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
          Choose what you&apos;re craving
        </h2>

        <>
          {/* Mobile version */}
          <p className="md:hidden max-w-full text-left leading-relaxed text-[clamp(.85rem,3.5vw,0.95rem)] text-dark/65">
            A curated selection of our best-loved dishes—simple, fresh, and full
            of flavor.
          </p>

          {/* Desktop version */}
          <p className="hidden md:block max-w-md text-left leading-relaxed text-[clamp(.9rem,1.2vw,1.05rem)] text-dark/65">
            A selection of our best-loved dishes—from hearty meals to café
            favorites, all made with fresh ingredients you can taste in every
            bite.
          </p>
        </>

        <Link
          href="/about"
          className="
          rounded-r-4xl rounded-l-sm
          w-[clamp(160px,50vw,240px)] md:w-auto md:max-w-[25vw]
          md:mt-6
          py-2.5
            items-center justify-center
          text-center
          hidden
          md:flex
          text-[clamp(.9rem,1.5vw,1.1rem)]
          font-medium text-background
          bg-accent
          transition-all duration-150
          hover:bg-accent/80 hover:translate-x-px
          shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
          md:px-10
          "
        >
          View Full Menu →
        </Link>
      </div>

      {/* IMAGE — 40% */}
      <div className="grid grid-cols-2 gap-4 md:col-span-2 ">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-l-sm rounded-r-3xl shadow-[0_4px_12px_2px_rgba(0,0,0,0.2)] md:rounded-b-2xl overflow-hidden aspect-square md:rounded-t-sm ring-1 ring-secondary/90 "
          >
            <>
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover relative"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
              <div className="absolute md:rounded-b-2xl bg-secondary-light justify-center items-center  text-center text-background/90 text-sm font-semibold tracking-wide  inset-x-0 top-0">
                {item.label}
              </div>
            </>
          </div>
        ))}
      </div>

      <Link
        href="/about"
        className="
        h-[5vh]
rounded-r-4xl rounded-l-sm
w-[clamp(160px,50vw,240px)]
 

  items-center justify-center
text-center
flex
md:hidden
leading-[1.2]
text-[clamp(.9rem,1.5vw,1.1rem)]
font-medium text-background
bg-accent
shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
transition-all duration-150
"
      >
        View Full Menu →
      </Link>
    </Section>
  );
}
