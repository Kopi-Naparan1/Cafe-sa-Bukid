import ContactHero from "./components/ContactHero";
import Location from "./components/Location";
import VisitInformation from "./components/VisitInformation";
import EmailInquiry from "./components/EmailInquiry";
import ContactFinalCTA from "./components/ContactFinalCTA";
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
