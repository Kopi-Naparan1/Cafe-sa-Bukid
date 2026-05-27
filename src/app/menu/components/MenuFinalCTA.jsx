import Section from "../../../components/ui/Section";
import { cafeSaBukidGoogleMapsUrl } from "../../../lib/location";

import Link from "next/link";
export default function MenuFinalCTA() {
  return (
    <Section
      title="Best Sellers"
      className="min-h-[90vh] flex flex-col justify-center items-center rounded-2xl overflow-hidden"
    >
      <h2 className="font-heading font-extrabold tracking-tight text-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
        Ready for a Meal Worth the Trip?
      </h2>
      <p
        className="

  max-w-md text-left leading-relaxed
  text-[clamp(.9rem,1.5vw,1rem)]
  text-dark/65
"
      >
        Fresh food, fresh air, worth the trip
      </p>
      <div className="flex flex-col md:flex-row  gap-4 mt-12 min-w-[60vw] justify-center">
        {" "}
        <a
          href={cafeSaBukidGoogleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
                rounded-full bg-accent  py-3 flex flex-1 md:flex-none items-center justify-center
                text-center
                text-[clamp(.9rem,1.5vw,1.1rem)] font-medium text-background
                transition-all duration-150 hover:bg-accent/80 hover:-translate-y-px
                md:px-12
              "
        >
          Open in Google Maps
        </a>
        <a
          href="https://www.facebook.com/CafesaBukid"
          target="_blank"
          rel="noopener noreferrer"
          className="     shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] text-center items-center justify-center
         rounded-full border-2 border-primary flex flex-1 md:flex-none py-3
         text-[clamp(.9rem,1.5vw,1.1rem)] font-medium
         transition-all duration-150 hover:bg-primary/5 hover:-translate-y-px
         md:px-12
       "
        >
          Message us on Facebook
        </a>
      </div>
    </Section>
  );
}
