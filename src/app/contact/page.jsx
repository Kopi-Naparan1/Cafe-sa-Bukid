import ContactHero from "./components/ContactHero";
import Location from "./components/Location";
import VisitInformation from "./components/VisitInformation";
import EmailInquiry from "./components/EmailInquiry";
import ContactFinalCTA from "./components/ContactFinalCTA";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("/contact");

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <Location />
      <VisitInformation />
      <EmailInquiry />
      <ContactFinalCTA />
    </div>
  );
}
