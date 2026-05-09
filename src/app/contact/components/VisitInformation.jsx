import Section from "../../../components/ui/Section";
import mockImage from "../../assets/hero-image.webp";

import DesktopVisitInformation from "../visitInformation/DesktopVisitInformation";
import MobileVisitInformation from "../visitInformation/MobileVisitInformation";

const items = [
  {
    id: 1,
    title: "Address",
    description1: `Sayre Highway, Dahilayan,
     Manolo Fortich, Bukidnon.`,
    description2:
      "Near Dahilayan Adventure Park with parking available on-site.",
    image: mockImage,
  },
  {
    id: 2,
    title: "Opening Hours",
    description1: `Monday – Sunday,
     8:00 AM – 8:00 PM.`,
    description2: " Best enjoyed during quiet mornings and sunset hours.",
    image: mockImage,
  },
  {
    id: 3,
    title: "Contact Options",
    description1: `+63 XXX XXX XXXX (Globe)
    +63 XXX XXX XXXX (Smart)`,
    description2: "Or reach us on Facebook Messenger for the fastest response.",
    image: mockImage,
  },
];

export default function VisitInformation() {
  return (
    <Section className="min-h-[90vh] flex flex-col items-center text-center gap-6">
      {/* EYEBROW */}
      <span className="text-xs font-medium uppercase tracking-[.16em] text-primary/60">
        Visit Information
      </span>
      {/* H2 */}
      <h2 className="font-heading font-extrabold tracking-tight text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] max-w-3xl">
        Before You Visit
      </h2>
      {/* DESCRIPTION
      <p className="max-w-2xl text-dark/65 leading-relaxed text-[clamp(.9rem,1.5vw,1rem)]">
        Everything you need before making the trip.
      </p> */}
      {/* RESPONSIVE RENDERING */}
      <div className="w-full mt-8">
        {/* MOBILE */}
        <MobileVisitInformation items={items} />

        {/* DESKTOP */}
        <DesktopVisitInformation items={items} />
      </div>
    </Section>
  );
}
