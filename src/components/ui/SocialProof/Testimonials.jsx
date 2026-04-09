import MobileVersionTestimonial from "./MobileVersionTestimonial";
import DesktopVersionTestimonial from "./DesktopVersionTestimonial";

export default function Testimonial({
  testimonials,
  flippedIndex,
  setFlippedIndex,
}) {
  return (
    <div className="mt-8 md:mt-14 ">
      <MobileVersionTestimonial
        testimonials={testimonials}
        flippedIndex={flippedIndex}
        setFlippedIndex={setFlippedIndex}
      ></MobileVersionTestimonial>

      <DesktopVersionTestimonial
        testimonials={testimonials}
        flippedIndex={flippedIndex}
        setFlippedIndex={setFlippedIndex}
      ></DesktopVersionTestimonial>
    </div>
  );
}
